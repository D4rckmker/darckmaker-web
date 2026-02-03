/**
 * ============================================================================
 * LOGO - LOGOTIPO DE LA MARCA
 * ============================================================================
 *
 * Componente del logo que aparece en el Navbar.
 * Incluye un icono de huella y el nombre "Darckmaker".
 *
 * El icono tiene una animación de rotación al hacer hover.
 */

import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import FootprintIcon from './icons/footprint'
import styled from '@emotion/styled'

/**
 * Contenedor estilizado del logo
 * Incluye la animación de rotación del icono SVG en hover
 */
const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  /* Animación del icono al hacer hover */
  > svg {
    transition: transform 200ms ease;
  }

  &:hover > svg {
    transform: rotate(20deg);
  }
`

/**
 * Componente Logo
 * Envuelve el contenido en un Link para navegar al inicio
 */
const Logo = () => {
  // Color del texto según el tema
  const textColor = useColorModeValue('gray.800', 'whiteAlpha.900')

  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        {/* Icono de huella (SVG personalizado) */}
        <FootprintIcon />

        {/* Nombre de la marca */}
        <Text
          color={textColor}
          fontFamily="'M PLUS Rounded 1c', sans-serif"
          fontWeight="bold"
          ml={3}
        >
          Darckmaker
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
