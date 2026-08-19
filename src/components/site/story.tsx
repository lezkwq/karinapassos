import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_RECEPCAO, PHOTO_SPA } from "./photos";
import { WHATSAPP_NOIVAS, WHATSAPP_SPA } from "./contact";

/** Bloco de história, diagramado como matéria de revista. */
export function Story() {
  return (
    <section className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="font-display text-[clamp(3.5rem,11vw,10rem)] leading-[0.84] text-primary">
            Desde
            <br />
            2008.
          </p>
        </Reveal>

        <div className="lg:col-span-4 lg:col-start-7">
          <Reveal delay={120}>
            <h2 className="font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-tight text-foreground">
              Um endereço conhecido na Velha.
            </h2>
          </Reveal>
          <Reveal variant="rule" className="mt-8 h-px w-full bg-foreground/20" />
          <Reveal delay={180}>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              O Point da Beleza está em Blumenau desde 2008. Ao longo dos anos, o espaço ampliou os
              cuidados oferecidos e hoje reúne diferentes especialidades no mesmo lugar, incluindo
              Spa, podologia e uma estrutura dedicada às noivas.
            </p>
          </Reveal>
        </div>

        <Reveal className="lg:col-span-3" delay={260}>
          <p className="text-sm leading-relaxed text-muted-foreground lg:pt-24">
            É um salão para quem vem cortar o cabelo, fazer as unhas, se preparar para uma ocasião
            especial ou simplesmente reservar um tempo para si.
          </p>
        </Reveal>

        <EditorialPhoto
          photo={PHOTO_RECEPCAO}
          className="mt-14 lg:col-span-6 lg:col-start-7 lg:mt-24"
          frameClassName="aspect-[4/5] md:aspect-[16/10]"
          objectPosition="18% 45%"
          caption="Recepção — Point da Beleza"
          delay={120}
        />
      </div>
    </section>
  );
}

/** Spa: mudança de ritmo, fundo terracota e muito ar. */
export function Spa() {
  return (
    <section className="bg-primary px-6 py-24 text-primary-foreground md:px-10 md:py-44">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-primary-foreground/70">Spa Point</Reveal>
        <Reveal delay={100}>
          <h2 className="font-display mt-10 max-w-5xl text-[clamp(2.25rem,7vw,6rem)] leading-[0.95]">
            Tem dias em que
            <br />
            o plano é só
            <br />
            desacelerar.
          </h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-12 md:mt-28">
          <Reveal className="lg:col-span-4 lg:col-start-7" delay={160}>
            <p className="text-sm leading-relaxed text-primary-foreground/85">
              O Spa do Point reúne momentos de relaxamento, autocuidado e pausa dentro do próprio
              salão.
            </p>
          </Reveal>
          <Reveal className="lg:col-span-3" delay={240}>
            <a
              href={WHATSAPP_SPA}
              target="_blank"
              rel="noreferrer"
              className="label-xs inline-block border-b border-primary-foreground/50 pb-2 transition-colors hover:border-primary-foreground"
            >
              Quero saber sobre o Spa
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** Dia da Noiva: pequena campanha editorial dentro da página. */
export function Brides() {
  return (
    <section id="noivas" className="px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="label-xs text-muted-foreground">Dia da noiva</Reveal>
        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-7" delay={80}>
            <h2 className="font-display text-[clamp(2.5rem,8vw,7rem)] leading-[0.9] text-foreground">
              O dia começa
              <br />
              antes do <span className="text-primary">sim.</span>
            </h2>
          </Reveal>
          <div className="lg:col-span-4 lg:col-start-9">
            <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
            <Reveal delay={140}>
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                A preparação também faz parte da lembrança. No Point, cabelo, maquiagem, massagem e
                uma equipe dedicada ajudam a transformar as horas antes da cerimônia em um momento
                mais tranquilo.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-6 text-sm leading-relaxed text-foreground">
                Existe uma Sala da Noiva preparada especialmente para esse dia.
              </p>
              <a
                href={WHATSAPP_NOIVAS}
                target="_blank"
                rel="noreferrer"
                className="label-xs mt-10 inline-block border-b border-foreground/40 pb-2 text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                Falar sobre o Dia da Noiva
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
