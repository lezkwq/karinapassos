import { Instagram } from "lucide-react";
import { cn } from "@/lib/utils";
import { INSTAGRAM_URL, WHATSAPP_GERAL } from "./contact";

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M21 11.5a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.7-5.2A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.6 9.1c.2-.6.5-.6.8-.6h.6c.2 0 .4 0 .6.5l.7 1.7c0 .2 0 .4-.1.5l-.5.6c-.1.2-.2.3 0 .6a7 7 0 0 0 2.9 2.4c.3.1.4 0 .6-.1l.6-.7c.2-.2.3-.2.6-.1l1.6.8c.3.1.4.3.4.5 0 .8-.6 1.6-1.4 1.8-.7.2-1.6.2-4-1.1a9 9 0 0 1-3.6-3.7c-.6-1.2-.6-2.3-.3-3.1Z" />
    </svg>
  );
}

export interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const base = cn("h-6 w-6 transition-opacity hover:opacity-60", iconClassName);

  return (
    <div className={cn("flex items-center gap-8", className)}>
      <a
        href={INSTAGRAM_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram do Point da Beleza"
        className="inline-flex"
      >
        <Instagram strokeWidth={1.4} className={base} />
      </a>
      <a
        href={WHATSAPP_GERAL}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp do Point da Beleza"
        className="inline-flex"
      >
        <WhatsAppGlyph className={base} />
      </a>
    </div>
  );
}
