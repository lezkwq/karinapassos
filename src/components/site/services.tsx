import { Reveal } from "./reveal";
import { EditorialPhoto } from "./photo";
import { PHOTO_CABELO_LOIRO, PHOTO_UNHAS } from "./photos";
import { serviceWhatsApp } from "./contact";
import { cn } from "@/lib/utils";

interface Service {
  number: string;
  name: string;
  description: string;
  featured?: boolean;
}

const SERVICES: readonly Service[] = [
  {
    number: "01",
    name: "Terapia capilar",
    description: "Tricoscopia e avaliação personalizada do couro cabeludo e dos fios.",
    featured: true,
  },
  { number: "02", name: "Cabelos", description: "Cuidado atento para diferentes fios e necessidades." },
  { number: "03", name: "Unhas", description: "Cuidado e esmaltação com atenção a cada detalhe." },
  {
    number: "04",
    name: "Cílios e sobrancelhas",
    description: "Beleza e cuidado para valorizar o seu olhar.",
  },
  { number: "05", name: "Penteados", description: "Produções para ocasiões especiais." },
  { number: "06", name: "Noivas", description: "Cabelo e produção para viver o grande dia." },
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
              Seu cuidado,
              <br />
              do cabelo ao
              <br />
              <span className="text-primary">bem-estar.</span>
            </h2>
          </Reveal>
        </div>

        <ul className="mt-16 md:mt-24">
          {SERVICES.map((service, index) => (
            <li key={service.number}>
              <Reveal variant="rule" className="h-px w-full bg-foreground/20" />
              <Reveal delay={index * 50}>
                <a
                  href={serviceWhatsApp(service.name.toLowerCase())}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Consultar ${service.name} pelo WhatsApp`}
                  className="group grid grid-cols-1 items-baseline gap-2 py-7 md:grid-cols-12 md:gap-6 md:py-9"
                >
                  <span className="label-xs text-muted-foreground md:col-span-1">
                    {service.number}
                  </span>
                  <h3
                    className={cn(
                      "font-display text-[clamp(2rem,5vw,4rem)] leading-none transition-transform duration-500 group-hover:translate-x-2 group-hover:text-primary md:col-span-7",
                      service.featured ? "text-primary" : "text-foreground",
                    )}
                  >
                    {service.name}
                  </h3>
                  <span className="max-w-sm text-sm leading-relaxed text-muted-foreground md:col-span-4">
                    {service.description}
                    <span className="label-xs mt-3 block text-foreground/60 transition-colors group-hover:text-primary">
                      Consultar no WhatsApp
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
        <Reveal variant="rule" className="h-px w-full bg-foreground/20" />

        <div className="mt-16 grid grid-cols-1 gap-10 md:mt-24 lg:grid-cols-12 lg:gap-8">
          <EditorialPhoto
            photo={PHOTO_CABELO_LOIRO}
            className="lg:col-span-4 lg:col-start-2"
            frameClassName="aspect-[4/5]"
            objectPosition="50% 42%"
            caption="Cabelos — cuidado em cada detalhe"
          />
          <EditorialPhoto
            photo={PHOTO_UNHAS}
            className="lg:col-span-3 lg:col-start-8 lg:pt-32"
            frameClassName="aspect-[4/5]"
            objectPosition="50% 50%"
            caption="Unhas — beleza e cuidado"
            delay={140}
          />
        </div>
      </div>
    </section>
  );
}
