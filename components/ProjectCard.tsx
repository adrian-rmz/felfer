import { ImageFrame } from "@/components/ImageFrame";

type ProjectCardProps = {
  project: {
    name: string;
    service: string;
    location: string;
    image: string;
    alt: string;
    summary: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ImageFrame src={project.image} alt={project.alt} />
      <div className="project-card-body">
        <div className="project-card-top">
          <span className="project-type">{project.service}</span>
          <span className="project-location">{project.location}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.summary}</p>
      </div>
    </article>
  );
}
