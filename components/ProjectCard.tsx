import { ImageFrame } from "@/components/ImageFrame";

type ProjectCardProps = {
  project: {
    name: string;
    service: string;
    location: string;
    image: string;
    alt: string;
    summary: string;
    date?: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
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
}
