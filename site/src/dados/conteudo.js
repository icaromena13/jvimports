// Todo o texto do site num lugar só. Itens marcados com PENDENTE estão em ../PENDENCIAS.md.

// Número do WhatsApp da loja (só dígitos, com DDD). Vazio = os botões voltam a abrir o Direct do Instagram.
export const WHATSAPP = '8281664576'
export const INSTAGRAM = 'https://www.instagram.com/jvimportsmcz/'
const DIRECT = 'https://ig.me/m/jvimportsmcz'

export const MENSAGEM_PADRAO = 'Olá! Vim do site de vocês, gostaria de saber mais.'

// O Direct do Instagram não aceita texto pré-preenchido no link (nem ig.me nem instagram.com/direct).
// Por isso, no Direct, o clique copia a mensagem (ver Aviso.jsx) e o visitante só precisa colar.
// Com WHATSAPP preenchido, o wa.me já leva o texto e nada é copiado.
export const precisaCopiar = () => !WHATSAPP

export function linkConversa(mensagem = MENSAGEM_PADRAO) {
  if (!WHATSAPP) return DIRECT
  return `https://wa.me/55${WHATSAPP}?text=${encodeURIComponent(mensagem)}`
}
export const canalConversa = () => (WHATSAPP ? 'WhatsApp' : 'Direct')

export const NAV = [
  { rotulo: 'Aparelhos', alvo: '#aparelhos' },
  { rotulo: 'Entrega', alvo: '#entrega' },
  { rotulo: 'Assistência', alvo: '#assistencia' },
]

export const HERO = {
  titulo: ['iPhones e assistência', 'em toda Maceió'],
  texto: 'Lacrados e seminovos revisados, iPad, MacBook, Apple Watch e AirPods. Você escolhe pelo WhatsApp e recebe em casa.',
  cta: 'Chamar no WhatsApp',
  selo: '+5.000 clientes desde 2020',
  chips: [
    { id: 'lacrado', icone: 'caixa', titulo: 'Lacrado', texto: 'na caixa original' },
    { id: 'bateria', icone: 'bateria', titulo: 'Bateria', texto: 'conferida no seminovo' },
    { id: 'entrega', icone: 'moto', titulo: 'Entrega grátis', texto: 'em toda Maceió' },
  ],
  notificacoes: [
    { app: 'WhatsApp', quem: 'JV Imports', texto: 'Seu iPhone saiu para entrega 🛵', quando: 'agora' },
    { app: 'WhatsApp', quem: 'JV Imports', texto: 'Separei as fotos das cores para você ver 📸', quando: '12 min' },
  ],
}

// Black Friday de novembro: vídeo da garrafa + kit de brindes (vale o mês inteiro)
export const BLACK = {
  rotulo: 'Black Friday JV · novembro inteiro',
  titulo: ['Comprou,', 'ganhou.'],
  texto: 'Em novembro, qualquer celular comprado com o JV sai com valores incríveis e um kit de brindes completo.',
  brindes: [
    { icone: 'garrafa', titulo: 'Garrafa térmica personalizada', texto: 'do seu jeito, o presente especial', destaque: true },
    { icone: 'capa', titulo: 'Capinha', texto: 'para o seu modelo' },
    { icone: 'tela', titulo: 'Película', texto: 'aplicada na entrega' },
    { icone: 'raio', titulo: 'Carregador', texto: 'pronto para usar' },
  ],
  cta: 'Quero meu brinde',
  mensagem: 'Olá! Vim do site de vocês e quero aproveitar a Black Friday com a garrafa de brinde.',
  // a seção some sozinha a partir desta data (horário de Maceió, UTC-3)
  ate: '2026-12-01T00:00:00-03:00',
  video: 'promo/garrafa.mp4',
  capa: 'promo/garrafa-capa.jpg',
}

export const LINHA = {
  titulo: 'Trabalhamos com',
  itens: ['iPhone', 'iPad', 'MacBook', 'Apple Watch', 'AirPods', 'Android'],
}

const QUANTAS_FOTOS = 10
export const CLIENTES = {
  selos: [
    { linha1: 'Mais de', linha2: '5.000 clientes' },
    { linha1: 'Desde', linha2: '2020' },
    { linha1: 'Toda', linha2: 'Maceió' },
  ],
  titulo: ['Obrigado pela', 'preferência, Maceió'],
  // Fotos reais dos clientes em public/clientes (cliente-01.jpg em diante, retrato 4:5, 720 x 900).
  // Para acrescentar mais, é só colocar o arquivo seguinte na pasta e aumentar QUANTAS_FOTOS.
  prontas: true,
  fotos: Array.from({ length: QUANTAS_FOTOS }, (_, i) => `clientes/cliente-${String(i + 1).padStart(2, '0')}.jpg`),
}

