import Link from "next/link";
import { services } from "@/data/site";

export function Header() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link className="brand" href="/">
          FELFER
        </Link>
        <nav className="nav-links" aria-label="Navegación principal">
          <div className="nav-item">
            <button className="nav-trigger" type="button">
              <span>Servicios</span>
              <svg className="nav-chevron" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M5 7.5 10 12.5 15 7.5" />
              </svg>
            </button>
            <div className="nav-dropdown">
              <Link className="nav-dropdown-featured" href="/servicios">
                <span>Ver todos los servicios</span>
                <small>Especialidades de infraestructura y obra civil</small>
              </Link>
              {services.map((service) => (
                <Link key={service.slug} href={`/servicios/${service.slug}`}>
                  {service.title}
                </Link>
              ))}
            </div>
          </div>
          <Link href="/proyectos">Proyectos</Link>
          <Link href="/nosotros">Nosotros</Link>
        </nav>
        <Link className="button button-primary" href="/contacto">
          Solicitar cotización
        </Link>
      </div>
    </header>
  );
}
