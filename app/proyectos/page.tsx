import { ProjectFilterGrid } from "@/components/ProjectFilterGrid";
import { projects } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";

const projectFilters = [
  "Todos",
  "Estabilización de taludes",
  "Carreteras",
  "Urbanización",
  "Edificación",
  "Obras de drenaje",
  "Terracerías",
  "Estructuras",
];

export const generateMetadata = () =>
  metadata({
    title: "Proyectos de infraestructura y obra civil | Constructora FELFER",
    description:
      "Proyectos y referencias de infraestructura, carreteras, obra civil, estabilización de taludes y vialidad de Constructora FELFER.",
    path: "/proyectos",
  });

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Proyectos de infraestructura y obra civil",
          url: "https://felfer.com.mx/proyectos",
        }}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Proyectos de infraestructura y obra civil</h1>
          <p className="lead">
            Transformamos el paisaje nacional con ingeniería de precisión y compromiso ambiental.
            Descubre nuestra trayectoria en el desarrollo de ejes carreteros y urbanización
            inteligente.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ProjectFilterGrid projects={projects} filters={projectFilters} />
        </div>
      </section>
    </main>
  );
}
