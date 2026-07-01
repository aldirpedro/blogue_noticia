export type Category = {
  slug: string;
  name: string;
};

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  category: string;
  author: string;
  publishedAt: string;
  reads: number;
  urgent?: boolean;
  tags?: string[];
  gradient: string;
};

export const categories: Category[] = [
  { slug: "portugal", name: "Portugal" },
  { slug: "mundo", name: "Mundo" },
  { slug: "politica", name: "Política" },
  { slug: "economia", name: "Economia" },
  { slug: "desporto", name: "Desporto" },
  { slug: "cultura", name: "Cultura" },
  { slug: "tecnologia", name: "Tecnologia" },
];

const gradients: Record<string, string> = {
  portugal: "from-navy-700 via-navy-800 to-navy-900",
  mundo: "from-brand-dark via-navy-800 to-navy-700",
  politica: "from-navy-900 via-navy-700 to-brand-dark",
  economia: "from-navy-800 via-navy-900 to-navy-700",
  desporto: "from-brand-dark via-brand to-navy-800",
  cultura: "from-navy-700 via-navy-800 to-brand-dark",
  tecnologia: "from-navy-900 via-navy-800 to-navy-700",
};

export const articles: Article[] = [
  {
    slug: "governo-aprova-orcamento-suplementar",
    title: "Governo aprova orçamento suplementar de 800 milhões para a saúde",
    excerpt:
      "Medida chega depois de meses de pressão dos sindicatos e visa reforçar as urgências hospitalares antes do inverno.",
    body: [
      "O Conselho de Ministros aprovou esta quinta-feira um orçamento suplementar de 800 milhões de euros destinado ao reforço do Serviço Nacional de Saúde, com foco nas urgências hospitalares e na contratação de profissionais.",
      "A ministra da Saúde afirmou que a verba será distribuída pelas administrações regionais de saúde já no próximo mês, priorizando as unidades com maior sobrecarga registada no último ano.",
      "Os sindicatos da função pública reagiram com cautela, pedindo garantias de que o dinheiro chegará efetivamente às equipas no terreno e não ficará retido em processos administrativos.",
    ],
    category: "Portugal",
    author: "Redação",
    publishedAt: "2026-07-01T09:12:00",
    reads: 3421,
    urgent: true,
    tags: ["Saúde", "Governo"],
    gradient: gradients.portugal,
  },
  {
    slug: "lisboa-porto-nova-linha-comboio",
    title: "Nova linha de alta velocidade Lisboa-Porto entra em fase de concurso",
    excerpt:
      "Infraestruturas de Portugal lança concurso público para o primeiro troço, com conclusão prevista para 2032.",
    body: [
      "A Infraestruturas de Portugal avançou com o lançamento do concurso público internacional para a construção do primeiro troço da linha de alta velocidade entre Lisboa e Porto.",
      "O investimento total está estimado em 4,5 mil milhões de euros, com fundos europeus a cobrir cerca de 40% do valor.",
      "Segundo o cronograma apresentado, os primeiros comboios poderão circular no troço Lisboa-Coimbra já em 2030, com a ligação completa ao Porto prevista para 2032.",
    ],
    category: "Portugal",
    author: "Marta Coelho",
    publishedAt: "2026-06-30T16:40:00",
    reads: 1876,
    tags: ["Transportes", "Infraestruturas"],
    gradient: gradients.portugal,
  },
  {
    slug: "cimeira-europeia-energia",
    title: "Cimeira europeia termina sem acordo sobre teto ao preço da energia",
    excerpt:
      "Divergências entre estados-membros adiam decisão final para outubro, em ano marcado por subida generalizada de preços.",
    body: [
      "Os líderes europeus reunidos em Bruxelas não conseguiram chegar a um consenso sobre o mecanismo de limitação de preços da energia, adiando a decisão para a próxima cimeira em outubro.",
      "Portugal e Espanha defenderam a manutenção do modelo ibérico, enquanto países da Europa central pediram uma solução aplicável a todo o bloco.",
      "A Comissão Europeia comprometeu-se a apresentar uma nova proposta de compromisso nas próximas semanas.",
    ],
    category: "Mundo",
    author: "João Antunes",
    publishedAt: "2026-07-01T07:55:00",
    reads: 2984,
    urgent: true,
    tags: ["União Europeia", "Energia"],
    gradient: gradients.mundo,
  },
  {
    slug: "eleicoes-eua-sondagem",
    title: "Sondagem mostra corrida renhida a meio ano das eleições intercalares nos EUA",
    excerpt:
      "Diferença entre os dois principais partidos está dentro da margem de erro em estados decisivos.",
    body: [
      "A mais recente sondagem nacional divulgada nos Estados Unidos aponta para uma corrida extremamente equilibrada entre os dois principais partidos a meio ano das eleições intercalares.",
      "Os analistas destacam a economia e a imigração como os temas que mais pesam na decisão dos eleitores indecisos.",
      "Ambos os partidos já anunciaram reforço de investimento em publicidade nos estados considerados decisivos.",
    ],
    category: "Mundo",
    author: "Sara Nogueira",
    publishedAt: "2026-06-29T20:10:00",
    reads: 1543,
    tags: ["EUA", "Eleições"],
    gradient: gradients.mundo,
  },
  {
    slug: "primeiro-ministro-remodelacao",
    title: "Primeiro-ministro confirma remodelação do executivo para setembro",
    excerpt:
      "Alterações devem afetar as pastas da Economia e da Habitação, segundo fontes próximas do processo negocial.",
    body: [
      "O primeiro-ministro confirmou hoje, em conferência de imprensa, que uma remodelação governamental está prevista para setembro, envolvendo pelo menos dois ministérios.",
      "Fontes do partido no poder indicam que as pastas da Economia e da Habitação estarão no centro das mudanças, após críticas da oposição ao ritmo de execução das medidas.",
      "A oposição já reagiu, considerando a remodelação insuficiente para resolver os problemas estruturais apontados nos últimos relatórios.",
    ],
    category: "Política",
    author: "Redação",
    publishedAt: "2026-06-30T12:20:00",
    reads: 2210,
    tags: ["Governo"],
    gradient: gradients.politica,
  },
  {
    slug: "debate-parlamentar-habitacao",
    title: "Debate parlamentar sobre habitação termina em impasse entre bancadas",
    excerpt:
      "Proposta de renda condicionada é chumbada, mas todos os partidos concordam com necessidade de nova lei-quadro.",
    body: [
      "O debate na Assembleia da República sobre a crise da habitação prolongou-se por mais de seis horas, sem que nenhuma das propostas em discussão reunisse maioria suficiente.",
      "A proposta do governo para renda condicionada em zonas de pressão urbanística foi chumbada com os votos contra da oposição.",
      "Apesar do impasse, os partidos manifestaram abertura para negociar uma nova lei-quadro da habitação ainda este ano.",
    ],
    category: "Política",
    author: "Diogo Ramalho",
    publishedAt: "2026-06-28T18:05:00",
    reads: 1320,
    tags: ["Habitação", "Parlamento"],
    gradient: gradients.politica,
  },
  {
    slug: "inflacao-junho-abranda",
    title: "Inflação abranda em junho para 2,1%, o valor mais baixo em três anos",
    excerpt:
      "Queda nos preços dos combustíveis e alimentos frescos explica a maior parte da desaceleração, diz INE.",
    body: [
      "O Instituto Nacional de Estatística divulgou esta manhã que a taxa de inflação homóloga recuou para 2,1% em junho, o valor mais baixo desde 2023.",
      "A descida deve-se sobretudo à redução dos preços dos combustíveis e de alguns bens alimentares frescos, segundo o gabinete de estatística.",
      "Economistas alertam, no entanto, que a inflação subjacente se mantém acima da meta do Banco Central Europeu.",
    ],
    category: "Economia",
    author: "Rita Salvador",
    publishedAt: "2026-07-01T08:30:00",
    reads: 4102,
    urgent: true,
    tags: ["Inflação", "INE"],
    gradient: gradients.economia,
  },
  {
    slug: "banco-central-taxas-juro",
    title: "Banco Central Europeu mantém taxas de juro inalteradas",
    excerpt:
      "Decisão era esperada pelos mercados, que agora olham para a próxima reunião como possível ponto de viragem.",
    body: [
      "O Banco Central Europeu decidiu manter as taxas de juro diretoras inalteradas na reunião desta semana, uma decisão amplamente antecipada pelos mercados financeiros.",
      "Em comunicado, a instituição reafirmou que continuará a monitorizar de perto a evolução da inflação antes de considerar novos cortes.",
      "Analistas apontam a reunião de setembro como o momento mais provável para uma eventual descida adicional.",
    ],
    category: "Economia",
    author: "Rita Salvador",
    publishedAt: "2026-06-27T14:00:00",
    reads: 1765,
    tags: ["BCE", "Juros"],
    gradient: gradients.economia,
  },
  {
    slug: "selecao-nacional-apuramento",
    title: "Seleção nacional garante apuramento com vitória fora de casa",
    excerpt:
      "Golo solitário na segunda parte assegura o primeiro lugar do grupo antes da fase final do próximo verão.",
    body: [
      "A seleção nacional garantiu esta noite o apuramento direto após vencer fora de casa por 1-0, resultado que assegura o primeiro lugar do grupo de qualificação.",
      "O único golo da partida surgiu aos 68 minutos, num remate de fora da área que não deu hipótese ao guarda-redes adversário.",
      "O selecionador nacional elogiou a resiliência do grupo e já olha para a fase final, marcada para o próximo verão.",
    ],
    category: "Desporto",
    author: "Nuno Cardoso",
    publishedAt: "2026-06-30T22:45:00",
    reads: 5231,
    urgent: true,
    tags: ["Seleção", "Qualificação"],
    gradient: gradients.desporto,
  },
  {
    slug: "clube-portista-contratacao",
    title: "Clube do norte anuncia contratação recorde para a próxima época",
    excerpt:
      "Avançado internacional chega por valor que bate o recorde do clube, segundo fontes oficiais.",
    body: [
      "O clube nortenho confirmou esta tarde a contratação de um avançado internacional por um valor que representa a maior transferência da sua história.",
      "O jogador assinou contrato por quatro épocas e deverá ser apresentado oficialmente na próxima semana.",
      "A direção do clube justifica o investimento com o objetivo de disputar o título nacional já na próxima temporada.",
    ],
    category: "Desporto",
    author: "Nuno Cardoso",
    publishedAt: "2026-06-26T11:15:00",
    reads: 2987,
    tags: ["Mercado", "Transferências"],
    gradient: gradients.desporto,
  },
  {
    slug: "festival-musica-verao",
    title: "Festival de música de verão anuncia cabeças de cartaz",
    excerpt:
      "Edição deste ano promete ser a maior de sempre, com mais de 80 mil bilhetes já vendidos.",
    body: [
      "A organização do maior festival de música de verão do país anunciou hoje os cabeças de cartaz da edição deste ano, que decorre em agosto.",
      "Mais de 80 mil bilhetes já foram vendidos antes mesmo da divulgação completa do cartaz.",
      "Este ano o festival estende-se por quatro dias, um a mais do que na edição anterior.",
    ],
    category: "Cultura",
    author: "Inês Barreto",
    publishedAt: "2026-06-29T10:00:00",
    reads: 1654,
    tags: ["Música", "Festivais"],
    gradient: gradients.cultura,
  },
  {
    slug: "museu-exposicao-arte-contemporanea",
    title: "Museu inaugura maior exposição de arte contemporânea portuguesa dos últimos anos",
    excerpt:
      "Mostra reúne mais de 200 obras de artistas nacionais e está patente até ao final do ano.",
    body: [
      "Um dos principais museus do país inaugurou esta semana a maior exposição dedicada à arte contemporânea portuguesa dos últimos anos.",
      "A mostra reúne mais de 200 obras de artistas nacionais, incluindo peças nunca antes exibidas ao público.",
      "A exposição estará patente até ao final do ano, com entrada gratuita aos domingos de manhã.",
    ],
    category: "Cultura",
    author: "Inês Barreto",
    publishedAt: "2026-06-25T15:30:00",
    reads: 987,
    tags: ["Arte", "Museus"],
    gradient: gradients.cultura,
  },
  {
    slug: "startup-portuguesa-financiamento",
    title: "Startup portuguesa capta 15 milhões de euros em ronda liderada por fundo europeu",
    excerpt:
      "Empresa de inteligência artificial aplicada à saúde planeia duplicar equipa até final do ano.",
    body: [
      "Uma startup portuguesa dedicada a soluções de inteligência artificial para diagnóstico médico anunciou esta semana uma ronda de financiamento de 15 milhões de euros.",
      "A ronda foi liderada por um fundo europeu de capital de risco, com participação de investidores nacionais já presentes na empresa.",
      "A empresa afirma que o investimento permitirá duplicar a equipa até ao final do ano e expandir a operação para o mercado espanhol.",
    ],
    category: "Tecnologia",
    author: "Pedro Vasques",
    publishedAt: "2026-07-01T06:45:00",
    reads: 2156,
    tags: ["Startups", "Inteligência Artificial"],
    gradient: gradients.tecnologia,
  },
  {
    slug: "regulador-ia-nova-lei",
    title: "Regulador europeu avança com novas regras para sistemas de inteligência artificial",
    excerpt:
      "Empresas terão um ano para adaptar sistemas de alto risco às novas exigências de transparência.",
    body: [
      "O regulador europeu apresentou hoje as diretrizes finais para a aplicação das novas regras a sistemas de inteligência artificial considerados de alto risco.",
      "As empresas terão um prazo de um ano para garantir conformidade, incluindo requisitos reforçados de transparência e auditoria.",
      "Associações do setor tecnológico pediram um período de adaptação mais longo, alegando custos elevados de implementação.",
    ],
    category: "Tecnologia",
    author: "Pedro Vasques",
    publishedAt: "2026-06-28T09:20:00",
    reads: 1432,
    tags: ["Regulação", "IA"],
    gradient: gradients.tecnologia,
  },
  {
    slug: "seca-barragens-nivel-critico",
    title: "Barragens do sul do país atingem nível mais baixo da década",
    excerpt:
      "Autoridades pedem contenção no consumo de água enquanto avaliam medidas de restrição para o verão.",
    body: [
      "Os níveis de armazenamento das principais barragens do sul do país atingiram o valor mais baixo da última década, segundo dados divulgados esta semana.",
      "A autoridade responsável pela gestão da água pediu contenção no consumo às populações e ao setor agrícola.",
      "Estão a ser avaliadas medidas de restrição adicionais caso não chova de forma significativa nas próximas semanas.",
    ],
    category: "Portugal",
    author: "Marta Coelho",
    publishedAt: "2026-06-27T07:10:00",
    reads: 2678,
    tags: ["Ambiente", "Seca"],
    gradient: gradients.portugal,
  },
  {
    slug: "cupula-clima-acordo-parcial",
    title: "Cimeira do clima termina com acordo parcial sobre financiamento verde",
    excerpt:
      "Países em desenvolvimento consideram compromisso insuficiente face às metas de redução de emissões.",
    body: [
      "A cimeira internacional sobre o clima terminou com um acordo parcial relativo ao financiamento de projetos verdes em países em desenvolvimento.",
      "Vários países em desenvolvimento consideraram o valor acordado insuficiente face à urgência das metas de redução de emissões.",
      "A próxima cimeira ficou agendada para o início do próximo ano, com o tema do financiamento novamente na agenda.",
    ],
    category: "Mundo",
    author: "João Antunes",
    publishedAt: "2026-06-26T19:35:00",
    reads: 1298,
    tags: ["Clima", "Cimeira"],
    gradient: gradients.mundo,
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(categoryName: string): Article[] {
  return articles
    .filter((a) => a.category.toLowerCase() === categoryName.toLowerCase())
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function getAllArticlesSorted(): Article[] {
  return [...articles].sort(
    (a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt)
  );
}

export function getMostRead(limit = 4): Article[] {
  return [...articles].sort((a, b) => b.reads - a.reads).slice(0, limit);
}

export function getBreakingArticles(): Article[] {
  return articles.filter((a) => a.urgent);
}

export function formatRelativeTime(isoDate: string): string {
  const diffMs = Date.now() - new Date(isoDate).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "agora mesmo";
  if (diffMin < 60) return `há ${diffMin} min`;
  const diffH = Math.floor(diffMin / 60);
  if (diffH < 24) return `há ${diffH} h`;
  const diffD = Math.floor(diffH / 24);
  return `há ${diffD} d`;
}
