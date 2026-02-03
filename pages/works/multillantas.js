import {
  Container,
  Badge,
  List,
  ListItem,
  UnorderedList,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Multillantas VC">
    <Container>
      <Title>
        Multillantas VC <Badge>2023</Badge>
      </Title>

      <P>
        Aplicación web para gestión operativa, con autenticación y paneles de
        administración.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>
            Spring Boot (MVC), Thymeleaf, Spring Security, JPA/Hibernate, MySQL
          </span>
        </ListItem>

        <ListItem>
          <Meta>Repositorio</Meta>
          <span>Privado (proyecto colaborativo)</span>
        </ListItem>

        <ListItem>
          <Meta>Estado</Meta>
          <span>Proyecto académico / práctico</span>
        </ListItem>
      </List>

      <WorkImage
        src="/images/works/multillantas-vc/spring-bot.jpg"
        alt="Multillantas VC"
      />

      <Heading as="h4" fontSize={16} my={6}>
        Descripción general
      </Heading>

      <P>
        Multillantas VC es una aplicación web orientada a centralizar tareas de
        gestión y control en un entorno administrativo. Se trabajó una
        experiencia basada en paneles y formularios, priorizando orden,
        consistencia visual y flujos claros para el usuario.
      </P>

      <P>
        La solución integra autenticación y navegación por secciones, con una
        base preparada para escalar funcionalidades por módulos sin perder
        mantenibilidad.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Detalles técnicos
      </Heading>

      <UnorderedList ml={4} my={4}>
        <ListItem>
          Aplicación Spring Boot con enfoque MVC y renderizado del lado servidor
          (Thymeleaf).
        </ListItem>
        <ListItem>
          Persistencia con JPA/Hibernate sobre base de datos MySQL.
        </ListItem>
        <ListItem>
          Autenticación y control de acceso con Spring Security.
        </ListItem>
        <ListItem>
          Estructura por capas (controladores / servicios / repositorios) para
          mantener separación de responsabilidades.
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
