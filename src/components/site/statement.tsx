import { Reveal } from "./reveal";

/** Grande intervenção tipográfica em terracota, no ritmo de página dupla de revista. */
export function Statement() {
  return (
    <section className="overflow-hidden bg-primary py-20 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="font-display text-[clamp(2.5rem,8vw,7.5rem)] leading-[0.92]">
              Cabelo.
              <br />
              Unhas.
              <br />
              Estética.
              <br />
              Spa.
            </p>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-4" delay={160}>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-primary-foreground/80">
              Tudo no mesmo Point.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 select-none md:mt-28" aria-hidden="true">
        <div className="flex w-[200%] marquee-track">
          {[0, 1].map((k) => (
            <span
              key={k}
              className="font-display flex w-1/2 shrink-0 justify-around text-[clamp(4rem,16vw,15rem)] leading-none text-primary-foreground/25"
            >
              <span>Point</span>
              <span>Point</span>
              <span>Point</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Manifesto curto, composição assimétrica sobre off white. */
export function Manifesto() {
  return (
    <section id="sobre" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="label-xs text-muted-foreground lg:col-span-2">O Point</Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] leading-[1.02] text-foreground">
              Tem lugar que você conhece pelo endereço.
              <br />
              <span className="text-primary">E tem lugar que você conhece pelas pessoas.</span>
            </h2>
          </Reveal>
          <Reveal variant="rule" className="mt-10 h-px w-full bg-foreground/20" />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-3 lg:pt-2">
          <Reveal delay={120}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Desde 2008, o Point faz parte da rotina de beleza de Blumenau. Um espaço que cresceu,
              ganhou novas especialidades e continua reunindo diferentes cuidados no mesmo endereço.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Cabelo, unhas, estética, podologia, spa e produção para momentos especiais. Tudo com
              uma equipe que já faz parte da história de muita gente por aqui.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
