import Image from "next/image";
import { imageUrl } from "@/data/site";

type ImageFrameProps = {
  src: string;
  alt: string;
  priority?: boolean;
};

export function ImageFrame({ src, alt, priority = false }: ImageFrameProps) {
  return (
    <div className="media">
      <Image src={imageUrl(src)} alt={alt} fill sizes="(max-width: 900px) 100vw, 50vw" priority={priority} />
    </div>
  );
}
