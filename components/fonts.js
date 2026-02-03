/**
 * ============================================================================
 * FONTS - CARGA DE FUENTES PERSONALIZADAS
 * ============================================================================
 *
 * Carga la fuente "M PLUS Rounded 1c" de Google Fonts.
 * Esta fuente se usa principalmente para los headings (títulos).
 *
 * NOTA: Una alternativa más moderna sería usar next/font, pero
 * esto funciona bien y es más simple para este caso de uso.
 *
 * La fuente se carga con dos pesos:
 * - 300 (light) - Para texto secundario si se necesita
 * - 700 (bold) - Para los títulos principales
 */

const Fonts = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');
  `}</style>
)

export default Fonts
