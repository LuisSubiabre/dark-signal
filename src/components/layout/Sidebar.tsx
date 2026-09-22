import { Radio } from 'lucide-react'
import { NAV } from '../../data/track'
import { useApp } from '../../context/AppContext'

export function Sidebar() {
  const { currentPhase, progress } = useApp()

  return (
    <aside className="hidden lg:flex lg:w-56 lg:shrink-0 lg:flex-col lg:border-r lg:border-line lg:bg-ink">
      <div className="sticky top-0 flex h-screen flex-col px-4 py-6">
        <div className="mb-8 flex items-center gap-2">
          <Radio size={14} className="text-signal" />
          <span className="font-mono text-[11px] tracking-[0.22em] text-signal">DS-110</span>
        </div>

        <nav className="flex-1 space-y-0.5 overflow-y-auto">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="block px-2 py-1.5 font-mono text-[11px] tracking-wider text-fog uppercase transition-colors hover:bg-panel hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 border-t border-line pt-4">
          <div className="label mb-2">Phase</div>
          <div className="font-mono text-xs text-signal-bright">{currentPhase.name}</div>
          <div className="mt-3 label mb-1">Progress</div>
          <div className="font-mono text-xs text-paper">{progress}%</div>
        </div>
      </div>
    </aside>
  )
}
