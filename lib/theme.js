/**
 * ============================================================================
 * CONFIGURACIÓN DEL TEMA (CHAKRA UI)
 * ============================================================================
 * 
 * Este archivo define el sistema de diseño de toda la aplicación.
 * Chakra UI usa este tema para aplicar estilos consistentes.
 * 
 * Documentación: https://chakra-ui.com/docs/styled-system/theme
 */

import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// ─────────────────────────────────────────────────────────────────────────────
// ESTILOS GLOBALES
// ─────────────────────────────────────────────────────────────────────────────
// Estos estilos se aplican al body y afectan toda la página

const styles = {
  global: props => ({
    body: {
      // mode(lightValue, darkValue) - Helper que retorna el valor según el tema
      // #f0e7db = beige claro (modo claro)
      // #202023 = gris oscuro (modo oscuro)
      bg: mode('#f0e7db', '#202023')(props)
    }
  })
}

// ─────────────────────────────────────────────────────────────────────────────
// VARIANTES DE COMPONENTES
// ─────────────────────────────────────────────────────────────────────────────
// Personalizamos el estilo de componentes específicos de Chakra

const components = {
  // Variantes personalizadas para Heading
  Heading: {
    variants: {
      // Usado para títulos de sección con línea subrayada
      'section-title': {
        textDecoration: 'underline',
        fontSize: 20,
        textUnderlineOffset: 6,
        textDecorationColor: '#525252',
        textDecorationThickness: 4,
        marginTop: 3,
        marginBottom: 4
      }
    }
  },
  
  // Estilos base para todos los Links
  Link: {
    baseStyle: props => ({
      // Color de enlaces según el tema
      // #3d7aed = azul (modo claro)
      // #ff63c3 = rosa (modo oscuro)
      color: mode('#3d7aed', '#ff63c3')(props),
      textUnderlineOffset: 3
    })
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FUENTES
// ─────────────────────────────────────────────────────────────────────────────
// Define las familias tipográficas para la app

const fonts = {
  // Fuente para títulos y headings
  heading: "'M PLUS Rounded 1c'"
}

// ─────────────────────────────────────────────────────────────────────────────
// COLORES PERSONALIZADOS
// ─────────────────────────────────────────────────────────────────────────────
// Colores adicionales que podemos usar en cualquier componente

const colors = {
  // Color teal personalizado para destacados (links activos, badges, etc.)
  grassTeal: '#88ccca'
}

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN DEL COLOR MODE
// ─────────────────────────────────────────────────────────────────────────────

const config = {
  // Tema inicial cuando el usuario visita por primera vez
  // Opciones: 'light', 'dark', 'system'
  initialColorMode: 'dark',
  
  // Si es true, respeta la preferencia del sistema operativo del usuario
  useSystemColorMode: true
}

// ─────────────────────────────────────────────────────────────────────────────
// EXPORTAR TEMA EXTENDIDO
// ─────────────────────────────────────────────────────────────────────────────
// extendTheme combina nuestra configuración con los valores por defecto de Chakra

const theme = extendTheme({ 
  config, 
  styles, 
  components, 
  fonts, 
  colors 
})

export default theme
