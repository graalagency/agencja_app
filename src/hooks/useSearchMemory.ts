import { useEffect, useRef, useState } from 'react'

const REMEMBER_PREFIX  = 'search_remember_'
const CRITERIA_PREFIX  = 'search_criteria_'

/**
 * Zarządza zapamiętywaniem kryteriów wyszukiwania dla danej strony.
 *
 * @param pageKey  - unikalny klucz strony (np. 'customers', 'titles')
 * @param defaults - domyślne wartości kryteriów
 *
 * Użycie:
 *   const { remember, setRemember, initialCriteria, save } = useSearchMemory('customers', defaults)
 *   const [search, setSearch] = useState(initialCriteria.search)
 *   useEffect(() => { save({ search, sortBy, ... }) }, [search, sortBy, ...])
 */
export function useSearchMemory<T extends Record<string, unknown>>(
  pageKey: string,
  defaults: T
) {
  const rememberKey  = REMEMBER_PREFIX  + pageKey
  const criteriaKey  = CRITERIA_PREFIX  + pageKey

  const [remember, setRememberState] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false
    return localStorage.getItem(rememberKey) === 'true'
  })

  const rememberRef = useRef(remember)
  rememberRef.current = remember

  const initialCriteria: T = (() => {
    if (typeof window === 'undefined' || !remember) return defaults
    try {
      const stored = localStorage.getItem(criteriaKey)
      if (stored) return { ...defaults, ...JSON.parse(stored) }
    } catch {}
    return defaults
  })()

  // Holds the latest criteria so we can save immediately when remember is toggled on.
  const latestCriteriaRef = useRef<T>(defaults)

  const setRemember = (value: boolean) => {
    setRememberState(value)
    rememberRef.current = value
    localStorage.setItem(rememberKey, String(value))
    if (!value) {
      localStorage.removeItem(criteriaKey)
    } else {
      // Save the criteria that are current at the moment the user checks "Remember".
      localStorage.setItem(criteriaKey, JSON.stringify(latestCriteriaRef.current))
    }
  }

  const save = (criteria: T) => {
    latestCriteriaRef.current = criteria
    if (rememberRef.current) {
      localStorage.setItem(criteriaKey, JSON.stringify(criteria))
    }
  }

  // Przy opuszczaniu strony: jeśli remember=false, wyczyść zapisane kryteria
  useEffect(() => {
    return () => {
      if (!rememberRef.current) {
        localStorage.removeItem(criteriaKey)
      }
    }
  }, [criteriaKey])

  return { remember, setRemember, initialCriteria, save }
}
