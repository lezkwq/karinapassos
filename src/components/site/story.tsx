import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import {
  PHOTO_AVALIACAO,
  PHOTO_CABELO_LISO,
  PHOTO_CABELO_ONDAS,
  PHOTO_KARINA,
} from "./photos";
import { WHATSAPP_AVALIACAO, WHATSAPP_GERAL } from "./contact";

/** Bloco institucional sobre a abordagem individualizada. */
export function Story() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-[clamp(3.5rem,10vw,9rem)] leading-[0.84] text-primary">
            O cuidado
            <br />
            pela raiz.
          </p>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-7">
          <Reveal delay={120}>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
              Atenção antes de cada escolha.
            </h2>
          </Reveal>
          <Reveal variant="rule" className="mt-8 h-px w-full bg-foreground/20" />
          <Reveal delay={180}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Cada pessoa tem necessidades diferentes. Por isso, o cuidado capilar começa com
              atenção, avaliação individualizada e uma abordagem personalizada.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" delay={260}>
          <p className="text-sm leading-relaxed text-muted-foreground lg:pt-24">
            Um cuidado que respeita a história, os fios e as necessidades de cada cliente.
          </p>
        </Reveal>

        <EditorialPhoto
          photo={PHOTO_CABELO_LISO}
          className="mt-14 lg:col-span-6 lg:col-start-7 lg:mt-24"
          frameClassName="aspect-[4/5] md:aspect-[16/10]"
          objectPosition="50% 45%"
          caption="Cuidado individualizado em cada atendimento"
          delay={120}
        />
      </div>
    </section>
  );
}

/** Terapia capilar em um bloco de cor, sem promessas de resultado. */
export function Therapy() {
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-primary-foreground/70">Terapia capilar</Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-10 max-w-5xl text-[clamp(2.25rem,7vw,6rem)] leading-[0.95]">
            Seu cabelo merece
            <br />
            atenção desde
            <br />
            a raiz.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 md:mt-28 lg:grid-cols-12">
          <EditorialPhoto
            photo={PHOTO_AVALIACAO}
            className="lg:col-span-6"
            frameClassName="aspect-[4/5] lg:aspect-[3/4]"
            objectPosition="50% 45%"
            caption="Atenção às necessidades do couro cabeludo e dos fios"
            captionClassName="text-primary-foreground/70"
            delay={80}
          />
          <Reveal className="flex flex-col justify-end lg:col-span-4 lg:col-start-8" delay={160}>
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              Tricoscopia e avaliação personalizada para compreender melhor as necessidades do
              couro cabeludo e dos fios.
            </p>
          </Reveal>
          <Reveal className="flex items-end lg:col-span-3 lg:col-start-8" delay={240}>
            <a
              href={WHATSAPP_AVALIACAO}
              target="_blank"
              rel="noreferrer"
              className="label-xs inline-block border-b border-primary-foreground/50 pb-2 transition-colors hover:border-primary-foreground"
            >
              Agendar avaliação capilar
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Karina e o cuidado com cada cliente, com retrato em destaque. */
export function Karina() {
  return (
    <section id="karina" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Karina Passos</Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={80}>
            <h2 className="font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.94] text-foreground">
              Cada pessoa
              <br />
              tem sua beleza.
              <br />
              <span className="text-primary">Cada cuidado</span>
              <br />
              tem sua importância.
            </h2>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
            <Reveal delay={140}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                Karina Passos atua com terapia capilar e avaliação personalizada, valorizando a
                atenção às necessidades de cada cliente e o cuidado individualizado.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <a
                href={WHATSAPP_GERAL}
                target="_blank"
                rel="noreferrer"
                className="label-xs mt-10 inline-block border-b border-foreground/40 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Conversar com a equipe
              </a>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-28 lg:grid-cols-12 lg:gap-8">
          <EditorialPhoto
            photo={PHOTO_KARINA}
            className="lg:col-span-6 lg:col-start-2"
            frameClassName="aspect-[4/5]"
            objectPosition="50% 24%"
            caption="Karina Passos — Terapeuta Capilar"
            delay={80}
          />
          <EditorialPhoto
            photo={PHOTO_CABELO_ONDAS}
            className="lg:col-span-3 lg:col-start-10 lg:pt-40"
            frameClassName="aspect-[3/4]"
            objectPosition="50% 45%"
            delay={200}
          />
        </div>
      </div>
    </section>
  );
}
