/** Dados oficiais do Salão de Beleza Karina Passos. */
export const PHONE_DISPLAY = "(47) 99937-4334";
export const PHONE_TEL = "+5547999374334";
export const INSTAGRAM = "@karinapassoterapeutacapilar";
export const INSTAGRAM_URL = "https://www.instagram.com/karinapassoterapeutacapilar/";
export const BIO_URL = "https://bio.site/karinaespacodabeleza";

export const ADDRESS_LINES = [
  "Rua Jerusalém, 682",
  "Santa Regina",
  "Camboriú, SC",
  "88340-000",
] as const;

export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Rua+Jerusal%C3%A9m%2C+682%2C+Santa+Regina%2C+Cambori%C3%BA%2C+SC";

/** Monta o link de WhatsApp com uma mensagem contextual. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${PHONE_TEL.replace("+", "")}?text=${encodeURIComponent(message)}`;
}

export function serviceWhatsApp(service: string): string {
  return whatsappLink(
    `Olá! Acessei o site da Karina Passos e gostaria de informações sobre ${service} e horários disponíveis.`,
  );
}

export const WHATSAPP_GERAL = whatsappLink(
  "Olá! Encontrei o Salão Karina Passos pelo site e gostaria de consultar os horários disponíveis para atendimento.",
);

export const WHATSAPP_AVALIACAO = whatsappLink(
  "Olá! Acessei o site da Karina Passos e gostaria de informações sobre tricoscopia e avaliação capilar.",
);
