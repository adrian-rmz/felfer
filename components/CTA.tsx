import Link from "next/link";

type CTAProps = {
  title: string;
  text: string;
  primary?: string;
};

export function CTA({ title, text, primary = "Solicitar cotización" }: CTAProps) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-panel">
          <h2>{title}</h2>
          <p>{text}</p>
          <div className="actions" style={{ justifyContent: "center" }}>
            <Link className="button button-on-dark" href="/contacto">
              {primary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
