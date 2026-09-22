import { PHASES, TOTAL_BARS, TRACKS, phaseLength } from '../../data/track'
import { useApp } from '../../context/AppContext'
import { Callout, LevelDot, Panel, Section } from '../ui/primitives'

export function Arrangement() {
  return (
    <Section
      id="arrangement"
      index="03"
      title="Estructura en compases"
      subtitle="208 compases a 110 BPM. Cada fase responde qué entra, qué se mantiene y qué se automatiza."
    >
      <div className="space-y-6">
        {PHASES.map((phase) => (
          <PhaseBlock key={phase.id} phaseId={phase.id} />
        ))}
      </div>

      <div className="mt-12">
        <h3 className="mb-4 font-mono text-sm tracking-[0.14em] text-paper uppercase">
          Visualizador de capas
        </h3>
        <LayerMatrix />
      </div>

      <div className="mt-12">
        <h3 className="mb-2 font-mono text-sm tracking-[0.14em] text-paper uppercase">
          Timeline 1–{TOTAL_BARS}
        </h3>
        <p className="mb-4 text-sm text-fog">
          Marcadores internos cada 8 compases. Marcadores principales cada 16.
        </p>
        <FullTimeline />
      </div>
    </Section>
  )
}

function PhaseBlock({ phaseId }: { phaseId: string }) {
  const { currentPhase, setPhaseId } = useApp()
  const phase = PHASES.find((p) => p.id === phaseId)!
  const active = currentPhase.id === phase.id
  const width = `${((phaseLength(phase) / TOTAL_BARS) * 100).toFixed(1)}%`

  return (
    <Panel className={`p-5 ${active ? 'ring-1 ring-signal/40' : ''}`}>
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <button type="button" onClick={() => setPhaseId(phase.id)} className="text-left">
          <div className="label text-signal">
            Fase {phase.index} · {width} del track
          </div>
          <h3 className="mt-1 font-mono text-lg tracking-[0.12em] text-paper">{phase.name}</h3>
          <div className="value mt-1 text-sm text-signal-bright">
            Compases {phase.bars[0]}–{phase.bars[1]}
          </div>
        </button>
        <Callout>{phase.sensation}</Callout>
      </div>

      <p className="mb-4 text-sm text-fog">{phase.objective}</p>

      <div className="mb-4 grid gap-3 sm:grid-cols-3">
        <List title="Agregar" items={phase.add} />
        <List title="Mantener" items={phase.keep} />
        <List title="Retirar" items={phase.remove} />
      </div>

      <div className="label mb-2">Automatizaciones</div>
      <ul className="mb-4 grid gap-1 sm:grid-cols-2">
        {phase.automations.map((item) => (
          <li key={item} className="font-mono text-xs text-fog">
            ▸ {item}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {TRACKS.map((t) => (
          <div key={t.id} className="flex items-center gap-2 border border-line bg-ink px-2 py-1">
            <span className="font-mono text-[10px] text-mist">{t.short}</span>
            <LevelDot level={phase.layers[t.id]} />
          </div>
        ))}
      </div>
    </Panel>
  )
}

function List({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="border border-line bg-ink p-3">
      <div className="label mb-2">{title}</div>
      {items.length === 0 ? (
        <p className="font-mono text-xs text-mist">—</p>
      ) : (
        <ul className="space-y-1 font-mono text-xs text-paper">
          {items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

function LayerMatrix() {
  const { currentPhase } = useApp()

  return (
    <div className="overflow-x-auto border border-line">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <thead>
          <tr className="bg-ink">
            <th className="border-b border-line px-3 py-2 font-mono text-[10px] tracking-wider text-mist">
              TRACK
            </th>
            {PHASES.map((p) => (
              <th
                key={p.id}
                className={`border-b border-l border-line px-2 py-2 font-mono text-[10px] tracking-wider ${
                  currentPhase.id === p.id ? 'bg-signal-dim/40 text-signal-bright' : 'text-mist'
                }`}
              >
                {p.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TRACKS.map((track) => (
            <tr key={track.id}>
              <td className="border-b border-line bg-ink px-3 py-2 font-mono text-xs text-paper">
                {track.name}
              </td>
              {PHASES.map((phase) => {
                const level = phase.layers[track.id]
                const fill =
                  level === 'OFF'
                    ? 'bg-void'
                    : level === 'LOW'
                      ? 'bg-low/70'
                      : level === 'ACTIVE'
                        ? 'bg-active/80'
                        : 'bg-high'
                return (
                  <td key={phase.id} className="border-b border-l border-line p-1">
                    <div className={`flex h-8 items-center justify-center ${fill}`}>
                      <span className="font-mono text-[10px] tracking-wider text-paper/90">
                        {level}
                      </span>
                    </div>
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function FullTimeline() {
  const { currentBar, setCurrentBar, currentPhase, setPhaseId } = useApp()

  return (
    <Panel className="p-4">
      <div className="mb-3 flex h-3">
        {PHASES.map((phase) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => setPhaseId(phase.id)}
            style={{ flexGrow: phaseLength(phase) }}
            className={`border-r border-void last:border-0 ${
              currentPhase.id === phase.id ? 'bg-signal' : 'bg-active/60'
            }`}
            title={phase.name}
          />
        ))}
      </div>

      <div className="relative mb-2 h-2 bg-off">
        {Array.from({ length: TOTAL_BARS / 8 + 1 }, (_, i) => {
          const bar = i * 8 + 1
          const major = (bar - 1) % 16 === 0
          return (
            <span
              key={bar}
              className={`absolute top-0 w-px ${major ? 'h-2 bg-signal-bright/70' : 'h-1.5 bg-mist/50'}`}
              style={{ left: `${((bar - 1) / TOTAL_BARS) * 100}%` }}
            />
          )
        })}
        <span
          className="absolute top-0 h-2 w-0.5 bg-amber"
          style={{ left: `${((currentBar - 1) / TOTAL_BARS) * 100}%` }}
        />
      </div>

      <div className="mb-4 flex text-[10px] text-mist">
        {PHASES.map((phase) => (
          <div
            key={phase.id}
            style={{ flexGrow: phaseLength(phase) }}
            className="min-w-0 font-mono"
          >
            <div className="truncate text-signal-bright">{phase.name}</div>
            <div>
              {phase.bars[0]}–{phase.bars[1]}
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-1">
        {TRACKS.map((track) => (
          <div key={track.id} className="flex items-center gap-2">
            <span className="w-14 shrink-0 font-mono text-[10px] text-mist">{track.short}</span>
            <div className="flex h-4 flex-1 overflow-hidden bg-void">
              {PHASES.map((phase) => {
                const level = phase.layers[track.id]
                const fill =
                  level === 'OFF'
                    ? 'bg-transparent'
                    : level === 'LOW'
                      ? 'bg-low'
                      : level === 'ACTIVE'
                        ? 'bg-active'
                        : 'bg-high'
                return (
                  <div
                    key={phase.id}
                    style={{ flexGrow: phaseLength(phase) }}
                    className={`${fill} border-r border-void/40`}
                  />
                )
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {PHASES.map((phase) => (
          <button
            key={phase.id}
            type="button"
            onClick={() => setCurrentBar(phase.bars[0])}
            className="border border-line bg-ink px-2 py-1 font-mono text-[10px] text-fog hover:text-paper"
          >
            {phase.bars[0]} {phase.name}
          </button>
        ))}
      </div>
    </Panel>
  )
}
