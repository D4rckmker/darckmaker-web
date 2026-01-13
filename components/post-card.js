/**
 * ============================================================================
 * POST CARD - TARJETA DE VISTA PREVIA DE POST
 * ============================================================================
 * 
 * Componente que muestra una vista previa de un post del blog.
 * Usado en la página /posts para listar todos los posts.
 * 
 * Características:
 * - Imagen hero con aspect ratio 16:9
 * - Título, descripción y fecha
 * - Tags del post
 * - Efecto hover con elevación
 * - Efecto de vidrio esmerilado (glass)
 */

import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Heading,
  Text,
  Tag,
  HStack,
  LinkBox,
  LinkOverlay,
  AspectRatio,
  useColorModeValue
} from '@chakra-ui/react'

/**
 * Componente PostCard
 * 
 * @param {string} slug - Identificador único del post (para la URL)
 * @param {string} title - Título del post
 * @param {string} description - Descripción corta
 * @param {string} heroImage - URL de la imagen de portada
 * @param {string[]} tags - Array de etiquetas
 * @param {string} meta - Información adicional (fecha + tiempo de lectura)
 */
export default function PostCard({ slug, title, description, heroImage, tags, meta }) {
  // ─────────────────────────────────────────────────────────────────────────
  // COLORES SEGÚN EL TEMA
  // ─────────────────────────────────────────────────────────────────────────
  const cardBg = useColorModeValue('whiteAlpha.700', 'whiteAlpha.200')
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const borderHover = useColorModeValue('blackAlpha.300', 'whiteAlpha.400')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.800')

  return (
    <LinkBox
      as="article"
      borderWidth="1px"
      borderColor={border}
      bg={cardBg}
      borderRadius="2xl"
      overflow="hidden"
      // Transición suave para el efecto hover
      transition="all 0.2s ease"
      _hover={{ 
        transform: 'translateY(-2px)', 
        borderColor: borderHover,
        shadow: 'lg'
      }}
      // Efecto de vidrio esmerilado
      css={{ backdropFilter: 'blur(10px)' }}
    >
      {/* ─────────────────────────────────────────────────────────────────────
          IMAGEN DE PORTADA
          ───────────────────────────────────────────────────────────────────── */}
      <AspectRatio ratio={16 / 9}>
        <Box position="relative">
          <Image
            src={heroImage}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </Box>
      </AspectRatio>

      {/* ─────────────────────────────────────────────────────────────────────
          CONTENIDO DE LA TARJETA
          ───────────────────────────────────────────────────────────────────── */}
      <Box p={5}>
        {/* Fecha y tiempo de lectura */}
        {meta && (
          <HStack spacing={2} mb={2} color={muted} fontSize="sm">
            <Text>{meta}</Text>
          </HStack>
        )}

        {/* Título con link al post */}
        <Heading as="h3" fontSize="2xl" lineHeight="short">
          <LinkOverlay as={NextLink} href={`/posts/${slug}`} scroll={false}>
            {title}
          </LinkOverlay>
        </Heading>

        {/* Descripción (limitada a 2 líneas) */}
        {description && (
          <Text mt={2} color={muted} noOfLines={2}>
            {description}
          </Text>
        )}

        {/* Tags (máximo 4) */}
        {Array.isArray(tags) && tags.length > 0 && (
          <HStack mt={4} spacing={2} flexWrap="wrap">
            {tags.slice(0, 4).map(t => (
              <Tag key={t} size="sm" variant="subtle" colorScheme="teal">
                {t}
              </Tag>
            ))}
          </HStack>
        )}
      </Box>
    </LinkBox>
  )
}