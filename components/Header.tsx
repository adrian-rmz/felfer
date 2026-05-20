"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { imageUrl, services } from "@/data/site";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [hasLeftHero, setHasLeftHero] = useState(false);

  useEffect(() => {
    if (!isHome) {
      setHasLeftHero(false);
      return;
    }

    const updateNavState = () => {
      const heroTitle = document.querySelector<HTMLElement>(".hero h1");
      const nav = document.querySelector<HTMLElement>(".nav");
      const navHeight = nav?.offsetHeight ?? 96;

      const threshold = heroTitle
        ? heroTitle.getBoundingClientRect().top + window.scrollY - navHeight
        : 80;

      setHasLeftHero(window.scrollY >= threshold);
    };

    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
    window.addEventListener("resize", updateNavState);

    return () => {
      window.removeEventListener("scroll", updateNavState);
      window.removeEventListener("resize", updateNavState);
    };
  }, [isHome]);

  return (
    <header
      className={`nav ${isHome ? "nav-home" : "nav-solid"} ${hasLeftHero ? "nav-home-scrolled" : ""}`}
    >
      <div className="container nav-inner">
        <nav
          className="nav-links nav-links-left"
          aria-label="Navegación principal izquierda"
        >
          <Link href="/nosotros">Nosotros</Link>
          <Link href="/proyectos">Proyectos</Link>
        </nav>

        <Link className="brand nav-brand-center" href="/">
          <Image
            className="brand-logo"
            src={imageUrl("brand/felfer-logo.png")}
            alt="FELFER"
            width={120}
            height={79}
            priority
          />
        </Link>

        <nav
          className="nav-links nav-links-right"
          aria-label="Navegación principal derecha"
        >
          <div className="nav-item">
            <button className="nav-trigger" type="button">
              <span>Servicios</span>
              <svg
                className="nav-chevron"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M5 7.5 10 12.5 15 7.5" />
              </svg>
            </button>
            <div className="nav-dropdown">
              <Link className="nav-dropdown-featured" href="/servicios">
                <span>Ver todos los servicios</span>
              </Link>
              {services.map((service) => (
                <a key={service.slug} href={`/servicios/${service.slug}`}>
                  {service.title}
                </a>
              ))}
            </div>
          </div>
          <Link className="nav-item" href="/contacto">
            Cotizar
          </Link>
        </nav>
      </div>
    </header>
  );
}
