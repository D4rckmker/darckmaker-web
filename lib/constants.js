/**
 * ============================================================================
 * CONSTANTES GLOBALES DEL PROYECTO
 * ============================================================================
 *
 * Este archivo centraliza los datos que se REUTILIZAN en múltiples lugares
 * o que es probable que necesites editar frecuentemente.
 *
 * Uso: import { SITE_CONFIG, SOCIAL_LINKS } from '../lib/constants'
 */

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL SITIO (usado en meta tags, footer, etc.)
// ─────────────────────────────────────────────────────────────────────────────

export const SITE_CONFIG = {
  name: 'David Q. Salas',
  title: 'David Q. Salas - iOS Developer',
  description: 'Desarrollador de Software Junior con enfoque en desarrollo iOS',
  url: 'https://www.darckmaker.com',
  author: 'Edson Ever David Quispe Salas',
  handle: '@DarckmakerX',
  locale: 'es',
  ogImage: 'https://www.darckmaker.com/card.png',
  email: 'darckmaker@proton.me'
}

// ─────────────────────────────────────────────────────────────────────────────
// REDES SOCIALES (usado en index.js y navbar.js)
// ─────────────────────────────────────────────────────────────────────────────

export const SOCIAL_LINKS = {
  github: 'https://github.com/D4rckmker',
  linkedin: 'https://www.linkedin.com/in/minami-eed/',
  twitter: 'https://x.com/DarckmakerX',
  instagram: 'https://www.instagram.com/Darckmaker.ig',
  telegram: 'https://t.me/Darckmaker',
  sourceCode: 'https://github.com/D4rckmker/darckmaker-web'
}

// ─────────────────────────────────────────────────────────────────────────────
// NAVEGACIÓN (usado en navbar.js)
// ─────────────────────────────────────────────────────────────────────────────

export const NAV_ITEMS = [
  { href: '/works', label: 'Trabajos' },
  { href: '/posts', label: 'Publicaciones' }
]

// ─────────────────────────────────────────────────────────────────────────────
// DEPRECATED - MOVED TO lib/translations.js
// ─────────────────────────────────────────────────────────────────────────────
// Las constantes de SKILLS y BIOGRAPHY ahora están en lib/translations.js
// para soporte de internacionalización. Importar desde el contexto de traducción.
//
// EJEMPLO:
// import { useTranslation } from '../lib/translation-context'
// const { t } = useTranslation()
// const skills = t('skills')  // Objeto con todas las habilidades traducidas
