import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Manifesto, Statement } from "@/components/site/statement";
import { Services } from "@/components/site/services";
import { Karina, Story, Therapy } from "@/components/site/story";
import { Conversion, Reviews } from "@/components/site/reviews";
import { SalaoBlock, SpaceBlock } from "@/components/site/photo-blocks";
import { Location, SiteFooter } from "@/components/site/location";
import { FloatingCta } from "@/components/site/floating-cta";

const TITLE = "Salão de Beleza Karina Passos | Terapia Capilar em Camboriú";
const DESCRIPTION =
  "Conheça o Salão Karina Passos em Camboriú. Terapia capilar, cabelos, unhas e serviços de beleza em um ambiente acolhedor. Agende pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "https://karinapassos.lovable.app/karina-passos-og.jpg" },
      { name: "twitter:image", content: "https://karinapassos.lovable.app/karina-passos-og.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />
      <main>
        <Hero />
        <Statement />
        <Manifesto />
        <Services />
        <SpaceBlock />
        <Story />
        <Therapy />
        <Karina />
        <Reviews />
        <SalaoBlock />
        <Conversion />
        <Location />
      </main>
      <SiteFooter />
      <FloatingCta />
    </div>
  );
}
