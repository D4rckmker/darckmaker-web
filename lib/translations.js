/**
 * ============================================================================
 * TRANSLATIONS.JS - DICCIONARIO DE TRADUCCIONES
 * ============================================================================
 *
 * Archivo central con todas las traducciones del sitio.
 *
 * ESTRUCTURA:
 * - es: traducciones en español
 * - en: traducciones en inglés
 * - Usar claves anidadas para agrupar por componente/sección
 *
 * REGLAS:
 * 1. Agregar SIEMPRE ambas traducciones (es + en)
 * 2. Mantener consistencia en claves anidadas
 * 3. Usar notación de punto para acceso: t('navbar.works')
 */

export const translations = {
  // ESPAÑOL (idioma por defecto)
  es: {
    // Navegación
    navbar: {
      works: 'Trabajos',
      posts: 'Publicaciones',
      source: 'Código Fuente',
      about: 'Sobre mí',
      menuAriaLabel: 'Abrir menú de navegación'
    },

    // Home page
    home: {
      title: 'Sobre mí',
      subtitle:
        'Desarrollador de Software Junior con enfoque en desarrollo iOS',
      hero: {
        greeting: 'Hola, soy un desarrollador basado en Perú.',
        role: 'iOS Developer Junior · Software Developer',
        firstName: 'Edson Ever David',
        lastName: 'Quispe Salas'
      },
      work: {
        title: 'Trabajo',
        p1: 'Soy un Desarrollador de Software Junior con enfoque en desarrollo iOS, egresado de Computación e Informática, con experiencia práctica en la creación de aplicaciones móviles y soluciones de software orientadas a necesidades reales de negocio.',
        p2: 'He desarrollado aplicaciones iOS utilizando Swift y he trabajado con APIs REST y tecnologías backend. También tengo experiencia con herramientas empresariales como SAP y Microsoft Excel para la gestión y análisis de información, además de conocimientos en diseño de interfaces y desarrollo centrado en el usuario.',
        p3: 'En proyectos y entornos de trabajo, he fortalecido mi capacidad para trabajar en equipo, analizar requerimientos y resolver problemas técnicos de forma eficiente, manteniendo un enfoque en soluciones claras, mantenibles y orientadas a resultados.',
        button: 'Ver portafolio'
      },
      skills: {
        title: 'Habilidades',
        languages: 'Lenguajes',
        mobile: 'Móvil',
        backend: 'Backend',
        tools: 'Herramientas',
        soft: 'Habilidades'
      },
      biography: {
        title: 'Biografía',
        currentYear: 'Trabajo de Freelance y proyectos personales.'
      },
      interests: {
        title: 'Intereses',
        description:
          'Desarrollo iOS, construcción de productos, buenas prácticas de código, diseño de interfaces, aprendizaje continuo y tecnología.'
      },
      social: {
        title: 'En la web'
      },
      credits: {
        title: 'Agradecimientos',
        text: 'Este sitio web se basa en el trabajo de',
        authorName: 'Takuya Matsuyama'
      },
      contact: {
        title: 'Contacto',
        description:
          'Si deseas contactarme para oportunidades laborales o proyectos, puedes escribirme por correo.',
        button: 'Enviar correo'
      }
    },

    // Página de trabajos
    works: {
      title: 'Trabajos',
      subtitle: 'Proyectos destacados',
      metaLabels: {
        platform: 'Plataforma',
        stack: 'Stack',
        repository: 'Repositorio',
        documentation: 'Documentación',
        status: 'Estado',
        technologies: 'Tecnologías'
      },
      projects: {
        valhalla: {
          title: 'Valhalla Products',
          description:
            'Microservicio backend para gestión de productos en Valhalla Gaming Store.',
          fullDescription: {
            overviewTitle: 'Descripción general',
            intro: [
              'Valhalla Products es un microservicio desarrollado como parte de la arquitectura backend de Valhalla Gaming Store.',
              'Su responsabilidad principal es la gestión del catálogo de productos, sirviendo como fuente centralizada de datos para otras partes del sistema.',
              'El proyecto fue diseñado para integrarse dentro de un ecosistema de microservicios, manteniendo independencia, claridad estructural y facilidad de mantenimiento.'
            ],
            technicalTitle: 'Aspectos técnicos'
          },
          technicalAspects: [
            'Microservicio desarrollado con Spring Boot siguiendo una arquitectura por capas.',
            'Exposición de endpoints REST para operaciones CRUD sobre productos.',
            'Persistencia de datos mediante JPA/Hibernate con base de datos relacional.',
            'Manejo de validaciones, excepciones y estructuras DTO para control de datos.'
          ],
          meta: {
            year: '2023',
            platform: 'Backend · API REST',
            stack: 'Spring Boot, JPA/Hibernate, MySQL',
            repoLabel: 'Repositorio',
            docsLabel: 'Documentación'
          }
        },
        multillantas: {
          title: 'Multillantas VC',
          description:
            'Aplicación web para gestión operativa y con paneles de administración.',
          fullDescription: {
            overviewTitle: 'Descripción general',
            intro: [
              'Multillantas VC es una aplicación web orientada a centralizar tareas de gestión y control en un entorno administrativo.',
              'Se trabajó una experiencia basada en paneles y formularios, priorizando orden, consistencia visual y flujos claros para el usuario.',
              'La solución integra autenticación y navegación por secciones, con una base preparada para escalar funcionalidades por módulos sin perder mantenibilidad.'
            ],
            technicalTitle: 'Detalles técnicos'
          },
          technicalAspects: [
            'Aplicación Spring Boot con enfoque MVC y renderizado del lado servidor (Thymeleaf).',
            'Persistencia con JPA/Hibernate sobre base de datos MySQL.',
            'Autenticación y control de acceso con Spring Security.',
            'Estructura por capas (controladores / servicios / repositorios) para mantener separación de responsabilidades.'
          ],
          meta: {
            year: '2023',
            platform: 'Web',
            stack:
              'Spring Boot (MVC), Thymeleaf, Spring Security, JPA/Hibernate, MySQL',
            repoLabel: 'Repositorio',
            docsLabel: 'Estado'
          }
        },
        techtronic: {
          title: 'Techtronic',
          description:
            'Sistema web administrativo para la gestión y visualización de información.',
          fullDescription: {
            overviewTitle: 'Descripción general',
            intro: [
              'Techtronic es un sistema web orientado a la gestión y organización de información, pensado para escenarios donde se requiere una interfaz clara, estructurada y fácil de usar.',
              'El proyecto fue desarrollado como una solución administrativa, priorizando la simplicidad visual y la correcta separación entre lógica y presentación.',
              'El enfoque principal estuvo en construir una aplicación comprensible para usuarios finales, con pantallas limpias, navegación directa y componentes familiares, evitando complejidad innecesaria y asegurando una experiencia consistente en distintos dispositivos.'
            ],
            technicalTitle: 'Detalles técnicos',
            galleryTitle: 'Capturas del proyecto'
          },
          technicalAspects: [
            'Uso de una plantilla base generada en Visual Studio con arquitectura MVC (.NET).',
            'Implementación de lógica del lado servidor y conexión con base de datos para persistencia de información.',
            'Construcción de vistas utilizando Bootstrap para mantener consistencia visual y diseño responsivo.',
            'Separación clara entre controladores, vistas y modelos para facilitar mantenimiento y escalabilidad.'
          ],
          meta: {
            year: '2023',
            platform: 'Web',
            techLabel: 'Tecnologías',
            techStack: '.NET (MVC), Base de datos, Bootstrap',
            repoLabel: 'Repositorio',
            docsLabel: 'Documentación'
          }
        }
      }
    },

    // Página de publicaciones
    posts: {
      title: 'Publicaciones',
      backButton: '← Volver a las publicaciones',
      subtitle: 'Artículos y thoughts',
      readMore: 'Leer más',
      tags: 'Etiquetas',
      createdAt: 'Publicado',
      updatedAt: 'Actualizado'
    },

    // Footer
    footer: {
      copyright: '&copy; {year} David Q. Salas. Todos los derechos reservados.'
    },

    // Selector de idioma
    language: {
      toggle: 'EN',
      label: 'Cambiar idioma'
    },

    // Habilidades técnicas (antes en constants.js)
    skills: {
      languages: ['Swift', 'Java', 'JavaScript'],
      mobile: ['iOS', 'Integración de APIs', 'UI/UX (fundamentos)'],
      backend: ['Spring Boot', 'REST APIs', 'Frontend básico'],
      tools: ['Git', 'SAP', 'Microsoft Excel'],
      soft: [
        'Pensamiento analítico',
        'Adaptabilidad',
        'Trabajo en equipo',
        'Resolución de problemas'
      ]
    },

    // Biografía (antes en constants.js)
    biography: [
      { year: '2001', text: 'Nacido en La Libertad, Perú.' },
      {
        year: '2020',
        text: 'Inicia la carrera de Computación e Informática en CIBERTEC (Perú).'
      },
      {
        year: '2023',
        text: 'Participa en proyectos de desarrollo: backend con Spring Boot e integración de APIs; además de desarrollo iOS con Swift.'
      },
      {
        year: '2023',
        text: 'Inicia labores como Responsable de Información en Avocado Packing Company (Excel y SAP).'
      },
      {
        year: '2024',
        text: 'Egresado de Computación e Informática (CIBERTEC).'
      }
    ],

    // Errores
    notFound: {
      title: 'Página no encontrada',
      description: 'La página que buscas no existe.',
      button: 'Volver al inicio'
    }
  },

  // INGLÉS
  en: {
    // Navigation
    navbar: {
      works: 'Works',
      posts: 'Posts',
      source: 'Source Code',
      about: 'About',
      menuAriaLabel: 'Open navigation menu'
    },

    // Home page
    home: {
      title: 'About',
      subtitle: 'Junior Software Developer focused on iOS development',
      hero: {
        greeting: 'Hello, I am a developer based in Peru.',
        role: 'iOS Developer Junior · Software Developer',
        firstName: 'Edson Ever David',
        lastName: 'Quispe Salas'
      },
      work: {
        title: 'Work',
        p1: 'I am a Junior Software Developer focused on iOS development, a Computer Science graduate with practical experience in creating mobile applications and software solutions oriented to real business needs.',
        p2: 'I have developed iOS applications using Swift and have worked with REST APIs and backend technologies. I also have experience with enterprise tools like SAP and Microsoft Excel for information management and analysis, plus knowledge of interface design and user-centered development.',
        p3: 'In projects and work environments, I have strengthened my ability to work in teams, analyze requirements, and solve technical problems efficiently, maintaining a focus on clear, maintainable, and results-oriented solutions.',
        button: 'View portfolio'
      },
      skills: {
        title: 'Skills',
        languages: 'Languages',
        mobile: 'Mobile',
        backend: 'Backend',
        tools: 'Tools',
        soft: 'Soft Skills'
      },
      biography: {
        title: 'Biography',
        currentYear: 'Freelance work and personal projects.'
      },
      interests: {
        title: 'Interests',
        description:
          'iOS development, product building, good coding practices, interface design, continuous learning, and technology.'
      },
      social: {
        title: 'On the web'
      },
      credits: {
        title: 'Credits',
        text: 'This website is based on the work of',
        authorName: 'Takuya Matsuyama'
      },
      contact: {
        title: 'Contact',
        description:
          'If you want to contact me for job opportunities or projects, you can email me.',
        button: 'Send email'
      }
    },

    // Works page
    works: {
      title: 'Works',
      subtitle: 'Featured projects',
      metaLabels: {
        platform: 'Platform',
        stack: 'Stack',
        repository: 'Repository',
        documentation: 'Documentation',
        status: 'Status',
        technologies: 'Technologies'
      },
      projects: {
        valhalla: {
          title: 'Valhalla Products',
          description:
            'Backend microservice for product management at Valhalla Gaming Store.',
          fullDescription: {
            overviewTitle: 'Overview',
            intro: [
              'Valhalla Products is a microservice developed as part of the backend architecture for Valhalla Gaming Store.',
              'Its main responsibility is managing the product catalog, acting as a centralized data source for other parts of the system.',
              'The project was designed to integrate into a microservices ecosystem, keeping independence, structural clarity, and ease of maintenance.'
            ],
            technicalTitle: 'Technical aspects'
          },
          technicalAspects: [
            'Microservice built with Spring Boot following a layered architecture.',
            'REST endpoints exposed for CRUD operations over products.',
            'Data persistence using JPA/Hibernate with a relational database.',
            'Validation, exception handling, and DTO structures for data control.'
          ],
          meta: {
            year: '2023',
            platform: 'Backend · REST API',
            stack: 'Spring Boot, JPA/Hibernate, MySQL',
            repoLabel: 'Repository',
            docsLabel: 'Documentation'
          }
        },
        multillantas: {
          title: 'Multillantas VC',
          description:
            'Web application for operational management and admin panels.',
          fullDescription: {
            overviewTitle: 'Overview',
            intro: [
              'Multillantas VC is a web application focused on centralizing management and control tasks in an administrative environment.',
              'The experience is based on dashboards and forms, prioritizing order, visual consistency, and clear user flows.',
              'The solution integrates authentication and section-based navigation, with a base prepared to scale features by modules without losing maintainability.'
            ],
            technicalTitle: 'Technical details'
          },
          technicalAspects: [
            'Spring Boot application with MVC approach and server-side rendering (Thymeleaf).',
            'Persistence with JPA/Hibernate on a MySQL database.',
            'Authentication and access control with Spring Security.',
            'Layered structure (controllers / services / repositories) to keep responsibilities separated.'
          ],
          meta: {
            year: '2023',
            platform: 'Web',
            stack:
              'Spring Boot (MVC), Thymeleaf, Spring Security, JPA/Hibernate, MySQL',
            repoLabel: 'Repository',
            docsLabel: 'Status'
          }
        },
        techtronic: {
          title: 'Techtronic',
          description:
            'Administrative web system for information management and visualization.',
          fullDescription: {
            overviewTitle: 'Overview',
            intro: [
              'Techtronic is a web system focused on information management and organization, designed for scenarios where a clear, structured, and easy-to-use interface is required.',
              'The project was developed as an administrative solution, prioritizing visual simplicity and a proper separation between logic and presentation.',
              'The main goal was to build an application that is understandable for end users, with clean screens, direct navigation, and familiar components, avoiding unnecessary complexity and ensuring a consistent experience across devices.'
            ],
            technicalTitle: 'Technical details',
            galleryTitle: 'Project screenshots'
          },
          technicalAspects: [
            'Use of a base template generated in Visual Studio with an MVC (.NET) architecture.',
            'Server-side logic implementation and database connection for information persistence.',
            'Views built with Bootstrap to keep visual consistency and responsive design.',
            'Clear separation between controllers, views, and models to make maintenance and scalability easier.'
          ],
          meta: {
            year: '2023',
            platform: 'Web',
            techLabel: 'Technologies',
            techStack: '.NET (MVC), Database, Bootstrap',
            repoLabel: 'Repository',
            docsLabel: 'Documentation'
          }
        }
      }
    },

    // Posts page
    posts: {
      title: 'Posts',
      backButton: '← Back to posts',
      subtitle: 'Articles and thoughts',
      readMore: 'Read more',
      tags: 'Tags',
      createdAt: 'Published',
      updatedAt: 'Updated'
    },

    // Footer
    footer: {
      copyright: '&copy; {year} David Q. Salas. All rights reserved.'
    },

    // Language selector
    language: {
      toggle: 'ES',
      label: 'Change language'
    },

    // Technical skills (from constants.js)
    skills: {
      languages: ['Swift', 'Java', 'JavaScript'],
      mobile: ['iOS', 'API Integration', 'UI/UX (basics)'],
      backend: ['Spring Boot', 'REST APIs', 'Basic Frontend'],
      tools: ['Git', 'SAP', 'Microsoft Excel'],
      soft: [
        'Analytical thinking',
        'Adaptability',
        'Teamwork',
        'Problem solving'
      ]
    },

    // Biography (from constants.js)
    biography: [
      { year: '2001', text: 'Born in La Libertad, Peru.' },
      {
        year: '2020',
        text: 'Started Computer Science degree at CIBERTEC (Peru).'
      },
      {
        year: '2023',
        text: 'Participated in development projects: backend with Spring Boot and API integration; plus iOS development with Swift.'
      },
      {
        year: '2023',
        text: 'Started as Information Officer at Avocado Packing Company (Excel and SAP).'
      },
      { year: '2024', text: 'Graduated from Computer Science (CIBERTEC).' }
    ],

    // Errors
    notFound: {
      title: 'Page not found',
      description: 'The page you are looking for does not exist.',
      button: 'Back to home'
    }
  }
}

// Idiomas soportados
export const supportedLocales = ['es', 'en']

// Idioma por defecto
export const defaultLocale = 'es'
