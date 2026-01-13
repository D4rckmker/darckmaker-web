/**
 * ============================================================================
 * SECTION - SECCIÓN CON ANIMACIÓN DE ENTRADA
 * ============================================================================
 * 
 * Componente wrapper que agrega animación de "fade in + slide up" a su contenido.
 * Útil para crear efectos de carga escalonada en listas.
 * 
 * USO:
 * ```jsx
 * <Section delay={0.1}>
 *   <Contenido />
 * </Section>
 * 
 * // En listas, puedes escalonar los delays:
 * {items.map((item, index) => (
 *   <Section key={item.id} delay={0.1 + index * 0.05}>
 *     <Item {...item} />
 *   </Section>
 * ))}
 * ```
 * 
 * El delay crea el efecto de que los elementos aparecen uno tras otro.
 */

import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

// ─────────────────────────────────────────────────────────────────────────────
// STYLED DIV CON MOTION
// ─────────────────────────────────────────────────────────────────────────────
// Combina un motion.div (animación) con chakra() (estilos de Chakra UI)
// 
// shouldForwardProp evita que props de Chakra se pasen al DOM
// pero permite que 'transition' de Framer Motion sí se pase

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: prop => {
    // Permite la prop 'transition' de Framer Motion
    return shouldForwardProp(prop) || prop === 'transition'
  }
})

/**
 * Componente Section con animación
 * 
 * @param {ReactNode} children - Contenido a animar
 * @param {number} delay - Delay antes de iniciar la animación (en segundos)
 */
const Section = ({ children, delay = 0 }) => (
  <StyledDiv
    // Estado inicial: invisible y ligeramente abajo
    initial={{ y: 10, opacity: 0 }}
    
    // Estado final: visible en su posición
    animate={{ y: 0, opacity: 1 }}
    
    // Configuración de la transición
    transition={{ duration: 0.8, delay }}
    
    // Margen inferior para separar secciones
    mb={6}
  >
    {children}
  </StyledDiv>
)

export default Section
