"use client";

import { useMemo, useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import type { Project } from "@/data/site";

type ProjectFilterGridProps = {
  projects: Project[];
  filters: string[];
};

export function ProjectFilterGrid({ projects, filters }: ProjectFilterGridProps) {
  const [activeFilter, setActiveFilter] = useState(filters[0] ?? "Todos");

  const filteredProjects = useMemo(() => {
    if (activeFilter === "Todos") return projects;
    return projects.filter((project) => project.service === activeFilter);
  }, [activeFilter, projects]);

  return (
    <>
      <div className="filter-toolbar" aria-label="Filtro de tipo de servicio">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter ? "filter-pill filter-pill-active" : "filter-pill"}
            key={filter}
            onClick={() => setActiveFilter(filter)}
            type="button"
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid grid-2">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </>
  );
}
