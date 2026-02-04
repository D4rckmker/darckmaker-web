/**
 * ============================================================================
 * TRANSLATION-CONTEXT.JS - CONTEXTO DE TRADUCCIÓN
 * ============================================================================
 *
 * Proveedor de contexto React para manejar el estado de internacionalización.
 *
 * FUNCIONALIDADES:
 * - Estado del idioma actual
 * - Persistencia en localStorage
 * - Función de traducción con notación de punto
 * - Toggle de idioma con persistencia
 */

'use client'

import { createContext, useContext, useState, useEffect } from 'react'
import { translations, supportedLocales, defaultLocale } from './translations'

// ─────────────────────────────────────────────────────────────────────────────
// CONTEXTO
// ─────────────────────────────────────────────────────────────────────────────
const TranslationContext = createContext({
  locale: defaultLocale,
  t: () => {},
  toggleLocale: () => {}
})

// ─────────────────────────────────────────────────────────────────────────────
// PROVIDER COMPONENT
// ─────────────────────────────────────────────────────────────────────────────
export function TranslationProvider({ children }) {
  // Estado inicial con SSR consideration
  const [locale, setLocale] = useState(defaultLocale)

  // Efecto para inicializar desde localStorage (client-side only)
  useEffect(() => {
    if (typeof window === 'undefined') return

    // 1. Revisar localStorage primero (preferencia guardada)
    const saved = localStorage.getItem('darckmaker-locale')
    if (saved && supportedLocales.includes(saved)) {
      setLocale(saved)
      return
    }

    // 2. Revisar idioma del navegador
    const browserLang = navigator.language || navigator.userLanguage
    if (browserLang?.startsWith('en')) {
      setLocale('en')
      return
    }
    if (browserLang?.startsWith('es')) {
      setLocale('es')
      return
    }

    // 3. Default a español
    setLocale(defaultLocale)
  }, [])

  // Persistir cambios en localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('darckmaker-locale', locale)
    }
  }, [locale])

  // ─────────────────────────────────────────────────────────────────────────────
  // FUNCIÓN DE TRADUCCIÓN
  // ─────────────────────────────────────────────────────────────────────────────
  const t = path => {
    const keys = path.split('.')
    let value = translations[locale]

    // Navegar por el objeto anidado
    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key]
      } else {
        // Fallback a español si no existe traducción
        value = translations.es
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            // Último fallback: retorna la clave
            return path
          }
        }
        break
      }
    }

    // Si existe valor, retornarlo (puede ser string, array u objeto)
    return value !== undefined ? value : path
  }

  // ─────────────────────────────────────────────────────────────────────────────
  // TOGGLE DE IDIOMA
  // ─────────────────────────────────────────────────────────────────────────────
  const toggleLocale = () => {
    setLocale(prev => (prev === 'es' ? 'en' : 'es'))
  }

  const contextValue = {
    locale,
    t,
    toggleLocale
  }

  return (
    <TranslationContext.Provider value={contextValue}>
      {children}
    </TranslationContext.Provider>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// HOOK PERSONALIZADO
// ─────────────────────────────────────────────────────────────────────────────
export function useTranslation() {
  const context = useContext(TranslationContext)

  if (!context) {
    throw new Error('useTranslation debe usarse dentro de TranslationProvider')
  }

  return context
}
