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
import matter from 'gray-matter'       // Parsea el frontmatter YAML
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
 * Obtiene la lista de archivos de posts
 * 
 * @returns {string[]} Array de nombres de archivo (ej: ["hola-mundo.mdx"])
 */
export function getPostSlugs() {
  return fs
    .readdirSync(postsDirectory)
    .filter(f => f.endsWith('.mdx'))
}

/**
 * Obtiene un post completo por su slug
 * 
 * @param {string} slug - El identificador del post (nombre del archivo sin .mdx)
 * @returns {Object} Objeto con slug, content, frontmatter y readingTime
 * 
 * @example
 * const post = getPostBySlug('hola-mundo')
 * // {
 * //   slug: 'hola-mundo',
 * //   content: '## Mi contenido...',
 * //   frontmatter: { title: 'Hola Mundo', description: '...', ... },
 * //   readingTime: '3 min read'
 * // }
 */
export function getPostBySlug(slug) {
  // Asegura que el slug no tenga extensión
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(postsDirectory, `${realSlug}.mdx`)
  
  // Lee el archivo
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Parsea el frontmatter y el contenido
  const { data, content } = matter(fileContents)
  
  // Calcula el tiempo de lectura estimado
  const stats = readingTime(content)

  return {
    slug: realSlug,
    content,
    frontmatter: {
      // Valores con defaults seguros para evitar undefined
      title: data.title ?? realSlug,
      description: data.description ?? '',
      createdAt: data.createdAt ?? '',
      updatedAt: data.updatedAt ?? '',
      tags: Array.isArray(data.tags) ? data.tags : [],
      heroImage: data.heroImage ?? ''
    },
    readingTime: stats.text
  }
}

/**
 * Obtiene todos los posts ordenados por fecha
 * 
 * @returns {Object[]} Array de posts ordenados del más nuevo al más antiguo
 */
export function getAllPosts() {
  const slugs = getPostSlugs()
  const posts = slugs.map(s => getPostBySlug(s))

  // Ordena por fecha de creación (más reciente primero)
  posts.sort((a, b) => {
    const dateA = new Date(a.frontmatter.createdAt || 0).getTime()
    const dateB = new Date(b.frontmatter.createdAt || 0).getTime()
    return dateB - dateA
  })

  return posts
}