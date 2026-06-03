export const site = {
  name: "Constructora FELFER",
  url: "https://felfer.com.mx",
  phone: "+52 771 688 1294",
  phoneHref: "+527716881294",
  whatsapp: "https://wa.me/527716881294",
  email: "contacto@felfer.com.mx",
  location: "Pachuca de Soto, Estado de Hidalgo, México",
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
    name: "Drenaje San Felipe Orizatlán",
    service: "Obras de drenaje",
    location: "San Felipe Orizatlán, Hidalgo",
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Obra de drenaje y saneamiento en San Felipe Orizatlan",
    date: "Junio 2015 - Abril 2016",
    summary:
      "Construcción del sistema de alcantarillado sanitario y saneamiento para la localidad de Texcatla.",
  },
  {
    name: "Autopista Mitla-Oaxaca",
    service: "Estabilización de taludes",
    location: "Oaxaca",
    image: "projects/autopista-mitla-oaxaca.jpg",
    alt: "Proyecto carretero Mitla Oaxaca con trabajos de taludes",
    date: "Diciembre 2022 - Agosto 2025",
    summary:
      "Estabilización de taludes y obras de drenaje en tramos críticos para garantizar la seguridad vial en zona montañosa.",
  },
  {
    name: "Tren Maya Campeche",
    service: "Estabilización de taludes",
    location: "Campeche",
    image: "home/proof-taludes-carretera.jpeg",
    alt: "Trabajos de estabilizacion de taludes en infraestructura carretera",
    date: "Septiembre 2023 - Enero 2025",
    summary:
      "Estabilización de taludes en la construcción de plataforma y vía del Tren Maya, tramo Chiná-Campo de Tiro.",
  },
  {
    name: "Hospital General de Tulancingo",
    service: "Edificación",
    location: "Tulancingo, Hidalgo",
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Obra de edificacion institucional y hospitalaria",
    date: "Febrero - Octubre 2015",
    summary:
      "Obra civil y acabados para la construcción del Hospital General de Tulancingo.",
  },
  {
    name: "Autopista Atizapán-Atlacomulco",
    service: "Estabilización de taludes",
    location: "Estado de México",
    image: "projects/autopista-atizapan-atlacomulco.jpg",
    alt: "Proteccion y estabilizacion de taludes en la autopista Atizapan Atlacomulco",
    date: "Agosto 2024 - Noviembre 2025",
    summary:
      "Protección y estabilización de taludes para la autopista Atizapán-Atlacomulco.",
  },
  {
    name: "Las Varas-Puerto Vallarta",
    service: "Estabilización de taludes",
    location: "Nayarit / Jalisco",
    image: "projects/corredor-costero-nayarit.jpg",
    alt: "Estabilizacion de taludes en corredor carretero Las Varas Puerto Vallarta",
    date: "Julio 2021 - Abril 2025",
    summary:
      "Estabilización de taludes de altas especificaciones en la autopista Las Varas-Puerto Vallarta.",
  },
  {
    name: "Conservación de caminos Hidalgo",
    service: "Carreteras",
    location: "Hidalgo",
    image: "services/carreteras-conservacion-vial/hero-carreteras-conservacion-vial.jpg",
    alt: "Conservacion vial en caminos del estado de Hidalgo",
    date: "Junio - Agosto 2020",
    summary:
      "Conservación de caminos en Ixmiquilpan, Santiago de Anaya y San Agustín Tlaxiaca.",
  },
  {
    name: "Mantenimiento Durango-Mazatlán",
    service: "Carreteras",
    location: "Autopista Durango-Mazatlán",
    image: "projects/autopista-durango-mazatlan.jpg",
    alt: "Mantenimiento vial en la autopista Durango Mazatlan",
    date: "Febrero 2018 - Enero 2019",
    summary:
      "Mantenimiento menor de la autopista federal de cuota Durango-Mazatlán.",
  },
  {
    name: "Carreteras alimentadoras Puebla",
    service: "Carreteras",
    location: "Puebla",
    image: "services/carreteras-conservacion-vial/detail-pavimentacion.jpeg",
    alt: "Reconstruccion de carreteras alimentadoras en Puebla",
    date: "Febrero - Noviembre 2014",
    summary:
      "Reconstrucción de tramos alimentadores en Tlaxco, Tlacuilotepec y Naupan.",
  },
  {
    name: "Rehabilitación Pachuca-Tampico",
    service: "Carreteras",
    location: "San Agustín Metzquititlán, Hidalgo",
    image: "services/carreteras-conservacion-vial/detail-frente-carretero.jpeg",
    alt: "Rehabilitacion de pavimento en carretera Pachuca Tampico",
    date: "Abril - Septiembre 2012",
    summary:
      "Atención de emergencias mediante rehabilitación de pavimento en la carretera Pachuca-Tampico.",
  },
  {
    name: "Pavimento Av. Carlos Lazo",
    service: "Urbanización",
    location: "Tepeapulco, Hidalgo",
    image: "services/urbanizacion/hero-urbanizacion.jpeg",
    alt: "Rehabilitacion de pavimento asfaltico en Ciudad Sahagun",
    date: "Mayo - Agosto 2019",
    summary:
      "Rehabilitación de pavimento asfáltico del tramo Av. Carlos Lazo-Fernando de Alva.",
  },
  {
    name: "Semaforización Ciudad Sahagún",
    service: "Urbanización",
    location: "Tepeapulco, Hidalgo",
    image: "services/urbanizacion/hero-urbanizacion.jpeg",
    alt: "Semaforizacion y señalizacion urbana en Ciudad Sahagun",
    date: "Julio - Agosto 2019",
    summary:
      "Semaforización y señalización de cuatro cruceros en Ciudad Sahagún.",
  },
  {
    name: "Redes Ciudad del Conocimiento",
    service: "Urbanización",
    location: "Hidalgo",
    image: "services/urbanizacion/hero-urbanizacion.jpeg",
    alt: "Redes subterraneas de media tension para urbanizacion",
    date: "Octubre 2014 - Abril 2015",
    summary:
      "Redes de media tensión subterráneas en la Ciudad del Conocimiento y la Cultura.",
  },
  {
    name: "Proyecto Melchor Ocampo 96",
    service: "Edificación",
    location: "Ciudad de México",
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Obra civil de edificio en Melchor Ocampo 96",
    date: "Junio 2021 - Mayo 2022",
    summary:
      "Obra civil de planta baja a nivel +15 en el proyecto Melchor Ocampo 96.",
  },
  {
    name: "Hotel turístico Ixmiquilpan",
    service: "Edificación",
    location: "Ixmiquilpan, Hidalgo",
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Construccion de hotel turistico en Ixmiquilpan",
    date: "Junio 2018 - Diciembre 2019",
    summary:
      "Construcción de hotel turístico de cuatro estrellas en Ixmiquilpan.",
  },
  {
    name: "Banco de sangre HGZMF No. 1",
    service: "Edificación",
    location: "Pachuca, Hidalgo",
    image: "services/edificacion/hero-edificacion.jpg",
    alt: "Construccion de sala de espera para banco de sangre en Pachuca",
    date: "Mayo - Julio 2014",
    summary:
      "Construcción de sala de espera del banco de sangre en el HGZMF No. 1.",
  },
  {
    name: "Subdrenaje San Luis-Rioverde",
    service: "Obras de drenaje",
    location: "San Luis Potosí-Rioverde",
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Construccion de subdrenaje y pozos de visita en carretera",
    date: "Julio 2019 - Febrero 2020",
    summary:
      "Construcción de subdrenaje, pozos de visita y renivelación de cunetas.",
  },
  {
    name: "Drenaje Coatzacoalcos",
    service: "Obras de drenaje",
    location: "Coatzacoalcos, Veracruz",
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Obras de drenaje en Coatzacoalcos Veracruz",
    date: "Septiembre 2018 - Abril 2019",
    summary:
      "Obras de drenaje en segmentos 01 y 02 del km 17 al 21.",
  },
  {
    name: "Canal 4 de Abril",
    service: "Obras de drenaje",
    location: "Baja California / Sonora",
    image: "services/obras-de-drenaje/hero-obras-drenaje.jpg",
    alt: "Construccion de canal en distrito de riego Rio Colorado",
    date: "Abril 2016",
    summary:
      "Construcción del CLD 31+478 del Canal 4 de Abril en el Distrito de Riego 014.",
  },
  {
    name: "Terraplén Pueblo Nuevo",
    service: "Terracerías",
    location: "Durango",
    image: "services/terracerias/hero-terracerias.jpg",
    alt: "Reforzamiento de terraplen en autopista Durango Mazatlan",
    date: "Febrero - Mayo 2018",
    summary:
      "Trabajos de emergencia para estabilización y reforzamiento del terraplén km 133+350.",
  },
  {
    name: "Terracerías Apulco-San Pedro",
    service: "Terracerías",
    location: "Metztitlán / Atotonilco el Grande, Hidalgo",
    image: "services/terracerias/hero-terracerias.jpg",
    alt: "Construccion de terracerias Apulco San Pedro en Hidalgo",
    date: "2016",
    summary:
      "Modernización mediante construcción de terracerías del km 29+000 al km 33+000.",
  },
  {
    name: "Circuito Exterior Mexiquense",
    service: "Terracerías",
    location: "Estado de México",
    image: "services/terracerias/hero-terracerias.jpg",
    alt: "Terracerias en Circuito Exterior Mexiquense",
    date: "Noviembre 2009 - Agosto 2011",
    summary:
      "Construcción de terracerías en Circuito Exterior Mexiquense Fase II, Tramo 2B.",
  },
  {
    name: "Terraplén Durango-Mazatlán",
    service: "Terracerías",
    location: "Autopista Durango-Mazatlán",
    image: "projects/autopista-durango-mazatlan.jpg",
    alt: "Reforzamiento de terraplen en autopista Durango Mazatlan",
    date: "Noviembre 2014 - Febrero 2016",
    summary:
      "Reforzamiento de terraplén con sección en balcón entre los km 154+000 y 155+000.",
  },
  {
    name: "Retención de caídos C.E. 413",
    service: "Estructuras",
    location: "Corregidora, Querétaro",
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Estructura para retencion de caidos en carretera estatal 413",
    date: "Diciembre 2023 - Mayo 2024",
    summary:
      "Construcción de estructura para retención de caídos en la carretera estatal 413.",
  },
  {
    name: "Entronque Atotonilco II",
    service: "Estructuras",
    location: "Atotonilco, Hidalgo",
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Construccion de entronque a desnivel Atotonilco II",
    date: "Febrero - Diciembre 2016",
    summary:
      "Construcción del entronque a desnivel Atotonilco II en la carretera Pachuca-Huejutla.",
  },
  {
    name: "Puente La Palma",
    service: "Estructuras",
    location: "Culiacán, Sinaloa",
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Construccion del puente La Palma en Culiacan Sinaloa",
    date: "Fecha no especificada",
    summary:
      "Construcción del puente La Palma con montaje de trabes y cimentación de concreto.",
  },
  {
    name: "Paso inferior Libramiento 57-D",
    service: "Estructuras",
    location: "Querétaro",
    image: "services/estructuras/hero-estructuras-contencion.jpeg",
    alt: "Proyecto de paso inferior vehicular en carretera federal 57D",
    date: "Junio 2025",
    summary:
      "Estudio y proyecto para paso inferior vehicular en el Libramiento Nororiente.",
  },
];

export type Project = (typeof projects)[number];

export function imageUrl(path: string) {
  return `${site.imageBase}/${path}`;
}

export function serviceBySlug(slug: string) {
  return services.find((service) => service.slug === slug);
}
