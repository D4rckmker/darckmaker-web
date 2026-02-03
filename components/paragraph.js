/**
 * ============================================================================
 * PARAGRAPH - PÁRRAFO ESTILIZADO
 * ============================================================================
 *
 * Componente de párrafo con estilos tipográficos profesionales:
 * - text-align: justify → Alinea el texto a ambos lados
 * - text-indent → Sangría en la primera línea
 * - hyphens: auto → Guiones automáticos para mejor justificación
 *
 * USO:
 * ```jsx
 * import P from '../components/paragraph'
 *
 * <P>
 *   Tu texto largo aquí...
 * </P>
 * ```
 */

import styled from '@emotion/styled'

const Paragraph = styled.p`
  text-align: justify;
  text-indent: 1em;
  hyphens: auto;
  margin-bottom: 1em;
  line-height: 1.7;
`

export default Paragraph
