import { Reveal } from "./reveal";
import { ReviewCarousel } from "./review-carousel";
import { WHATSAPP_GERAL } from "./contact";

export function Reviews() {
  return (
    <section id="avaliacoes" className="pb-20 md:pb-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <Reveal className="label-xs text-muted-foreground">Quem vem, conta</Reveal>

        <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
          <Reveal delay={80}>
            <p className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.8] text-primary">
              4,8
            </p>
          </Reveal>
          <Reveal className="pb-4" delay={160}>
            <p className="text-2xl tracking-[0.18em] text-primary" aria-label="4,8 de 5 estrelas">
              <span aria-hidden="true">★★★★★</span>
            </p>
            <p className="label-xs mt-4 text-muted-foreground">
              No Google
              <br />
              89 avaliações
            </p>
          </Reveal>
        </div>

        <Reveal variant="rule" className="mt-14 h-px w-full bg-foreground/20" />
      </div>

      <Reveal className="mt-12" delay={100}>
        <ReviewCarousel />
      </Reveal>

      <div className="mx-auto mt-12 flex max-w-[1600px] justify-center px-6 md:px-10">
        <Reveal delay={120}>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            className="label-xs inline-block rounded-full border border-foreground/30 px-8 py-4 text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Quero conhecer o salão
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/** Bloco final de conversão. */
export function Conversion() {
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10 md:py-40">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.92]">
            Já sabe o que
            <br />
            quer cuidar hoje?
          </h2>
        </Reveal>
        <Reveal className="flex flex-col justify-end lg:col-span-4" delay={140}>
          <p className="text-sm leading-relaxed text-primary-foreground/85">
            Escolha seu próximo momento de cuidado e fale com nossa equipe.
          </p>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            className="label-xs mt-8 inline-block rounded-full bg-background px-8 py-4 text-center text-foreground transition-opacity hover:opacity-90"
          >
            Agendar pelo WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  );
}