export const APARELHOS = {
  titulo: ['Escolha com', 'tranquilidade'],
  texto: 'Cada aparelho chega explicado: estado, bateria, cor e o que vem na caixa.',
  cartoes: [
    {
      id: 'lacrados',
      titulo: 'Lacrados',
      texto: 'iPhones novos, na caixa original, prontos para ativar no seu nome.',
      tom: 'coral',
    },
    {
      id: 'seminovos',
      titulo: 'Seminovos',
      texto: 'Aparelhos revisados, com bateria, câmeras e Face ID testados antes da entrega.',
      tom: 'azul',
    },
    {
      id: 'assistencia',
      titulo: 'Assistência',
      texto: 'Troca de tela, bateria e reparos em Apple e Android, com peça de qualidade.',
      tom: 'menta',
    },
  ],
}

export const PEDIDO = {
  titulo: ['Monte seu', 'pedido'],
  texto: 'Escolha o aparelho e o estado. A mensagem chega pronta no WhatsApp do JV.',
  aparelhos: ['iPhone', 'iPad', 'MacBook', 'Apple Watch', 'AirPods'],
  estados: ['Lacrado', 'Seminovo', 'Tanto faz'],
  extras: ['Quero entrega hoje', 'Quero dar meu usado na troca', 'Parcelar em até 18x'],
}

export const ECOSSISTEMA = {
  titulo: ['Do iPhone', 'ao MacBook'],
  texto: 'iPad, MacBook, Apple Watch, AirPods e acessórios originais, tudo no mesmo atendimento.',
}

// A conversa que o celular fixo conta enquanto os cartões passam (seção Entrega).
// "ate" é o índice da última mensagem que fica visível ao fim de cada etapa.
export const ENTREGA = {
  rotulo: 'Do primeiro oi até a sua porta',
  titulo: ['Entrega confiável', 'em toda Maceió'],
  texto: 'Você combina tudo pelo WhatsApp e acompanha cada passo até o aparelho chegar na sua mão.',
  passos: ['Conversa', 'Pedido', 'A caminho', 'Entregue'],
  mensagens: [
    { de: 'cliente', texto: 'Oi! Vocês têm o iPhone 18 Pro Max de 256 GB?', hora: '10:02' },
    { de: 'jv', texto: 'Oi, tudo bem? Temos sim, lacrado 🙌', hora: '10:03' },
    { de: 'jv', tipo: 'fotos', texto: 'Separei as cores que estão disponíveis hoje', hora: '10:03' },
    { de: 'cliente', texto: 'Amei! Dá para entregar hoje?', hora: '10:05' },
    { de: 'jv', texto: 'Dá sim! Qual o seu bairro?', hora: '10:05' },
    { de: 'cliente', texto: 'Ponta Verde', hora: '10:06' },
    { de: 'jv', tipo: 'pedido', titulo: 'Pedido confirmado', linhas: ['iPhone 18 Pro Max · 256 GB', 'Lacrado, na caixa original', 'Entrega hoje · Ponta Verde'], hora: '10:08' },
    { de: 'jv', tipo: 'local', texto: 'Saiu para entrega 🛵 Você acompanha por aqui', hora: '14:20' },
    { de: 'jv', texto: 'Chego em uns 15 minutos', hora: '14:21' },
    { de: 'cliente', texto: 'Perfeito, tô esperando!', hora: '14:22' },
    { de: 'jv', texto: 'Cheguei! Pode descer 😊', hora: '14:36' },
    { de: 'cliente', tipo: 'foto-cliente', texto: 'Chegou certinho, obrigada!', hora: '14:48' },
    { de: 'jv', tipo: 'selo', texto: 'Obrigado pela preferência!', hora: '14:49' },
  ],
  etapas: [
    {
      id: 'conversa',
      titulo: ['Fale com quem', 'entende'],
      texto: 'Tire dúvidas, peça fotos e vídeos do aparelho e receba o valor na hora, direto com a equipe.',
      tom: 'lilas',
      ate: 3,
      flutuante: { tipo: 'aviso', titulo: 'Fotos reais', texto: 'do aparelho que você vai receber' },
    },
    {
      id: 'pedido',
      titulo: ['Tudo combinado', 'antes'],
      texto: 'Modelo, valor, pagamento e horário acertados por mensagem. Sem surpresa na hora de receber.',
      tom: 'pessego',
      ate: 6,
      flutuante: { tipo: 'aviso', titulo: 'Pedido confirmado', texto: 'resumo enviado no WhatsApp' },
    },
    {
      id: 'caminho',
      titulo: ['Acompanhe', 'o trajeto'],
      texto: 'Avisamos quando o aparelho sai e você acompanha a entrega até a sua porta, em qualquer bairro de Maceió.',
      tom: 'azul',
      ate: 9,
      flutuante: { tipo: 'mapa', titulo: 'A caminho', texto: 'chega em 15 min' },
    },
    {
      id: 'entregue',
      titulo: ['Receba com', 'segurança'],
      texto: 'Abra a caixa, confira o aparelho e tire qualquer dúvida com quem entregou. Depois, a gente continua por aqui.',
      tom: 'menta',
      ate: 12,
      flutuante: { tipo: 'selo', titulo: 'Obrigado pela', texto: 'preferência!' },
    },
  ],
}

