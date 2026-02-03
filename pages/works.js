import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbValhalla from '../public/images/works/valhalla-products/valhalla-products.png'
import thumbMultillantas from '../public/images/works/multillantas-vc/spring-bot.jpg'
import thumbTechtronic from '../public/images/works/techtronic/techtronic.png'

const Works = () => (
  <Layout title="Trabajos">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Trabajos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem
            id="valhalla-products"
            title="Valhalla Products"
            thumbnail={thumbValhalla}
          >
            Microservicio backend para gestión de productos en Valhalla Gaming
            Store.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="multillantas"
            title="Multillantas VC"
            thumbnail={thumbMultillantas}
          >
            Aplicación web para gestión operativa y con paneles de
            administración.
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem
            id="techtronic"
            title="Techtronic"
            thumbnail={thumbTechtronic}
          >
            Sistema web administrativo para la gestión y visualización de
            información
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'
