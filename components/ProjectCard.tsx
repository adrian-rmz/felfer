import Link from "next/link";
import { ImageFrame } from "@/components/ImageFrame";
import type { Project } from "@/data/site";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const card = (
    <article className="project-card">
      <ImageFrame src={project.image} alt={project.alt} />
      <div className="project-card-body">
        <span className="project-type">{project.service}</span>
        <h3>{project.name}</h3>
        <div className="project-meta">
          <span className="project-location">{project.location}</span>
          {project.date ? <span className="project-date">{project.date}</span> : null}
        </div>
        {project.date ? null : <p>{project.summary}</p>}
      </div>
    </article>
  );

  if (!project.detailEnabled || !project.slug) return card;

  return (
    <Link className="project-card-link" href={`/proyectos/${project.slug}`} aria-label={`Ver proyecto ${project.name}`}>
      {card}
    </Link>
  );
}
