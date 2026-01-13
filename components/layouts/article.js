/**
 * ============================================================================
 * LAYOUT DE ARTÍCULO (ARTICLE)
 * ============================================================================
 * 
 * Wrapper de contenido con animaciones de entrada/salida.
 * Usa SITE_CONFIG para el título de las páginas.
 */

import { motion } from 'framer-motion'
import Head from 'next/head'
import { GridItemStyle } from '../grid-item'
import { SITE_CONFIG } from '../../lib/constants'

// Configuración de animación
const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 }
}

const Layout = ({ children, title }) => {
  // ✨ Usa SITE_CONFIG.name desde constants.js
  const fullTitle = title ? `${title} / ${SITE_CONFIG.name}` : null
  
  return (
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: 'easeInOut' }}
      style={{ position: 'relative' }}
    >
      {fullTitle && (
        <Head>
          <title>{fullTitle}</title>
          <meta name="twitter:title" content={fullTitle} />
          <meta property="og:title" content={fullTitle} />
        </Head>
      )}
      
      {children}
      <GridItemStyle />
    </motion.article>
  )
}

export default Layout
