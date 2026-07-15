import type { MetadataRoute } from "next";
import { projectDetailProjects, services, site } from "@/data/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "/",
    "/servicios",
    "/proyectos",
    "/nosotros",
    "/contacto",
    ...services.map((service) => `/servicios/${service.slug}`),
    ...projectDetailProjects.map((project) => `/proyectos/${project.slug}`),
  ];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route.includes("estabilizacion-de-taludes") ? 0.9 : 0.7,
  }));
}
