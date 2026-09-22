import { Callout, Notes, Param, Section } from '../ui/primitives'

export function PulseBass() {
  return (
    <Section
      id="pulse-bass"
      index="06"
      title="Pulse Bass"
      subtitle="El Pulse Bass representa el motor de la señal. La repetición es intencional."
    >
      <div className="mb-4 font-mono text-xs text-signal">Pigments o Serum</div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="OSC" value="Saw + Square" />
        <Param label="Filter" value="LP24" />
        <Param label="Movimiento" value="Cutoff auto" hint="8–16 compases" />
        <Param label="Función" value="Motor" />
      </div>

      <div className="mt-6">
        <div className="label mb-2">Cutoff example</div>
        <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
          <span className="border border-line bg-panel px-3 py-2 text-signal-bright">250 Hz</span>
          <span className="text-mist">→</span>
          <span className="border border-line bg-panel px-3 py-2 text-signal-bright">600 Hz</span>
          <span className="text-mist">→</span>
          <span className="border border-line bg-panel px-3 py-2 text-signal-bright">300 Hz</span>
        </div>
      </div>

      <div className="mt-6">
        <div className="label mb-2">MIDI</div>
        <Notes notes={['F1', 'F1', 'Eb1', 'F1']} />
      </div>

      <div className="mt-6">
        <div className="label mb-2">Patrón rítmico minimalista</div>
        <div className="grid grid-cols-8 gap-1">
          {['X', '·', '·', 'X', '·', '·', 'X', '·'].map((step, i) => (
            <div
              key={`${step}-${i}`}
              className={`flex h-10 items-center justify-center font-mono text-xs ${
                step === 'X' ? 'bg-active text-paper' : 'bg-off text-mist'
              }`}
            >
              {step}
            </div>
          ))}
        </div>
        <p className="mt-2 font-mono text-[11px] text-mist">8 pasos · 110 BPM · poco síncopa</p>
      </div>

      <div className="mt-6">
        <Callout>
          No reescribas el riff cada 8 compases. Cambia el filtro, el decay o el pan antes
          de cambiar las notas.
        </Callout>
      </div>
    </Section>
  )
}
