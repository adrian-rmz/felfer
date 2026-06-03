import Link from "next/link";
import { services, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <div className="brand" style={{ color: "white", marginBottom: 14 }}>
            FELFER
          </div>
          <p>
            Infraestructura, obra civil y estabilización de taludes de alto nivel para el
            desarrollo de México.
          </p>
        </div>
        <div>
          <h3>Servicios</h3>
          <ul className="list">
            {services.map((service) => (
              <li key={service.slug}>
                <Link href={`/servicios/${service.slug}`}>{service.title}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Empresa</h3>
          <ul className="list">
            <li>
              <Link href="/nosotros">Sobre nosotros</Link>
            </li>
            <li>
              <Link href="/proyectos">Proyectos</Link>
            </li>
            <li>
              <Link href="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
        <div>
          <h3>Contacto</h3>
          <ul className="list">
            <li>
              {site.location}
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phoneHref}`}>{site.phone}</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">© 2024 Constructora FELFER. Todos los derechos reservados.</div>
    </footer>
  );
}
