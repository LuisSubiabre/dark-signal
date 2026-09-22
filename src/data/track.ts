export type LayerLevel = 'OFF' | 'LOW' | 'ACTIVE' | 'HIGH'

export type TrackId =
  | 'kick'
  | 'percussion'
  | 'sub'
  | 'pulse'
  | 'drone'
  | 'pad'
  | 'signal'
  | 'atmosphere'

export interface Spec {
  label: string
  value: string
}

export interface PaletteTrack {
  id: TrackId
  index: string
  name: string
  role: string
  details: string
  extra?: string
}

export interface Phase {
  id: string
  index: string
  name: string
  bars: [number, number]
  sensation: string
  objective: string
  add: string[]
  keep: string[]
  remove: string[]
  automations: string[]
  layers: Record<TrackId, LayerLevel>
}

export interface Task {
  id: string
  label: string
}

export interface PhaseTasks {
  phaseId: string
  tasks: Task[]
}

export interface NavItem {
  id: string
  label: string
}

export const SPECS: Spec[] = [
  { label: 'BPM', value: '110' },
  { label: 'KEY', value: 'F Minor' },
  { label: 'TIME', value: '4/4' },
  { label: 'DURATION', value: '~8 min' },
  { label: 'DAW', value: 'Ableton Live 12' },
]

export const TOTAL_BARS = 208

export const TRACKS: { id: TrackId; name: string; short: string }[] = [
  { id: 'kick', name: 'Kick', short: 'KICK' },
  { id: 'percussion', name: 'Percussion', short: 'PERC' },
  { id: 'sub', name: 'Sub Bass', short: 'SUB' },
  { id: 'pulse', name: 'Pulse Bass', short: 'PULSE' },
  { id: 'drone', name: 'Drone', short: 'DRONE' },
  { id: 'pad', name: 'Pad', short: 'PAD' },
  { id: 'signal', name: 'Signal', short: 'SIG' },
  { id: 'atmosphere', name: 'Atmosphere', short: 'ATMO' },
]

export const PALETTE: PaletteTrack[] = [
  {
    id: 'kick',
    index: '01',
    name: 'KICK',
    role: 'Pulso principal',
    details: 'Oscuro, corto, profundo y poco agresivo.',
  },
  {
    id: 'percussion',
    index: '02',
    name: 'PERCUSSION',
    role: 'Movimiento mecánico',
    details: 'Clicks digitales, metal hits, noise hats y pequeños glitches.',
  },
  {
    id: 'sub',
    index: '03',
    name: 'SUB BASS',
    role: 'Peso y estabilidad',
    details: 'Sintetizador recomendado: Ableton Wavetable.',
    extra: 'Wavetable',
  },
  {
    id: 'pulse',
    index: '04',
    name: 'PULSE BASS',
    role: 'Sensación de movimiento hacia adelante',
    details: 'Sintetizadores recomendados: Pigments o Serum.',
    extra: 'Pigments / Serum',
  },
  {
    id: 'drone',
    index: '05',
    name: 'DRONE',
    role: 'Base atmosférica constante',
    details: 'Sintetizador recomendado: Pigments.',
    extra: 'Pigments',
  },
  {
    id: 'pad',
    index: '06',
    name: 'PAD',
    role: 'Espacio armónico',
    details: 'Acorde principal: Fm(add9).',
    extra: 'Fm(add9)',
  },
  {
    id: 'signal',
    index: '07',
    name: 'SIGNAL',
    role: 'Identidad sci-fi',
    details: 'Sintetizador recomendado: Ableton Operator.',
    extra: 'Operator',
  },
  {
    id: 'atmosphere',
    index: '08',
    name: 'ATMOSPHERE / FX',
    role: 'Profundidad ambiental',
    details: 'Ruido, estática, interferencias, máquinas, ambientes urbanos y texturas industriales.',
  },
]

