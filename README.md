# Darckmaker Web - Portfolio Personal

Portfolio personal de **David Q. Salas**, desarrollador iOS y Software.

🔗 **Sitio web**: [https://www.darckmaker.com/](https://www.darckmaker.com/)

---

## Stack Tecnológico

| Tecnología                                      | Uso                             |
| ----------------------------------------------- | ------------------------------- |
| [Next.js 14](https://nextjs.org/)               | Framework React con SSR/SSG     |
| [Chakra UI](https://chakra-ui.com/)             | Sistema de diseño y componentes |
| [Framer Motion](https://www.framer.com/motion/) | Animaciones fluidas             |
| [MDX](https://mdxjs.com/)                       | Posts del blog en Markdown      |

---

## Estructura del Proyecto

```
darckmaker-web/
├── 📂 components/          # Componentes React reutilizables
│   ├── 📂 layouts/         # Layouts de página (main, article)
│   ├── 📂 pets/            # Gatitos animados
│   ├── 📂 icons/           # Iconos SVG personalizados
│   ├── navbar.js           # Barra de navegación
│   ├── chakra.js           # Provider de Chakra UI
│   ├── section.js          # Wrapper con animación
│   └── ...
│
├── 📂 pages/               # Rutas de la aplicación (Next.js)
│   ├── _app.js             # Punto de entrada global
│   ├── _document.js        # Estructura HTML base
│   ├── index.js            # Página principal (/)
│   ├── works.js            # Lista de trabajos (/works)
│   ├── 📂 works/           # Páginas individuales de trabajos
│   └── 📂 posts/           # Blog (/posts y /posts/[slug])
│
├── 📂 lib/                 # Utilidades y configuración
│   ├── theme.js            # Configuración del tema Chakra
│   ├── posts.js            # Funciones para leer posts MDX
│   └── constants.js        # Constantes globales
│
├── 📂 data/                # Contenido estático
│   └── 📂 posts/           # Archivos MDX del blog
│
├── 📂 public/              # Archivos estáticos
│   └── 📂 images/          # Imágenes del sitio
│
└── next.config.js          # Configuración de Next.js
```

---

## Comenzar

### Requisitos previos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/D4rckmker/darckmaker-web.git
cd darckmaker-web

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

El sitio estará disponible en `http://localhost:3000`

### Scripts disponibles

| Comando            | Descripción                 |
| ------------------ | --------------------------- |
| `npm run dev`      | Servidor de desarrollo      |
| `npm run build`    | Build de producción         |
| `npm run start`    | Servidor de producción      |
| `npm run lint`     | Verificar código con ESLint |
| `npm run prettier` | Formatear código            |

---

## Agregar un nuevo Post

1. Crea un archivo `.mdx` en `data/posts/`:

```mdx
---
title: 'Mi nuevo post'
description: 'Una breve descripción'
createdAt: '2024-01-15'
tags: ['tag1', 'tag2']
heroImage: '/images/posts/mi-imagen.jpg'
---

## Contenido en Markdown

Aquí va el contenido de tu post...
```

2. Agrega la imagen en `public/images/posts/`

3. ¡Listo! El post aparecerá automáticamente en `/posts`

---

## Personalización del Tema

El tema se configura en `lib/theme.js`:

```js
const config = {
  initialColorMode: 'dark', // 'light', 'dark', o 'system'
  useSystemColorMode: true // Respetar preferencia del SO
}
```

Colores principales:

- **Modo claro**: `#f0e7db` (beige)
- **Modo oscuro**: `#202023` (gris oscuro)
- **Acento**: `#88ccca` (teal)

---

## Arquitectura

### Flujo de datos

```
_app.js (Chakra Provider + Layout Principal)
    │
    ├── Layout (main.js)
    │   ├── Navbar
    │   ├── PetBox
    │   └── Footer
    │
    └── AnimatePresence
        └── Página (con ArticleLayout)
```

### Tema (Color Mode)

El tema se persiste usando cookies para evitar el "flash" de tema incorrecto:

1. `_document.js` → `ColorModeScript` (lee preferencia antes de React)
2. `chakra.js` → `cookieStorageManagerSSR` (hidrata el tema en el servidor)
3. Cada página exporta `getServerSideProps` para pasar las cookies

---

## Sobre los Gatitos

Los gatitos en la página principal son sprites animados que:

- Caminan en direcciones aleatorias
- Duermen ocasionalmente
- Reaccionan al hover (olfatean)
- Evitan dormir muy cerca unos de otros

El código está en `components/pets/PetCat.js`.

---

## Licencia

Este proyecto está inspirado en el trabajo de [Takuya Matsuyama](https://www.craftz.dog/).

---

## Contacto

- **Email**: darckmaker@proton.me
- **LinkedIn**: [David Q. Salas](https://www.linkedin.com/in/minami-eed/)
- **GitHub**: [D4rckmker](https://github.com/D4rckmker)
- **Twitter**: [@DarckmakerX](https://x.com/DarckmakerX)
