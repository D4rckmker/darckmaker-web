/**
 * ============================================================================
 * NAVBAR - BARRA DE NAVEGACIÓN
 * ============================================================================
 * 
 * Barra de navegación fija en la parte superior de la página.
 * Los items de navegación vienen de lib/constants.js
 */

import { forwardRef, memo } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'

// ✨ Constantes centralizadas
import { NAV_ITEMS, SOCIAL_LINKS } from '../lib/constants'

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE LINK ITEM (para navegación desktop)
// ─────────────────────────────────────────────────────────────────────────────

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
  
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      p={2}
      bg={active ? 'grassTeal' : undefined}
      color={active ? '#202023' : inactiveColor}
      borderRadius="md"
      target={target}
      {...props}
    >
      {children}
    </Link>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE MENU LINK (para navegación mobile)
// ─────────────────────────────────────────────────────────────────────────────

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))
MenuLink.displayName = 'MenuLink'

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE NAVBAR PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────

const Navbar = ({ path, ...props }) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={1000}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        {/* LOGO */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        {/* NAVEGACIÓN DESKTOP */}
        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
          spacing={2}
        >
          {/* ✨ Links dinámicos desde constants.js */}
          {NAV_ITEMS.map(item => (
            <LinkItem key={item.href} href={item.href} path={path}>
              {item.label}
            </LinkItem>
          ))}
          
          {/* Link externo al código fuente */}
          <LinkItem
            target="_blank"
            href={SOCIAL_LINKS.sourceCode}
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Código Fuente
          </LinkItem>
        </Stack>

        {/* SECCIÓN DERECHA */}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          {/* MENÚ MÓVIL */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Abrir menú de navegación"
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  Sobre mí
                </MenuItem>
                
                {/* ✨ Items dinámicos desde constants.js */}
                {NAV_ITEMS.map(item => (
                  <MenuItem key={item.href} as={MenuLink} href={item.href}>
                    {item.label}
                  </MenuItem>
                ))}
                
                <MenuItem as={Link} href={SOCIAL_LINKS.sourceCode} target="_blank">
                  Código Fuente
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default memo(Navbar)