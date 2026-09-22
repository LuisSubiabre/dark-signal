import { SPECS } from '../../data/track'
import { Waveform } from '../ui/primitives'

export function Header() {
  return (
    <header className="border-b border-line px-4 py-10 lg:px-8">
      <div className="label mb-3 text-signal">Production Manual · Session Sheet</div>
      <h1 className="font-mono text-4xl tracking-[0.08em] text-paper sm:text-5xl">DARK SIGNAL</h1>
      <p className="mt-2 font-mono text-xs tracking-[0.08em] text-fog uppercase">
        Cyberpunk / Dark Ambient / Focus Electronic
      </p>
      <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fog">
        Guía de producción para construir un paisaje sonoro futurista, hipnótico y no
        intrusivo diseñado para concentración profunda.
      </p>
      <Waveform className="mt-6 h-7 w-full max-w-xl" />
      <div className="mt-6 flex flex-wrap gap-2">
        {SPECS.map((spec) => (
          <div key={spec.label} className="border border-line bg-panel px-3 py-2">
            <div className="label">{spec.label}</div>
            <div className="value text-sm text-paper">{spec.value}</div>
          </div>
        ))}
      </div>
    </header>
  )
}
