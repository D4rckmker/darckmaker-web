/**
 * ============================================================================
 * WORK - COMPONENTES PARA PÁGINAS DE TRABAJOS
 * ============================================================================
 *
 * Componentes reutilizables para las páginas individuales de trabajos.
 *
 * COMPONENTES:
 * - Title: Breadcrumb + título del trabajo
 * - WorkImage: Imagen del proyecto con estilos
 * - Meta: Badge para metadatos (Stack, Plataforma, etc.)
 */

import NextLink from 'next/link'
import { Heading, Box, Image, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import { useTranslation } from '../lib/translation-context'

/**
 * Título con breadcrumb de navegación
 * Muestra: Works > Nombre del Proyecto
 *
 * @param {ReactNode} children - Título del trabajo (puede incluir Badge)
 */
export const Title = ({ children }) => {
  const { t } = useTranslation()

  return (
    <Box mb={4}>
      {/* Link de regreso a la lista de trabajos */}
      <Link as={NextLink} href="/works">
        {t('navbar.works')}
      </Link>

      {/* Separador */}
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>

      {/* Título del trabajo */}
      <Heading display="inline-block" as="h3" fontSize={20}>
        {children}
      </Heading>
    </Box>
  )
}

/**
 * Imagen del proyecto con bordes redondeados
 *
 * @param {string} src - URL de la imagen
 * @param {string} alt - Texto alternativo para accesibilidad
 */
export const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} loading="lazy" />
)

/**
 * Badge para mostrar metadatos del proyecto
 *
 * @param {ReactNode} children - Texto del badge (ej: "Stack", "Plataforma")
 *
 * USO:
 * ```jsx
 * <Meta>Plataforma</Meta>
 * <span>Web</span>
 * ```
 */
export const Meta = ({ children }) => (
  <Badge colorScheme="green" mr={2}>
    {children}
  </Badge>
)
