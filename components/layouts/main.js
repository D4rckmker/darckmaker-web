/**
 * ============================================================================
 * LAYOUT PRINCIPAL (MAIN)
 * ============================================================================
 *
 * Layout raíz de toda la aplicación. Se monta UNA SOLA VEZ en _app.js.
 * Los meta tags vienen de lib/constants.js para fácil mantenimiento.
 */

import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'

// ✨ Constantes centralizadas para meta tags
import { SITE_CONFIG } from '../../lib/constants'

// Lazy loading del PetBox (no es crítico para el contenido inicial)
const PetBox = dynamic(() => import('../pets/PetBox'), { ssr: false })

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      {/* META TAGS GLOBALES - Datos desde lib/constants.js */}
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={SITE_CONFIG.description} />
        <meta name="author" content={SITE_CONFIG.author} />

        {/* Favicons */}
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

        {/* Twitter Cards */}
        <meta name="twitter:title" content={SITE_CONFIG.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={SITE_CONFIG.handle} />
        <meta name="twitter:creator" content={SITE_CONFIG.handle} />
        <meta name="twitter:image" content={SITE_CONFIG.ogImage} />

        {/* Open Graph */}
        <meta property="og:site_name" content={SITE_CONFIG.name} />
        <meta property="og:title" content={SITE_CONFIG.name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={SITE_CONFIG.ogImage} />

        <title>{SITE_CONFIG.name}</title>
      </Head>

      {/* Navbar */}
      <NavBar path={router.asPath} />

      {/* Contenedor principal */}
      <Container maxW="container.md" pt={14}>
        <PetBox height={120} maxCats={4} />
        {children}
        <Footer />
      </Container>
    </Box>
  )
}

export default Main
