import posterLabubu from "../assets/imagenes/PosterLabubu.png";
import posterFerrari from "../assets/imagenes/PosterFerrari.png";
import volanteComidasAli from "../assets/imagenes/VolanteComidasAli.png";
import paletasCV from "../assets/imagenes/PaletasCV.png";
import PaletasSanvalentin1 from "../assets/imagenes/PaletasSanValentin/1.png";
import PaletasSanvalentin2 from "../assets/imagenes/PaletasSanValentin/2.png";
import AlbumSanvalentin1_1 from "../assets/imagenes/AlbumPaniniSanValentin/1.png";
import AlbumSanvalentin1_2 from "../assets/imagenes/AlbumPaniniSanValentin/2.png";
import AlbumSanvalentin1_3 from "../assets/imagenes/AlbumPaniniSanValentin/3.png";
import AlbumSanvalentin1_4 from "../assets/imagenes/AlbumPaniniSanValentin/4.png";
import AlbumSanvalentin1_5 from "../assets/imagenes/AlbumPaniniSanValentin/5.png";
import AlbumSanvalentin1_6 from "../assets/imagenes/AlbumPaniniSanValentin/6.png";
import AlbumSanvalentin2_1 from "../assets/imagenes/AlbumPaniniSanValentin2/1.png";
import AlbumSanvalentin2_2 from "../assets/imagenes/AlbumPaniniSanValentin2/2.png";
import AlbumSanvalentin2_3 from "../assets/imagenes/AlbumPaniniSanValentin2/3.png";
import AlbumSanvalentin2_4 from "../assets/imagenes/AlbumPaniniSanValentin2/4.png";
import AlbumSanvalentin2_5 from "../assets/imagenes/AlbumPaniniSanValentin2/5.png";
import AlbumSanvalentin2_6 from "../assets/imagenes/AlbumPaniniSanValentin2/6.png";
import MenuMilPlatos1 from "../assets/imagenes/MenuMilPlatos/1.png";
import MenuMilPlatos2 from "../assets/imagenes/MenuMilPlatos/2.png";
import PlayerasNFL1 from "../assets/imagenes/PlayerasNFL/1.png";
import PlayerasNFL2 from "../assets/imagenes/PlayerasNFL/2.png";
import PostPerros1 from "../assets/imagenes/PostIGPerros/1.png";
import PostPerros2 from "../assets/imagenes/PostIGPerros/2.png";
import PostPerros3 from "../assets/imagenes/PostIGPerros/3.png";
import PostPerros4 from "../assets/imagenes/PostIGPerros/4.png";
import paradoja1 from "../assets/imagenes/PublicidadParadoja/1.png";
import paradoja2 from "../assets/imagenes/PublicidadParadoja/2.png";
import paradoja3 from "../assets/imagenes/PublicidadParadoja/3.png";
import Catalogo1 from "../assets/imagenes/CatalogoLampara/Catalogo1.png";
import Catalogo2 from "../assets/imagenes/CatalogoLampara/Catalogo2.png";
import Catalogo3 from "../assets/imagenes/CatalogoLampara/Catalogo3.png";
import Catalogo4 from "../assets/imagenes/CatalogoLampara/Catalogo4.png";
import Catalogo5 from "../assets/imagenes/CatalogoLampara/Catalogo5.png";
import Catalogo6 from "../assets/imagenes/CatalogoLampara/Catalogo6.png";
import Catalogo7 from "../assets/imagenes/CatalogoLampara/Catalogo7.png";
import Catalogo8 from "../assets/imagenes/CatalogoLampara/Catalogo8.png";
import Catalogo9 from "../assets/imagenes/CatalogoLampara/Catalogo9.png";

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
    images?: string[];  // Array of additional images for the carousel
    description?: string;
    client?: string;
    year?: string;
    services?: string[];
}
  
// Categories for filtering
export const categories: Category[] = [
    { id: "posters", name: "Posters" },
    { id: "menus", name: "Menus" },
    { id: "etiquetas", name: "Etiquetas" },
    { id: "regalos", name: "Regalos" },
    { id: "digital", name: "Digital" },
];
  
