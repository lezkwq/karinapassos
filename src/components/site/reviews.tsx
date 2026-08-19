import { Reveal } from "./reveal";
import { WHATSAPP_GERAL, PHONE_DISPLAY } from "./contact";

const REVIEWS = [
  { quote: "Todos os profissionais são incríveis.", name: "Mayara Polati", source: "Google" },
  { quote: "Saí muito feliz com o resultado.", name: "Yasmin", source: "Google" },
] as const;

export function Reviews() {
  return (
    <section id="avaliacoes" className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Quem vem, conta</Reveal>

        <div className="mt-8 flex flex-wrap items-end gap-x-10 gap-y-4">
          <Reveal delay={80}>
            <p className="font-display text-[clamp(5rem,18vw,16rem)] leading-[0.8] text-primary">
              4,8
            </p>
          </Reveal>
          <Reveal className="label-xs pb-4 text-muted-foreground" delay={160}>
            No Google
            <br />
            339 avaliações
          </Reveal>
        </div>

        <Reveal variant="rule" className="mt-14 h-px w-full bg-foreground/20" />

        <div className="grid grid-cols-1 gap-12 pt-12 md:grid-cols-2 md:gap-20">
          {REVIEWS.map((review, i) => (
            <Reveal key={review.name} delay={i * 140}>
              <div className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="font-display text-[clamp(3rem,6vw,5rem)] leading-[0.7] text-primary"
                >
                  &ldquo;
                </span>
                <div>
                  <blockquote className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
                    {review.quote}
                  </blockquote>
                  <p className="label-xs mt-6 text-muted-foreground">
                    {review.name} / {review.source}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
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
            Já sabe
            <br />o que quer fazer?
          </h2>
        </Reveal>
        <Reveal className="flex flex-col justify-end lg:col-span-4" delay={140}>
          <p className="text-sm leading-relaxed text-primary-foreground/85">
            Fale com o Point e consulte os horários disponíveis.
          </p>
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            className="label-xs mt-8 inline-block rounded-full bg-background px-8 py-4 text-center text-foreground transition-opacity hover:opacity-90"
          >
            Agendar pelo WhatsApp
          </a>
          <p className="label-xs mt-5 text-primary-foreground/70">{PHONE_DISPLAY}</p>
        </Reveal>
      </div>
    </section>
  );
}
