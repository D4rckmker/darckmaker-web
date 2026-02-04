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
import { useTranslation } from '../../lib/translation-context'
import AnimatedText from '../../components/animated-text'

const Work = () => {
  const { t } = useTranslation()
  const work = t('works.projects.valhalla')
  const labels = t('works.metaLabels')

  return (
    <Layout title={work.title}>
      <Container>
        {/* 1) Título + año */}
        <Title>
          <AnimatedText>{work.title}</AnimatedText>{' '}
          <Badge>{work.meta.year}</Badge>
        </Title>

        {/* 2) Subtítulo corto (para la lista de trabajos) */}
        <P>
          <AnimatedText>{work.description}</AnimatedText>
        </P>

        {/* 3) Metadatos */}
        <List ml={4} my={4}>
          <ListItem>
            <Meta>{labels.platform}</Meta>
            <span>{work.meta.platform}</span>
          </ListItem>

          <ListItem>
            <Meta>{labels.stack}</Meta>
            <span>{work.meta.stack}</span>
          </ListItem>

          <ListItem>
            <Meta>{work.meta.repoLabel}</Meta>
            <Link
              href="https://github.com/D4rckmker/Valhallags-Products"
              target="_blank"
            >
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>{work.meta.docsLabel}</Meta>
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
          <AnimatedText>{work.fullDescription.overviewTitle}</AnimatedText>
        </Heading>

        {work.fullDescription.intro.map((paragraph, index) => (
          <P key={index}>
            <AnimatedText>{paragraph}</AnimatedText>
          </P>
        ))}

        <Heading as="h4" fontSize={16} my={6}>
          <AnimatedText>{work.fullDescription.technicalTitle}</AnimatedText>
        </Heading>

        <UnorderedList ml={4} my={4}>
          {work.technicalAspects.map((item, index) => (
            <ListItem key={index}>
              <AnimatedText>{item}</AnimatedText>
            </ListItem>
          ))}
        </UnorderedList>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../components/chakra'
