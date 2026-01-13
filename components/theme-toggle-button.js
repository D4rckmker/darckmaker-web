/**
 * ============================================================================
 * THEME TOGGLE BUTTON - BOTÓN PARA CAMBIAR TEMA
 * ============================================================================
 * 
 * Botón animado que permite cambiar entre tema claro y oscuro.
 * 
 * Características:
 * - Animación de transición al cambiar (fade + slide)
 * - Icono de luna (modo claro → oscuro) o sol (modo oscuro → claro)
 * - Colores del botón adaptados al tema actual
 */

import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  // Hook de Chakra para cambiar el tema
  const { toggleColorMode } = useColorMode()
  
  // Valores que dependen del tema actual
  const colorMode = useColorModeValue('light', 'dark')
  const buttonColorScheme = useColorModeValue('purple', 'orange')
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  return (
    <AnimatePresence mode="wait" initial={false}>
      {/* El key basado en colorMode fuerza la animación al cambiar */}
      <motion.div
        style={{ display: 'inline-block' }}
        key={colorMode}
        
        // Animación de entrada/salida
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconButton
          aria-label="Cambiar tema de color"
          colorScheme={buttonColorScheme}
          icon={icon}
          onClick={toggleColorMode}
          variant="solid"
          size="md"
        />
      </motion.div>
    </AnimatePresence>
  )
}

export default ThemeToggleButton
