import { PALETTE } from '../../data/track'
import { Callout, Panel, Section } from '../ui/primitives'

export function Palette() {
  return (
    <Section
      id="palette"
      index="02"
      title="Paleta sonora"
      subtitle="El proyecto se limita inicialmente a estas 8 pistas."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {PALETTE.map((track) => (
          <Panel key={track.id} className="p-4" accent={track.id === 'signal'}>
            <div className="mb-3 flex items-start justify-between gap-3">
              <div>
                <div className="label text-signal">{track.index}</div>
                <h3 className="font-mono text-base tracking-[0.12em] text-paper">{track.name}</h3>
              </div>
              {track.extra && (
                <span className="border border-line bg-ink px-2 py-1 font-mono text-[10px] text-signal-bright">
                  {track.extra}
                </span>
              )}
            </div>
            <div className="mb-2 text-xs text-fog">
              <span className="label mr-2">Función</span>
              {track.role}
            </div>
            <p className="text-sm text-paper/90">{track.details}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-6">
        <Callout tone="warn">
          NO AGREGAR UNA NOVENA PISTA hasta conseguir movimiento e interés mediante
          automatización y diseño sonoro.
        </Callout>
      </div>
    </Section>
  )
}
