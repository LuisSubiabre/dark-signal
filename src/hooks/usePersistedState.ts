import { useEffect, useState } from 'react'

export function usePersistedState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      if (raw == null) return initial
      const parsed = JSON.parse(raw) as T
      return parsed == null ? initial : parsed
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* ignore quota / private mode */
    }
  }, [key, value])

  return [value, setValue] as const
}
