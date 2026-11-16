const REVIEWS = [
  {
    name: "Giulia",
    quote:
      "Fiz unha com a Diana, e que achado incrível. Não me machucou, esmaltação impecável, além do atendimento das meninas que são extremamente atenciosas e cuidadosas, virei cliente.",
  },
  {
    name: "Kayrusan Stupp Benedito",
    quote:
      "Super atenciosa com a minha filha de 14 anos, perguntou não só como ela queria o corte mas como ela finalizava os cachos para ter uma ideia correta de como ia ficar, minha filha saiu radiante e feliz porque, como diz ela, foi ouvida.",
  },
  {
    name: "Elaine Ancini dos Santos",
    quote:
      "Salão magnífico, atendimento pontual, muito atenciosos, respeitando cada pedido como cliente. Ambiente arejado, higiene magnífica.",
  },
  {
    name: "Bruna Ferreira",
    quote:
      "Só faço meus cabelos com a Karina, corte, exoplastia e tudo que preciso, salão com profissionais capacitados e produtos de ótima qualidade.",
  },
] as const;

function ReviewGroup({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <div
      className={duplicate ? "reviews-duplicate flex shrink-0 gap-5 pr-5" : "flex shrink-0 gap-5 pr-5"}
      aria-hidden={duplicate ? "true" : undefined}
    >
      {REVIEWS.map((review) => (
        <figure
          key={review.name}
          className="flex min-h-[320px] w-[82vw] max-w-[420px] shrink-0 flex-col justify-between bg-secondary/40 p-6 md:min-h-[300px] md:w-[420px] md:p-8"
        >
          <blockquote className="font-display text-[clamp(1.35rem,2vw,1.8rem)] leading-[1.15] text-foreground">
            “{review.quote}”
          </blockquote>
          <figcaption className="label-xs mt-8 text-muted-foreground">
            {review.name} / Google
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Faixa contínua; o segundo grupo só sustenta o loop e não é lido por leitores de tela. */
export function ReviewCarousel() {
  return (
    <div
      className="reviews-viewport overflow-hidden"
      role="region"
      aria-label="Depoimentos de clientes"
      tabIndex={0}
    >
      <div className="reviews-track flex w-max">
        <ReviewGroup />
        <ReviewGroup duplicate />
      </div>
    </div>
  );
}
