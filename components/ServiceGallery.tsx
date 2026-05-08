"use client";

import Image from "next/image";
import { useState } from "react";
import { imageUrl } from "@/data/site";

type ServiceGalleryProps = {
  images: string[];
  title: string;
  primaryAlt: string;
};

export function ServiceGallery({ images, title, primaryAlt }: ServiceGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const activeImage = images[activeIndex] ?? images[0];

  function showPrevious() {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }

  function showNext() {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }

  if (!activeImage) return null;

  return (
    <div className="service-gallery">
      <div className="service-gallery-main">
        <button
          className="service-gallery-stage"
          onClick={() => setIsOpen(true)}
          type="button"
          aria-label={`Ampliar imagen ${activeIndex + 1} de ${images.length} de ${title}`}
        >
          <Image
            src={imageUrl(activeImage)}
            alt={activeIndex === 0 ? primaryAlt : `${title} - referencia de obra ${activeIndex + 1}`}
            fill
            sizes="(max-width: 900px) 100vw, 900px"
            priority={activeIndex === 0}
          />
          <span className="service-gallery-expand">Ampliar imagen</span>
        </button>
        <div className="service-gallery-meta">
          <span>
            {activeIndex + 1} / {images.length}
          </span>
          <span>{title}</span>
        </div>
      </div>

      <div className="service-gallery-thumbs" aria-label="Seleccionar imagen de galería">
        {images.map((image, index) => (
          <button
            className={activeIndex === index ? "service-gallery-thumb service-gallery-thumb-active" : "service-gallery-thumb"}
            key={image}
            onClick={() => setActiveIndex(index)}
            type="button"
            aria-label={`Ver imagen ${index + 1} de ${images.length}`}
          >
            <Image
              src={imageUrl(image)}
              alt=""
              fill
              sizes="120px"
            />
          </button>
        ))}
      </div>

      {isOpen ? (
        <div className="gallery-lightbox" role="dialog" aria-modal="true" aria-label={`Galería ampliada de ${title}`}>
          <button className="gallery-lightbox-backdrop" onClick={() => setIsOpen(false)} type="button" aria-label="Cerrar galería" />
          <div className="gallery-lightbox-panel">
            <button className="gallery-lightbox-close" onClick={() => setIsOpen(false)} type="button" aria-label="Cerrar galería">
              ×
            </button>
            <button className="gallery-lightbox-nav gallery-lightbox-prev" onClick={showPrevious} type="button" aria-label="Imagen anterior">
              ‹
            </button>
            <div className="gallery-lightbox-image">
              <Image
                src={imageUrl(activeImage)}
                alt={activeIndex === 0 ? primaryAlt : `${title} - referencia de obra ${activeIndex + 1}`}
                fill
                sizes="100vw"
              />
            </div>
            <button className="gallery-lightbox-nav gallery-lightbox-next" onClick={showNext} type="button" aria-label="Imagen siguiente">
              ›
            </button>
            <div className="gallery-lightbox-caption">
              <span>{title}</span>
              <span>
                {activeIndex + 1} / {images.length}
              </span>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
