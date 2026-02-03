/**
 * ============================================================================
 * _DOCUMENT.JS - ESTRUCTURA HTML BASE
 * ============================================================================
 *
 * Este archivo personaliza el documento HTML que envuelve a toda la app.
 * Se renderiza SOLO en el servidor y es el lugar para:
 *
 * 1. Modificar las etiquetas <html> y <body>
 * 2. Agregar scripts que deben cargarse antes del contenido
 * 3. Configurar el idioma del documento
 *
 * IMPORTANTE: Este archivo NO se actualiza en navegación client-side.
 * Solo se ejecuta en el servidor durante el build o SSR.
 */

import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme'

export default class Document extends NextDocument {
  render() {
    return (
      // ─────────────────────────────────────────────────────────────────────
      // ETIQUETA HTML
      // ─────────────────────────────────────────────────────────────────────
      // El atributo 'lang' es crucial para:
      // - Accesibilidad (lectores de pantalla)
      // - SEO (los buscadores entienden el idioma del contenido)
      <Html lang="es">
        <Head>
          {/* 
            Aquí puedes agregar:
            - Fuentes de Google Fonts (aunque es mejor usar next/font)
            - Favicon y apple-touch-icon
            - Meta tags que no cambian entre páginas
            
            NOTA: No pongas <title> aquí, va en cada página individual
          */}
        </Head>
        <body>
          {/* ─────────────────────────────────────────────────────────────────
              COLOR MODE SCRIPT
              ─────────────────────────────────────────────────────────────────
              Este script se ejecuta ANTES de que React se hidrate.
              Previene el "flash" de tema incorrecto al cargar la página.
              
              Lee la preferencia guardada (cookie/localStorage) y aplica
              la clase correcta al body inmediatamente. */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />

          {/* Donde se monta la aplicación React */}
          <Main />

          {/* Scripts de Next.js necesarios para la hidratación */}
          <NextScript />
        </body>
      </Html>
    )
  }
}