export const PHASES: Phase[] = [
  {
    id: 'transmission',
    index: '01',
    name: 'TRANSMISSION',
    bars: [1, 32],
    sensation: 'Algo está transmitiendo desde muy lejos.',
    objective: 'Introducir lentamente el mundo sonoro.',
    add: ['Drone', 'Atmosphere', 'Pad (progresivo)', 'Signal (ocasional)'],
    keep: [],
    remove: [],
    automations: [
      'Abrir lentamente el filtro del drone',
      'Aumentar progresivamente la reverb',
      'Introducir ruido filtrado',
      'Pequeñas señales electrónicas cada 4–8 compases',
    ],
    layers: {
      kick: 'OFF',
      percussion: 'OFF',
      sub: 'OFF',
      pulse: 'OFF',
      drone: 'ACTIVE',
      pad: 'LOW',
      signal: 'LOW',
      atmosphere: 'ACTIVE',
    },
  },
  {
    id: 'pulse',
    index: '02',
    name: 'PULSE',
    bars: [33, 64],
    sensation: 'La señal comienza a tomar forma.',
    objective: 'Dar peso y un motor rítmico sin imponer el kick.',
    add: ['Sub Bass', 'Pulse Bass', 'Percusión ligera'],
    keep: ['Drone', 'Atmosphere', 'Pad', 'Signal'],
    remove: [],
    automations: [
      'Pulse Bass cutoff: 250 Hz → 600 Hz → 300 Hz',
      'Introducir clicks y noise hats progresivamente',
      'Variaciones ocasionales de Signal',
    ],
    layers: {
      kick: 'LOW',
      percussion: 'LOW',
      sub: 'ACTIVE',
      pulse: 'ACTIVE',
      drone: 'ACTIVE',
      pad: 'ACTIVE',
      signal: 'ACTIVE',
      atmosphere: 'ACTIVE',
    },
  },
  {
    id: 'motion',
    index: '03',
    name: 'MOTION',
    bars: [65, 104],
    sensation: 'El sistema está completamente activo.',
    objective: 'Estado rítmico principal. El kick entra de forma natural, no como un drop.',
    add: ['Kick', 'Percusión completa', 'Pulse Bass más definido'],
    keep: ['Sub', 'Drone', 'Pad', 'Atmosphere', 'Signal'],
    remove: [],
    automations: [
      'Filtro del Pulse Bass',
      'Pequeños cambios de decay',
      'Movimiento estéreo del pad',
      'Intensidad de noise hats',
      'Sends de reverb',
    ],
    layers: {
      kick: 'ACTIVE',
      percussion: 'ACTIVE',
      sub: 'ACTIVE',
      pulse: 'HIGH',
      drone: 'ACTIVE',
      pad: 'ACTIVE',
      signal: 'ACTIVE',
      atmosphere: 'ACTIVE',
    },
  },
  {
    id: 'void',
    index: '04',
    name: 'VOID',
    bars: [105, 128],
    sensation: 'La transmisión se pierde momentáneamente en el vacío.',
    objective: 'Crear sensación de vacío. Signal gana protagonismo.',
    add: [],
    keep: ['Drone', 'Pad', 'Atmosphere', 'Signal'],
    remove: ['Kick', 'Gran parte de la percusión', 'Parte del Pulse Bass', 'Sub (opcional)'],
    automations: [
      'Aumentar reverb',
      'Aumentar delays',
      'Ampliar texturas y espacio estéreo',
      'Elevar protagonismo de Signal',
    ],
    layers: {
      kick: 'OFF',
      percussion: 'LOW',
      sub: 'LOW',
      pulse: 'LOW',
      drone: 'HIGH',
      pad: 'HIGH',
      signal: 'HIGH',
      atmosphere: 'HIGH',
    },
  },
  {
    id: 'deep',
    index: '05',
    name: 'DEEP SIGNAL',
    bars: [129, 184],
    sensation: 'La señal ha alcanzado máxima intensidad.',
    objective: 'Mayor densidad del track, sin convertirse en un drop agresivo.',
    add: ['Kick', 'Sub Bass', 'Pulse Bass', 'Percussion'],
    keep: ['Drone', 'Pad', 'Atmosphere', 'Signal'],
    remove: [],
    automations: [
      'Nuevo patrón de percusión',
      'Filtro ligeramente más abierto',
      'Segunda textura ambiental',
      'Variaciones del Signal',
      'Pequeños fills cada 16 compases',
      'Automatización lenta del drone',
    ],
    layers: {
      kick: 'HIGH',
      percussion: 'HIGH',
      sub: 'HIGH',
      pulse: 'HIGH',
      drone: 'ACTIVE',
      pad: 'ACTIVE',
      signal: 'HIGH',
      atmosphere: 'ACTIVE',
    },
  },
  {
    id: 'disconnect',
    index: '06',
    name: 'DISCONNECT',
    bars: [185, 208],
    sensation: 'La señal vuelve a desaparecer.',
    objective: 'Desarmar el sistema. Fade out hacia drone, noise y signal distante.',
    add: [],
    keep: ['Drone', 'Atmosphere', 'Signal'],
    remove: ['Kick', 'Percussion', 'Pulse Bass', 'Sub Bass', 'Pad (gradual)'],
    automations: [
      'Eliminar progresivamente el ritmo',
      'Fade gradual del pad',
      'Alejar Signal',
      'Fade out final',
    ],
    layers: {
      kick: 'OFF',
      percussion: 'OFF',
      sub: 'OFF',
      pulse: 'OFF',
      drone: 'HIGH',
      pad: 'LOW',
      signal: 'ACTIVE',
      atmosphere: 'HIGH',
    },
  },
]

