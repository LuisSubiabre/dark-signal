import { Callout, Chain, Param, Section } from '../ui/primitives'

const SEQ = {
  click: [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
  metal: [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  hat: [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0],
  mech: [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
  glitch: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
}

const KICK_A = [1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
const KICK_B = [1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0]

export function Drums() {
  return (
    <Section
      id="drums"
      index="07"
      title="Kick y percusión"
      subtitle="Ritmo integrado en el ambiente. No debe dominar la mezcla."
    >
      <h3 className="mb-3 font-mono text-sm tracking-[0.12em] text-paper">KICK</h3>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="Carácter" value="Oscuro / corto" />
        <Param label="Click" value="Mínimo" />
        <Param label="Fundamental" value="45–60 Hz" />
        <Param label="Evitar" value="Kick industrial enorme" />
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-2">
        <Pattern title="Patrón A — negras 1 2 3 4" steps={KICK_A} />
        <Pattern title="Patrón B — ligera síncopa" steps={KICK_B} />
      </div>

      <Callout>
        Incluso con four-on-the-floor, el kick debe estar integrado en el ambiente y no
        dominar la mezcla.
      </Callout>

      <h3 className="mt-10 mb-3 font-mono text-sm tracking-[0.12em] text-paper">PERCUSIÓN</h3>
      <div className="mb-4 flex flex-wrap gap-2">
        {['Digital Click', 'Metal Hit', 'Noise Hat', 'Mechanical Percussion', 'Glitch'].map(
          (el) => (
            <span key={el} className="border border-line bg-panel px-2 py-1 font-mono text-[11px] text-fog">
              {el}
            </span>
          ),
        )}
      </div>

      <div className="mb-4">
        <Chain steps={['Drum Rack', 'Drum Buss', 'Saturator', 'EQ Eight', 'Glue Compressor']} />
      </div>

      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Param label="Drive" value="3–6%" />
        <Param label="Crunch" value="Bajo" />
        <Param label="Boom" value="Mínimo" />
        <Param label="Transient" value="-5 / +5" />
      </div>

      <div className="overflow-x-auto border border-line bg-panel p-4">
        <div className="label mb-3">Secuenciador 16 pasos</div>
        <SeqRow name="Click" steps={SEQ.click} />
        <SeqRow name="Metal" steps={SEQ.metal} />
        <SeqRow name="N. Hat" steps={SEQ.hat} />
        <SeqRow name="Mech" steps={SEQ.mech} />
        <SeqRow name="Glitch" steps={SEQ.glitch} />
        <div className="mt-2 grid grid-cols-[4.5rem_repeat(16,minmax(0,1fr))] gap-1 font-mono text-[9px] text-mist">
          <span />
          {Array.from({ length: 16 }, (_, i) => (
            <span key={i} className="text-center">
              {i + 1}
            </span>
          ))}
        </div>
      </div>

      <p className="mt-4 text-sm text-fog">
        Objetivo: percusión seca, precisa, tecnológica y ligeramente industrial.
      </p>
    </Section>
  )
}

function Pattern({ title, steps }: { title: string; steps: number[] }) {
  return (
    <div className="border border-line bg-panel p-3">
      <div className="label mb-2">{title}</div>
      <div className="grid grid-cols-[repeat(16,minmax(0,1fr))] gap-1">
        {steps.map((on, i) => (
          <div
            key={i}
            className={`h-8 ${on ? 'bg-active' : 'bg-off'} ${i % 4 === 0 ? 'outline outline-1 outline-line-strong' : ''}`}
          />
        ))}
      </div>
    </div>
  )
}

function SeqRow({ name, steps }: { name: string; steps: number[] }) {
  return (
    <div className="mb-1 grid grid-cols-[4.5rem_repeat(16,minmax(0,1fr))] gap-1">
      <span className="flex items-center font-mono text-[10px] text-fog">{name}</span>
      {steps.map((on, i) => (
        <div
          key={i}
          className={`h-6 ${on ? 'bg-high' : 'bg-off'} ${i % 4 === 0 ? 'ring-1 ring-line-strong' : ''}`}
        />
      ))}
    </div>
  )
}
