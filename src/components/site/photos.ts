import cabeloLoiro from "@/assets/cabelo-loiro.jpg.asset.json";
import noivaRetrato from "@/assets/noiva-retrato.jpg.asset.json";
import noivaSilhueta from "@/assets/noiva-silhueta.jpg.asset.json";
import fachada from "@/assets/fachada.jpg.asset.json";
import lavatorios from "@/assets/lavatorios.jpg.asset.json";
import recepcao from "@/assets/recepcao.jpg.asset.json";
import salao from "@/assets/salao.jpg.asset.json";
import spa from "@/assets/spa.jpg.asset.json";

/** Fotografias reais do Point da Beleza, com legenda e texto alternativo. */
export interface Photo {
  readonly url: string;
  readonly alt: string;
}

export const PHOTO_FACHADA: Photo = {
  url: fachada.url,
  alt: "Fachada do Point da Beleza em Blumenau, com flores e céu azul.",
};

export const PHOTO_LAVATORIOS: Photo = {
  url: lavatorios.url,
  alt: "Área dos lavatórios do salão, com três cadeiras e arco iluminado ao centro.",
};

export const PHOTO_SPA: Photo = {
  url: spa.url,
  alt: "Sala de spa com maca de massagem, banheira e iluminação quente.",
};

export const PHOTO_SALAO: Photo = {
  url: salao.url,
  alt: "Vista ampla do salão, com lavatórios, mezanino e área de atendimento.",
};

export const PHOTO_RECEPCAO: Photo = {
  url: recepcao.url,
  alt: "Recepção do Point da Beleza, com parede preta e mensagem de boas-vindas.",
};

export const PHOTO_NOIVA_RETRATO: Photo = {
  url: noivaRetrato.url,
  alt: "Retrato em preto e branco de uma noiva sorrindo, com tiara e vestido de renda.",
};

export const PHOTO_NOIVA_SILHUETA: Photo = {
  url: noivaSilhueta.url,
  alt: "Noiva de costas junto a uma porta, em contraluz, em preto e branco.",
};

export const PHOTO_CABELO_LOIRO: Photo = {
  url: cabeloLoiro.url,
  alt: "Resultado de cabelo loiro com ondas e mechas, feito no salão.",
};
