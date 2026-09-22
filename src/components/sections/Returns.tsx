import { Callout, Param, Panel, Section } from '../ui/primitives'

const RETURNS = [
  {
    id: 'A',
    name: 'SHORT SPACE',
    device: 'Reverb',
    time: '0.5–1.2 s',
    use: 'Percusión y pequeños elementos.',
  },
  {
    id: 'B',
    name: 'DARK SPACE',
    device: 'Hybrid Reverb',
    time: '4–8 s',
    extra: 'High Cut ~5 kHz',
    use: 'Pads, señales y texturas.',
  },
  {
    id: 'C',
    name: 'SIGNAL DELAY',
    device: 'Echo',
    time: '3/16 o 5/16',
    use: 'Signal y elementos digitales.',
  },
  {
    id: 'D',
    name: 'VOID',
    device: 'Hybrid Reverb',
    time: '10–20 s',
    extra: '100% Wet',
    use: 'Efectos especiales y transiciones.',
    warn: true,
  },
]

export function Returns() {
  return (
    <Section
      id="returns"
      index="16"
      title="Return tracks"
      subtitle="Cuatro espacios. VOID se usa con moderación."
    >
      <div className="grid gap-3 md:grid-cols-2">
        {RETURNS.map((ret) => (
          <Panel key={ret.id} className="p-4" accent={ret.warn}>
            <div className="label mb-1">Return {ret.id}</div>
            <h3 className="mb-3 font-mono text-base tracking-[0.1em] text-paper">{ret.name}</h3>
            <div className="mb-3 grid grid-cols-2 gap-2">
              <Param label="Device" value={ret.device} />
              <Param label="Time" value={ret.time} />
            </div>
            {ret.extra && <div className="mb-2 font-mono text-xs text-signal-bright">{ret.extra}</div>}
            <p className="text-sm text-fog">{ret.use}</p>
          </Panel>
        ))}
      </div>

      <div className="mt-6">
        <Callout tone="warn">VOID debe utilizarse con moderación.</Callout>
      </div>
    </Section>
  )
}
