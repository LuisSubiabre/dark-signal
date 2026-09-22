import { SPECS } from '../../data/track'
import { Callout, Collapsible, Panel, Section, Waveform } from '../ui/primitives'

export function Overview() {
  return (
    <Section
      id="overview"
      index="01"
      title="Filosofía del track"
      subtitle="El objetivo no es producir una canción tradicional basada en drops y cambios constantes."
    >
      <div className="mb-8 grid gap-3 sm:grid-cols-5">
        {SPECS.map((spec) => (
          <Panel key={spec.label} className="px-4 py-3">
            <div className="label">{spec.label}</div>
            <div className="value mt-1 text-sm text-paper">{spec.value}</div>
          </Panel>
        ))}
      </div>

      <Waveform className="mb-8 h-8 w-full" />

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <p className="text-sm leading-relaxed text-fog">
            DARK SIGNAL funciona como una transmisión sostenida. El interés no viene de
            secciones nuevas cada pocos compases, sino de un sistema que se mantiene y
            muta por dentro.
          </p>
          <div className="grid grid-cols-2 gap-2">
            {[
              'Repetición',
              'Evolución lenta',
              'Microvariaciones',
              'Automatización',
              'Modulación',
              'Profundidad',
              'Textura',
              'Movimiento estéreo',
              'Tensión controlada',
            ].map((item) => (
              <div key={item} className="border border-line bg-panel px-3 py-2 font-mono text-xs text-paper">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          <Callout>
            El oyente debe sentir que algo está cambiando sin necesariamente identificar qué cambió.
          </Callout>
          <Callout tone="warn">Menos composición. Más evolución.</Callout>
        </div>
      </div>

      <div className="mt-6">
        <Collapsible title="Cómo usar esta guía con Ableton">
          Abre esta página en un segundo monitor. Sitúa el locator de compás en la barra
          superior para que coincida con el playhead de Live. La interfaz te dirá qué
          pistas deben sonar, qué automatizar y qué tarea toca ahora. Focus Mode reduce
          la vista a lo esencial de la fase activa.
        </Collapsible>
      </div>
    </Section>
  )
}
