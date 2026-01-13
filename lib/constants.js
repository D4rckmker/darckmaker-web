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
// HABILIDADES (usado en index.js)
// ─────────────────────────────────────────────────────────────────────────────

export const SKILLS = {
  lenguajes: ['Swift', 'Java', 'JavaScript'],
  movil: ['iOS', 'Integración de APIs', 'UI/UX (fundamentos)'],
  backend: ['Spring Boot', 'REST APIs', 'Frontend básico'],
  herramientas: ['Git', 'SAP', 'Microsoft Excel'],
  blandas: [
    'Pensamiento analítico',
    'Adaptabilidad',
    'Trabajo en equipo',
    'Resolución de problemas'
  ]
}

// ─────────────────────────────────────────────────────────────────────────────
// BIOGRAFÍA (usado en index.js)
// ─────────────────────────────────────────────────────────────────────────────

export const BIOGRAPHY = [
  { year: '2001', text: 'Nacido en La Libertad, Perú.' },
  { year: '2020', text: 'Inicia la carrera de Computación e Informática en CIBERTEC (Perú).' },
  { year: '2023', text: 'Participa en proyectos de desarrollo: backend con Spring Boot e integración de APIs; además de desarrollo iOS con Swift.' },
  { year: '2023', text: 'Inicia labores como Responsable de Información en Avocado Packing Company (Excel y SAP).' },
  { year: '2024', text: 'Egresado de Computación e Informática (CIBERTEC).' }
]
