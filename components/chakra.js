/**
 * ============================================================================
 * CHAKRA PROVIDER WRAPPER
 * ============================================================================
 *
 * Este componente envuelve la aplicación con el ChakraProvider y configura
 * la persistencia del tema (claro/oscuro) usando cookies.
 *
 * ¿Por qué cookies en lugar de localStorage?
 * - Las cookies se envían al servidor en cada request
 * - Esto permite renderizar el tema correcto en SSR (Server Side Rendering)
 * - Evita el "flash" de tema incorrecto al cargar la página
 *
 * IMPORTANTE: Cada página que use SSR debe exportar getServerSideProps
 * desde este archivo para que el tema funcione correctamente.
 */

import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import theme from '../lib/theme'

/**
 * Componente Chakra Provider
 *
 * @param {string} cookies - String de cookies del request (solo en SSR)
 * @param {ReactNode} children - Componentes hijos
 */
export default function Chakra({ cookies, children }) {
  // ─────────────────────────────────────────────────────────────────────────
  // COLOR MODE MANAGER
  // ─────────────────────────────────────────────────────────────────────────
  // Determina cómo se guarda y lee la preferencia de tema
  //
  // - Si tenemos cookies (SSR): usa cookieStorageManagerSSR
  //   Esto lee el tema de las cookies en el servidor
  //
  // - Si no hay cookies (cliente): usa localStorageManager
  //   Esto lee/guarda en localStorage del navegador
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  )
}

/**
 * ============================================================================
 * GET SERVER SIDE PROPS (para exportar en cada página)
 * ============================================================================
 *
 * Esta función se ejecuta en el servidor antes de renderizar la página.
 * Lee las cookies del request y las pasa como props a la página.
 *
 * USO EN PÁGINAS:
 * ```js
 * // Al final de cada página que use SSR:
 * export { getServerSideProps } from '../components/chakra'
 * ```
 *
 * Esto asegura que el tema se renderice correctamente desde el servidor.
 */
export async function getServerSideProps({ req }) {
  return {
    props: {
      // Pasa las cookies al cliente (o string vacío si no hay)
      cookies: req.headers.cookie ?? ''
    }
  }
}
