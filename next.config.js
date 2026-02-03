/**
 * ============================================================================
 * CONFIGURACIÓN DE NEXT.JS
 * ============================================================================
 *
 * Este archivo controla el comportamiento del framework Next.js.
 * Cada opción está comentada para facilitar el entendimiento.
 *
 * Documentación: https://nextjs.org/docs/app/api-reference/next-config-js
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  // ─────────────────────────────────────────────────────────────────────────
  // MODO ESTRICTO DE REACT
  // ─────────────────────────────────────────────────────────────────────────
  // Activa comprobaciones adicionales en desarrollo para detectar problemas
  // potenciales. No afecta la producción.
  reactStrictMode: true,

  // ─────────────────────────────────────────────────────────────────────────
  // COMPRESIÓN
  // ─────────────────────────────────────────────────────────────────────────
  // Habilita compresión gzip para las respuestas del servidor.
  // Reduce el tamaño de transferencia y mejora tiempos de carga.
  compress: true,

  // ─────────────────────────────────────────────────────────────────────────
  // OPTIMIZACIÓN DE IMÁGENES
  // ─────────────────────────────────────────────────────────────────────────
  images: {
    // Formatos modernos de imagen para mejor compresión
    formats: ['image/avif', 'image/webp'],

    // Tamaños de dispositivo para responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],

    // Tamaños de imagen para el atributo 'sizes'
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384]
  },

  // ─────────────────────────────────────────────────────────────────────────
  // HEADERS DE SEGURIDAD
  // ─────────────────────────────────────────────────────────────────────────
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // Previene que el sitio sea embebido en iframes (clickjacking)
          { key: 'X-Frame-Options', value: 'DENY' },
          // Previene sniffing de MIME type
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          // Controla cuánta información del referrer se envía
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' }
        ]
      }
    ]
  }
}

module.exports = nextConfig
