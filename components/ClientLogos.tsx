import Image from "next/image";
import { clients, imageUrl } from "@/data/site";

export function ClientLogos() {
  const carouselClients = [...clients, ...clients];

  return (
    <section className="clients">
      <div className="container">
        <p className="eyebrow" style={{ textAlign: "center" }}>
          Confían en nosotros
        </p>
        <div className="client-carousel" aria-label="Clientes de FELFER">
          <div className="client-track">
            {carouselClients.map((client, index) => (
              <div className="client-logo" key={`${client.name}-${index}`}>
                <Image
                  src={imageUrl(client.image)}
                  alt={client.alt}
                  width={180}
                  height={72}
                  sizes="(max-width: 640px) 140px, 180px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
