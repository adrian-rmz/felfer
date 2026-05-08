import { ServiceCard } from "@/components/ServiceCard";
import { services } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";

const serviceCardClasses = [
  "service-card-wide",
  "service-card-wide",
  "service-card-third",
  "service-card-third",
  "service-card-third",
  "service-card-wide",
  "service-card-wide",
];

export const generateMetadata = () =>
  metadata({
    title: "Servicios de construcción e infraestructura | Constructora FELFER",
    description:
      "Servicios de constructora en Hidalgo: estabilización de taludes, carreteras, urbanización, edificación, drenaje, terracerías y estructuras.",
    path: "/servicios",
  });

export default function ServicesPage() {
  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Servicios de construcción, infraestructura y obra civil",
          url: "https://felfer.com.mx/servicios",
        }}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Servicios de construcción, infraestructura y obra civil</h1>
          <p className="lead">
            En FELFER desarrollamos soluciones integrales de infraestructura, obra civil y
            construcción especializada para proyectos públicos y privados en México. Nuestro equipo
            participa en obras que requieren planeación técnica, control operativo y ejecución
            precisa.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-layout">
            {services.map((service, index) => (
              <ServiceCard
                className={serviceCardClasses[index]}
                key={service.slug}
                service={service}
                variant="media"
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
