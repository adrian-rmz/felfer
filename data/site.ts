export const site = {
  name: "Constructora FELFER",
  url: "https://felfer.com.mx",
  phone: "+52 771 000 0000",
  whatsapp: "https://wa.me/527710000000",
  email: "contacto@felfer.com.mx",
  location: "Pachuca de Soto, Hidalgo",
  imageBase: "/images/felfer",
};

export const clients = [
  {
    name: "SICT",
    image: "clients/sict.png",
    alt: "Secretaria de Infraestructura, Comunicaciones y Transportes",
  },
  { name: "CAPUFE", image: "clients/capufe.jpg", alt: "CAPUFE" },
  { name: "SEDENA", image: "clients/sedena.png", alt: "SEDENA" },
  { name: "CEI", image: "clients/cei.png", alt: "CEI" },
  {
    name: "Cliente institucional",
    image: "clients/cliente-institucional.png",
    alt: "Cliente institucional de Constructora FELFER",
  },
];

export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  intro: string;
  keywords: string[];
  image: string;
  alt: string;
  featured?: boolean;
  includes: string[];
  applies: string[];
  methods: string[];
  faq: { question: string; answer: string }[];
  metadata: {
    title: string;
    description: string;
  };
};

export const services: Service[] = [
  {
    slug: "estabilizacion-de-taludes",
    title: "Estabilización de taludes",
    shortTitle: "Taludes",
    featured: true,
    description:
      "Soluciones para estabilización de taludes en carreteras, cortes, plataformas e infraestructura con concreto lanzado, anclajes, mallas y drenaje.",
    intro:
      "FELFER ejecuta estabilización de taludes en México para infraestructura carretera, obra civil y desarrollos que requieren control de erosión, protección superficial y estabilidad del terreno. Desde Pachuca, Hidalgo, integramos diagnóstico técnico, saneamiento, concreto lanzado, anclajes activos y pasivos, mallas, drenes subhorizontales y soluciones de contención para reducir riesgos operativos y proteger la vida útil de la infraestructura.",
    keywords: [
      "estabilización de taludes",
      "concreto lanzado",
      "anclajes activos y pasivos",
      "malla triple torsión",
      "drenes subhorizontales",
    ],
    image: "services/estabilizacion-de-taludes/hero-estabilizacion-taludes.jpeg",
    alt: "Trabajos de estabilizacion de taludes en infraestructura carretera",
    includes: [
      "Saneamiento de taludes y retiro de material inestable",
      "Concreto lanzado para protección superficial",
      "Anclajes activos y pasivos según condición del terreno",
      "Malla triple torsión, malla antierosión y protección contra desprendimientos",
      "Drenes subhorizontales y control de agua en cortes",
      "Muros de contención, gaviones y obras complementarias",
    ],
    applies: [
      "Carreteras y autopistas",
      "Cortes de ladera",
      "Urbanización en zonas con pendiente",
      "Plataformas industriales",
      "Infraestructura pública y privada",
    ],
    methods: [
      "Diagnóstico geotécnico visual y levantamiento de condiciones",
      "Propuesta técnica y definición del sistema de estabilización",
      "Ejecución controlada con seguridad operativa",
      "Drenaje, protección superficial y cierre documental",
    ],
    faq: [
      {
        question: "¿Qué es la estabilización de taludes?",
        answer:
          "Es el conjunto de trabajos técnicos para mejorar la seguridad de cortes, laderas o terraplenes mediante saneamiento, drenaje, anclajes, concreto lanzado, mallas y sistemas de contención.",
      },
      {
        question: "¿Cuándo se requiere concreto lanzado?",
        answer:
          "Se utiliza cuando el talud necesita protección superficial, confinamiento del material expuesto o una capa resistente que trabaje junto con anclajes, mallas o drenaje.",
      },
      {
        question: "¿Qué función tienen los drenes subhorizontales?",
        answer:
          "Ayudan a liberar presión de agua dentro del talud, reduciendo condiciones que pueden detonar erosión, desprendimientos o pérdida de estabilidad.",
      },
      {
        question: "¿Qué diferencia hay entre anclajes activos y pasivos?",
        answer:
          "Los anclajes activos se tensan para aportar fuerza desde su instalación; los pasivos trabajan conforme el terreno demanda resistencia.",
      },
      {
        question: "¿FELFER atiende proyectos fuera de Hidalgo?",
        answer:
          "Sí. FELFER tiene base en Pachuca, Hidalgo y capacidad para atender proyectos de infraestructura y obra civil en México.",
      },
    ],
    metadata: {
      title: "Estabilización de taludes en México | Constructora FELFER",
      description:
        "Estabilización de taludes con concreto lanzado, anclajes, mallas, drenes subhorizontales y obras de contención para carreteras e infraestructura.",
    },
  },
  {
    slug: "carreteras-conservacion-vial",
    title: "Carreteras y conservación vial",
    shortTitle: "Carreteras",
    featured: true,
    description:
      "Construcción de carreteras, conservación vial, pavimentación, terracerías, drenaje, señalamiento y obras complementarias.",
    intro:
      "FELFER desarrolla construcción de carreteras y conservación vial para infraestructura pública y privada en México. Integramos terracerías, pavimentación asfáltica, pavimentación con concreto hidráulico, obras de drenaje, conservación, rehabilitación y control operativo para mejorar seguridad, durabilidad y continuidad de las vías.",
    keywords: ["construcción de carreteras", "conservación vial", "pavimentación asfáltica", "terracerías"],
    image: "services/carreteras-conservacion-vial/hero-carreteras-conservacion-vial.jpg",
    alt: "Frente de construccion y conservacion vial en carretera",
    includes: [
      "Terracerías, cortes, terraplenes y compactación",
      "Pavimentación asfáltica y concreto hidráulico",
      "Obras de drenaje y alcantarillas",
      "Conservación y rehabilitación vial",
      "Señalamiento y obras complementarias",
    ],
    applies: ["Autopistas", "Carreteras estatales", "Vialidades urbanas", "Accesos industriales", "Infraestructura pública"],
    methods: [
      "Revisión del alcance vial",
      "Planeación de frentes de obra",
      "Ejecución de terracerías, drenaje y pavimento",
      "Entrega con control de calidad",
    ],
    faq: [
      {
        question: "¿Qué incluye un proyecto carretero?",
        answer:
          "Puede incluir terracerías, drenaje, pavimentación, estructuras, señalamiento, conservación y trabajos complementarios según el alcance.",
      },
      {
        question: "¿Atienden conservación vial?",
        answer:
          "Sí. FELFER atiende conservación, rehabilitación y mantenimiento de infraestructura vial.",
      },
      {
        question: "¿Trabajan con pavimento asfáltico y concreto hidráulico?",
        answer:
          "Sí. La solución se define según uso, carga, presupuesto, vida útil requerida y condiciones técnicas del proyecto.",
      },
    ],
    metadata: {
      title: "Construcción de carreteras y conservación vial | FELFER",
      description:
        "Construcción de carreteras, conservación vial, pavimentación, terracerías y obras de drenaje para infraestructura en México.",
    },
  },
  {
    slug: "urbanizacion",
    title: "Urbanización",
    shortTitle: "Urbanización",
    featured: true,
    description:
      "Urbanización para desarrollos habitacionales, comerciales e industriales con vialidades, redes, plataformas y obras complementarias.",
    intro:
      "Ejecutamos urbanización para proyectos que requieren habilitación de terrenos, vialidades internas, redes de drenaje, preparación de plataformas y coordinación de obra civil. Nuestro enfoque integra planeación, terracerías, pavimentos y trabajos complementarios para entregar frentes listos para operación o edificación.",
    keywords: ["urbanización", "obra civil", "pavimentación con concreto hidráulico"],
    image: "services/urbanizacion/hero-urbanizacion.jpeg",
    alt: "Obra de urbanizacion con pavimento de concreto hidraulico",
    includes: ["Vialidades internas", "Plataformas", "Drenaje pluvial y sanitario", "Pavimentos", "Obras complementarias"],
    applies: ["Fraccionamientos", "Parques industriales", "Desarrollos comerciales", "Equipamiento urbano"],
    methods: ["Revisión de proyecto", "Trazo y preparación", "Ejecución de redes y pavimentos", "Entrega de frentes"],
    faq: [
      {
        question: "¿Qué incluye la urbanización?",
        answer:
          "Incluye obras para habilitar terrenos y vialidades, como terracerías, drenaje, pavimentos y obras complementarias.",
      },
      {
        question: "¿FELFER atiende urbanización industrial?",
        answer:
          "Sí. Se pueden atender desarrollos habitacionales, comerciales e industriales según el alcance técnico.",
      },
    ],
    metadata: {
      title: "Urbanización y obra civil en México | Constructora FELFER",
      description:
        "Servicios de urbanización, vialidades, drenaje, plataformas, pavimentos y obras complementarias para desarrollos en México.",
    },
  },
  {
    slug: "edificacion",
    title: "Edificación",
    shortTitle: "Edificación",
    featured: true,
    description:
      "Edificación y obra civil para proyectos institucionales, comerciales, industriales y privados con ejecución técnica y control de obra.",
    intro:
      "FELFER atiende edificación y obra civil con una visión técnica de construcción, coordinación de frentes, cimentaciones, estructuras y acabados según el alcance del proyecto. La ejecución se orienta a proyectos institucionales, comerciales, industriales y privados que requieren orden, control y capacidad operativa.",
    keywords: ["edificación", "estructuras de concreto", "cimentaciones"],
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Proyecto de edificacion y obra civil ejecutado por Constructora FELFER",
    includes: ["Cimentaciones", "Estructuras", "Obra civil", "Coordinación de frentes", "Obras complementarias"],
    applies: ["Edificios institucionales", "Naves y espacios industriales", "Comercio", "Infraestructura privada"],
    methods: ["Planeación", "Ejecución estructural", "Control de avance", "Cierre de obra"],
    faq: [
      {
        question: "¿Qué tipo de edificación atiende FELFER?",
        answer:
          "Proyectos institucionales, comerciales, industriales y privados sujetos al alcance técnico y documentación disponible.",
      },
      {
        question: "¿La edificación puede integrarse con urbanización?",
        answer:
          "Sí. Puede coordinarse con terracerías, plataformas, redes, vialidades y obras complementarias.",
      },
    ],
    metadata: {
      title: "Edificación y obra civil | Constructora FELFER",
      description:
        "Edificación, cimentaciones, estructuras y obra civil para proyectos institucionales, comerciales e industriales en México.",
    },
  },
  {
    slug: "obras-de-drenaje",
    title: "Obras de drenaje",
    shortTitle: "Drenaje",
    description:
      "Obras de drenaje pluvial y sanitario, alcantarillas, cunetas, canalizaciones y soluciones hidráulicas para infraestructura.",
    intro:
      "Las obras de drenaje son esenciales para proteger carreteras, plataformas, urbanizaciones y taludes. FELFER ejecuta soluciones pluviales y sanitarias, alcantarillas, cunetas, canalizaciones y trabajos complementarios para conducir agua, reducir erosión y mejorar la vida útil de la infraestructura.",
    keywords: ["obras de drenaje", "alcantarillas", "cunetas", "drenaje pluvial"],
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Obras de drenaje para infraestructura vial",
    includes: ["Alcantarillas", "Cunetas", "Canalizaciones", "Drenaje pluvial", "Obras complementarias"],
    applies: ["Carreteras", "Urbanización", "Taludes", "Plataformas", "Infraestructura pública"],
    methods: ["Revisión hidráulica", "Preparación", "Construcción", "Integración con vialidad o talud"],
    faq: [
      {
        question: "¿Por qué es importante el drenaje en taludes?",
        answer:
          "Porque el control de agua ayuda a reducir erosión, saturación y condiciones que pueden afectar la estabilidad.",
      },
      {
        question: "¿Se puede integrar drenaje con carreteras?",
        answer:
          "Sí. Las obras de drenaje suelen ejecutarse como parte de proyectos carreteros y conservación vial.",
      },
    ],
    metadata: {
      title: "Obras de drenaje para infraestructura | FELFER",
      description:
        "Obras de drenaje pluvial y sanitario, alcantarillas, cunetas y canalizaciones para carreteras, taludes y urbanización.",
    },
  },
  {
    slug: "terracerias",
    title: "Terracerías",
    shortTitle: "Terracerías",
    description:
      "Terracerías, movimiento de tierras, cortes, terraplenes, compactación y preparación de plataformas para obra civil.",
    intro:
      "FELFER ejecuta terracerías y movimiento de tierras para preparar plataformas, vialidades y frentes de infraestructura. Los trabajos pueden incluir cortes, terraplenes, nivelación, compactación y coordinación con drenaje, pavimentos o estabilización según las condiciones del terreno.",
    keywords: ["terracerías", "movimiento de tierras", "cortes", "terraplenes", "compactación"],
    image: "services/terracerias/hero-terracerias.jpg",
    alt: "Terracerias y movimiento de tierras para habilitacion de obra",
    includes: ["Cortes", "Terraplenes", "Nivelación", "Compactación", "Preparación de plataformas"],
    applies: ["Carreteras", "Urbanización", "Edificación", "Plataformas industriales"],
    methods: ["Trazo", "Movimiento de tierras", "Compactación", "Control y entrega"],
    faq: [
      {
        question: "¿Qué son las terracerías?",
        answer:
          "Son los trabajos de corte, relleno, nivelación y compactación necesarios para preparar el terreno de una obra.",
      },
      {
        question: "¿Se coordinan con pavimentos?",
        answer:
          "Sí. Las terracerías suelen ser la base para pavimentación, urbanización y proyectos carreteros.",
      },
    ],
    metadata: {
      title: "Terracerías y movimiento de tierras | FELFER",
      description:
        "Terracerías, movimiento de tierras, cortes, terraplenes y compactación para carreteras, urbanización y obra civil.",
    },
  },
  {
    slug: "estructuras",
    title: "Estructuras",
    shortTitle: "Estructuras",
    description:
      "Estructuras de concreto, cimentaciones, contención y elementos estructurales para infraestructura y edificación.",
    intro:
      "FELFER ejecuta estructuras y elementos de contención para obra civil, infraestructura y edificación. El alcance puede incluir cimentaciones, estructuras de concreto, muros de contención, elementos complementarios y coordinación con terracerías, drenaje o urbanización.",
    keywords: ["estructuras", "estructuras de concreto", "cimentaciones", "muros de contención"],
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Estructuras y contencion para obra civil e infraestructura",
    includes: ["Cimentaciones", "Estructuras de concreto", "Muros de contención", "Elementos complementarios"],
    applies: ["Infraestructura", "Edificación", "Taludes", "Urbanización"],
    methods: ["Revisión de alcance", "Preparación", "Ejecución estructural", "Cierre técnico"],
    faq: [
      {
        question: "¿Qué estructuras atiende FELFER?",
        answer:
          "Elementos de concreto, cimentaciones, contención y estructuras complementarias para obra civil e infraestructura.",
      },
      {
        question: "¿Se relaciona con estabilización de taludes?",
        answer:
          "Sí. En algunos proyectos pueden integrarse muros de contención, gaviones u otras soluciones estructurales.",
      },
    ],
    metadata: {
      title: "Estructuras de concreto y contención | FELFER",
      description:
        "Estructuras de concreto, cimentaciones, muros de contención y elementos estructurales para infraestructura y obra civil.",
    },
  },
];

