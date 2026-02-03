import { Container, SimpleGrid, Heading } from '@chakra-ui/react'
import Section from '../../components/section'
import PostCard from '../../components/post-card'
import { getAllPosts } from '../../lib/posts'
import Layout from '../../components/layouts/article'

const Posts = ({ posts }) => {
  return (
    <Layout title="Publicaciones">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Publicaciones
        </Heading>

        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          {posts.map((p, idx) => (
            <Section key={p.slug} delay={0.08 + idx * 0.03}>
              <PostCard
                slug={p.slug}
                title={p.frontmatter.title}
                description={p.frontmatter.description}
                heroImage={p.frontmatter.heroImage}
                tags={p.frontmatter.tags}
                meta={`${p.frontmatter.createdAt || ''} • ${p.readingTime}`}
              />
            </Section>
          ))}
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
