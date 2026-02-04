import {
  Container,
  Heading,
  Box,
  Text,
  Divider,
  useColorModeValue,
  Link,
  AspectRatio
} from '@chakra-ui/react'
import NextLink from 'next/link'
import Image from 'next/image'
import { useTranslation } from '../lib/translation-context'
import AnimatedText from './animated-text'

export default function PostLayout({
  title,
  backButton,
  description,
  heroImage,
  children
}) {
  const { t } = useTranslation()
  const border = useColorModeValue('blackAlpha.200', 'whiteAlpha.300')
  const muted = useColorModeValue('gray.600', 'whiteAlpha.800')

  return (
    <Container>
      <Box mb={6}>
        <Link as={NextLink} href="/posts" color={muted}>
        <AnimatedText>{t('posts.backButton')}</AnimatedText>
        </Link>
      </Box>

      {heroImage ? (
        <Box
          borderWidth="1px"
          borderColor={border}
          borderRadius="2xl"
          overflow="hidden"
          mb={6}
        >
          <AspectRatio ratio={{ base: 3 / 2 }}>
            <Box position="relative">
              <Image
                src={heroImage}
                alt={title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
              />
            </Box>
          </AspectRatio>
        </Box>
      ) : null}

      <Heading as="h1" fontSize={['3xl', '4xl']} mb={2}>
        {title}
      </Heading>

      {description ? (
        <Text color={muted} fontSize="lg">
          {description}
        </Text>
      ) : null}

      <Divider my={6} />

      {children}
    </Container>
  )
}
