import { notFound } from "next/navigation";
import { FAQ } from "@/components/FAQ";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGallery } from "@/components/ServiceGallery";
import { serviceBySlug, services, site } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

const serviceGallery: Record<string, string[]> = {
  "estabilizacion-de-taludes": [
    "services/estabilizacion-de-taludes/hero-estabilizacion-taludes.jpeg",
    "services/estabilizacion-de-taludes/detail-malla-anclajes.jpeg",
    "services/estabilizacion-de-taludes/detail-talud-carretero.jpeg",
    "home/proof-taludes-carretera.jpeg",
  ],
  "carreteras-conservacion-vial": [
    "services/carreteras-conservacion-vial/hero-carreteras-conservacion-vial.jpg",
    "services/carreteras-conservacion-vial/detail-frente-carretero.jpeg",
    "services/carreteras-conservacion-vial/detail-pavimentacion.jpeg",
  ],
};

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return metadata({
    title: service.metadata.title,
    description: service.metadata.description,
    path: `/servicios/${service.slug}`,
    image: `${site.imageBase}/${service.image}`,
  });
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const gallery = serviceGallery[service.slug] ?? [service.image, "home/proof-taludes-carretera.jpeg"];

  return (
    <main className="page-shell">
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Service",
            name: service.title,
            description: service.metadata.description,
            provider: { "@type": "ConstructionBusiness", name: "Constructora FELFER" },
            areaServed: "México",
            url: `${site.url}/servicios/${service.slug}`,
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: service.faq.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: { "@type": "Answer", text: item.answer },
            })),
          },
        ]}
      />
      <section className="editorial-hero">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <p className="eyebrow">Servicio especializado</p>
            <h1>{service.title}</h1>
            <p>{service.intro}</p>
          </div>
          <div className="image-panel">
            <ImageFrame src={service.image} alt={service.alt} priority />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Galería de obra"
            text={`Una muestra visual de trabajos, procesos y soluciones aplicadas en ${service.title.toLowerCase()}.`}
          />
          <ServiceGallery images={gallery} title={service.title} primaryAlt={service.alt} />
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeader
            title="Preguntas frecuentes"
            centered
          />
          <FAQ items={service.faq} />
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <div className="cta-panel">
            <h2>¿Listo para asegurar su proyecto?</h2>
            <p>Comparte ubicación, alcance y etapa del proyecto para revisar el enfoque técnico adecuado.</p>
            <div className="actions" style={{ justifyContent: "center" }}>
              <a className="button button-on-dark" href="/contacto">
                Solicitar cotización
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
