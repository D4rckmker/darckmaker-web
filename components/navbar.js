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
import { SOCIAL_LINKS } from '../lib/constants'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from './animated-text'
import LanguageToggleButton from './language-toggle-button'

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
  const { t } = useTranslation()

  // Items de navegación dinámicos
  const navItems = [
    { href: '/works', label: t('navbar.works') },
    { href: '/posts', label: t('navbar.posts') }
  ]
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
          {/* ✨ Links dinámicos con traducciones */}
          {navItems.map(item => (
            <LinkItem key={item.href} href={item.href} path={path}>
              <AnimatedText>{item.label}</AnimatedText>
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
            <AnimatedText>{t('navbar.source')}</AnimatedText>
          </LinkItem>
        </Stack>

        {/* SECCIÓN DERECHA */}
        <Box flex={1} align="right">
          <ThemeToggleButton />
          <LanguageToggleButton ml={2} />

          {/* MENÚ MÓVIL */}
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label={t('navbar.menuAriaLabel')}
              />
              <MenuList>
                <MenuItem as={MenuLink} href="/">
                  <AnimatedText>{t('navbar.about')}</AnimatedText>
                </MenuItem>

                {/* ✨ Items dinámicos con traducciones */}
                {navItems.map(item => (
                  <MenuItem key={item.href} as={MenuLink} href={item.href}>
                    <AnimatedText>{item.label}</AnimatedText>
                  </MenuItem>
                ))}

                <MenuItem
                  as={Link}
                  href={SOCIAL_LINKS.sourceCode}
                  target="_blank"
                >
                  <IoLogoGithub style={{ marginRight: 8 }} />
                  <AnimatedText>{t('navbar.source')}</AnimatedText>
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
