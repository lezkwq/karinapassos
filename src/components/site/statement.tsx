import { Reveal } from "./reveal";

/** Grande intervenção tipográfica, no ritmo de página dupla de revista. */
export function Statement() {
  return (
    <section className="overflow-hidden bg-primary py-20 text-primary-foreground md:py-32">
      <div className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <p className="font-display text-[clamp(2.5rem,7vw,7rem)] leading-[0.92]">
              Cabelo.
              <br />
              Unhas.
              <br />
              Terapia capilar.
              <br />
              Beleza.
            </p>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-4" delay={160}>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-primary-foreground/80">
              Cuidado em cada detalhe.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-16 select-none md:mt-28" aria-hidden="true">
        <div className="marquee-track flex w-max">
          {[0, 1].map((key) => (
            <span
              key={key}
              className="font-display flex shrink-0 gap-[0.35em] pr-[0.35em] whitespace-nowrap text-[clamp(4rem,16vw,15rem)] leading-none text-primary-foreground/25"
            >
              <span>Cuidado</span>
              <span>Beleza</span>
              <span>Acolher</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Apresentação institucional em composição assimétrica. */
export function Manifesto() {
  return (
    <section id="sobre" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="label-xs text-muted-foreground lg:col-span-2">O salão</Reveal>

        <div className="lg:col-span-7">
          <Reveal>
            <h2 className="font-display text-[clamp(1.75rem,4.2vw,3.75rem)] leading-[1.02] text-foreground">
              Cada pessoa tem necessidades diferentes.
              <br />
              <span className="text-primary">Cada cuidado merece atenção.</span>
            </h2>
          </Reveal>
          <Reveal variant="rule" className="mt-10 h-px w-full bg-foreground/20" />
        </div>

        <div className="flex flex-col gap-6 lg:col-span-3 lg:pt-2">
          <Reveal delay={120}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              O Salão de Beleza Karina Passos reúne diferentes profissionais e serviços em um
              espaço dedicado à beleza, ao cuidado e ao bem-estar.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Da terapia capilar aos penteados, cada atendimento começa com escuta e atenção às
              necessidades de quem chega.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
