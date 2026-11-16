import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import { WHATSAPP_GERAL } from "./contact";

const NAV = [
  { label: "Serviços", href: "#servicos" },
  { label: "O salão", href: "#salao" },
  { label: "Karina", href: "#karina" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || open ? "border-b border-border bg-background" : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:h-20 md:px-10">
        <a href="#topo" className="label-xs text-foreground" onClick={() => setOpen(false)}>
          Karina Passos
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label-xs text-foreground/70 transition-colors hover:text-primary focus-visible:text-primary focus-visible:outline-none"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            className="label-xs rounded-full bg-primary px-5 py-2.5 text-primary-foreground transition-opacity hover:opacity-90"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="label-xs text-foreground lg:hidden"
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 lg:hidden",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <nav className="flex flex-col px-6 pb-10 pt-4" aria-label="Navegação mobile">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-display border-b border-border py-4 text-3xl text-foreground"
            >
              {item.label}
            </a>
          ))}
          <a
            href={WHATSAPP_GERAL}
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="label-xs mt-8 rounded-full bg-primary px-6 py-4 text-center text-primary-foreground"
          >
            Agendar pelo WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
