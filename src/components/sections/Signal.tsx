import { Callout, Chain, Notes, Param, Panel, Section } from '../ui/primitives'

export function Signal() {
  return (
    <Section
      id="signal"
      index="11"
      title="Signal"
      subtitle="Identidad del track. Transmisión distante, no un lead tradicional."
    >
      <Panel accent className="p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="label text-signal">Identity Layer</div>
          <span className="font-mono text-xs text-signal-bright">Ableton Operator</span>
        </div>

        <div className="mb-6 font-mono text-lg tracking-[0.3em] text-paper">
          beep<span className="text-mist">........</span>beep
          <span className="text-mist">...</span>beep
        </div>

        <Chain steps={['Operator', 'Echo', 'Auto Filter', 'Hybrid Reverb']} />

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Param label="Oscillator" value="Sine" />
          <Param label="Octave" value="+2" />
          <Param label="Decay" value="Corto" />
          <Param label="Sustain" value="0" />
        </div>

        <div className="mt-4">
          <div className="label mb-2">Notas sugeridas</div>
          <Notes notes={['F5', 'C6', 'Ab5']} />
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          <Param label="Echo" value="3/16" />
          <Param label="Feedback" value="~25%" />
          <Param label="Reverb" value="~20%" />
        </div>
      </Panel>

      <div className="mt-6">
        <Callout>
          NO crear una melodía tradicional. Debe sentirse como una transmisión distante.
        </Callout>
      </div>
    </Section>
  )
}
