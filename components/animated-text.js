/**
 * ============================================================================
 * ANIMATED-TEXT.JS - COMPONENTE DE TEXTO ANIMADO
 * ============================================================================
 *
 * Componente wrapper para texto que necesita animaciones suaves al cambiar.
 * Ideal para traducciones donde el texto reemplazado debe transicionar
 * sin parpadeos bruscos.
 *
 * USO:
 * <AnimatedText>
 *   {t('navbar.works')}
 * </AnimatedText>
 *
 * COMPORTAMIENTO:
 * - Exit: opacity 0, translateY -10px (sube y desaparece)
 * - Enter: opacity 0 → 1, translateY 10px → 0 (sube desde abajo)
 */

import { chakra, shouldForwardProp } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { useEffect, useState } from 'react'

// ─────────────────────────────────────────────────────────────────────────────
// STYLED COMPONENT CON FRAMER MOTION
// ─────────────────────────────────────────────────────────────────────────────
const AnimatedSpan = chakra(motion.span, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────
const AnimatedText = ({ children, duration = 0.3, ...props }) => {
  const [key, setKey] = useState(0)

  // Detectar cambios en el contenido para forzar re-render con animación
  useEffect(() => {
    setKey(prev => prev + 1)
  }, [children])

  const variants = {
    hidden: {
      opacity: 0,
      y: -10,
      filter: 'blur(2px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)'
    }
  }

  const transition = {
    duration,
    ease: [0.4, 0.0, 0.2, 1] // Material Design ease-out-cubic
  }

  return (
    <AnimatedSpan
      key={key}
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={transition}
      display="inline"
      {...props}
    >
      {children}
    </AnimatedSpan>
  )
}

export default AnimatedText
