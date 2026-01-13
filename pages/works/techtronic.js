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
  <Layout title="Techtronic">
    <Container>
      <Title>
        Techtronic <Badge>2023</Badge>
      </Title>
      <P>
        Sistema web administrativo desarrollado con .NET para la gestión y
        visualización de información mediante una interfaz clara y estructurada.
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Plataforma</Meta>
          <span>Web</span>
        </ListItem>

        <ListItem>
          <Meta>Tecnologías</Meta>
          <span>.NET (MVC), Base de datos, Bootstrap</span>
        </ListItem>

        <ListItem>
          <Meta>Repositorio</Meta>
          <Link
            href="https://github.com/D4rckmker/Techtronic"
            target="_blank"
          >
            GitHub <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>

        <ListItem>
          <Meta>Documentación</Meta>
          <Link
            href="https://deepwiki.com/D4rckmker/Techtronic"
            target="_blank"
          >
            DeepWiki <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <WorkImage
        src="/images/works/techtronic/techtronic.png"
        alt="Techtronic banner"
      />
      <Heading as="h4" fontSize={16} my={6}>
        Descripción general
      </Heading>

      <P>
        Techtronic es un sistema web orientado a la gestión y organización de
        información, pensado para escenarios donde se requiere una interfaz clara,
        estructurada y fácil de usar. El proyecto fue desarrollado como una solución
        administrativa, priorizando la simplicidad visual y la correcta separación
        entre lógica y presentación.
      </P>

      <P>
        El enfoque principal estuvo en construir una aplicación comprensible para
        usuarios finales, con pantallas limpias, navegación directa y componentes
        familiares, evitando complejidad innecesaria y asegurando una experiencia
        consistente en distintos dispositivos.
      </P>
      <Heading as="h4" fontSize={16} my={6}>
        Detalles técnicos
      </Heading>
      <UnorderedList ml={4} my={4}>
        <ListItem>
          Uso de una plantilla base generada en Visual Studio con arquitectura
          MVC (.NET).
        </ListItem>
        <ListItem>
          Implementación de lógica del lado servidor y conexión con base de datos
          para persistencia de información.
        </ListItem>
        <ListItem>
          Construcción de vistas utilizando Bootstrap para mantener consistencia
          visual y diseño responsivo.
        </ListItem>
        <ListItem>
          Separación clara entre controladores, vistas y modelos para facilitar
          mantenimiento y escalabilidad.
        </ListItem>
      </UnorderedList>
      <Heading as="h4" fontSize={16} my={6}>
        Capturas del proyecto
      </Heading>

      <WorkImage
        src="/images/works/techtronic/techtronic_01.png"
        alt="Techtronic vista principal"
      />

      <WorkImage
        src="/images/works/techtronic/techtronic_02.png"
        alt="Techtronic vista administrativa"
      />

    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'