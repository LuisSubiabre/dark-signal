import { Callout, Chain, Param, Section } from '../ui/primitives'

const SOURCES = [
  'White Noise',
  'Static',
  'Radio Noise',
  'Electrical Hum',
  'Server Room',
  'Machines',
  'Rain',
  'Urban Ambience',
  'Industrial Field Recordings',
]

export function Atmosphere() {
  return (
    <Section
      id="atmosphere"
      index="12"
      title="Atmosphere"
      subtitle="Profundidad ambiental. El aire de la estación, no un efecto decorativo."
    >
      <div className="mb-6 flex flex-wrap gap-2">
        {SOURCES.map((src) => (
          <span key={src} className="border border-line bg-panel px-3 py-1.5 font-mono text-xs text-fog">
            {src}
          </span>
        ))}
      </div>

      <Chain steps={['Noise', 'Band Pass', 'Reverb']} />

      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        <Param label="Band Pass" value="2–6 kHz" />
        <Param label="Resonance" value="30–50%" />
        <Param label="Auto" value="Frecuencia lenta" />
      </div>

      <div className="mt-6">
        <Callout>
          Automatizar lentamente la frecuencia del band pass. El ruido debe parecer una
          sala, no un hi-hat constante.
        </Callout>
      </div>
    </Section>
  )
}
