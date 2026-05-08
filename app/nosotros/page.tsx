import { ImageFrame } from "@/components/ImageFrame";
import { JsonLd, metadata } from "@/lib/seo";

const values = ["Calidad", "Seguridad", "Compromiso", "Integridad", "Trabajo en equipo", "Responsabilidad técnica"];

const equipment = [
  "Excavadoras Caterpillar 325D y 336.",
  "Motoniveladoras, retroexcavadoras y compactadores.",
  "Perforadoras, compresores y vibrocompactadores.",
  "Grúas telescópicas, plantas de asfalto y pavimentadoras.",
  "Camiones, volquetes y plataformas.",
];

export const generateMetadata = () =>
  metadata({
    title: "Nosotros | Constructora FELFER",
    description:
      "Conoce a Constructora FELFER, empresa mexicana de infraestructura y obra civil especializada en estabilización de taludes, carreteras y urbanización.",
    path: "/nosotros",
  });

export default function AboutPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Nosotros Constructora FELFER",
          url: "https://felfer.com.mx/nosotros",
        }}
      />

      <section className="page-hero">
        <div className="container">
          <h1>Nosotros</h1>
          <p className="eyebrow">Nuestra trayectoria y compromiso</p>
          <p className="lead">
            Constructora FELFER S.A. de C.V. es una empresa mexicana especializada en
            infraestructura, obra civil y construcción para proyectos públicos y privados en México.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <h2>Nuestra trayectoria y compromiso</h2>
            <p>
              Desde 2009, hemos participado en obras de estabilización de taludes, infraestructura
              vial, urbanización, edificación, drenaje, terracerías y estructuras. Nuestra
              experiencia nos permite desarrollar proyectos con planeación técnica, control
              operativo y cumplimiento en cada etapa de obra.
            </p>
            <p>
              Trabajamos con un enfoque claro: construir soluciones seguras, funcionales y duraderas
              para el desarrollo de infraestructura en México.
            </p>
          </div>
          <div className="image-panel">
            <ImageFrame
              src="home/proof-taludes-carretera.jpeg"
              alt="Trayectoria de Constructora FELFER en obra civil e infraestructura"
            />
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="content-panel">
            <h2>¿Quiénes somos?</h2>
            <p className="lead">
              Somos una constructora con experiencia en la ejecución integral de proyectos de
              construcción civil. Participamos desde la planeación y preparación del sitio hasta la
              ejecución final, coordinando recursos técnicos, maquinaria, personal especializado y
              procesos de supervisión.
            </p>
            <p className="lead">
              Nuestro trabajo está orientado a resolver necesidades de infraestructura con calidad,
              seguridad y eficiencia, manteniendo una comunicación clara con cada cliente y un
              compromiso firme con los plazos establecidos.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-header section-header-centered">
            <div>
              <h2>Misión, visión y valores</h2>
            </div>
          </div>
          <div className="split">
            <article className="content-panel">
              <h3>Misión</h3>
              <p>
                Proveer soluciones integrales de construcción, obra civil y estabilización de
                terrenos con altos estándares de calidad, seguridad y eficiencia.
              </p>
              <p>
                Contribuimos al desarrollo de infraestructura en México mediante experiencia
                técnica, equipo especializado y procesos constructivos confiables.
              </p>
            </article>
            <article className="content-panel">
              <h3>Visión</h3>
              <p>
                Ser una constructora reconocida en México por nuestra capacidad técnica,
                cumplimiento y experiencia en estabilización de taludes, infraestructura vial,
                urbanización y obra civil.
              </p>
              <p>
                Buscamos seguir participando en proyectos que impulsen el desarrollo del país,
                manteniendo un enfoque responsable, profesional y sostenible.
              </p>
            </article>
          </div>
          <div className="value-grid" style={{ marginTop: 24 }}>
            {values.map((value) => (
              <span className="value-chip" key={value}>
                {value}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <h2>Maquinaria y equipo propio</h2>
            <p>
              Contamos con maquinaria y equipo propio para ejecutar proyectos de infraestructura,
              obra civil, carreteras, urbanización y estabilización de taludes.
            </p>
            <p>
              Nuestro equipo operativo nos permite atender distintos frentes de trabajo con mayor
              control, eficiencia y capacidad de respuesta.
            </p>
            <h3>Equipos destacados</h3>
            <ul className="equipment-list">
              {equipment.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="image-panel">
            <ImageFrame src="services/terracerias/hero-terracerias.jpg" alt="Maquinaria y equipo propio FELFER" />
          </div>
        </div>
      </section>
    </main>
  );
}