// Projects data
export const projects: Project[] = [
    // Posters category
    { 
      id: 1, 
      category: "posters", 
      title: "Poster de Labubu", 
      image: posterLabubu,
      images: [],
      description: "Campaña publicitaria para Labubu, con un diseño innovador que busca incrementar el reconocimiento de la marca y aumentar seguidores en Instagram a través de contenido visual creativo.",
      client: "Labubu",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Marketing Digital"]
    },
    { 
      id: 2, 
      category: "posters", 
      title: "Ejemplo de publicidad Ferrari", 
      image: posterFerrari,
      images: [],
      description: "Campaña exclusiva para Ferrari, resaltando la elegancia y sofisticación de la marca a través de un diseño minimalista y atractivo que refleja la esencia de los automóviles deportivos.",
      client: "Ferrari",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Marketing Digital"]
    },
    // Menus category
    { 
      id: 3, 
      category: "menus", 
      title: "Volante de comidas Ali", 
      image: volanteComidasAli,
      images: [],
      description: "Diseño de volante promocional para Comidas Ali, enfocado en destacar la oferta culinaria y atraer nuevos clientes mediante un estilo moderno y atractivo.",
      client: "Comidas Ali",
      year: "2024",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Marketing Digital", "Producto"]
    },
    // Etiquetas category
    { 
      id: 4, 
      category: "etiquetas", 
      title: "Etiquetas en paletas con QR de CV", 
      image: paletasCV,
      images: [],
      description: "Diseño de etiquetas interactivas para paletas, integrando un código QR que ofrece acceso a contenido exclusivo y mejora la experiencia del reclutador.",
      client: "N/A",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto"]
    },
    { 
      id: 5, 
      category: "etiquetas", 
      title: "Paletas de San Valentín", 
      image: PaletasSanvalentin1,
      images: [
        PaletasSanvalentin1,
        PaletasSanvalentin2
      ],
      description: "Campaña de diseño para paletas de San Valentín, con un estilo romántico y creativo que invita a celebrar el amor, complementado con un packaging innovador.",
      client: "N/A",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto"]
    },
    // Regalos category
    { 
      id: 6, 
      category: "regalos", 
      title: "Álbum de fotos: San Valentín 1", 
      image: AlbumSanvalentin1_1,
      images: [
        AlbumSanvalentin1_1,
        AlbumSanvalentin1_2,
        AlbumSanvalentin1_3,
        AlbumSanvalentin1_4,
        AlbumSanvalentin1_5,
        AlbumSanvalentin1_6,
      ],
      description: "Creación de un álbum de fotos conmemorativo para San Valentín que captura momentos especiales a través de un diseño artístico y emotivo.",
      client: "N/A",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto", "Regalo"]
    },
    { 
      id: 7, 
      category: "regalos", 
      title: "Álbum de fotos: San Valentín 2", 
      image: AlbumSanvalentin2_1,
      images: [
        AlbumSanvalentin2_1,
        AlbumSanvalentin2_2,
        AlbumSanvalentin2_3,
        AlbumSanvalentin2_4,
        AlbumSanvalentin2_5,
        AlbumSanvalentin2_6,
      ],
      description: "Diseño de un álbum de fotos para San Valentín, enfocado en transmitir emociones y conservar recuerdos inolvidables, ideal para un regalo especial.",
      client: "N/A",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto", "Regalo"]
    },
    // Menus category
    { 
      id: 8, 
      category: "menus", 
      title: "Menú restaurante Mil Platos", 
      image: MenuMilPlatos1,
      images: [
        MenuMilPlatos1,
        MenuMilPlatos2
      ],
      description: "Diseño completo de menú para el Restaurante Mil Platos, resaltando una variedad de platos auténticos y creando una experiencia gastronómica memorable.",
      client: "Restaurante Mil Platos",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto"]
    },
    // Regalos category
    { 
      id: 9, 
      category: "regalos", 
      title: "Playeras NFL", 
      image: PlayerasNFL1,
      images: [
        PlayerasNFL1,
        PlayerasNFL2
      ],
      description: "Diseño exclusivo de playeras inspiradas en la NFL, combinando elementos deportivos y gráficos modernos para los aficionados del fútbol americano.",
      client: "N/A",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto", "Regalo"]
    },
    // Digital category
    { 
      id: 10, 
      category: "digital", 
      title: "Post IG: Perros", 
      image: PostPerros1,
      images: [
        PostPerros1,
        PostPerros2,
        PostPerros3,
        PostPerros4,
      ],
      description: "Creación de contenido digital para Instagram enfocado en perros, con imágenes dinámicas y atractivas que capturan la ternura y energía de las mascotas.",
      client: "Cuenta de Instagram para perros",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto"]
    },
    { 
      id: 11, 
      category: "digital", 
      title: "Publicidad de restaurante Paradoja", 
      image: paradoja1,
      images: [
        paradoja1,
        paradoja2,
        paradoja3,
      ],
      description: "Campaña digital para Paradoja, fusionando conceptos creativos y visuales impactantes para captar la atención en redes sociales y resaltar la identidad única de la marca.",
      client: "Paradoja",
      year: "2025",
      services: ["Diseño Gráfico", "Estrategia de Contenido", "Producto"]
    },
    { 
      id: 12, 
      category: "digital", 
      title: "Propuesta de catalogo de productos: LamparaYa", 
      image: Catalogo1,
      images: [
        Catalogo1,
        Catalogo2,
        Catalogo3,
        Catalogo4,
        Catalogo5,
        Catalogo6,
        Catalogo7,
        Catalogo8,
        Catalogo9,
      ],
      description: "Propuesta de catálogo de lámparas que fusiona diseño innovador y elegancia, destacando piezas únicas para iluminar y transformar cualquier espacio.",
      client: "LamparaYa",
      year: "2025",
      services: ["Diseño Gráfico", "Catalogo", "Producto"]
    },
];
