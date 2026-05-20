import type { Metadata } from "next";
import { Roboto, Sanchez } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd, organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const sanchez = Sanchez({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://felfer.com.mx"),
  title: {
    default: "Constructora FELFER | Infraestructura y obra civil en Hidalgo",
    template: "%s",
  },
  description:
    "Constructora en Hidalgo para infraestructura, obra civil, estabilización de taludes, carreteras, urbanización y edificación en México.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className={`${sanchez.variable} ${roboto.variable}`}>
        <JsonLd data={organizationJsonLd} />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
