import { Reveal } from "./reveal";
import type { Photo } from "./photos";
import { cn } from "@/lib/utils";

interface EditorialPhotoProps {
  photo: Photo;
  /** Posicionamento do bloco na grade (colunas, offsets, margens). */
  className?: string;
  /** Proporção/altura do recorte, podendo variar entre mobile e desktop. */
  frameClassName?: string;
  /** Ponto focal do recorte, para preservar o assunto principal. */
  objectPosition?: string;
  /** Legenda curta, no tom editorial da página. */
  caption?: string;
  captionClassName?: string;
  delay?: number;
  priority?: boolean;
}

/**
 * Bloco fotográfico editorial: cantos retos, sem overlay nem filtro,
 * recorte controlado por container + object-fit cover.
 */
export function EditorialPhoto({
  photo,
  className,
  frameClassName = "aspect-[4/5]",
  objectPosition = "center",
  caption,
  captionClassName,
  delay = 0,
  priority = false,
}: EditorialPhotoProps) {
  return (
    <Reveal delay={delay} className={cn("w-full", className)}>
      <figure className="w-full">
        <div className={cn("w-full overflow-hidden bg-secondary", frameClassName)}>
          <img
            src={photo.url}
            alt={photo.alt}
            loading={priority ? "eager" : "lazy"}
            decoding="async"
            style={{ objectPosition }}
            className="h-full w-full object-cover"
          />
        </div>
        {caption ? (
          <figcaption className={cn("label-xs mt-4 text-muted-foreground", captionClassName)}>
            {caption}
          </figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