export const CHECKLIST: PhaseTasks[] = [
  {
    phaseId: 'transmission',
    tasks: [
      { id: 't-drone', label: 'Crear Drone (Pigments, F1/F2)' },
      { id: 't-atmo', label: 'Agregar Atmosphere (noise / field)' },
      { id: 't-pad', label: 'Crear acorde Fm(add9)' },
      { id: 't-signal', label: 'Programar Signal ocasional (cada 4–8 compases)' },
      { id: 't-filter', label: 'Automatizar filtro del drone (abrir lento)' },
      { id: 't-reverb', label: 'Aumentar reverb progresivamente' },
      { id: 't-noise', label: 'Introducir ruido filtrado' },
      { id: 't-trans', label: 'Crear transición hacia el compás 33' },
    ],
  },
  {
    phaseId: 'pulse',
    tasks: [
      { id: 'p-sub', label: 'Introducir Sub Bass (Wavetable)' },
      { id: 'p-pulse', label: 'Crear Pulse Bass (Saw + Square)' },
      { id: 'p-clicks', label: 'Agregar clicks digitales' },
      { id: 'p-hat', label: 'Agregar Noise Hat' },
      { id: 'p-filter', label: 'Automatizar Pulse Filter 250 → 600 → 300 Hz' },
      { id: 'p-kick', label: 'Decidir kick discreto o ausente' },
      { id: 'p-signal', label: 'Variaciones ocasionales de Signal' },
      { id: 'p-trans', label: 'Preparar transición hacia Motion' },
    ],
  },
  {
    phaseId: 'motion',
    tasks: [
      { id: 'm-kick', label: 'Introducir Kick (oscuro, corto)' },
      { id: 'm-perc', label: 'Completar percusión' },
      { id: 'm-pulse', label: 'Definir Pulse Bass' },
      { id: 'm-filter', label: 'Automatizar filtro del Pulse Bass' },
      { id: 'm-decay', label: 'Pequeños cambios de decay' },
      { id: 'm-stereo', label: 'Movimiento estéreo del pad' },
      { id: 'm-hats', label: 'Regular intensidad de noise hats' },
      { id: 'm-sends', label: 'Ajustar sends de reverb' },
      { id: 'm-check', label: 'Verificar que no suene a drop EDM' },
      { id: 'm-trans', label: 'Preparar transición hacia Void (105)' },
    ],
  },
  {
    phaseId: 'void',
    tasks: [
      { id: 'v-kick', label: 'Retirar Kick' },
      { id: 'v-perc', label: 'Reducir gran parte de la percusión' },
      { id: 'v-pulse', label: 'Reducir Pulse Bass' },
      { id: 'v-sub', label: 'Sub puede desaparecer temporalmente' },
      { id: 'v-space', label: 'Aumentar reverb y delays' },
      { id: 'v-stereo', label: 'Ampliar espacio estéreo' },
      { id: 'v-signal', label: 'Dar protagonismo a Signal' },
      { id: 'v-feel', label: 'Crear sensación de vacío' },
      { id: 'v-trans', label: 'Preparar transición hacia Deep Signal (129)' },
    ],
  },
  {
    phaseId: 'deep',
    tasks: [
      { id: 'd-kick', label: 'Restaurar Kick' },
      { id: 'd-sub', label: 'Restaurar Sub Bass' },
      { id: 'd-pulse', label: 'Restaurar Pulse Bass' },
      { id: 'd-perc', label: 'Restaurar Percussion' },
      { id: 'd-pattern', label: 'Nuevo patrón de percusión' },
      { id: 'd-filter', label: 'Filtro ligeramente más abierto' },
      { id: 'd-atmo', label: 'Segunda textura ambiental' },
      { id: 'd-signal', label: 'Variaciones del Signal' },
      { id: 'd-fills', label: 'Fills cada 16 compases' },
      { id: 'd-drone', label: 'Automatización lenta del drone' },
      { id: 'd-check', label: 'Verificar densidad sin agresividad' },
    ],
  },
  {
    phaseId: 'disconnect',
    tasks: [
      { id: 'x-kick', label: 'Eliminar Kick progresivamente' },
      { id: 'x-perc', label: 'Eliminar Percussion' },
      { id: 'x-pulse', label: 'Eliminar Pulse Bass' },
      { id: 'x-sub', label: 'Eliminar Sub Bass' },
      { id: 'x-pad', label: 'Fade gradual del Pad' },
      { id: 'x-keep', label: 'Dejar Drone + Noise + Signal distante' },
      { id: 'x-fade', label: 'Fade out final' },
    ],
  },
]

