import { RULES } from '../../data/track'
import { Panel, Section } from '../ui/primitives'

export function Rules() {
  return (
    <Section
      id="rules"
      index="17"
      title="Reglas de producción"
      subtitle="Checklist operativa. Si dudas, vuelve a estas diez líneas."
    >
      <div className="grid gap-2 md:grid-cols-2">
        {RULES.map((rule) => (
          <Panel key={rule.id} className="flex items-start gap-3 p-3">
            <span className="font-mono text-xs text-signal">{rule.id}</span>
            <p className="text-sm text-paper">{rule.text}</p>
          </Panel>
        ))}
      </div>
    </Section>
  )
}
