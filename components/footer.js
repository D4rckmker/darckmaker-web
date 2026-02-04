/**
 * ============================================================================
 * FOOTER - PIE DE PÁGINA
 * ============================================================================
 *
 * Componente simple que muestra el copyright en el pie de página.
 * Se renderiza dentro del Layout principal (main.js).
 */

import { Box } from '@chakra-ui/react'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from './animated-text'

const Footer = () => {
  const { t } = useTranslation()
  // Obtiene el año actual dinámicamente
  const currentYear = new Date().getFullYear()

  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={8} pt={4}>
      <AnimatedText>
        {t('footer.copyright').replace('{year}', currentYear)}
      </AnimatedText>
    </Box>
  )
}

export default Footer
