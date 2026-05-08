import { clients } from "@/data/site";

export function ClientLogos() {
  return (
    <section className="clients">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Confían en nosotros
        </p>
        <div className="client-list">
          {clients.map((client) => (
            <div className="client-name" key={client.name}>
              {client.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
