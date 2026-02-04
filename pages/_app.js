/**
 * ============================================================================
 * _APP.JS - PUNTO DE ENTRADA DE LA APLICACIÓN
 * ============================================================================
 *
 * Este archivo es el "wrapper" principal de toda la aplicación Next.js.
 * Se ejecuta en CADA página y es el lugar ideal para:
 *
 * 1. Providers globales (Chakra, Context, etc.)
 * 2. Layouts persistentes (Navbar, Footer)
 * 3. Estilos globales
 * 4. Analytics
 *
 * IMPORTANTE: El estado aquí persiste entre navegaciones de página.
 */

import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import { AnimatePresence } from 'framer-motion'
import Chakra from '../components/chakra'
import { Analytics } from '@vercel/analytics/react'
import { TranslationProvider } from '../lib/translation-context'

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL HISTORIAL DEL NAVEGADOR
// ─────────────────────────────────────────────────────────────────────────────
// Evita que el navegador restaure automáticamente la posición de scroll
// al navegar con los botones atrás/adelante. Esto permite un control
// manual más suave con las animaciones de página.
if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual'
}

/**
 * Componente principal de la aplicación
 *
 * @param {Object} Component - El componente de página actual
 * @param {Object} pageProps - Props pasadas desde getServerSideProps/getStaticProps
 * @param {Object} router - Objeto router de Next.js para acceder a la ruta actual
 */
function Website({ Component, pageProps, router }) {
  return (
    // ─────────────────────────────────────────────────────────────────────────
    // CHAKRA PROVIDER
    // ─────────────────────────────────────────────────────────────────────────
    // Envuelve toda la app con el sistema de diseño Chakra UI.
    // Las 'cookies' se pasan para persistir el tema (claro/oscuro) en el servidor.
    <Chakra cookies={pageProps.cookies}>
      {/* ─────────────────────────────────────────────────────────────────────
          TRANSLATION PROVIDER
          ─────────────────────────────────────────────────────────────────────
          Provee el contexto de internacionalización para toda la aplicación.
          Maneja el estado del idioma y la función de traducción. */}
      <TranslationProvider>
        {/* Carga las fuentes personalizadas (M PLUS Rounded 1c) */}
        <Fonts />

        {/* ─────────────────────────────────────────────────────────────────────
          LAYOUT PRINCIPAL
          ─────────────────────────────────────────────────────────────────────
          Contiene: Navbar, Footer, PetBox (gatitos)
          Este layout es PERSISTENTE - no se desmonta al cambiar de página */}
        <Layout router={router}>
          {/* ─────────────────────────────────────────────────────────────────────
            ANIMACIONES DE TRANSICIÓN
            ─────────────────────────────────────────────────────────────────────
            AnimatePresence de Framer Motion permite animar componentes
            cuando entran y salen del DOM.
            
            - mode="wait": Espera a que salga el componente antes de montar el nuevo
            - initial={true}: Anima la primera carga de página
            - onExitComplete: Se ejecuta al terminar la animación de salida */}
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              // Scroll al inicio cuando termina la animación de salida
              if (typeof window !== 'undefined') {
                window.scrollTo({ top: 0 })
              }
            }}
          >
            {/* El 'key' basado en la ruta fuerza el re-montaje del componente
              cuando cambia la URL, activando las animaciones */}
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>

          {/* Analytics de Vercel para tracking de visitas */}
          <Analytics />
        </Layout>
      </TranslationProvider>
    </Chakra>
  )
}

export default Website
