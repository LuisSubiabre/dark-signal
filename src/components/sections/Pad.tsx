import { Callout, Notes, Param, Section } from '../ui/primitives'

export function Pad() {
  return (
    <Section
      id="pad"
      index="10"
      title="Pad"
      subtitle="La armonía debe permanecer relativamente estática. Evitar progresiones demasiado emocionales."
    >
      <div className="mb-4 font-mono text-xs text-signal">Pigments · Analog Lab · equivalente</div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="border border-line bg-panel p-4">
          <div className="label mb-2">Acorde principal</div>
          <div className="mb-3 font-mono text-lg text-signal-bright">Fm(add9)</div>
          <Notes notes={['F', 'Ab', 'C', 'G']} />
          <p className="mt-3 text-sm text-fog">Mantener durante largos periodos.</p>
        </div>
        <div className="border border-line bg-panel p-4">
          <div className="label mb-2">Cambio opcional</div>
          <div className="mb-3 font-mono text-lg text-signal-bright">Dbmaj7</div>
          <Notes notes={['Db', 'F', 'Ab', 'C']} />
          <p className="mt-3 text-sm text-fog">Usar con moderación, no como estribillo.</p>
        </div>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Param label="Filtro inicial" value="400 Hz" />
        <Param label="Apertura lenta" value="1.4 kHz" hint="32 compases" />
        <Param label="Estéreo" value="Lento / 10–15%" />
      </div>

      <div className="mt-6">
        <Callout>
          Si el pad empieza a “cantar”, simplifícalo. Es espacio, no melodía.
        </Callout>
      </div>
    </Section>
  )
}
