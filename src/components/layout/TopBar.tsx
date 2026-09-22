import { Crosshair, Eye, EyeOff } from 'lucide-react'
import { PHASES, TOTAL_BARS } from '../../data/track'
import { useApp } from '../../context/AppContext'
import { MobileNav } from './MobileNav'

export function TopBar() {
  const {
    progress,
    currentPhase,
    setPhaseId,
    currentBar,
    setCurrentBar,
    focusMode,
    setFocusMode,
    doneCount,
    totalCount,
  } = useApp()

  return (
    <div className="sticky top-0 z-30 border-b border-line bg-ink/95 backdrop-blur-sm">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 px-4 py-2.5 lg:flex-nowrap lg:px-8">
        <div className="flex min-w-0 items-center gap-2">
          <span className="label">Progress</span>
          <div className="h-1.5 w-28 overflow-hidden bg-off sm:w-40">
            <div
              className="h-full bg-signal transition-[width] duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="value text-sm text-paper">{progress}%</span>
          <span className="hidden font-mono text-[11px] text-mist sm:inline">
            {doneCount}/{totalCount}
          </span>
        </div>

        <label className="flex items-center gap-2">
          <span className="label">Current Phase</span>
          <select
            value={currentPhase.id}
            onChange={(e) => setPhaseId(e.target.value)}
            className="border border-line bg-panel px-2 py-1 font-mono text-[11px] tracking-wider text-signal-bright uppercase outline-none"
          >
            {PHASES.map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
        </label>

        <label className="flex items-center gap-2">
          <Crosshair size={12} className="text-mist" />
          <span className="label">Bar</span>
          <input
            type="number"
            min={1}
            max={TOTAL_BARS}
            value={currentBar}
            onChange={(e) => setCurrentBar(Number(e.target.value))}
            className="w-16 border border-line bg-panel px-2 py-1 font-mono text-xs text-paper outline-none"
          />
          <input
            type="range"
            min={1}
            max={TOTAL_BARS}
            value={currentBar}
            onChange={(e) => setCurrentBar(Number(e.target.value))}
            className="hidden h-1 w-28 cursor-pointer appearance-none bg-off accent-signal sm:block"
            aria-label="Compás actual"
          />
        </label>

        <button
          type="button"
          onClick={() => setFocusMode(!focusMode)}
          className={`inline-flex items-center gap-2 border px-3 py-1.5 font-mono text-[11px] tracking-wider uppercase ${
            focusMode
              ? 'border-signal bg-signal-dim text-signal-bright'
              : 'border-line bg-panel text-fog'
          }`}
        >
          {focusMode ? <EyeOff size={13} /> : <Eye size={13} />}
          Focus Mode
        </button>

        <MobileNav />
      </div>
    </div>
  )
}
