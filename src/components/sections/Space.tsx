import { Callout, Param, Panel, Section } from '../ui/primitives'

export function Space() {
  return (
    <Section
      id="space"
      index="13"
      title="Profundidad y estéreo"
      subtitle="Tres planos. El grave se queda al centro. El movimiento debe ser casi inconsciente."
    >
      <div className="grid gap-3 lg:grid-cols-3">
        <Plane
          title="Foreground"
          hint="Más seco · más presente"
          items={['Kick', 'Percussion', 'Signal']}
        />
        <Plane
          title="Midground"
          hint="Cuerpo y armonía"
          items={['Pulse Bass', 'Pad', 'Sequence']}
        />
        <Plane
          title="Background"
          hint="Más reverb · más filtro"
          items={['Drone', 'Noise', 'Atmosphere', 'Field Recording']}
        />
      </div>

      <p className="mt-4 text-sm text-fog">
        Usa reverb, filtrado y volumen — no solo faders — para separar planos. Si todo
        está al mismo nivel de brillo, no hay profundidad.
      </p>

      <h3 className="mt-10 mb-4 font-mono text-sm tracking-[0.12em] text-paper">
        Movimiento estéreo
      </h3>

      <div className="grid gap-3 sm:grid-cols-2">
        <Panel className="p-4">
          <div className="label mb-2">Centro / mono</div>
          <p className="mb-3 text-sm text-fog">
            Todo lo inferior a ~120 Hz permanece prácticamente mono.
          </p>
          <div className="flex flex-wrap gap-2">
            {['Kick', 'Sub Bass'].map((n) => (
              <span key={n} className="border border-line bg-ink px-2 py-1 font-mono text-xs text-paper">
                {n}
              </span>
            ))}
          </div>
        </Panel>
        <Panel className="p-4">
          <div className="label mb-2">Movimiento lento</div>
          <p className="mb-3 text-sm text-fog">Auto Pan apenas perceptible.</p>
          <div className="flex flex-wrap gap-2">
            {['Noise', 'Pads', 'Signal', 'Textures'].map((n) => (
              <span key={n} className="border border-line bg-ink px-2 py-1 font-mono text-xs text-paper">
                {n}
              </span>
            ))}
          </div>
        </Panel>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <Param label="Auto Pan Rate" value="4–8 bars" />
        <Param label="Amount" value="10–15%" />
      </div>

      <div className="mt-6">
        <Callout>El movimiento debe ser casi inconsciente.</Callout>
      </div>
    </Section>
  )
}

function Plane({ title, hint, items }: { title: string; hint: string; items: string[] }) {
  return (
    <Panel className="p-4">
      <div className="label mb-1">{title}</div>
      <div className="mb-3 text-[11px] text-mist">{hint}</div>
      <ul className="space-y-1 font-mono text-sm text-paper">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Panel>
  )
}
