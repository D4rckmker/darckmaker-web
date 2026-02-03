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

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTES CENTRALIZADAS
// ─────────────────────────────────────────────────────────────────────────────
// Todos los datos editables vienen de un solo archivo para fácil mantenimiento
import { SKILLS, BIOGRAPHY, SOCIAL_LINKS, SITE_CONFIG } from '../lib/constants'

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
  // Colores según el tema (extraídos para evitar llamar hooks dentro del JSX)
  const boxBg = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')

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
          Hola, soy un desarrollador basado en Perú.
        </Box>

        {/* ─────────────────────────────────────────────────────────────────
            HEADER CON NOMBRE Y FOTO
            ───────────────────────────────────────────────────────────────── */}
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Edson Ever David
            </Heading>
            <Heading as="h2" variant="page-title">
              Quispe Salas
            </Heading>
            <p>iOS Developer Junior · Software Developer</p>
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
            Trabajo
          </Heading>
          <Paragraph>
            Soy un Desarrollador de Software Junior con enfoque en desarrollo
            iOS, egresado de Computación e Informática, con experiencia práctica
            en la creación de aplicaciones móviles y soluciones de software
            orientadas a necesidades reales de negocio.
          </Paragraph>
          <Paragraph>
            He desarrollado aplicaciones iOS utilizando Swift y he trabajado con
            APIs REST y tecnologías backend. También tengo experiencia con
            herramientas empresariales como SAP y Microsoft Excel para la
            gestión y análisis de información, además de conocimientos en diseño
            de interfaces y desarrollo centrado en el usuario.
          </Paragraph>
          <Paragraph>
            En proyectos y entornos de trabajo, he fortalecido mi capacidad para
            trabajar en equipo, analizar requerimientos y resolver problemas
            técnicos de forma eficiente, manteniendo un enfoque en soluciones
            claras, mantenibles y orientadas a resultados.
          </Paragraph>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href="/works"
              scroll={false}
              rightIcon={<ChevronRightIcon />}
              colorScheme="teal"
            >
              Ver portafolio
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
            Habilidades
          </Heading>

          <SkillGroup title="Lenguajes" skills={SKILLS.lenguajes} />
          <SkillGroup title="Desarrollo móvil" skills={SKILLS.movil} />
          <SkillGroup title="Backend / Web" skills={SKILLS.backend} />
          <SkillGroup title="Herramientas" skills={SKILLS.herramientas} />
          <SkillGroup
            title="Habilidades interpersonales"
            skills={SKILLS.blandas}
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
            Biografía
          </Heading>

          {/* Renderiza cada entrada de la biografía desde constants.js */}
          {BIOGRAPHY.map((item, index) => (
            <BioSection key={index}>
              <BioYear>{item.year}</BioYear>
              {item.text}
            </BioSection>
          ))}

          {/* Año actual dinámico (siempre muestra el año en curso) */}
          <BioSection>
            <BioYear>{new Date().getFullYear()}</BioYear>
            Trabajo de Freelance y proyectos personales.
          </BioSection>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: INTERESES
            ───────────────────────────────────────────────────────────────── */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Intereses
          </Heading>
          <Paragraph>
            Desarrollo iOS, construcción de productos, buenas prácticas de
            código, diseño de interfaces, aprendizaje continuo y tecnología.
          </Paragraph>
        </Section>

        {/* ─────────────────────────────────────────────────────────────────
            SECCIÓN: EN LA WEB (REDES SOCIALES)
            ─────────────────────────────────────────────────────────────────
            ✨ Usa SOCIAL_LINKS desde lib/constants.js
            Para editar los links, modifica constants.js */}
        <Section delay={0.35}>
          <Heading as="h3" variant="section-title">
            En la web
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
            Agradecimientos
          </Heading>
          <p>
            Este sitio web se basa en el trabajo de{' '}
            <Link
              as={NextLink}
              href="https://www.craftz.dog/"
              passHref
              scroll={false}
            >
              Takuya Matsuyama
            </Link>
          </p>

          {/* ─────────────────────────────────────────────────────────────────
              CONTACTO
              ─────────────────────────────────────────────────────────────────
              ✨ Usa SITE_CONFIG.email desde lib/constants.js */}
          <Heading as="h3" variant="section-title" mt={8}>
            Contacto
          </Heading>
          <p>
            Si deseas contactarme para oportunidades laborales o proyectos,
            puedes escribirme por correo.
          </p>

          <Box align="center" my={4}>
            <Button
              as={NextLink}
              href={`mailto:${SITE_CONFIG.email}`}
              scroll={false}
              leftIcon={<EmailIcon />}
              colorScheme="teal"
            >
              Enviar correo
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
