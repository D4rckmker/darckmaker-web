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
  const work = t('works.projects.techtronic')
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
            <Meta>{labels.technologies}</Meta>
            <span>{work.meta.techStack}</span>
          </ListItem>

          <ListItem>
            <Meta>{work.meta.repoLabel}</Meta>
            <Link
              href="https://github.com/D4rckmker/Techtronic"
              target="_blank"
            >
              GitHub <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>

          <ListItem>
            <Meta>{work.meta.docsLabel}</Meta>
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
        <Heading as="h4" fontSize={16} my={6}>
          <AnimatedText>{work.fullDescription.galleryTitle}</AnimatedText>
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
}

export default Work
export { getServerSideProps } from '../../components/chakra'
