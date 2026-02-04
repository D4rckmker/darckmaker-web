/**
 * ============================================================================
 * UTILIDADES PARA POSTS (BLOG)
 * ============================================================================
 *
 * Funciones para leer y procesar los archivos MDX del directorio data/posts.
 *
 * ESTRUCTURA DE UN POST:
 * Los posts son archivos .mdx en /data/posts/ con frontmatter YAML:
 *
 * ```mdx
 * ---
 * title: "Mi título"
 * description: "Descripción corta"
 * createdAt: "2024-01-15"
 * updatedAt: "2024-01-20"
 * tags: ["tag1", "tag2"]
 * heroImage: "/images/posts/mi-imagen.jpg"
 * ---
 *
 * Contenido del post en Markdown...
 * ```
 */

import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // Parsea el frontmatter YAML
import readingTime from 'reading-time' // Calcula tiempo de lectura

// ─────────────────────────────────────────────────────────────────────────────
// CONFIGURACIÓN
// ─────────────────────────────────────────────────────────────────────────────

// Ruta absoluta al directorio de posts
const postsDirectory = path.join(process.cwd(), 'data', 'posts')

// ─────────────────────────────────────────────────────────────────────────────
// FUNCIONES PÚBLICAS
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Obtiene la lista de slugs únicos de posts (ignorando sufijos de idioma)
 *
 * @returns {string[]} Array de slugs únicos (ej: ["hola-mundo", "integrando-3-ias-programacion-bajo-costo"])
 */
export function getPostSlugs() {
  const files = fs.readdirSync(postsDirectory)
  const slugs = new Set()

  files.forEach(file => {
    // Extrae el slug base eliminando sufijos .es.mdx y .en.mdx
    const baseSlug = file
      .replace(/\.es\.mdx$/, '')
      .replace(/\.en\.mdx$/, '')
      .replace(/\.mdx$/, '')
    slugs.add(baseSlug)
  })

  return Array.from(slugs)
}

/**
 * Obtiene un post completo por su slug con soporte para ambos idiomas
 *
 * @param {string} slug - El identificador del post (nombre del archivo sin sufijo)
 * @returns {Object} Objeto con slug y contenidos en ambos idiomas
 *
 * @example
 * const post = getPostBySlug('hola-mundo')
 * // {
 * //   slug: 'hola-mundo',
 * //   es: { content: '## Mi contenido...', frontmatter: { title: 'Hola Mundo', ... }, readingTime: '3 min read' },
 * //   en: { content: '## My content...', frontmatter: { title: 'Hello World', ... }, readingTime: '3 min read' }
 * // }
 */
export function getPostBySlug(slug) {
  // Asegura que el slug no tenga extensión
  const realSlug = slug
    .replace(/\.es\.mdx$/, '')
    .replace(/\.en\.mdx$/, '')
    .replace(/\.mdx$/, '')

  // Función auxiliar para leer un archivo de idioma específico
  const readLanguageFile = language => {
    const fileName = `${realSlug}.${language}.mdx`
    const fullPath = path.join(postsDirectory, fileName)

    try {
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const { data, content } = matter(fileContents)
      const stats = readingTime(content)

      return {
        content,
        frontmatter: {
          title: data.title ?? realSlug,
          description: data.description ?? '',
          createdAt: data.createdAt ?? '',
          updatedAt: data.updatedAt ?? '',
          tags: Array.isArray(data.tags) ? data.tags : [],
          heroImage: data.heroImage ?? ''
        },
        readingTime: stats.text
      }
    } catch (error) {
      // Si el archivo no existe, devuelve null
      return null
    }
  }

  // Intenta leer ambos idiomas
  const esContent = readLanguageFile('es')
  const enContent = readLanguageFile('en')

  // Si no existe la versión en inglés, usa español como fallback
  const fallback = esContent || enContent

  return {
    slug: realSlug,
    es: esContent || fallback,
    en: enContent || fallback
  }
}

/**
 * Obtiene todos los posts con contenidos duales ordenados por fecha
 *
 * @returns {Object[]} Array de posts con contenido en ambos idiomas ordenados del más nuevo al más antiguo
 */
export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(s => getPostBySlug(s))

  // Ordena por fecha de creación (más reciente primero)
  // Usa la fecha del contenido en español como referencia
  posts.sort((a, b) => {
    const dateA = new Date(a.es.frontmatter.createdAt || 0).getTime()
    const dateB = new Date(b.es.frontmatter.createdAt || 0).getTime()
    return dateB - dateA
  })

  return posts
}
