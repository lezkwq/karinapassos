import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_FACHADA } from "./photos";
import { WHATSAPP_GERAL } from "./contact";

const FACTS = ["4,8 no Google", "339 avaliações", "Desde 2008", "Velha, Blumenau"] as const;

export function Hero() {
  return (
    <section id="topo" className="px-6 pb-14 pt-20 md:px-10 md:pb-20 md:pt-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs flex flex-wrap gap-x-6 gap-y-1 text-muted-foreground md:gap-y-4">
          <span>Point da Beleza</span>
          <span>Blumenau, SC</span>
          <span>Desde 2008</span>
        </Reveal>

        <div className="mt-6 grid grid-cols-1 gap-10 md:mt-10 lg:grid-cols-12 lg:gap-8">
          <Reveal className="lg:col-span-9" delay={80}>
            <h1 className="font-display text-[clamp(3.5rem,10.5vw,10rem)] leading-[0.85] tracking-tight text-foreground md:leading-[0.88] md:tracking-normal">
              <span className="block">Um salão</span>
              <span className="block">
                <em className="not-italic text-primary">completo.</em>
              </span>
              <span className="block pl-[6%] md:pl-[14%]">Um tempo</span>
              <span className="block pl-[6%] md:pl-[14%]">só seu.</span>
            </h1>
          </Reveal>

          <Reveal className="flex flex-col justify-end lg:col-span-3" delay={220}>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Cabelo, unhas, estética, podologia, spa e produção para noivas. Tudo no mesmo
              endereço, na Velha, em Blumenau.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={WHATSAPP_GERAL}
                target="_blank"
                rel="noreferrer"
                className="label-xs rounded-full bg-primary px-6 py-3.5 text-center text-primary-foreground transition-opacity hover:opacity-90"
              >
                Agendar horário
              </a>
              <a
                href="#servicos"
                className="label-xs rounded-full border border-foreground/25 px-6 py-3.5 text-center text-foreground transition-colors hover:border-foreground"
              >
                Conhecer serviços
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal variant="rule" className="mt-16 h-px w-full bg-foreground/20 md:mt-24" />

        <div className="grid grid-cols-2 gap-y-6 pt-6 md:grid-cols-4">
          {FACTS.map((fact, i) => (
            <Reveal key={fact} delay={i * 90} className="label-xs text-muted-foreground">
              {fact}
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:mt-32 lg:grid-cols-12">
          <EditorialPhoto
            photo={PHOTO_FACHADA}
            priority
            className="lg:col-span-5 lg:col-start-2"
            frameClassName="aspect-[4/5] md:aspect-[3/4]"
            objectPosition="38% 22%"
            caption="Rua Amazonas, Velha — Blumenau"
          />
          <Reveal className="flex items-end lg:col-span-4 lg:col-start-9" delay={160}>
            <p className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
              O endereço é o mesmo há mais de quinze anos.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
