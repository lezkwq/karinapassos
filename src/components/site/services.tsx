import { Reveal } from "./reveal";

interface Service {
  number: string;
  name: string;
  description: string;
}

const SERVICES: readonly Service[] = [
  { number: "01", name: "Cabelo", description: "Corte, cor, mechas, tratamentos e penteados." },
  {
    number: "02",
    name: "Unhas",
    description: "Manicure, pedicure, esmaltação em gel e alongamento.",
  },
  { number: "03", name: "Estética", description: "Cuidados e procedimentos para rosto e corpo." },
  {
    number: "04",
    name: "Podologia",
    description: "Uma sala dedicada ao cuidado e à saúde dos pés.",
  },
  { number: "05", name: "Spa", description: "Tempo para desacelerar, relaxar e cuidar de você." },
  {
    number: "06",
    name: "Visagismo",
    description: "Consultoria para escolhas que respeitam seus traços, estilo e rotina.",
  },
  {
    number: "07",
    name: "Noivas",
    description: "Cabelo, maquiagem e preparação para viver o grande dia com calma.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="px-6 pb-20 md:px-10 md:pb-32">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <Reveal className="label-xs text-muted-foreground lg:col-span-4">
            O que você encontra aqui
          </Reveal>
          <Reveal className="lg:col-span-8" delay={100}>
            <h2 className="font-display text-[clamp(2.5rem,7vw,6.5rem)] leading-[0.94] text-foreground">
              Seu Point,
              <br />
              do cabelo
              <br />
              <span className="text-primary">ao spa.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 md:mt-24">
          {SERVICES.map((service, i) => (
            <li key={service.number}>
              <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
              <Reveal delay={i * 60}>
                <div className="group grid grid-cols-1 items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6 md:py-9">
                  <span className="label-xs text-muted-foreground md:col-span-1">
                    {service.number}
                  </span>
                  <h3 className="font-display text-[clamp(2rem,5vw,4rem)] leading-none text-foreground transition-transform duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-7">
                    {service.name}
                  </h3>
                  <p className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-4">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
      </div>
    </section>
  );
}