export const featuredServices = services.filter((service) => service.featured);

export const projects = [
  {
    name: "Autopista Mitla - Oaxaca",
    service: "Estabilización de taludes",
    location: "Oaxaca",
    image: "projects/autopista-mitla-oaxaca.jpg",
    alt: "Proyecto carretero Mitla Oaxaca con trabajos de taludes",
    summary:
      "Estabilización de taludes y obras de drenaje en tramos críticos para garantizar la seguridad vial en zona montañosa.",
  },
  {
    name: "Corredor Costero Nayarit",
    service: "Carreteras",
    location: "Nayarit",
    image: "projects/corredor-costero-nayarit.jpg",
    alt: "Proyecto de infraestructura en corredor costero Nayarit",
    summary:
      "Construcción de puentes, pasos a desnivel y obra vial estratégica para fortalecer la conectividad turística y regional.",
  },
  {
    name: "Autopista Durango - Mazatlán",
    service: "Estabilización de taludes",
    location: "Sinaloa / Durango",
    image: "projects/autopista-durango-mazatlan.jpg",
    alt: "Proyecto carretero Durango Mazatlan con trabajos de estabilizacion",
    summary:
      "Aplicación de concreto lanzado y anclajes profundos en cortes geológicos complejos de la Sierra Madre Occidental.",
  },
  {
    name: "Autopista Atizapán - Atlacomulco",
    service: "Terracerías",
    location: "Estado de México",
    image: "projects/autopista-atizapan-atlacomulco.jpg",
    alt: "Proyecto carretero Atizapan Atlacomulco",
    summary:
      "Movimiento de tierras a gran escala y conformación de terraplenes para nueva ruta troncal.",
  },
  {
    name: "Urbanización de desarrollo habitacional",
    service: "Urbanización",
    location: "Hidalgo",
    image: "services/urbanizacion/hero-urbanizacion.jpeg",
    alt: "Obra de urbanizacion para desarrollo habitacional",
    summary:
      "Ejecución de vialidades, guarniciones, banquetas, redes hidráulicas y preparación integral del terreno para desarrollo urbano.",
  },
  {
    name: "Obras de drenaje pluvial en infraestructura vial",
    service: "Obras de drenaje",
    location: "México",
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Obras de drenaje pluvial para infraestructura vial",
    summary:
      "Construcción de sistemas de captación, conducción y desalojo de agua para proteger vialidades y zonas de operación.",
  },
  {
    name: "Estructuras para obra civil",
    service: "Estructuras",
    location: "México",
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Estructuras de concreto y acero para obra civil",
    summary:
      "Ejecución de elementos estructurales de concreto y acero para proyectos de infraestructura, edificación y obras complementarias.",
  },
  {
    name: "Edificación institucional y comercial",
    service: "Edificación",
    location: "México",
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Edificacion institucional y comercial",
    summary:
      "Construcción, ampliación y adecuación de espacios funcionales para proyectos comerciales, institucionales y de infraestructura pública.",
  },
];

export type Project = (typeof projects)[number];

export function imageUrl(path: string) {
  return `${site.imageBase}/${path}`;
}

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
