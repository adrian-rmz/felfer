import { notFound } from "next/navigation";
import { ImageFrame } from "@/components/ImageFrame";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGallery } from "@/components/ServiceGallery";
import { projectBySlug, projectDetailProjects, site } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";
import { projectGalleryImages } from "@/lib/project-gallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return projectDetailProjects.map((project) => ({ slug: project.slug }));
}

type ProjectRouteProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) return {};

  return metadata({
    title: `${project.name} | Proyecto de Constructora FELFER`,
    description: project.summary,
    path: `/proyectos/${project.slug}`,
    image: `${site.imageBase}/${project.image}`,
  });
}

export default async function ProjectPage({ params }: ProjectRouteProps) {
  const { slug } = await params;
  const project = projectBySlug(slug);
  if (!project) notFound();

  const gallery = projectGalleryImages(project.slug);

  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          name: project.name,
          description: project.summary,
          provider: { "@type": "ConstructionBusiness", name: "Constructora FELFER" },
          locationCreated: project.location,
          url: `${site.url}/proyectos/${project.slug}`,
          image: `${site.imageBase}/${project.image}`,
        }}
      />
      <section className="editorial-hero">
        <div className="container editorial-grid">
          <div className="editorial-copy">
            <p className="eyebrow">Proyecto destacado</p>
            <h1>{project.name}</h1>
            <p>{project.summary}</p>
            <div className="project-detail-meta">
              <span>{project.service}</span>
              <span>{project.location}</span>
              {project.date ? <span>{project.date}</span> : null}
            </div>
          </div>
          <div className="image-panel">
            <ImageFrame src={project.image} alt={project.alt} priority />
          </div>
        </div>
      </section>

      {gallery.length > 0 ? (
        <section className="section">
          <div className="container">
            <SectionHeader
              title="Galería de obra"
              text={`Registro visual de trabajos y avances del proyecto ${project.name}.`}
            />
            <ServiceGallery images={gallery} title={project.name} primaryAlt={project.alt} />
          </div>
        </section>
      ) : null}

      <section className="cta">
        <div className="container">
          <div className="cta-panel">
            <h2>¿Listo para cotizar un proyecto similar?</h2>
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
