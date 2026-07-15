import Link from "next/link";
import Image from "next/image";
import { CTA } from "@/components/CTA";
import { ClientLogos } from "@/components/ClientLogos";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceCard } from "@/components/ServiceCard";
import { featuredProjects, featuredServices, imageUrl } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";

export const generateMetadata = () =>
  metadata({
    title: "Constructora en Hidalgo para infraestructura y obra civil | FELFER",
    description:
      "Constructora FELFER: infraestructura, estabilización de taludes, carreteras, urbanización y edificación desde Pachuca, Hidalgo para México.",
    path: "/",
  });

export default function HomePage() {
  return (
    <main className="stitch-home">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Constructora FELFER",
          url: "https://felfer.com.mx/",
          description:
            "Constructora en Hidalgo para infraestructura, obra civil, estabilización de taludes, carreteras, urbanización y edificación.",
        }}
      />
      <section className="hero">
        <div className="hero-media">
          <Image
            src={imageUrl("home/hero-infraestructura-taludes.jpeg")}
            alt="Infraestructura carretera y obra civil ejecutada por FELFER"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container">
          <div className="hero-copy">
            <h1>Infraestructura, obra civil y estabilización de taludes en México</h1>
            <p className="lead">
              Soluciones de ingeniería con precisión técnica y solidez institucional. Ejecutamos
              proyectos de gran escala con altos estándares de calidad y seguridad para los sectores
              público y privado.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/contacto">
                Cotizar proyecto
              </Link>
              <Link className="button button-secondary" href="/servicios">
                Conocer especialidades
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClientLogos />

      <section className="section">
        <div className="container">
          <SectionHeader
            title="Especialidades"
            text="Capacidad técnica integral para el desarrollo nacional."
            action="Ver todos los servicios"
            href="/servicios"
          />
          <div className="grid grid-2">
            {featuredServices.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <SectionHeader
            title="Casos de éxito"
            text="Obras representativas de nuestro compromiso y capacidad técnica."
            action="Ver todos los proyectos"
            href="/proyectos"
          />
          <div className="grid grid-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      </section>

      <CTA
        title="Cotiza tu proyecto de infraestructura"
        text="Contamos con el equipo técnico y la capacidad operativa para ejecutar obras de alta complejidad estructural."
      />
    </main>
  );
}
