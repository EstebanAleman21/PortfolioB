// Define types for better type safety
export interface Category {
    id: string;
    name: string;
  }
  
  export interface Project {
    id: number;
    category: string;
    title: string;
    image: string;
    description?: string; // Optional description for detail pages
  }
  
  // Categories for filtering
  export const categories: Category[] = [
    { id: "posters", name: "Posters" },
    { id: "menus", name: "Menus" },
    { id: "etiquetas", name: "Etiquetas" },
  ];
  
  // Projects data
  export const projects: Project[] = [
    // Posters category
    { 
      id: 1, 
      category: "posters", 
      title: "Instagram Growth Strategy", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Estrategia de crecimiento para aumentar seguidores en Instagram mediante contenido visualmente atractivo."
    },
    { 
      id: 2, 
      category: "posters", 
      title: "TikTok Content Series", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Serie de contenido viral para TikTok enfocada en tendencias actuales y engagement con audiencia joven."
    },
    { 
      id: 3, 
      category: "posters", 
      title: "LinkedIn B2B Campaign", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Campaña B2B para LinkedIn diseñada para conectar profesionales y generar leads de alta calidad."
    },
    { 
      id: 4, 
      category: "posters", 
      title: "Twitter Engagement Boost", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Estrategia para aumentar la interacción en Twitter mediante contenido relevante y conversaciones activas."
    },
  
    // Menus category
    { 
      id: 5, 
      category: "menus", 
      title: "Startup Rebrand", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Rediseño completo de marca para startup tech emergente, incluyendo nuevos menús digitales interactivos."
    },
    { 
      id: 6, 
      category: "menus", 
      title: "Visual Identity System", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Sistema de identidad visual completo con menús personalizados para restaurante de alta cocina."
    },
    { 
      id: 7, 
      category: "menus", 
      title: "Brand Guidelines", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Directrices de marca detalladas y menús estacionales para cadena de cafeterías artesanales."
    },
  
    // Etiquetas category
    { 
      id: 8, 
      category: "etiquetas", 
      title: "Product Launch", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Diseño de etiquetas premium para lanzamiento de línea de productos cosméticos naturales."
    },
    { 
      id: 9, 
      category: "etiquetas", 
      title: "Holiday Promotion", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Etiquetas temáticas para promoción navideña de productos gourmet y artesanales."
    },
    { 
      id: 10, 
      category: "etiquetas", 
      title: "Awareness Campaign", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Campaña de concientización con etiquetas eco-friendly para marca de productos sostenibles."
    },
    { 
      id: 11, 
      category: "etiquetas", 
      title: "Wine Collection", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Colección de etiquetas premium para bodega boutique con enfoque en diseño minimalista."
    },
    { 
      id: 12, 
      category: "etiquetas", 
      title: "Craft Beer Series", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Serie de etiquetas artísticas para cervecería artesanal con ediciones limitadas estacionales."
    },
    { 
      id: 13, 
      category: "etiquetas", 
      title: "Organic Food Line", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Línea completa de etiquetas para productos orgánicos con enfoque en transparencia y sostenibilidad."
    },
    { 
      id: 14, 
      category: "etiquetas", 
      title: "Luxury Packaging", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Etiquetas y packaging para línea de productos de lujo con acabados metálicos y relieve."
    },
    { 
      id: 15, 
      category: "etiquetas", 
      title: "Seasonal Collection", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Colección de etiquetas estacionales para productos de edición limitada con motivos festivos."
    },
    { 
      id: 16, 
      category: "etiquetas", 
      title: "Minimalist Series", 
      image: "/placeholder.svg?height=400&width=600",
      description: "Serie de etiquetas minimalistas para marca de estilo de vida contemporáneo y elegante."
    },
  ];