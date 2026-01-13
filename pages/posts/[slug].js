import ArticleLayout from '../../components/layouts/article'
import PostLayout from '../../components/post-layout'
import { getPostBySlug, getPostSlugs } from '../../lib/posts'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  Box,
  Heading,
  Text,
  Link,
  ListItem,
  UnorderedList,
  OrderedList,
  Code,
  useColorModeValue
} from '@chakra-ui/react'

function MarkdownContent({ content }) {
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const linkColor = useColorModeValue('teal.600', 'teal.300')

  return (
    <Box
      className="markdown-body"
      sx={{
        'p': { mb: 5, lineHeight: '1.8' },
        'h2': { fontSize: '2xl', fontWeight: 'bold', mt: 8, mb: 3 },
        'h3': { fontSize: 'xl', fontWeight: 'bold', mt: 6, mb: 3 },
        'img': { borderRadius: 'xl', borderWidth: '1px', borderColor: border, mb: 6 },
        'a': { color: linkColor, textDecoration: 'underline', textUnderlineOffset: '3px' }
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          h1: props => <Heading as="h1" fontSize="3xl" {...props} />,
          h2: props => <Heading as="h2" fontSize="2xl" {...props} />,
          h3: props => <Heading as="h3" fontSize="xl" {...props} />,
          p: props => <Text as="p" {...props} />,
          a: props => <Link isExternal {...props} />,
          ul: props => <UnorderedList pl={4} mb={5} {...props} />,
          ol: props => <OrderedList pl={4} mb={5} {...props} />,
          li: props => <ListItem mb={1} {...props} />,
          code: ({ inline, children, ...props }) =>
            inline ? (
              <Code px="1" py="0.5" borderRadius="md" {...props}>
                {children}
              </Code>
            ) : (
              <Box
                as="pre"
                p={4}
                borderRadius="xl"
                borderWidth="1px"
                borderColor={border}
                overflow="auto"
                mb={6}
              >
                <code>{children}</code>
              </Box>
            )
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  )
}

export default function PostPage({ post }) {
  return (
    <ArticleLayout title={post.frontmatter.title}>
      <PostLayout
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        heroImage={post.frontmatter.heroImage}
      >
        <MarkdownContent content={post.content} />
      </PostLayout>
    </ArticleLayout>
  )
}

export async function getServerSideProps({ params, req }) {
  const slugs = getPostSlugs().map(s => s.replace(/\.mdx$/, ''))
  
  // Si el slug no existe, retornar 404
  if (!slugs.includes(params.slug)) {
    return { notFound: true }
  }
  
  const post = getPostBySlug(params.slug)
  return {
    props: {
      post,
      cookies: req.headers.cookie ?? ''
    }
  }
}