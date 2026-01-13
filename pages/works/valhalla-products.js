import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="Valhalla Products">
    <Container>
      {/* 1) Título + año */}
      <Title>
        Valhalla Products <Badge>2023</Badge>
      </Title>

      {/* 2) Subtítulo corto (para la lista de trabajos) */}
      <P>
        Microservicio backend para gestión de productos en Valhalla Gaming Store.
      </P>

      {/* 3) Metadatos */}
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Backend · API REST</span>
        </ListItem>

        <ListItem>
          <Meta>Stack</Meta>
          <span>Spring Boot, JPA/Hibernate, MySQL</span>
        </ListItem>

        <ListItem>
          <Meta>Repositorio</Meta>
          <Link
            href="https://github.com/D4rckmker/Valhallags-Products"
            target="_blank"
          >
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Documentación</Meta>
          <Link
            href="https://deepwiki.com/D4rckmker/Valhallags-Products"
            target="_blank"
          >
            DeepWiki <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>

      {/* 4) Banner */}
      <WorkImage
        src="/images/works/valhalla-products/valhalla-products.png"
        alt="Valhalla Products banner"
      />

      {/* 5) Contenido principal */}
      <Heading as="h4" fontSize={16} my={6}>
        Descripción general
      </Heading>

      <P>
        Valhalla Products es un microservicio desarrollado como parte de la
        arquitectura backend de Valhalla Gaming Store. Su responsabilidad principal
        es la gestión del catálogo de productos, sirviendo como fuente centralizada
        de datos para otras partes del sistema.
      </P>

      <P>
        El proyecto fue diseñado para integrarse dentro de un ecosistema de
        microservicios, manteniendo independencia, claridad estructural y facilidad
        de mantenimiento.
      </P>

      <Heading as="h4" fontSize={16} my={6}>
        Aspectos técnicos
      </Heading>

      <UnorderedList ml={4} my={4}>
        <ListItem>
          Microservicio desarrollado con Spring Boot siguiendo una arquitectura por
          capas.
        </ListItem>
        <ListItem>
          Exposición de endpoints REST para operaciones CRUD sobre productos.
        </ListItem>
        <ListItem>
          Persistencia de datos mediante JPA/Hibernate con base de datos relacional.
        </ListItem>
        <ListItem>
          Manejo de validaciones, excepciones y estructuras DTO para control de datos.
        </ListItem>
      </UnorderedList>
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'