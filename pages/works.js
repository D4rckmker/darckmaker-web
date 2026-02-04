import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from '../components/animated-text'

import thumbValhalla from '../public/images/works/valhalla-products/valhalla-products.png'
import thumbMultillantas from '../public/images/works/multillantas-vc/spring-bot.jpg'
import thumbTechtronic from '../public/images/works/techtronic/techtronic.png'

const Works = () => {
  const { t } = useTranslation()
  const works = t('works.projects')

  return (
    <Layout title={t('works.title')}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          <AnimatedText>{t('works.title')}</AnimatedText>
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="valhalla-products"
              title={works.valhalla.title}
              thumbnail={thumbValhalla}
            >
              <AnimatedText>{works.valhalla.description}</AnimatedText>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="multillantas"
              title={works.multillantas.title}
              thumbnail={thumbMultillantas}
            >
              <AnimatedText>{works.multillantas.description}</AnimatedText>
            </WorkGridItem>
          </Section>

          <Section>
            <WorkGridItem
              id="techtronic"
              title={works.techtronic.title}
              thumbnail={thumbTechtronic}
            >
              <AnimatedText>{works.techtronic.description}</AnimatedText>
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
