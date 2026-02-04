/**
 * ============================================================================
 * PÁGINA PRINCIPAL (HOME)
 * ============================================================================
 *
 * Página de inicio del portfolio que muestra:
 * - Presentación personal
 * - Habilidades técnicas
 * - Biografía/Timeline
 * - Links a redes sociales
 * - Información de contacto
 *
 * Los datos vienen de lib/constants.js para facilitar el mantenimiento.
 */

import NextLink from 'next/link'
import Image from 'next/image'
import {
  Link,
  Container,
  Heading,
  Box,
  SimpleGrid,
  Button,
  List,
  ListItem,
  useColorModeValue,
  Tag,
  TagLabel,
  Wrap,
  WrapItem
} from '@chakra-ui/react'
import { ChevronRightIcon, EmailIcon } from '@chakra-ui/icons'
import {
  IoLogoTwitter,
  IoLogoGithub,
  IoLogoInstagram,
  IoLogoLinkedin
} from 'react-icons/io5'

// Componentes locales
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import Section from '../components/section'
import AnimatedText from '../components/animated-text'

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTES CENTRALIZADAS
// ─────────────────────────────────────────────────────────────────────────────
// Todos los datos editables vienen de un solo archivo para fácil mantenimiento
import { SOCIAL_LINKS, SITE_CONFIG } from '../lib/constants'
import { useTranslation } from '../lib/translation-context'

// Imágenes
import thumbTelegram from '../public/images/links/image.png'

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTES AUXILIARES (para evitar repetición de código)
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Grupo de habilidades con título y tags
 * Evita repetir el mismo bloque 5 veces
 */
const SkillGroup = ({ title, skills, isLast = false }) => (
  <Box mb={isLast ? 0 : 4}>
    <Heading as="h4" fontSize="md" mb={2}>
      {title}
    </Heading>
    <Wrap spacing={2}>
      {skills.map(skill => (
        <WrapItem key={skill}>
          <Tag size="md" colorScheme="teal" variant="subtle">
            <TagLabel>{skill}</TagLabel>
          </Tag>
        </WrapItem>
      ))}
    </Wrap>
  </Box>
)

/**
 * Link a red social con icono
 * Evita repetir el mismo patrón 4 veces
 */
const SocialLink = ({ href, icon, label }) => (
  <ListItem>
    <Link href={href} target="_blank">
      <Button variant="ghost" colorScheme="teal" leftIcon={icon}>
        {label}
      </Button>
    </Link>
  </ListItem>
)

// ─────────────────────────────────────────────────────────────────────────────
// COMPONENTE PRINCIPAL
// ─────────────────────────────────────────────────────────────────────────────

