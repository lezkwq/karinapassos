import { Reveal } from "./reveal";
import type { Photo } from "./photos";
import { cn } from "@/lib/utils";

interface EditorialPhotoProps {
  photo: Photo;
  /** Classe de proporção/altura do container (recortes diferentes por breakpoint). */
  className?: string;
  /** Ponto focal do recorte, para preservar o assunto principal. */
  objectPosition?: string;
  /** Legenda curta, no tom editorial da página. */
  caption?: string;
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
  objectPosition = "center",
  caption,
  delay = 0,
  priority = false,
}: EditorialPhotoProps) {
  return (
    <Reveal delay={delay} className={cn("w-full", className)}>
      <figure className="w-full">
        <div className="w-full overflow-hidden bg-secondary">
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
          <figcaption className="label-xs mt-4 text-muted-foreground">{caption}</figcaption>
        ) : null}
      </figure>
    </Reveal>
  );
}
