// =============================================================
// Neko Studio — Dados dos Produtos
// -------------------------------------------------------------
// Para adicionar, remover ou editar produtos, basta alterar
// este arquivo. As páginas e cards usam estes dados.
// =============================================================

const NEKO_PRODUCTS = [
  {
    id: "orgah-gestao",
    nome: "Orgah Gestão",
    tagline: "Sistema de gestão completo para pequenos e médios negócios.",
    descricao:
      "Plataforma de gestão pensada para pequenos e médios negócios, com PDV, controle de estoque, cadastro de clientes, módulo financeiro e futura integração fiscal.",
    descricaoLonga:
      "O Orgah Gestão é um ERP enxuto, focado em entregar o essencial para um pequeno ou médio negócio funcionar bem: ponto de venda ágil, controle de estoque em tempo real, base de clientes, gestão financeira de entradas e saídas, e uma trilha de evolução que inclui integração fiscal. O objetivo é oferecer uma ferramenta moderna, sem complicação, com curva de aprendizado curta.",
    status: "Em desenvolvimento",
    statusTipo: "dev", // dev | consulta | beta | lancado
    cor: "purple", // purple | blue | pink
    icone: "store",
    recursos: [
      "PDV (Ponto de Venda) ágil e simples",
      "Controle de estoque com alertas",
      "Cadastro de clientes e histórico",
      "Módulo financeiro (entradas e saídas)",
      "Integração fiscal (planejada)",
      "Relatórios e dashboards"
    ],
    imagens: [
      // Substitua pelos caminhos das suas imagens dentro de assets/images/products/
      // Ex.: "../assets/images/products/orgah-gestao-1.png"
    ],
    acoes: [
      { tipo: "contato", label: "Quero saber mais" }
    ],
    link: "produtos/orgah-gestao.html"
  },
  {
    id: "orgah-finance",
    nome: "Orgah Finance",
    tagline: "Controle financeiro pessoal simples, claro e moderno.",
    descricao:
      "Aplicativo de controle financeiro pessoal, focado em organizar suas finanças sem complicação e com uma experiência visual moderna.",
    descricaoLonga:
      "O Orgah Finance nasce com a proposta de tornar a vida financeira pessoal mais clara. Categorias de gastos, metas, acompanhamento de receitas e despesas, gráficos limpos e uma navegação direta. A ideia é oferecer uma ferramenta completa, com expansões futuras e recursos premium.",
    status: "Em desenvolvimento",
    statusTipo: "dev",
    cor: "blue",
    icone: "chart",
    recursos: [
      "Lançamentos de receitas e despesas",
      "Categorias personalizáveis",
      "Metas financeiras",
      "Gráficos e relatórios mensais",
      "Interface moderna e intuitiva"
    ],
    imagens: [
      // Adicione aqui as imagens demonstrativas do app
    ],
    acoes: [
      { tipo: "contato", label: "Quero ser avisado no lançamento" }
    ],
    link: "produtos/orgah-finance.html"
  },
  {
    id: "sites-personalizados",
    nome: "Sites Personalizados",
    tagline: "Sites modernos, responsivos e feitos sob medida.",
    descricao:
      "Criação de sites institucionais, landing pages e portfólios com foco em design moderno, performance e responsividade.",
    descricaoLonga:
      "Cada site é um projeto único. Trabalho com você desde a definição da identidade visual até a publicação, garantindo um resultado profissional, leve e adaptado a qualquer tela. Recursos como domínio, hospedagem e e-mail são avaliados conforme a necessidade do projeto e podem ser incluídos no orçamento.",
    status: "Sob consulta",
    statusTipo: "consulta",
    cor: "pink",
    icone: "globe",
    recursos: [
      "Design moderno e personalizado",
      "Totalmente responsivo (mobile, tablet, desktop)",
      "Otimizado para performance e SEO básico",
      "Integração com formulários e WhatsApp",
      "Orientação para publicação e domínio"
    ],
    imagens: [],
    acoes: [
      { tipo: "contato", label: "Solicitar orçamento" }
    ],
    link: "produtos/sites-personalizados.html"
  },
  {
    id: "automacoes",
    nome: "Automações e Sistemas Internos",
    tagline: "Soluções sob medida para otimizar processos.",
    descricao:
      "Desenvolvimento de automações, dashboards e sistemas internos personalizados para empresas e profissionais.",
    descricaoLonga:
      "Se há tarefas repetitivas, planilhas pesadas ou processos manuais consumindo o tempo da sua equipe, é possível automatizar. Desenvolvo soluções sob medida — desde scripts e bots até sistemas internos completos — sempre alinhados à realidade do cliente. Infraestrutura (servidores, banco de dados, integrações em nuvem) é dimensionada conforme a necessidade.",
    status: "Sob consulta",
    statusTipo: "consulta",
    cor: "purple",
    icone: "cog",
    recursos: [
      "Automação de tarefas repetitivas",
      "Integrações entre sistemas e APIs",
      "Dashboards e painéis internos",
      "Bots e scripts personalizados",
      "Análise individual de cada caso"
    ],
    imagens: [],
    acoes: [
      { tipo: "contato", label: "Conversar sobre meu projeto" }
    ],
    link: "produtos/automacoes.html"
  }
];

// =============================================================
// Neko Tools — ferramentas próprias para download
// =============================================================
const NEKO_TOOLS = [
  {
    id: "ytd-neko-tools",
    nome: "YTD Neko Tools",
    tagline: "Baixe vídeos para assistir offline com uma experiência simples e direta.",
    descricao:
      "Ferramenta da Neko Tools para baixar vídeos, organizar arquivos e escolher a versão ideal para PC ou celular.",
    status: "Primeira versão",
    statusTipo: "beta",
    cor: "blue",
    icone: "download",
    plataformas: ["PC", "Celular"],
    link: "tools/ytd-neko-tools.html"
  }
];

// =============================================================
// Projetos em desenvolvimento / roadmap futuro
// =============================================================
const NEKO_ROADMAP = [
  {
    titulo: "Orgah Gestão — versão 1.0",
    descricao: "Primeira versão estável com PDV, estoque, clientes e financeiro.",
    fase: "Desenvolvimento ativo"
  },
  {
    titulo: "Orgah Finance — beta fechado",
    descricao: "Primeiros usuários testando o app de finanças pessoais.",
    fase: "Em breve"
  },
  {
    titulo: "Integração Fiscal (NFC-e / NF-e)",
    descricao: "Emissão de notas integrada ao Orgah Gestão.",
    fase: "Planejado"
  },
  {
    titulo: "Orgah Gestão Mobile",
    descricao: "Aplicativo complementar para acompanhar vendas e estoque.",
    fase: "Em estudo"
  },
  {
    titulo: "Marketplace de Automações",
    descricao: "Catálogo de pequenas automações prontas para contratação rápida.",
    fase: "Em estudo"
  }
];

// =============================================================
// Informações de contato — edite aqui para mudar em todo o site
// =============================================================
const NEKO_CONTACT = {
  whatsapp: "5581994488964",          // Substitua pelo seu número (formato internacional, só números)
  whatsappLabel: "(81) 99448-8964",   // Como aparece para o usuário
  email: "contato@nekostudio.pro",
  github: "",                          // Vazio — não exibido. Coloque a URL se quiser mostrar.
  instagram: "https://www.instagram.com/nekostudiobr/",  // Vazio para esconder
  mensagemPadrao: "Olá! Vim pelo site da Neko Studio e gostaria de saber mais."
};
