/**
 * ============================================================================
 * PÁGINA 404 - NO ENCONTRADO
 * ============================================================================
 *
 * Página personalizada que se muestra cuando el usuario intenta
 * acceder a una URL que no existe.
 *
 * Next.js detecta automáticamente este archivo y lo usa para errores 404.
 */

import NextLink from 'next/link'
import {
  Box,
  Heading,
  Text,
  Container,
  Divider,
  Button
} from '@chakra-ui/react'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from '../components/animated-text'

const NotFound = () => {
  const { t } = useTranslation()

  return (
    <Container>
      {/* Título principal */}
      <Heading as="h1">
        <AnimatedText>{t('notFound.title')}</AnimatedText>
      </Heading>

      {/* Mensaje descriptivo */}
      <Text>
        <AnimatedText>{t('notFound.description')}</AnimatedText>
      </Text>

      <Divider my={6} />

      {/* Botón para regresar al inicio */}
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal" size="lg">
          <AnimatedText>{t('notFound.button')}</AnimatedText>
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