const Home = () => {
  const { t } = useTranslation()

  // Colores según el tema (extraídos para evitar llamar hooks dentro del JSX)
  const boxBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')

  // Datos traducidos
  const skills = t('skills')
  const biography = t('biography')

  return (
    <Layout>
      <Container>
        {/* ─────────────────────────────────────────────────────────────────
            BANNER DE PRESENTACIÓN
            ───────────────────────────────────────────────────────────────── */}
        <Box
          borderRadius="lg"
          mb={6}
          p={3}
          textAlign="center"
          bg={boxBg}
          css={{ backdropFilter: 'blur(10px)' }}
        >
          <AnimatedText>{t('home.hero.greeting')}</AnimatedText>
        </Box>

        {/* ─────────────────────────────────────────────────────────────────
            HEADER CON NOMBRE Y FOTO
            ───────────────────────────────────────────────────────────────── */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              <AnimatedText>{t('home.hero.firstName')}</AnimatedText>
            </Heading>
            <Heading as="h2" variant="page-title">
              <AnimatedText>{t('home.hero.lastName')}</AnimatedText>
            </Heading>
            <p>
              <AnimatedText>{t('home.hero.role')}</AnimatedText>
            </p>
          </Box>

          {/* Foto de perfil */}
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            textAlign="center"
          >
            <Box
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              w="100px"
              h="100px"
              display="inline-block"
              borderRadius="full"
              overflow="hidden"
            >
              <Image
                src="/images/david.jpg"
                alt="Foto de perfil"
                width={100}
                height={100}
                priority // Carga prioritaria para LCP (Largest Contentful Paint)
              />
            </Box>
          </Box>
        </Box>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: TRABAJO
            ───────────────────────────────────────────────────────────────── */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.work.title')}</AnimatedText>
          </Heading>
          <Paragraph>
            <AnimatedText>{t('home.work.p1')}</AnimatedText>
          </Paragraph>
          <Paragraph>
            <AnimatedText>{t('home.work.p2')}</AnimatedText>
          </Paragraph>
          <Paragraph>
            <AnimatedText>{t('home.work.p3')}</AnimatedText>
          </Paragraph>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              <AnimatedText>{t('home.work.button')}</AnimatedText>
            </Button>
          </Box>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: HABILIDADES
            ─────────────────────────────────────────────────────────────────
            ✨ Usa SKILLS desde lib/constants.js
            Para editar las habilidades, modifica constants.js */}
        <Section delay={0.15}>
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.skills.title')}</AnimatedText>
          </Heading>

          <SkillGroup
            title={t('home.skills.languages')}
            skills={skills.languages}
          />
          <SkillGroup title={t('home.skills.mobile')} skills={skills.mobile} />
          <SkillGroup
            title={t('home.skills.backend')}
            skills={skills.backend}
          />
          <SkillGroup title={t('home.skills.tools')} skills={skills.tools} />
          <SkillGroup
            title={t('home.skills.soft')}
            skills={skills.soft}
            isLast
          />
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: BIOGRAFÍA
            ─────────────────────────────────────────────────────────────────
            ✨ Usa BIOGRAPHY desde lib/constants.js
            Para editar la biografía, modifica constants.js */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.biography.title')}</AnimatedText>
          </Heading>

          {/* Renderiza cada entrada de la biografía desde traducciones */}
          {biography.map((item, index) => (
            <BioSection key={index}>
              <BioYear>{item.year}</BioYear>
              <AnimatedText>{item.text}</AnimatedText>
            </BioSection>
          ))}

          {/* Año actual dinámico (siempre muestra el año en curso) */}
          <BioSection>
            <BioYear>{new Date().getFullYear()}</BioYear>
            <AnimatedText>{t('home.biography.currentYear')}</AnimatedText>
          </BioSection>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: INTERESES
            ───────────────────────────────────────────────────────────────── */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.interests.title')}</AnimatedText>
          </Heading>
          <Paragraph>
            <AnimatedText>{t('home.interests.description')}</AnimatedText>
          </Paragraph>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: EN LA WEB (REDES SOCIALES)
            ─────────────────────────────────────────────────────────────────
            ✨ Usa SOCIAL_LINKS desde lib/constants.js
            Para editar los links, modifica constants.js */}
        <Section delay={0.35}>
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.social.title')}</AnimatedText>
          </Heading>

          <List>
            <SocialLink
              href={SOCIAL_LINKS.linkedin}
              icon={<IoLogoLinkedin />}
              label="David Q. Salas"
            />
            <SocialLink
              href={SOCIAL_LINKS.github}
              icon={<IoLogoGithub />}
              label="@D4rckmker"
            />
            <SocialLink
              href={SOCIAL_LINKS.instagram}
              icon={<IoLogoInstagram />}
              label="@Darckmaker.ig"
            />
            <SocialLink
              href={SOCIAL_LINKS.twitter}
              icon={<IoLogoTwitter />}
              label="@DarckmakerX"
            />
          </List>

          {/* Link a Telegram con thumbnail */}
          <SimpleGrid columns={[1, 2, 2]} gap={6} mb={8} mt={3}>
            <GridItem
              href={SOCIAL_LINKS.telegram}
              title="Canal de Telegram"
              thumbnail={thumbTelegram}
            ></GridItem>
          </SimpleGrid>

          {/* ─────────────────────────────────────────────────────────────────
              AGRADECIMIENTOS
              ───────────────────────────────────────────────────────────────── */}
          <Heading as="h3" variant="section-title">
            <AnimatedText>{t('home.credits.title')}</AnimatedText>
          </Heading>
          <p>
            <AnimatedText>
              {t('home.credits.text')}{' '}
              <Link
                as={NextLink}
                href="https://www.craftz.dog/"
                passHref
                scroll={false}
              >
                {t('home.credits.authorName')}
              </Link>
            </AnimatedText>
          </p>

          {/* ─────────────────────────────────────────────────────────────────
              CONTACTO
              ─────────────────────────────────────────────────────────────────
              ✨ Usa SITE_CONFIG.email desde lib/constants.js */}
          <Heading as="h3" variant="section-title" mt={8}>
            <AnimatedText>{t('home.contact.title')}</AnimatedText>
          </Heading>
          <p>
            <AnimatedText>{t('home.contact.description')}</AnimatedText>
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href={`mailto:${SITE_CONFIG.email}`}
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              <AnimatedText>{t('home.contact.button')}</AnimatedText>
            </Button>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Home

// ─────────────────────────────────────────────────────────────────────────────
// SERVER SIDE PROPS
// ─────────────────────────────────────────────────────────────────────────────
// Necesario para que el tema (claro/oscuro) funcione correctamente con SSR
export { getServerSideProps } from '../components/chakra'
