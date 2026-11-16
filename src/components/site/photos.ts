import karina from "@/assets/karina-passos.webp.asset.json";
import cabeloLoiro from "@/assets/cabelo-loiro.webp.asset.json";
import cabeloLiso from "@/assets/cabelo-liso.webp.asset.json";
import ambiente from "@/assets/ambiente-salao.webp.asset.json";
import cabeloRuivo from "@/assets/cabelo-ruivo.webp.asset.json";
import avaliacao from "@/assets/avaliacao-capilar.webp.asset.json";
import unhas from "@/assets/unhas.webp.asset.json";
import cabeloOndas from "@/assets/cabelo-ondas.webp.asset.json";

/** Fotografias reais fornecidas pelo Salão de Beleza Karina Passos. */
export interface Photo {
  readonly url: string;
  readonly alt: string;
}

export const PHOTO_KARINA: Photo = {
  url: karina.url,
  alt: "Karina Passos, terapeuta capilar, em seu espaço de atendimento.",
};

export const PHOTO_CABELO_LOIRO: Photo = {
  url: cabeloLoiro.url,
  alt: "Cabelo loiro longo com ondas, finalizado no Salão Karina Passos.",
};

export const PHOTO_CABELO_LISO: Photo = {
  url: cabeloLiso.url,
  alt: "Cabelo longo e liso visto de costas, com brilho natural.",
};

export const PHOTO_AMBIENTE: Photo = {
  url: ambiente.url,
  alt: "Atendimento no Salão Karina Passos, com bancada e identidade do espaço ao fundo.",
};

export const PHOTO_CABELO_RUIVO: Photo = {
  url: cabeloRuivo.url,
  alt: "Cabelo ruivo com camadas, finalizado no salão.",
};

export const PHOTO_AVALIACAO: Photo = {
  url: avaliacao.url,
  alt: "Profissional observando com atenção os fios de uma cliente.",
};

export const PHOTO_UNHAS: Photo = {
  url: unhas.url,
  alt: "Unhas com esmaltação em tom neutro, realizada no salão.",
};

export const PHOTO_CABELO_ONDAS: Photo = {
  url: cabeloOndas.url,
  alt: "Cabelo castanho longo com ondas suaves.",
};
