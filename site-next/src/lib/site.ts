/**
 * Dados da loja em um só lugar.
 * Tudo marcado com PENDENTE ainda precisa ser confirmado com a JV Imports.
 */
export const site = {
  name: "JV Imports",
  tagline: "Excelência e compromisso",
  city: "Maceió, AL",
  owner: "João Vitor Vasconcelos",
  since: 2020,
  instagramHandle: "jvimportsmcz",
  instagramUrl: "https://www.instagram.com/jvimportsmcz/",

  /** PENDENTE: número real, só dígitos, com 55 + DDD. */
  whatsappNumber: "5582000000000",
  /** PENDENTE: endereço da loja física, se houver. */
  address: null as string | null,
  /** PENDENTE: horário de funcionamento. */
  hours: null as string | null,
  /** PENDENTE: URL de incorporação do Google Maps. */
  mapEmbedUrl: null as string | null,
} as const;

/** Link wa.me com mensagem pré-preenchida conforme a seção de origem. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const messages = {
  hero: "Olá! Vim pelo site e quero falar com a JV Imports.",
  header: "Olá! Vim pelo site da JV Imports.",
  floating: "Olá! Vim pelo site e quero atendimento.",
  budget: "Olá! Quero um orçamento de assistência técnica.",
  about: "Olá, João! Vim pelo site e quero tirar uma dúvida.",
  contact: "Olá! Vim pelo site e quero falar com a JV Imports.",
} as const;

export const categories = [
  {
    id: "iphone-seminovo",
    title: "iPhone seminovo",
    note: "Entrega por motoboy em Maceió",
    message: "Olá! Tenho interesse em iPhone seminovo.",
    featured: true,
  },
  {
    id: "iphone-lacrado",
    title: "iPhone lacrado",
    note: null,
    message: "Olá! Tenho interesse em iPhone lacrado.",
    featured: true,
  },
  { id: "ipad", title: "iPad", note: null, message: "Olá! Tenho interesse em iPad.", featured: false },
  { id: "macbook", title: "MacBook", note: null, message: "Olá! Tenho interesse em MacBook.", featured: false },
  {
    id: "apple-watch",
    title: "Apple Watch",
    note: null,
    message: "Olá! Tenho interesse em Apple Watch.",
    featured: false,
  },
  { id: "airpods", title: "AirPods", note: null, message: "Olá! Tenho interesse em AirPods.", featured: false },
  {
    id: "acessorios",
    title: "Acessórios originais",
    note: null,
    message: "Olá! Tenho interesse em acessórios originais.",
    featured: false,
  },
] as const;

export const services = [
  {
    id: "tela",
    title: "Troca de tela",
    description: "Tela trincada, com manchas ou sem toque.",
    message: "Olá! Quero um orçamento de troca de tela.",
  },
  {
    id: "bateria",
    title: "Troca de bateria",
    description: "Bateria viciada ou descarregando rápido.",
    message: "Olá! Quero um orçamento de troca de bateria.",
  },
  {
    id: "apple",
    title: "Reparos Apple",
    description: "Assistência técnica especializada em iPhone.",
    message: "Olá! Quero um orçamento de reparo em aparelho Apple.",
  },
  {
    id: "android",
    title: "Reparos Android",
    description: "Também atendemos aparelhos Android.",
    message: "Olá! Quero um orçamento de reparo em aparelho Android.",
  },
] as const;

export const reasons = [
  { id: "desde", title: "Desde 2020", description: "Anos de experiência no ramo de iPhones em Maceió." },
  { id: "preco", title: "Melhores preços", description: "Os melhores preços e atendimento, do primeiro contato à entrega." },
  { id: "entrega", title: "Toda Maceió", description: "Atendemos toda Maceió, com entrega por motoboy." },
  { id: "tecnica", title: "Assistência técnica", description: "Troca de tela, bateria e reparos em Apple e Android." },
] as const;

export const faq = [
  {
    question: "Vocês entregam em toda Maceió?",
    answer: "Sim. Atendemos toda Maceió, com entrega por motoboy. Combine os detalhes pelo WhatsApp.",
  },
  {
    question: "Vocês vendem iPhone seminovo e lacrado?",
    answer: "Sim, trabalhamos com os dois. Chame no WhatsApp e diga o modelo que você procura.",
  },
  {
    question: "Vocês consertam Android também?",
    answer: "Sim. A assistência técnica atende aparelhos Apple e Android.",
  },
  {
    question: "Como peço um orçamento?",
    answer: "Pelo WhatsApp. Conte o modelo do aparelho e o que está acontecendo com ele.",
  },
] as const;

/**
 * PENDENTE: fotos de clientes com autorização de uso e depoimentos reais.
 * Enquanto estiverem vazios, a página mostra espaços reservados.
 */
export const clientPhotos: { src: string; alt: string }[] = [];
export const testimonials: { name: string; text: string }[] = [];