export const SERVICOS = {
  titulo: 'E tem mais',
  texto: 'O que o JV faz pelo seu aparelho depois da compra:',
  // PENDENTE: confirmar a lista e o que é o serviço "Laser" do destaque do Instagram
  itens: [
    { id: 'tela', titulo: 'Troca de tela', texto: 'Tela trincada ou com mancha volta a ficar como nova.' },
    { id: 'bateria', titulo: 'Troca de bateria', texto: 'Seu iPhone volta a durar o dia inteiro.' },
    { id: 'laser', titulo: 'Vidro traseiro a laser', texto: 'Troca da tampa de vidro sem trocar a carcaça.' },
    { id: 'android', titulo: 'Assistência Android', texto: 'Reparos em aparelhos Android também.' },
    { id: 'acessorios', titulo: 'Acessórios originais', texto: 'Carregador, cabo, capa e película para cada modelo.' },
  ],
}

export const SEGURANCA = {
  titulo: 'Compra segura',
  texto: 'Procedência conferida e garantia estendida. Você sabe exatamente o que está levando.',
  itens: ['Procedência conferida', 'Garantia estendida'],
}

export const DONO = {
  // foto do post do Instagram (recorte do meio, sem o texto do post)
  foto: 'joao.webp',
  alt: 'João Vitor Vasconcelos, dono da JV Imports, sorrindo diante do escudo da marca',
  nome: 'João Vitor Vasconcelos',
  legenda: 'Desde 2020 nesse ramo',
}

export const GALERIA = {
  titulo: ['Feito com atenção,', 'de Maceió para Maceió'],
  texto: 'Desde 2020, João Vitor e a equipe já atenderam mais de 5.000 clientes, de perto, do primeiro contato ao pós-venda.',
  cta: 'Ver mais no Instagram',
}

// Perguntas frequentes (respostas confirmadas com o cliente).
export const DUVIDAS = {
  rotulo: 'Perguntas frequentes',
  titulo: ['Ficou alguma', 'dúvida?'],
  texto: 'As perguntas que mais chegam pra gente, respondidas aqui.',
  cta: 'Perguntar para o JV',
  itens: [
    { p: 'Quais são as formas de pagamento?', r: 'Pix, dinheiro e cartão de crédito ou débito. No cartão, você parcela em até 18x.' },
    { p: 'Vocês aceitam meu aparelho usado na troca?', r: 'Sim, e sem custo de frete. Mande o modelo e o estado do seu aparelho que a gente avalia e abate o valor do novo.' },
    { p: 'Como funciona a garantia?', r: 'Todo aparelho sai com garantia estendida. O prazo e as condições de cada modelo você consulta direto com a gente no WhatsApp.' },
    { p: 'Os seminovos são confiáveis?', r: 'Cada seminovo é revisado antes da venda: bateria, câmeras e Face ID testados. Você recebe fotos e vídeos reais do aparelho antes de fechar.' },
    { p: 'Quanto custa e quanto tempo leva a entrega?', r: 'A entrega é grátis e acontece no mesmo dia marcado com você, em qualquer bairro de Maceió.' },
    { p: 'Qual o horário de atendimento?', r: 'Atendemos 24 horas, 7 dias por semana. Pode chamar a qualquer hora.' },
    { p: 'Como peço orçamento de conserto?', r: 'Mande o modelo do aparelho e o que aconteceu. A gente responde com o valor e o prazo do reparo.' },
  ],
}

export const FINAL = {
  titulo: ['Seu próximo iPhone', 'está a uma mensagem'],
  texto: 'Chame no WhatsApp, combine tudo por lá e receba em casa, em qualquer bairro de Maceió.',
  cta: 'Chamar no WhatsApp',
}

export const RODAPE = {
  grupos: [
    { titulo: 'Aparelhos', links: [['iPhone lacrado', '#aparelhos'], ['iPhone seminovo', '#aparelhos'], ['iPad e MacBook', '#ecossistema'], ['Apple Watch e AirPods', '#ecossistema']] },
    { titulo: 'Atendimento', links: [['Como funciona a entrega', '#entrega'], ['Assistência técnica', '#assistencia'], ['Monte seu pedido', '#pedido'], ['Perguntas frequentes', '#duvidas']] },
    { titulo: 'Redes', links: [['Instagram', INSTAGRAM], ['Fale com o JV', 'conversa']] },
  ],
  local: 'Maceió, Alagoas',
  aviso: 'iPhone, iPad, MacBook, Apple Watch e AirPods são marcas da Apple Inc. A JV Imports é uma revenda independente.',
}
