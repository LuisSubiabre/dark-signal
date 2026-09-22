import { Callout, Panel, Section } from '../ui/primitives'

const LANES = [
  { name: 'PAD FILTER', from: '400 Hz', to: '1.4 kHz', span: '32 compases', curve: [20, 28, 40, 58, 72, 88] },
  { name: 'DRONE REVERB', from: '25%', to: '45%', span: 'lento', curve: [30, 34, 38, 42, 48, 55] },
  { name: 'NOISE', from: '-30 dB', to: '-22 dB', span: 'gradual', curve: [18, 22, 26, 32, 38, 44] },
  { name: 'PULSE FILTER', from: '300 Hz', to: '800 → 350 Hz', span: '8–16 compases', curve: [28, 55, 80, 62, 40, 32] },
]

export function Automation() {
  return (
    <Section
      id="automation"
      index="15"
      title="Automatizaciones"
      subtitle="La evolución debe producirse principalmente mediante automatizaciones lentas, no introduciendo instrumentos nuevos."
    >
      <div className="grid gap-3 lg:grid-cols-2">
        {LANES.map((lane) => (
          <Panel key={lane.name} className="p-4">
            <div className="mb-3 flex items-baseline justify-between gap-3">
              <div className="font-mono text-xs tracking-wider text-paper">{lane.name}</div>
              <div className="label">{lane.span}</div>
            </div>
            <div className="mb-3 flex items-end gap-1">
              {lane.curve.map((h, i) => (
                <div key={i} className="flex-1 bg-active/80" style={{ height: `${h}px` }} />
              ))}
            </div>
            <div className="flex justify-between font-mono text-xs text-signal-bright">
              <span>{lane.from}</span>
              <span>→</span>
              <span>{lane.to}</span>
            </div>
          </Panel>
        ))}
      </div>

      <div className="mt-6">
        <Callout>
          Si sientes que “faltan cosas”, automatiza primero. Una novena pista es el último
          recurso, no el primero.
        </Callout>
      </div>
    </Section>
  )
}
