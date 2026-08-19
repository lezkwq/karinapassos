import { cn } from "@/lib/utils";
import { INSTAGRAM_URL, WHATSAPP_GERAL } from "./contact";
import instagramIcon from "@/assets/icon-instagram.png.asset.json";
import whatsappIcon from "@/assets/icon-whatsapp.png.asset.json";

/** Renderiza o PNG como máscara para que o ícone assuma a cor da composição atual. */
function MaskIcon({ src, className }: { src: string; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn("inline-block bg-current transition-opacity", className)}
      style={{
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}

export interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const icon = cn("h-5 w-5", iconClassName);

  return (
    <div className={cn("flex items-center gap-8", className)}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram do Point da Beleza"
        className="inline-flex transition-opacity hover:opacity-60"
      >
        <MaskIcon src={instagramIcon.url} className={icon} />
      </a>
      <a
        href={WHATSAPP_GERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp do Point da Beleza"
        className="inline-flex transition-opacity hover:opacity-60"
      >
        <MaskIcon src={whatsappIcon.url} className={icon} />
      </a>
    </div>
  );
}
