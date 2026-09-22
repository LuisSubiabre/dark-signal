import { TRACKS } from '../../data/track'
import { useApp } from '../../context/AppContext'
import { Callout, LevelDot, Panel } from '../ui/primitives'

export function FocusView() {
  const { currentPhase, currentBar, pendingTasks, toggleTask } = useApp()
  const [start, end] = currentPhase.bars

  return (
    <div className="mx-auto max-w-5xl space-y-6 px-4 py-8 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <div className="label mb-2">Current Phase</div>
          <h1 className="font-mono text-3xl tracking-[0.12em] text-paper">
            {currentPhase.index} — {currentPhase.name}
          </h1>
        </div>
        <div className="border border-line bg-panel px-4 py-2 text-right">
          <div className="label">Bars</div>
          <div className="value text-lg text-signal-bright">
            {start}–{end}
          </div>
          <div className="font-mono text-[11px] text-mist">locator {currentBar}</div>
        </div>
      </div>

      <Callout>{currentPhase.sensation}</Callout>

      <Panel className="p-5">
        <div className="label mb-3">Pistas activas</div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {TRACKS.map((t) => (
            <div key={t.id} className="flex items-center justify-between border border-line bg-ink px-3 py-2">
              <span className="font-mono text-xs text-paper">{t.short}</span>
              <LevelDot level={currentPhase.layers[t.id]} />
            </div>
          ))}
        </div>
      </Panel>

      <div className="grid gap-4 md:grid-cols-2">
        <Panel className="p-5">
          <div className="label mb-3">Automatizaciones</div>
          <ul className="space-y-2">
            {currentPhase.automations.map((item) => (
              <li key={item} className="flex gap-2 font-mono text-xs text-fog">
                <span className="text-signal">▸</span>
                {item}
              </li>
            ))}
          </ul>
        </Panel>

        <Panel className="p-5">
          <div className="label mb-3">Tareas pendientes</div>
          {pendingTasks.length === 0 ? (
            <p className="font-mono text-xs text-signal">Fase completada.</p>
          ) : (
            <ul className="space-y-2">
              {pendingTasks.map((task) => (
                <li key={task.id}>
                  <label className="flex cursor-pointer items-start gap-2 text-sm text-paper">
                    <input
                      type="checkbox"
                      checked={false}
                      onChange={() => toggleTask(task.id)}
                      className="mt-1 accent-signal"
                    />
                    {task.label}
                  </label>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Info title="Agregar" items={currentPhase.add} />
        <Info title="Mantener" items={currentPhase.keep} />
        <Info title="Retirar" items={currentPhase.remove} />
      </div>
    </div>
  )
}

function Info({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-line bg-panel p-4">
      <div className="label mb-2">{title}</div>
      {items.length === 0 ? (
        <p className="font-mono text-xs text-mist">—</p>
      ) : (
        <ul className="space-y-1 font-mono text-xs text-fog">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}
