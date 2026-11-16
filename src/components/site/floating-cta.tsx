import whatsappIcon from "@/assets/icon-whatsapp.png";
import { WHATSAPP_GERAL } from "./contact";

/** Atalho discreto e persistente para o principal canal de agendamento. */
export function FloatingCta() {
  return (
    <div className="fixed inset-x-4 bottom-4 z-40 md:inset-x-auto md:bottom-6 md:right-6">
      <a
        href={WHATSAPP_GERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className="label-xs flex items-center justify-center gap-3 rounded-full border border-background/20 bg-ink px-6 py-4 text-background transition-opacity hover:opacity-90"
      >
        <span
          aria-hidden="true"
          className="inline-block h-4 w-4 bg-current"
          style={{
            WebkitMaskImage: `url(${whatsappIcon})`,
            maskImage: `url(${whatsappIcon})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
        Agendar pelo WhatsApp
      </a>
    </div>
  );
}
