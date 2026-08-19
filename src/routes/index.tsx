import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Manifesto, Statement } from "@/components/site/statement";
import { Services } from "@/components/site/services";
import { Brides, Spa, Story } from "@/components/site/story";
import { Conversion, Reviews } from "@/components/site/reviews";
import { LavatoriosBlock, SalaoBlock } from "@/components/site/photo-blocks";
import { Location, SiteFooter } from "@/components/site/location";

const TITLE = "Point da Beleza | Salão de Beleza e Estética em Blumenau";
const DESCRIPTION =
  "Cabelo, unhas, estética, podologia, spa e produção para noivas na Velha, em Blumenau. Point da Beleza, desde 2008.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
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
        <LavatoriosBlock />
        <Story />
        <Spa />
        <Brides />
        <Reviews />
        <SalaoBlock />
        <Conversion />
        <Location />
      </main>
      <SiteFooter />
    </div>
  );
}
