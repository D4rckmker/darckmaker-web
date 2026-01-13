/**
 * ============================================================================
 * BIO - COMPONENTES DE BIOGRAFÍA/TIMELINE
 * ============================================================================
 * 
 * Componentes estilizados para mostrar una línea de tiempo en la biografía.
 * 
 * USO:
 * ```jsx
 * <BioSection>
 *   <BioYear>2024</BioYear>
 *   Descripción del evento...
 * </BioSection>
 * ```
 */

import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'

/**
 * Contenedor de una entrada de la biografía
 * El text-indent negativo crea el efecto de "hanging indent"
 * donde el año sobresale a la izquierda del texto
 */
export const BioSection = styled(Box)`
  padding-left: 3.4em;
  text-indent: -3.4em;
  margin-bottom: 0.5em;
`

/**
 * El año en negrita al inicio de cada entrada
 */
export const BioYear = styled.span`
  font-weight: bold;
  margin-right: 1em;
`
