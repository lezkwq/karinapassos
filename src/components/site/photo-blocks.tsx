import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_LAVATORIOS, PHOTO_SALAO } from "./photos";

/**
 * Fotografia dos lavatórios em grande proporção, respeitando a simetria da imagem.
 * Bloco de largura controlada — não é full bleed, mantém a margem editorial.
 */
export function LavatoriosBlock() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <EditorialPhoto
          photo={PHOTO_LAVATORIOS}
          frameClassName="aspect-[3/4] sm:aspect-[16/9] lg:aspect-[21/9]"
          objectPosition="center 45%"
        />
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="label-xs lg:col-span-4 text-muted-foreground" delay={80}>
            Lavatórios
          </Reveal>
          <Reveal className="lg:col-span-4 lg:col-start-9" delay={140}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Uma estrutura pensada para o tempo que se passa aqui dentro.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Vista ampla do salão, usada como fotografia institucional entre blocos de texto. */
export function SalaoBlock() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="flex flex-col justify-end lg:col-span-4">
          <h2 className="font-display text-[clamp(1.75rem,4vw,3.25rem)] leading-[1.05] text-foreground">
            Um espaço
            <br />
            inteiro, de
            <br />
            ponta a ponta.
          </h2>
        </Reveal>
        <EditorialPhoto
          photo={PHOTO_SALAO}
          className="lg:col-span-7 lg:col-start-6"
          frameClassName="aspect-[4/5] md:aspect-[4/3]"
          objectPosition="50% 62%"
          caption="Salão — Velha, Blumenau"
          delay={120}
        />
      </div>
    </section>
  );
}
