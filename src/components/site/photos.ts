import karina from "@/assets/karina-passos.jpg";
import cabeloLoiro from "@/assets/cabelo-loiro.jpg";
import cabeloLiso from "@/assets/cabelo-liso.jpg";
import ambiente from "@/assets/ambiente-salao.jpg";
import cabeloRuivo from "@/assets/cabelo-ruivo.jpg";
import avaliacao from "@/assets/avaliacao-capilar.jpg";
import unhas from "@/assets/unhas.jpg";
import cabeloOndas from "@/assets/cabelo-ondas.jpg";

/** Fotografias reais fornecidas pelo Salão de Beleza Karina Passos. */
export interface Photo {
  readonly url: string;
  readonly alt: string;
}

export const PHOTO_KARINA: Photo = {
  url: karina,
  alt: "Karina Passos, terapeuta capilar, em seu espaço de atendimento.",
};

export const PHOTO_CABELO_LOIRO: Photo = {
  url: cabeloLoiro,
  alt: "Cabelo loiro longo com ondas, finalizado no Salão Karina Passos.",
};

export const PHOTO_CABELO_LISO: Photo = {
  url: cabeloLiso,
  alt: "Cabelo longo e liso visto de costas, com brilho natural.",
};

export const PHOTO_AMBIENTE: Photo = {
  url: ambiente,
  alt: "Atendimento no Salão Karina Passos, com bancada e identidade do espaço ao fundo.",
};

export const PHOTO_CABELO_RUIVO: Photo = {
  url: cabeloRuivo,
  alt: "Cabelo ruivo com camadas, finalizado no salão.",
};

export const PHOTO_AVALIACAO: Photo = {
  url: avaliacao,
  alt: "Profissional observando com atenção os fios de uma cliente.",
};

export const PHOTO_UNHAS: Photo = {
  url: unhas,
  alt: "Unhas com esmaltação em tom neutro, realizada no salão.",
};

export const PHOTO_CABELO_ONDAS: Photo = {
  url: cabeloOndas,
  alt: "Cabelo castanho longo com ondas suaves.",
};
