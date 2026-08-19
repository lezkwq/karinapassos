import { Reveal } from "./reveal";
import { SocialLinks } from "./social";
import { ADDRESS_LINES, MAPS_URL, WHATSAPP_GERAL } from "./contact";

export function Location() {
  return (
    <section id="contato" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Onde encontrar</Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-8 text-[clamp(2.5rem,9vw,8rem)] leading-[0.9] text-foreground">
            Na Velha.
            <br />
            <span className="pl-[8%] block">Em Blumenau.</span>
          </h2>
        </Reveal>

        <Reveal variant="rule" className="mt-16 h-px w-full bg-foreground/20" />

        <div className="grid grid-cols-1 gap-10 pt-10 md:grid-cols-3">
          <Reveal>
            <p className="label-xs text-muted-foreground">Endereço</p>
            <address className="mt-5 text-base not-italic leading-relaxed text-foreground">
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
          </Reveal>

          <Reveal delay={200}>
            <p className="label-xs text-muted-foreground">Horários</p>
            <div className="mt-5 text-base leading-relaxed text-foreground">
              <p>Terça a sexta</p>
              <p className="text-muted-foreground">09h às 20h30</p>
              <p className="mt-3">Sábado</p>
              <p className="text-muted-foreground">08h30 às 18h</p>
            </div>
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
            Agendar horário
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden bg-[var(--ink)] px-6 pb-12 pt-20 text-[var(--background)] md:px-10 md:pt-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <p className="font-display text-[clamp(3rem,14vw,13rem)] leading-[0.82]">
            Point
            <br />
            da Beleza
          </p>
        </Reveal>

        <Reveal variant="rule" className="mt-14 h-px w-full bg-[var(--background)]/25" />

        <div className="grid grid-cols-1 gap-8 pt-8 md:grid-cols-2">
          <Reveal className="label-xs text-[var(--background)]/60">
            Cabelo / Unhas / Estética / Spa / Noivas / Podologia
          </Reveal>
          <Reveal
            className="label-xs flex flex-wrap gap-x-8 gap-y-2 text-[var(--background)]/60 md:justify-end"
            delay={120}
          >
            <span>Blumenau, SC</span>
            <SocialLinks iconClassName="h-5 w-5 text-[var(--background)]/70 hover:text-[var(--background)]" className="gap-6" />
            <span>Desde 2008</span>
          </Reveal>
        </div>
      </div>
    </footer>
  );
}
