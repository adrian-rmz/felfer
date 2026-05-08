import { services, site } from "@/data/site";
import { JsonLd, metadata } from "@/lib/seo";

export const generateMetadata = () =>
  metadata({
    title: "Contacto | Constructora FELFER",
    description:
      "Contacta a Constructora FELFER en Pachuca, Hidalgo para proyectos de infraestructura, obra civil, estabilización de taludes, carreteras y urbanización.",
    path: "/contacto",
  });

export default function ContactPage() {
  return (
    <main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contacto Constructora FELFER",
          url: "https://felfer.com.mx/contacto",
        }}
      />
      <section className="page-hero">
        <div className="container">
          <h1>Contacto</h1>
          <p className="lead">
            Comuníquese con Constructora FELFER para solicitar información sobre proyectos de
            infraestructura, obra civil, estabilización de taludes, carreteras, urbanización y
            edificación en México.
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container quote-layout">
          <div className="content-panel">
            <h2>Envíenos un mensaje</h2>
            <p>
              Comparta los datos de su proyecto y nuestro equipo se pondrá en contacto con usted.
            </p>
            <form className="form">
              <label>
                Nombre completo
                <input name="name" placeholder="Ing. Juan Pérez" />
              </label>
              <label>
                Empresa
                <input name="company" placeholder="Dependencia o constructora" />
              </label>
              <label>
                Teléfono
                <input name="phone" placeholder="+52 (55) 0000 0000" type="tel" />
              </label>
              <label>
                Correo electrónico
                <input name="email" placeholder="correo@institucion.mx" type="email" />
              </label>
              <label className="full">
                Tipo de servicio
                <select name="service" defaultValue="">
                  <option value="" disabled>
                    Seleccione un servicio
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.slug}>
                      {service.title}
                    </option>
                  ))}
                  <option value="otro">Otro</option>
                </select>
              </label>
              <label className="full">
                Mensaje
                <textarea
                  name="message"
                  placeholder="Describa brevemente la escala, ubicación y requerimientos técnicos de su proyecto..."
                />
              </label>
              <button className="button button-primary" type="submit">
                Enviar mensaje
              </button>
            </form>
          </div>

          <aside className="contact-card">
            <h2>Datos de contacto</h2>
            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-icon">T</span>
                <div>
                  <p className="contact-label">Teléfono</p>
                  <p className="contact-value">
                    <a href={`tel:${site.phone}`}>{site.phone}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">C</span>
                <div>
                  <p className="contact-label">Correo</p>
                  <p className="contact-value">
                    <a href={`mailto:${site.email}`}>{site.email}</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">W</span>
                <div>
                  <p className="contact-label">WhatsApp</p>
                  <p className="contact-value">
                    <a href={site.whatsapp}>Abrir conversación</a>
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">U</span>
                <div>
                  <p className="contact-label">Ubicación</p>
                  <p className="contact-value">{site.location}, México</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Sede en Pachuca</h2>
              <p className="lead">
                Ubicados en Pachuca, Hidalgo, atendemos proyectos de infraestructura y obra civil en
                distintas regiones de México.
              </p>
            </div>
          </div>
          <div className="map-placeholder" aria-label="Mapa de sede en Pachuca, Hidalgo">
            <span className="map-pin">F</span>
          </div>
        </div>
      </section>
    </main>
  );
}
