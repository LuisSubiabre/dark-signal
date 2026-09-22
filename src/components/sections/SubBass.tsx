import { Callout, Chain, Collapsible, Param, Section } from '../ui/primitives'

export function SubBass() {
  return (
    <Section
      id="sub-bass"
      index="05"
      title="Diseño del Sub Bass"
      subtitle="El objetivo es SENTIR el sub más que escucharlo claramente."
    >
      <div className="mb-4 font-mono text-xs text-signal">Ableton Wavetable</div>
      <Chain steps={['Wavetable', 'EQ Eight', 'Saturator', 'Compressor Sidechain']} />

      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="OSC 1" value="Sine" hint="Balance 100%" />
        <Param label="OSC 2" value="Saw" hint="Balance 15–25%" />
        <Param label="Filter" value="LP24" hint="Cutoff 120–250 Hz" />
        <Param label="Resonance" value="10–20%" />
      </div>

      <div className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="Attack" value="5–15 ms" />
        <Param label="Decay" value="400–700 ms" />
        <Param label="Sustain" value="60–80%" />
        <Param label="Release" value="100–250 ms" />
      </div>

      <div className="mt-3">
        <Param label="Saturator Drive" value="2–4 dB" hint="Calor, no distorsión evidente" />
      </div>

      <div className="mt-6 space-y-3">
        <Callout>
          El sub debe permanecer prácticamente mono y por debajo de ~120 Hz. Si se oye
          como una línea, está demasiado presente.
        </Callout>
        <Collapsible title="Notas de mezcla">
          Sidechain suave al kick. Recorta todo por encima de 120–150 Hz si el Pulse Bass
          ya cubre el cuerpo. Evita saturación que genere armónicos medios: el sub debe
          ocupar el piso, no la conversación.
        </Collapsible>
      </div>
    </Section>
  )
}
