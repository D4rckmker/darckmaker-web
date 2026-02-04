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
import { useTranslation } from '../../lib/translation-context'
import AnimatedText from '../../components/animated-text'

const Work = () => {
  const { t } = useTranslation()
  const work = t('works.projects.multillantas')
  const labels = t('works.metaLabels')

  return (
    <Layout title={work.title}>
      <Container>
        <Title>
          <AnimatedText>{work.title}</AnimatedText>{' '}
          <Badge>{work.meta.year}</Badge>
        </Title>

        <P>
          <AnimatedText>{work.description}</AnimatedText>
        </P>

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
            <Meta>{labels.repository}</Meta>
            <span>Privado (proyecto colaborativo)</span>
          </ListItem>

          <ListItem>
            <Meta>{work.meta.docsLabel}</Meta>
            <span>Proyecto académico / práctico</span>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/multillantas-vc/spring-bot.jpg"
          alt="Multillantas VC"
        />

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
