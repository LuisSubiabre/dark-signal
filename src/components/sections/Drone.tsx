import { Callout, Notes, Param, Section } from '../ui/primitives'

export function Drone() {
  return (
    <Section
      id="drone"
      index="09"
      title="Drone"
      subtitle="Base atmosférica constante. Puede permanecer en una sola nota durante minutos."
    >
      <div className="mb-4 font-mono text-xs text-signal">Pigments</div>
      <div className="mb-4">
        <div className="label mb-2">Nota base</div>
        <Notes notes={['F1', 'F2']} />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="OSC 1" value="Saw" />
        <Param label="OSC 2" value="Wavetable" />
        <Param label="Noise" value="~10%" />
        <Param label="Key" value="F minor" />
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        <Param label="LFO1 → Filter Cutoff" value="~8 compases" />
        <Param label="LFO2 → WT Position" value="~16 compases" />
        <Param label="Random → Fine Pitch" value="Muy sutil" />
        <Param label="Random → Pan" value="Lento" />
      </div>

      <div className="mt-6">
        <Callout>
          El drone puede permanecer en una sola nota durante minutos si internamente
          continúa evolucionando.
        </Callout>
      </div>
    </Section>
  )
}
