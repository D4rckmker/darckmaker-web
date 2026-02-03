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

const NotFound = () => {
  return (
    <Container>
      {/* Título principal */}
      <Heading as="h1">No encontrado</Heading>

      {/* Mensaje descriptivo */}
      <Text>La página que estás buscando no fue encontrada.</Text>

      <Divider my={6} />

      {/* Botón para regresar al inicio */}
      <Box my={6} align="center">
        <Button as={NextLink} href="/" colorScheme="teal" size="lg">
          Regresar a la página principal
        </Button>
      </Box>
    </Container>
  )
}

export default NotFound
