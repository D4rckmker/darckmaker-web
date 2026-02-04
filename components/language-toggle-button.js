/**
 * ============================================================================
 * LANGUAGE-TOGGLE-BUTTON.JS - BOTÓN DE CAMBIO DE IDIOMA
 * ============================================================================
 *
 * Componente que permite al usuario cambiar entre español e inglés.
 * Usa AnimatedText para transiciones suaves del texto.
 *
 * USO:
 * <LanguageToggleButton />
 */

import { chakra, shouldForwardProp, useColorModeValue } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from './animated-text'

// Styled motion button
const StyledButton = chakra(motion.button, {
  shouldForwardProp: prop => isValidMotionProp(prop) || shouldForwardProp(prop)
})

const LanguageToggleButton = ({ ...props }) => {
  const { t, toggleLocale } = useTranslation()
  const hoverBg = useColorModeValue('gray.200', 'whiteAlpha.200')
  const activeBg = useColorModeValue('grassTeal', 'grassTeal')

  return (
    <StyledButton
      onClick={toggleLocale}
      bg="transparent"
      color={useColorModeValue('gray.800', 'whiteAlpha.900')}
      border="1px solid"
      borderColor={useColorModeValue('gray.300', 'whiteAlpha.300')}
      borderRadius="md"
      px={3}
      py={2}
      fontSize="sm"
      fontWeight="medium"
      aria-label={t('language.label')}
      _hover={{
        bg: hoverBg
      }}
      whileHover={{
        scale: 1.05
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      title={t('language.label')}
      {...props}
    >
      <AnimatedText duration={0.2}>{t('language.toggle')}</AnimatedText>
    </StyledButton>
  )
}

export default LanguageToggleButton
