import { createContext, useContext, useMemo, type ReactNode } from 'react'
import {
  allTasks,
  CHECKLIST,
  PHASES,
  STORAGE_KEYS,
  phaseByBar,
  phaseById,
  type Phase,
} from '../data/track'
import { usePersistedState } from '../hooks/usePersistedState'

interface AppContextValue {
  checked: Record<string, boolean>
  toggleTask: (id: string) => void
  currentPhase: Phase
  setPhaseId: (id: string) => void
  currentBar: number
  setCurrentBar: (bar: number) => void
  focusMode: boolean
  setFocusMode: (value: boolean) => void
  progress: number
  doneCount: number
  totalCount: number
  pendingTasks: { id: string; label: string }[]
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [checked, setChecked] = usePersistedState<Record<string, boolean>>(
    STORAGE_KEYS.tasks,
    {},
  )
  const [phaseId, persistPhaseId] = usePersistedState(STORAGE_KEYS.phase, PHASES[0].id)
  const [currentBar, persistBar] = usePersistedState(STORAGE_KEYS.bar, 1)
  const [focusMode, setFocusMode] = usePersistedState(STORAGE_KEYS.focus, false)

  const currentPhase = phaseById(phaseId)
  const tasks = allTasks()
  const doneCount = tasks.filter((t) => checked[t.id]).length
  const totalCount = tasks.length
  const progress = totalCount === 0 ? 0 : Math.round((doneCount / totalCount) * 100)

  const pendingTasks = useMemo(() => {
    const block = CHECKLIST.find((b) => b.phaseId === currentPhase.id)
    return (block?.tasks ?? []).filter((t) => !checked[t.id])
  }, [checked, currentPhase.id])

  const value: AppContextValue = {
    checked,
    toggleTask: (id) => {
      setChecked((prev) => ({ ...prev, [id]: !prev[id] }))
    },
    currentPhase,
    setPhaseId: (id) => {
      const phase = phaseById(id)
      persistPhaseId(phase.id)
      persistBar(phase.bars[0])
    },
    currentBar,
    setCurrentBar: (bar) => {
      const parsed = Number(bar)
      if (!Number.isFinite(parsed)) return
      const next = Math.min(208, Math.max(1, Math.round(parsed)))
      persistBar(next)
      persistPhaseId(phaseByBar(next).id)
    },
    focusMode,
    setFocusMode,
    progress,
    doneCount,
    totalCount,
    pendingTasks,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}
