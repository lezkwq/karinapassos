import { Reveal } from "./reveal";
import { SocialLinks } from "./social";
import {
  ADDRESS_LINES,
  BIO_URL,
  INSTAGRAM,
  INSTAGRAM_URL,
  MAPS_URL,
  PHONE_DISPLAY,
  WHATSAPP_GERAL,
} from "./contact";

export function Location() {
  return (
    <section id="contato" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Onde encontrar</Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-8 text-[clamp(2.5rem,9vw,8rem)] leading-[0.9] text-foreground">
            Santa Regina.
            <br />
            <span className="block pl-[8%]">Em Camboriú.</span>
          </h2>
        </Reveal>

        <Reveal variant="rule" className="mt-16 h-px w-full bg-foreground/20" />

        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
          <Reveal>
            <p className="label-xs text-muted-foreground">Endereço</p>
            <address className="mt-5 text-base not-italic leading-relaxed text-foreground">
              <span className="mb-2 block font-medium">Salão de Beleza Karina Passos</span>
              {ADDRESS_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </Reveal>

          <Reveal delay={120}>
            <p className="label-xs text-muted-foreground">Contato</p>
            <SocialLinks className="mt-6" iconClassName="text-foreground hover:text-primary" />
            <a
              href={BIO_URL}
              target="_blank"
              rel="noreferrer"
              className="label-xs mt-6 inline-block border-b border-foreground/30 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Ver página de links
            </a>
          </Reveal>

          <Reveal delay={200}>
            <p className="label-xs text-muted-foreground">Agendamento</p>
            <p className="mt-5 max-w-xs text-base leading-relaxed text-foreground">
              Consulte os horários disponíveis e fale com nossa equipe pelo WhatsApp.
            </p>
          </Reveal>
        </div>

        <Reveal className="mt-14 flex flex-wrap gap-x-10 gap-y-4" delay={120}>
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
            className="label-xs border-b border-foreground/40 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Abrir no Google Maps
          </a>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            className="label-xs border-b border-foreground/40 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[var(--ink)] px-6 pb-28 pt-20 text-[var(--background)] md:px-10 md:pb-12 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-display text-[clamp(3rem,14vw,13rem)] leading-[0.82]">
            Karina
            <br />
            Passos
          </p>
        </Reveal>

        <Reveal variant="rule" className="mt-14 h-px w-full bg-[var(--background)]/25" />

        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <Reveal className="label-xs text-[var(--background)]/60">
            Terapia capilar / Cabelos / Unhas / Beleza
          </Reveal>
          <Reveal
            className="label-xs flex flex-wrap gap-x-8 gap-y-3 text-[var(--background)]/60 md:justify-end"
            delay={120}
          >
            <span>Camboriú, Santa Catarina</span>
            <a href={WHATSAPP_GERAL} target="_blank" rel="noreferrer" className="hover:text-[var(--background)]">
              {PHONE_DISPLAY}
            </a>
            <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" className="hover:text-[var(--background)]">
              {INSTAGRAM}
            </a>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex items-center justify-between gap-6" delay={160}>
          <span className="label-xs text-[var(--background)]/50">Salão de Beleza Karina Passos</span>
          <SocialLinks
            iconClassName="h-5 w-5 text-[var(--background)]/70 hover:text-[var(--background)]"
            className="gap-6"
          />
        </Reveal>
      </div>
    </footer>
  );
}
