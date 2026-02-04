import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Section from '../../components/section'
import PostCard from '../../components/post-card'
import { getAllPosts } from '../../lib/posts'
import Layout from '../../components/layouts/article'
import { useTranslation } from '../../lib/translation-context'
import AnimatedText from '../../components/animated-text'

const Posts = ({ posts }) => {
  const { t, locale } = useTranslation()
  const postsTitle = t('posts.title')

  return (
    <Layout title={t('posts.title')}>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          <AnimatedText>{t('posts.title')}</AnimatedText>
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {posts.map((p, idx) => {
            // Seleccionar contenido según idioma actual
            const currentPost = locale === 'en' ? p.en : p.es

            return (
              <Section key={p.slug} delay={0.08 + idx * 0.03}>
                <PostCard
                  slug={p.slug}
                  title={currentPost.frontmatter.title}
                  description={currentPost.frontmatter.description}
                  heroImage={currentPost.frontmatter.heroImage}
                  tags={currentPost.frontmatter.tags}
                  meta={`${currentPost.frontmatter.createdAt || ''} • ${currentPost.readingTime}`}
                />
              </Section>
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Posts

export async function getServerSideProps({ req }) {
  const posts = getAllPosts()
  return {
    props: {
      posts,
      cookies: req.headers.cookie ?? ''
    }
  }
}
