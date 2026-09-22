import { CHECKLIST, PHASES } from '../../data/track'
import { useApp } from '../../context/AppContext'
import { Panel, Section } from '../ui/primitives'

export function Checklist() {
  const { checked, toggleTask, currentPhase, setPhaseId } = useApp()

  return (
    <Section
      id="checklist"
      index="18"
      title="Checklist por compases"
      subtitle="Úsala mientras trabajas en Ableton. El estado se guarda en este navegador."
    >
      <div className="space-y-4">
        {CHECKLIST.map((block) => {
          const phase = PHASES.find((p) => p.id === block.phaseId)!
          const done = block.tasks.filter((t) => checked[t.id]).length
          const active = currentPhase.id === phase.id

          return (
            <Panel key={block.phaseId} className={`p-4 ${active ? 'ring-1 ring-signal/40' : ''}`}>
              <button
                type="button"
                onClick={() => setPhaseId(phase.id)}
                className="mb-4 flex w-full flex-wrap items-baseline justify-between gap-2 text-left"
              >
                <div>
                  <div className="label text-signal">
                    {phase.bars[0]}–{phase.bars[1]}
                  </div>
                  <h3 className="font-mono text-base tracking-[0.12em] text-paper">{phase.name}</h3>
                </div>
                <span className="font-mono text-xs text-mist">
                  {done}/{block.tasks.length}
                </span>
              </button>

              <ul className="space-y-2">
                {block.tasks.map((task) => (
                  <li key={task.id}>
                    <label className="flex cursor-pointer items-start gap-3 text-sm">
                      <input
                        type="checkbox"
                        checked={Boolean(checked[task.id])}
                        onChange={() => toggleTask(task.id)}
                        className="mt-0.5 accent-signal"
                      />
                      <span className={checked[task.id] ? 'text-mist line-through' : 'text-paper'}>
                        {task.label}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </Panel>
          )
        })}
      </div>
    </Section>
  )
}
