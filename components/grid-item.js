/**
 * ============================================================================
 * GRID ITEMS - COMPONENTES DE TARJETA PARA GRIDS
 * ============================================================================
 *
 * Componentes reutilizables para mostrar items en un grid.
 * Usados para la página de trabajos y links externos.
 *
 * COMPONENTES:
 * - GridItem: Link externo con thumbnail (ej: canal de Telegram)
 * - WorkGridItem: Link interno a página de trabajo
 * - GridItemStyle: Estilos globales para thumbnails
 */

import NextLink from 'next/link'
import Image from 'next/image'
import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTES
// ─────────────────────────────────────────────────────────────────────────────

// Ratio de aspecto para las miniaturas (aproximadamente 16:9)
const THUMB_RATIO = 1000 / 571

// ─────────────────────────────────────────────────────────────────────────────
// GRID ITEM (LINK EXTERNO)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Tarjeta con link externo (abre en nueva pestaña)
 * Usado para enlaces como canal de Telegram, etc.
 *
 * @param {string} href - URL del enlace
 * @param {string} title - Título del item
 * @param {StaticImageData} thumbnail - Imagen importada con next/image
 * @param {ReactNode} children - Descripción debajo del título
 */
export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      {/* Contenedor de imagen con aspect ratio fijo */}
      <Box
        position="relative"
        w="100%"
        aspectRatio={THUMB_RATIO}
        borderRadius="12px"
        overflow="hidden"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          placeholder="blur" // Muestra versión borrosa mientras carga
          loading="lazy" // Carga diferida
        />
      </Box>

      {/* Título con link */}
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontWeight="medium">
          {title}
        </Text>
      </LinkOverlay>

      {/* Descripción */}
      <Text fontSize={14} opacity={0.8}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

// ─────────────────────────────────────────────────────────────────────────────
// WORK GRID ITEM (LINK INTERNO)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Tarjeta de trabajo que navega a una página interna
 * Usado en la página /works
 *
 * @param {string} id - ID del trabajo (para construir la URL)
 * @param {string} category - Categoría (default: 'works')
 * @param {string} title - Título del trabajo
 * @param {StaticImageData} thumbnail - Imagen del proyecto
 * @param {ReactNode} children - Descripción breve
 */
export const WorkGridItem = ({
  children,
  category = 'works',
  id,
  title,
  thumbnail
}) => (
  <Box w="100%" textAlign="center">
    {/* LinkBox con NextLink para navegación SPA */}
    <LinkBox
      as={NextLink}
      href={`/${category}/${id}`}
      scroll={false} // Evita scroll automático
      cursor="pointer"
    >
      {/* Contenedor de imagen */}
      <Box
        position="relative"
        w="100%"
        aspectRatio={THUMB_RATIO}
        borderRadius="12px"
        overflow="hidden"
      >
        <Image
          src={thumbnail}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ objectFit: 'cover' }}
          placeholder="blur"
        />
      </Box>

      {/* 
        LinkOverlay sin href porque LinkBox ya maneja la navegación.
        Esto evita tener dos elementos clicables anidados.
      */}
      <LinkOverlay as="div">
        <Text mt={2} fontSize={20} fontWeight="medium">
          {title}
        </Text>
      </LinkOverlay>

      {/* Descripción */}
      <Text fontSize={14} opacity={0.8}>
        {children}
      </Text>
    </LinkBox>
  </Box>
)

// ─────────────────────────────────────────────────────────────────────────────
// ESTILOS GLOBALES PARA THUMBNAILS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Inyecta estilos CSS globales para las clases de thumbnail.
 * Se incluye en el ArticleLayout para que esté disponible en todas las páginas.
 */
export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
