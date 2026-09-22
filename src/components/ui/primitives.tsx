import { ChevronDown } from 'lucide-react'
import { useState, type ReactNode } from 'react'
import type { LayerLevel } from '../../data/track'

export function Section({
  id,
  index,
  title,
  subtitle,
  children,
}: {
  id: string
  index: string
  title: string
  subtitle?: string
  children: ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-28 border-t border-line py-12">
      <header className="mb-8">
        <div className="mb-2 flex items-baseline gap-3">
          <span className="label text-signal">{index}</span>
          <h2 className="font-mono text-xl tracking-[0.06em] text-paper uppercase">{title}</h2>
        </div>
        {subtitle && <p className="max-w-2xl text-sm leading-relaxed text-fog">{subtitle}</p>}
      </header>
      {children}
    </section>
  )
}

export function Panel({
  children,
  className = '',
  accent = false,
}: {
  children: ReactNode
  className?: string
  accent?: boolean
}) {
  return (
    <div
      className={`relative border bg-panel ${accent ? 'border-signal-dim' : 'border-line'} ${className}`}
    >
      <span className="absolute top-0 left-0 h-2 w-2 border-t border-l border-signal/40" />
      <span className="absolute top-0 right-0 h-2 w-2 border-t border-r border-signal/40" />
      <span className="absolute bottom-0 left-0 h-2 w-2 border-b border-l border-signal/40" />
      <span className="absolute right-0 bottom-0 h-2 w-2 border-b border-r border-signal/40" />
      {children}
    </div>
  )
}

export function Param({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="border border-line bg-ink px-3 py-2.5">
      <div className="label mb-1">{label}</div>
      <div className="value text-sm text-signal-bright">{value}</div>
      {hint && <div className="mt-1 text-[11px] text-mist">{hint}</div>}
    </div>
  )
}

export function Callout({
  children,
  tone = 'signal',
}: {
  children: ReactNode
  tone?: 'signal' | 'warn'
}) {
  const color = tone === 'warn' ? 'border-warn/40 text-warn' : 'border-signal/40 text-signal-bright'
  return (
    <div className={`border bg-ink px-4 py-3 font-mono text-sm leading-relaxed ${color}`}>
      {children}
    </div>
  )
}

export function Chain({ steps }: { steps: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
      {steps.map((step, i) => (
        <span key={step} className="flex items-center gap-1.5">
          <span className="border border-line bg-panel-2 px-2 py-1 text-paper">{step}</span>
          {i < steps.length - 1 && <span className="text-mist">→</span>}
        </span>
      ))}
    </div>
  )
}

export function Collapsible({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border border-line bg-ink">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="label text-fog">{title}</span>
        <ChevronDown
          size={14}
          className={`text-mist transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="border-t border-line px-4 py-3 text-sm leading-relaxed text-fog">{children}</div>}
    </div>
  )
}

export function LevelDot({ level }: { level: LayerLevel }) {
  const map: Record<LayerLevel, string> = {
    OFF: 'bg-off text-mist',
    LOW: 'bg-low text-signal-bright',
    ACTIVE: 'bg-active text-paper',
    HIGH: 'bg-high text-void',
  }
  return (
    <span
      className={`inline-flex min-w-14 justify-center px-1.5 py-0.5 font-mono text-[10px] tracking-wider ${map[level]}`}
    >
      {level}
    </span>
  )
}

export function Notes({ notes }: { notes: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {notes.map((n) => (
        <span
          key={n}
          className="border border-signal-dim bg-ink px-2.5 py-1 font-mono text-sm text-signal-bright"
        >
          {n}
        </span>
      ))}
    </div>
  )
}

export function Waveform({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 28" className={`text-signal/50 ${className}`} aria-hidden>
      <path
        d="M0 14h8l3-6 4 12 5-18 4 16 3-8 6 4h10l2-4 5 10 4-14 3 12 6-6 4 2h20l3-5 4 9 6-16 5 14 3-6 8 4h18l2-3 6 8 4-12 5 10 3-4 10 2h20l4-7 3 11 6-10 4 6h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  )
}