export const RULES = [
  { id: '01', text: 'Máximo 8 pistas inicialmente.' },
  { id: '02', text: 'No agregar elementos solamente porque “faltan cosas”.' },
  { id: '03', text: 'Intentar primero automatizar lo existente.' },
  { id: '04', text: 'Evitar melodías excesivamente memorables.' },
  { id: '05', text: 'Evitar grandes drops.' },
  { id: '06', text: 'Los cambios importantes deberían ocurrir cada 8, 16 o 32 compases.' },
  { id: '07', text: 'Utilizar microvariaciones.' },
  { id: '08', text: 'Mantener el sub controlado y mono.' },
  { id: '09', text: 'Priorizar profundidad sobre volumen.' },
  { id: '10', text: 'Si un elemento llama demasiado la atención, simplificarlo.' },
]

export const NAV: NavItem[] = [
  { id: 'overview', label: 'Overview' },
  { id: 'arrangement', label: 'Arrangement' },
  { id: 'palette', label: 'Sound Palette' },
  { id: 'sub-bass', label: 'Sub Bass' },
  { id: 'pulse-bass', label: 'Pulse Bass' },
  { id: 'drums', label: 'Drums' },
  { id: 'drone', label: 'Drone' },
  { id: 'pad', label: 'Pad' },
  { id: 'signal', label: 'Signal' },
  { id: 'atmosphere', label: 'Atmosphere' },
  { id: 'automation', label: 'Automation' },
  { id: 'returns', label: 'Returns' },
  { id: 'checklist', label: 'Checklist' },
]

export const STORAGE_KEYS = {
  tasks: 'dark-signal.tasks',
  phase: 'dark-signal.phase',
  bar: 'dark-signal.bar',
  focus: 'dark-signal.focus',
} as const

export function phaseByBar(bar: number): Phase {
  return PHASES.find((p) => bar >= p.bars[0] && bar <= p.bars[1]) ?? PHASES[0]
}

export function phaseById(id: string): Phase {
  return PHASES.find((p) => p.id === id) ?? PHASES[0]
}

export function phaseLength(phase: Phase): number {
  return phase.bars[1] - phase.bars[0] + 1
}

export function allTasks(): Task[] {
  return CHECKLIST.flatMap((block) => block.tasks)
}

export function activeTracks(phase: Phase): { id: TrackId; name: string; level: LayerLevel }[] {
  return TRACKS.map((t) => ({
    id: t.id,
    name: t.name,
    level: phase.layers[t.id],
  })).filter((t) => t.level !== 'OFF')
}

export const LEVEL_LABEL: Record<LayerLevel, string> = {
  OFF: 'OFF',
  LOW: 'LOW',
  ACTIVE: 'ACTIVE',
  HIGH: 'HIGH',
}
