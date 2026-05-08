import type { Metadata } from "next";
import { site } from "@/data/site";

type SeoInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
};

export function metadata({
  title,
  description,
  path = "/",
  image = "/images/felfer/home/hero-infraestructura-taludes.jpeg",
}: SeoInput): Metadata {
  const canonical = new URL(path, site.url).toString();

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630, alt: title }],
      locale: "es_MX",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  name: site.name,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Pachuca de Soto",
    addressRegion: "Hidalgo",
    addressCountry: "MX",
  },
  areaServed: "México",
  image: `${site.url}/images/felfer/home/hero-infraestructura-taludes.jpeg`,
};
