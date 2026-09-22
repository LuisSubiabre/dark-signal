import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV } from '../../data/track'

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 border border-line bg-panel px-3 py-1.5 font-mono text-[11px] tracking-wider text-fog uppercase"
        aria-expanded={open}
        aria-label="Abrir navegación"
      >
        {open ? <X size={14} /> : <Menu size={14} />}
        Nav
      </button>

      {open && (
        <div className="absolute top-full right-0 left-0 z-40 border-b border-line bg-ink">
          <nav className="grid grid-cols-2 gap-1 p-3">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className="px-2 py-2 font-mono text-[11px] tracking-wider text-fog uppercase hover:bg-panel hover:text-paper"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}
