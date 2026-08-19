/** Dados reais e confirmados do Point da Beleza. Não adicionar informação não verificada. */
export const PHONE_DISPLAY = "(47) 3328-2770";
export const PHONE_TEL = "+554733282770";
export const INSTAGRAM = "@pointdabelezabnu";
export const INSTAGRAM_URL = "https://instagram.com/pointdabelezabnu";

export const ADDRESS_LINES = [
  "Rua dos Caçadores, 1050",
  "Velha",
  "Blumenau, SC",
  "89040-001",
] as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("Point da Beleza, Rua dos Caçadores, 1050, Velha, Blumenau, SC, 89040-001");

/** Monta o link de WhatsApp com a mensagem de contexto informada. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_GERAL = whatsappLink(
  "Olá, gostaria de saber sobre horários disponíveis no Point da Beleza.",
);
export const WHATSAPP_SPA = whatsappLink(
  "Olá, gostaria de saber mais sobre o Spa do Point da Beleza.",
);
export const WHATSAPP_NOIVAS = whatsappLink(
  "Olá, gostaria de saber mais sobre o Dia da Noiva no Point da Beleza.",
);
