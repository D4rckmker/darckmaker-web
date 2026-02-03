/**
 * ============================================================================
 * FOOTER - PIE DE PÁGINA
 * ============================================================================
 *
 * Componente simple que muestra el copyright en el pie de página.
 * Se renderiza dentro del Layout principal (main.js).
 */

import { Box } from '@chakra-ui/react'

const Footer = () => {
  // Obtiene el año actual dinámicamente
  const currentYear = new Date().getFullYear()

  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={8} pt={4}>
      &copy; {currentYear} David Q. Salas. Todos los derechos reservados.
    </Box>
  )
}

export default Footer
