import { Service } from "@/data/site";
import { ImageFrame } from "@/components/ImageFrame";

const serviceIcons: Record<string, string[]> = {
  "estabilizacion-de-taludes": ["M4 17h16", "M6 17l5-10 4 7 2-3 3 6"],
  "carreteras-conservacion-vial": ["M8 20l4-16 4 16", "M12 6v3", "M12 13v3", "M5 20h14"],
  urbanizacion: ["M4 20V9l5-4 5 4v11", "M14 20V7h6v13", "M7 12h2", "M7 16h2", "M16 11h2", "M16 15h2"],
  edificacion: ["M5 20V5h10v15", "M15 20V9h4v11", "M8 9h2", "M8 13h2", "M8 17h2"],
  "obras-de-drenaje": ["M4 8h16", "M6 8v8a6 6 0 0 0 12 0V8", "M9 13h6", "M10 17h4"],
  terracerias: ["M3 17h18", "M5 17l4-8 4 8", "M13 17l3-6 3 6"],
  estructuras: ["M5 20V6h14v14", "M5 11h14", "M10 6v14", "M14 6v14"],
};

function ServiceIcon({ slug }: { slug: string }) {
  const paths = serviceIcons[slug] ?? serviceIcons.estructuras;

  return (
    <span className="service-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" role="img">
        {paths.map((path) => (
          <path d={path} key={path} />
        ))}
      </svg>
    </span>
  );
}

export function ServiceCard({
  service,
  variant = "icon",
  className,
}: {
  service: Service;
  variant?: "icon" | "media";
  className?: string;
}) {
  if (variant === "media") {
    return (
      <article className={className ? `service-card-media ${className}` : "service-card-media"}>
        <ImageFrame src={service.image} alt={service.alt} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a className="text-link" href={`/servicios/${service.slug}`}>
          Ver servicio →
        </a>
      </article>
    );
  }

  return (
    <article className={className ? `card ${className}` : "card"}>
      <div className="card-body">
        <ServiceIcon slug={service.slug} />
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        <a className="text-link" href={`/servicios/${service.slug}`}>
          Ver servicio →
        </a>
      </div>
    </article>
  );
}
