/* ============================================================================
   data.js — content layer
   ----------------------------------------------------------------------------
   PROJECTS  : every card on the page. Private/client work is anonymised on
               purpose: no client name, no repo name, no link, no real data.
               To swap the generated cover art for a real screenshot, drop the
               file in assets/img/ and set  image: 'assets/img/your-shot.png'.
   I18N      : every string that changes with the EN/PT toggle.
   ========================================================================== */

/* Request.Coffee — the user's own company, named with permission.
   Facts here come from request.coffee's own site metadata. */
const VENTURE = {
  name: 'Request.Coffee',
  url: 'https://request.coffee',
  logo: 'assets/img/LogoNB.png',
  services: [
    {
      art: 'shield',
      en: { t: 'Pentest', d: 'Offensive testing that finds the way in before someone else does.' },
      pt: { t: 'Pentest', d: 'Teste ofensivo que acha a porta de entrada antes que outro ache.' }
    },
    {
      art: 'terminal',
      en: { t: 'CTF Labs', d: 'Hands-on labs that train teams on real attack and defence scenarios.' },
      pt: { t: 'CTF Labs', d: 'Laboratórios práticos que treinam times em cenários reais de ataque e defesa.' }
    },
    {
      art: 'graph',
      en: { t: 'Specialist Consulting', d: 'Security strategy and architecture guidance for the whole operation.' },
      pt: { t: 'Consultoria Especializada', d: 'Estratégia e arquitetura de segurança para toda a operação.' }
    }
  ]
};

const STACK = [
  { group: 'Languages',  items: ['TypeScript', 'JavaScript', 'Python', 'C', 'HTML', 'CSS', 'Java'] },
  { group: 'Frontend',   items: ['React', 'Next.js', 'React Native', 'Vite', 'Tailwind'] },
  { group: 'Backend',    items: ['Node.js', 'FastAPI', 'Flask', 'REST', 'WebSocket'] },
  { group: 'Data',       items: ['PostgreSQL', 'SQLite', 'MongoDB', 'Pandas', 'ETL pipelines'] },
  { group: 'Security',   items: ['OSINT', 'SDR / RF', 'Fraud detection', 'Threat monitoring', 'Hardening'] },
  { group: 'Infra & AI', items: ['Linux VPS', 'Docker', 'GitHub Actions', 'PyTorch', 'LLM agents'] }
];

const PROJECTS = [
  /* ───────────────────────── Security & OSINT ───────────────────────── */
  {
    id: 'osint-platform',
    cat: 'security',
    art: 'radar',
    hue: 42,
    image: 'assets/img/osint-platform.jpg',
    private: true,
    featured: true,
    tags: ['TypeScript', 'Node.js', 'PostgreSQL', 'OSINT'],
    en: {
      title: 'OSINT Intelligence Platform',
      kicker: 'Private · Personal product',
      desc: 'A dashboard that centralises open-source intelligence collection: gathers signals from multiple public sources, normalises them into a single schema and surfaces correlations an analyst would otherwise miss across dozens of tabs.',
      points: ['Multi-source collectors with rate-limit handling', 'Normalised entity model for cross-source correlation', 'Analyst dashboard with saved investigations']
    },
    pt: {
      title: 'Plataforma de Inteligência OSINT',
      kicker: 'Privado · Produto pessoal',
      desc: 'Dashboard que centraliza a coleta de inteligência de fontes abertas: reúne sinais de várias fontes públicas, normaliza tudo em um schema único e evidencia correlações que o analista perderia em dezenas de abas.',
      points: ['Coletores multi-fonte com tratamento de rate limit', 'Modelo de entidades normalizado para correlação', 'Dashboard de analista com investigações salvas']
    }
  },
  {
    id: 'osint-collectors',
    cat: 'security',
    art: 'flow',
    hue: 168,
    private: true,
    tags: ['JavaScript', 'Linux VPS', 'Automation'],
    en: {
      title: 'Distributed Collection Nodes',
      kicker: 'Private · Infrastructure',
      desc: 'The collection layer behind the platform above: scheduled workers running on remote Linux nodes, each responsible for one source, reporting health back to a central queue.',
      points: ['Scheduled workers isolated per source', 'Health reporting and automatic restart', 'Central queue with retry and backoff']
    },
    pt: {
      title: 'Nós de Coleta Distribuída',
      kicker: 'Privado · Infraestrutura',
      desc: 'A camada de coleta por trás da plataforma acima: workers agendados em nós Linux remotos, cada um responsável por uma fonte, reportando saúde para uma fila central.',
      points: ['Workers agendados e isolados por fonte', 'Report de saúde e restart automático', 'Fila central com retry e backoff']
    }
  },
  {
    id: 'investigation-graph',
    cat: 'security',
    art: 'graph',
    hue: 268,
    private: true,
    featured: true,
    tags: ['Python', 'D3.js', 'Graph analysis'],
    en: {
      title: 'Investigation Graph Engine',
      kicker: 'Private · Analysis tooling',
      desc: 'Turns a flat pile of investigation records into an interactive graph — entities as nodes, relationships as edges — so the shape of a case becomes visible instead of buried in spreadsheets.',
      points: ['Entity/relationship extraction from raw records', 'Force-directed interactive exploration', 'Path finding between entities of interest']
    },
    pt: {
      title: 'Motor de Grafos para Investigação',
      kicker: 'Privado · Ferramenta de análise',
      desc: 'Transforma uma pilha de registros de investigação em um grafo interativo — entidades como nós, relações como arestas — deixando visível a forma do caso em vez de enterrada em planilhas.',
      points: ['Extração de entidades e relações de registros brutos', 'Exploração interativa force-directed', 'Busca de caminhos entre entidades de interesse']
    }
  },
  {
    id: 'sdr-toolkit',
    cat: 'security',
    art: 'wave',
    hue: 174,
    image: 'assets/img/sdr-toolkit.jpg',
    private: true,
    featured: true,
    tags: ['TypeScript', 'SDR', 'Signal processing'],
    en: {
      title: 'SDR Signal Analysis Toolkit',
      kicker: 'Private · Research',
      desc: 'A control and analysis interface for software-defined radio hardware: sweeps the spectrum, records captures and renders them as a live waterfall so unknown signals can be characterised.',
      points: ['Scripted spectrum sweeps with saved presets', 'Live waterfall and spectrogram rendering', 'Capture library with replay and annotation']
    },
    pt: {
      title: 'Toolkit de Análise de Sinais SDR',
      kicker: 'Privado · Pesquisa',
      desc: 'Interface de controle e análise para hardware de rádio definido por software: varre o espectro, grava capturas e renderiza em waterfall ao vivo para caracterizar sinais desconhecidos.',
      points: ['Varreduras de espectro roteirizadas com presets', 'Waterfall e espectrograma em tempo real', 'Biblioteca de capturas com replay e anotação']
    }
  },
  {
    id: 'fraud-detection',
    cat: 'security',
    art: 'shield',
    hue: 348,
    image: 'assets/img/fraud-portal.jpg',
    private: true,
    featured: true,
    tags: ['Python', 'Anomaly detection', 'Pandas'],
    en: {
      title: 'Internal Fraud Detection System',
      kicker: 'Private · Client project',
      desc: 'Detection and prevention of fraud committed from inside the organisation. Behavioural baselines per user, deviation scoring on sensitive operations and alerting before the loss is booked.',
      points: ['Per-user behavioural baselines', 'Risk scoring on sensitive transactions', 'Alert pipeline with analyst triage queue']
    },
    pt: {
      title: 'Sistema de Detecção de Fraude Interna',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Detecção e prevenção de fraudes cometidas dentro da própria organização. Baselines de comportamento por usuário, score de desvio em operações sensíveis e alerta antes do prejuízo ser contabilizado.',
      points: ['Baseline de comportamento por usuário', 'Score de risco em transações sensíveis', 'Pipeline de alertas com fila de triagem']
    }
  },
  {
    id: 'account-security',
    cat: 'security',
    art: 'shield',
    hue: 152,
    private: true,
    tags: ['Python', 'Auditing', 'Hardening'],
    en: {
      title: 'Digital Account Security Auditor',
      kicker: 'Private · Tooling',
      desc: 'Audits the security posture of digital accounts — exposure checks, weak configuration detection and a prioritised remediation list instead of a raw dump of findings.',
      points: ['Exposure and breach checks', 'Configuration weakness detection', 'Prioritised, actionable remediation report']
    },
    pt: {
      title: 'Auditor de Segurança de Contas Digitais',
      kicker: 'Privado · Ferramenta',
      desc: 'Audita a postura de segurança de contas digitais — checagem de exposição, detecção de configuração fraca e lista priorizada de correções em vez de um despejo bruto de achados.',
      points: ['Checagem de exposição e vazamentos', 'Detecção de configuração fraca', 'Relatório de correção priorizado e acionável']
    }
  },

  /* ───────────────────────── Enterprise ───────────────────────── */
  {
    id: 'security-ops-hub',
    cat: 'enterprise',
    art: 'grid',
    hue: 36,
    image: 'assets/img/ops-hub.jpg',
    private: true,
    featured: true,
    tags: ['TypeScript', 'React', 'Node.js', 'PostgreSQL'],
    en: {
      title: 'Unified Security Operations Hub',
      kicker: 'Private · Client project',
      desc: 'A private security company ran its operation across half a dozen disconnected tools. This is the single application that replaced them — one login, one data model, one place where every operational module lives.',
      points: ['Consolidated six internal tools into one platform', 'Role-based access across departments', 'Shared data model reused by every module']
    },
    pt: {
      title: 'Núcleo Unificado de Operações de Segurança',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Uma empresa de segurança privada tocava a operação em meia dúzia de ferramentas desconectadas. Este é o aplicativo único que substituiu todas — um login, um modelo de dados, um lugar para cada módulo operacional.',
      points: ['Consolidou seis ferramentas internas em uma plataforma', 'Controle de acesso por papel entre departamentos', 'Modelo de dados compartilhado entre os módulos']
    }
  },
  {
    id: 'hiring-system',
    cat: 'enterprise',
    art: 'flow',
    hue: 32,
    image: 'assets/img/hiring-portal.jpg',
    private: true,
    tags: ['JavaScript', 'Node.js', 'Workflow'],
    en: {
      title: 'Hiring &amp; Onboarding System',
      kicker: 'Private · Client project',
      desc: 'Built to take the friction out of hiring new staff: candidate intake, document collection and validation, and a tracked approval flow that replaced a chain of paper forms and messages.',
      points: ['Candidate intake with document validation', 'Multi-step approval flow with audit trail', 'Cut manual paperwork out of every hire']
    },
    pt: {
      title: 'Sistema de Contratação e Onboarding',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Feito para tirar o atrito da contratação de novos funcionários: entrada de candidatos, coleta e validação de documentos e um fluxo de aprovação rastreado que substituiu uma corrente de formulários em papel e mensagens.',
      points: ['Entrada de candidatos com validação de documentos', 'Fluxo de aprovação em etapas com trilha de auditoria', 'Eliminou papelada manual em cada contratação']
    }
  },
  {
    id: 'field-dashboard',
    cat: 'enterprise',
    art: 'grid',
    hue: 212,
    image: 'assets/img/field-dashboard.jpg',
    private: true,
    tags: ['JavaScript', 'Dashboards', 'Real-time'],
    en: {
      title: 'Field Operations Dashboard',
      kicker: 'Private · Client project',
      desc: 'Operational overview for teams working in the field — live status, activity history and the handful of numbers management actually checks, on one screen built for a wall display.',
      points: ['Live operational status at a glance', 'Historical activity and trend views', 'Designed for always-on wall displays']
    },
    pt: {
      title: 'Dashboard de Operações em Campo',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Visão operacional para equipes em campo — status ao vivo, histórico de atividade e os poucos números que a gestão realmente acompanha, em uma tela pensada para painel de parede.',
      points: ['Status operacional ao vivo em uma olhada', 'Visões de histórico e tendência', 'Pensado para telas de parede sempre ligadas']
    }
  },
  {
    id: 'uptime-monitor',
    cat: 'enterprise',
    art: 'wave',
    hue: 140,
    private: true,
    tags: ['HTML', 'JavaScript', 'Monitoring'],
    en: {
      title: 'Camera Uptime Monitor',
      kicker: 'Private · Client project',
      desc: 'Deliberately simple: continuously pings a fleet of surveillance cameras and makes an offline device impossible to miss. Small tool, but the one that stops a blind spot going unnoticed for days.',
      points: ['Continuous reachability checks across the fleet', 'Immediate visual flag on any offline device', 'Zero-dependency, runs anywhere']
    },
    pt: {
      title: 'Monitor de Disponibilidade de Câmeras',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Deliberadamente simples: pinga continuamente uma frota de câmeras de vigilância e torna impossível não notar um dispositivo offline. Ferramenta pequena, mas é a que impede um ponto cego passar dias despercebido.',
      points: ['Checagem contínua de alcance em toda a frota', 'Sinalização visual imediata de dispositivo offline', 'Sem dependências, roda em qualquer lugar']
    }
  },
  {
    id: 'records-pipeline',
    cat: 'enterprise',
    art: 'flow',
    hue: 30,
    private: true,
    tags: ['Python', 'ETL', 'Pandas'],
    en: {
      title: 'Public Records Data Pipeline',
      kicker: 'Private · Client project',
      desc: 'Monthly ingestion of public government datasets: fetch, clean, reconcile against previous cycles and publish a report the team can act on — replacing a manual download-and-spreadsheet routine.',
      points: ['Scheduled monthly ingestion and cleaning', 'Reconciliation against previous cycles', 'Automated reporting output']
    },
    pt: {
      title: 'Pipeline de Dados de Registros Públicos',
      kicker: 'Privado · Projeto de cliente',
      desc: 'Ingestão mensal de bases públicas do governo: baixa, limpa, reconcilia com os ciclos anteriores e publica um relatório acionável — substituindo uma rotina manual de download e planilha.',
      points: ['Ingestão e limpeza mensais agendadas', 'Reconciliação com ciclos anteriores', 'Geração automatizada de relatórios']
    }
  },

  /* ───────────────────────── AI & Automation ───────────────────────── */
  {
    id: 'ai-video',
    cat: 'ai',
    art: 'stack',
    hue: 288,
    private: true,
    featured: true,
    tags: ['Python', 'PyTorch', 'CogVideoX-5b-I2V', 'XTTS-v2'],
    en: {
      title: 'Modular AI Video Generator',
      kicker: 'Private · Personal R&amp;D',
      desc: 'An end-to-end generation pipeline that goes from a text prompt to a finished clip: image conditioning, image-to-video synthesis and voice synthesis, each stage swappable for a different model.',
      points: ['Text + image + audio in one modular pipeline', 'CogVideoX-5b-I2V for image-to-video synthesis', 'XTTS-v2 voice cloning for narration']
    },
    pt: {
      title: 'Gerador de Vídeo com IA Modular',
      kicker: 'Privado · P&amp;D pessoal',
      desc: 'Pipeline de geração ponta a ponta que vai do prompt de texto ao clipe pronto: condicionamento por imagem, síntese image-to-video e síntese de voz, com cada etapa trocável por outro modelo.',
      points: ['Texto + imagem + áudio em um pipeline modular', 'CogVideoX-5b-I2V para síntese image-to-video', 'Clonagem de voz com XTTS-v2 para narração']
    }
  },
  {
    id: 'spritesheet',
    cat: 'ai',
    art: 'stack',
    hue: 320,
    image: 'assets/img/spritesheet.jpg',
    repo: 'SpriteSheetCreator_WithAI',
    tags: ['JavaScript', 'Canvas', 'Generative AI'],
    en: {
      title: 'AI Sprite Sheet Creator',
      kicker: 'Open source',
      desc: 'Generates and assembles game sprite sheets with AI assistance — produce the frames, pack them into a sheet and export ready for a game engine, without opening a pixel editor.',
      points: ['AI-assisted frame generation', 'Automatic packing into a sprite sheet', 'Engine-ready export']
    },
    pt: {
      title: 'Criador de Sprite Sheet com IA',
      kicker: 'Open source',
      desc: 'Gera e monta sprite sheets para jogos com apoio de IA — produz os frames, empacota na folha e exporta pronto para a engine, sem abrir um editor de pixel.',
      points: ['Geração de frames assistida por IA', 'Empacotamento automático em sprite sheet', 'Exportação pronta para engine']
    }
  },
  {
    id: 'agent-plugin',
    cat: 'ai',
    art: 'terminal',
    hue: 96,
    private: true,
    tags: ['LLM agents', 'Tooling', 'Automation'],
    en: {
      title: 'Coding Agent Plugin',
      kicker: 'Private · Tooling',
      desc: 'A plugin that extends an AI coding agent with custom commands and workflows for my own stack — the repetitive parts of a task become one instruction instead of ten.',
      points: ['Custom commands wired to real workflows', 'Repeatable task automation', 'Built around day-to-day development friction']
    },
    pt: {
      title: 'Plugin para Agente de Código',
      kicker: 'Privado · Ferramenta',
      desc: 'Plugin que estende um agente de código com comandos e fluxos customizados para a minha stack — as partes repetitivas de uma tarefa viram uma instrução em vez de dez.',
      points: ['Comandos customizados ligados a fluxos reais', 'Automação de tarefas repetíveis', 'Construído a partir do atrito do dia a dia']
    }
  },

  {
    id: 'request-cup',
    cat: 'ai',
    art: 'graph',
    hue: 18,
    image: 'assets/img/request-cup.jpg',
    featured: true,
    tags: ['React', 'WebSocket', 'Real-time', 'Request.Coffee'],
    en: {
      title: 'Request Cup — Live CTF Arena',
      kicker: 'Request.Coffee · Labs',
      desc: 'A live competition platform built for Request.Coffee events: the organiser projects a room code on the big screen, players join from their phones, and the whole arena stays in sync in real time.',
      points: ['Room codes and instant join from any phone', 'Real-time state synced across every player', 'Built for Cyber World Cup ’26 events']
    },
    pt: {
      title: 'Request Cup — Arena de CTF ao Vivo',
      kicker: 'Request.Coffee · Labs',
      desc: 'Plataforma de competição ao vivo feita para os eventos da Request.Coffee: o organizador projeta o código da sala no telão, os jogadores entram pelo celular e a arena inteira fica sincronizada em tempo real.',
      points: ['Código de sala e entrada instantânea pelo celular', 'Estado sincronizado em tempo real entre todos', 'Feito para os eventos do Cyber World Cup ’26']
    }
  },

  /* ───────────────────────── Web & Open source ───────────────────────── */
  {
    id: 'church-scheduler',
    cat: 'web',
    art: 'grid',
    hue: 184,
    repo: 'SITE-IASD',
    tags: ['Python', 'Web', 'Open source'],
    en: {
      title: 'Community Program Manager',
      kicker: 'Open source',
      desc: 'Open-source scheduling and programme management built for a church community, released publicly so any congregation with the same problem can adopt and improve it.',
      points: ['Programme scheduling and publication', 'Open to contributions from other communities', 'Built around a real, recurring need']
    },
    pt: {
      title: 'Gestor de Programação Comunitária',
      kicker: 'Open source',
      desc: 'Gestão de programação open source feita para uma comunidade de igreja, publicada abertamente para que qualquer congregação com o mesmo problema possa adotar e melhorar.',
      points: ['Agendamento e publicação de programação', 'Aberto a contribuições de outras comunidades', 'Construído sobre uma necessidade real e recorrente']
    }
  },
  {
    id: 'pharmacy-hackathon',
    cat: 'web',
    art: 'graph',
    hue: 12,
    repo: 'CRUZ',
    tags: ['TypeScript', 'React', 'Hackathon'],
    en: {
      title: 'Pharmacy Platform — Hackathon',
      kicker: 'Open source · Hackathon',
      desc: 'Built under hackathon time pressure at Cruzeiro do Sul: a pharmacy-focused platform taken from empty repo to working demo inside the event window.',
      points: ['Concept to working demo within the event', 'Full-stack build under hard time constraints', 'Team delivery, shipped and demoed']
    },
    pt: {
      title: 'Plataforma de Farmácia — Hackathon',
      kicker: 'Open source · Hackathon',
      desc: 'Construído sob pressão de tempo no hackathon da Cruzeiro do Sul: uma plataforma voltada a farmácia, do repositório vazio ao demo funcional dentro da janela do evento.',
      points: ['Do conceito ao demo funcional dentro do evento', 'Build full-stack sob restrição dura de tempo', 'Entrega em equipe, apresentada ao vivo']
    }
  },
  {
    id: 'deckbuilder',
    cat: 'web',
    art: 'stack',
    hue: 228,
    image: 'assets/img/mtg-deckbuilder.jpg',
    repo: 'MTG-DeckBuilder',
    tags: ['JavaScript', 'API', 'Open source'],
    en: {
      title: 'Trading Card Deck Builder',
      kicker: 'Open source',
      desc: 'A deck construction tool for a trading card game: search the card pool, assemble a list, and get instant feedback on curve and composition while you build.',
      points: ['Card search over a large live card pool', 'Live curve and composition feedback', 'Shareable deck lists']
    },
    pt: {
      title: 'Construtor de Decks de Card Game',
      kicker: 'Open source',
      desc: 'Ferramenta de construção de decks para card game: busca no pool de cartas, monta a lista e dá retorno instantâneo sobre curva e composição enquanto você constrói.',
      points: ['Busca em um grande pool de cartas ao vivo', 'Feedback de curva e composição em tempo real', 'Listas de deck compartilháveis']
    }
  },
  {
    id: 'rpg-sheets',
    cat: 'web',
    art: 'terminal',
    hue: 56,
    image: 'assets/img/rpg-dd5e.jpg',
    live: 'https://rpg-d-d-5e-fichas-easy.vercel.app',
    repo: 'RPG-D-D-5e-fichas-Easy',
    tags: ['JavaScript', 'Web app', 'Open source'],
    en: {
      title: 'Tabletop RPG Character Sheets',
      kicker: 'Open source',
      desc: 'Character sheet manager for tabletop RPG groups — create, edit and keep sheets consistent during a session without paper or a spreadsheet full of broken formulas.',
      points: ['Guided sheet creation and editing', 'Automatic derived-stat calculation', 'Works on a phone at the table']
    },
    pt: {
      title: 'Fichas de RPG de Mesa',
      kicker: 'Open source',
      desc: 'Gerenciador de fichas para grupos de RPG de mesa — cria, edita e mantém as fichas consistentes durante a sessão, sem papel nem planilha cheia de fórmula quebrada.',
      points: ['Criação e edição guiada de fichas', 'Cálculo automático de atributos derivados', 'Funciona no celular, na mesa']
    }
  }
];

const I18N = {
  en: {
    'nav.venture': 'Company', 'nav.about': 'About', 'nav.projects': 'Projects', 'nav.stack': 'Stack', 'nav.contact': 'Contact',
    'hero.status': 'Co-founder at Request.Coffee',
    'hero.roles': ['Co-founder, Request.Coffee', 'Security Engineer', 'Full-Stack Developer', 'OSINT Tooling Builder'],
    'venture.title': 'Company',
    'venture.role': 'Co-founder',
    'venture.award': 'Top 5 cybersecurity companies in Brazil — The Manifest',
    'venture.desc': 'Request.Coffee is a Brazilian cybersecurity company offering penetration testing, hands-on CTF labs, specialist consulting and events that connect the Brazilian security ecosystem. I co-founded it and work across both the technical and the product side.',
    'venture.co': 'Co-founded with Marcelo Rabello.',
    'venture.visit': 'Visit request.coffee',
    'hero.lede': 'I build systems where security is the product, not an afterthought — OSINT platforms, fraud detection, RF analysis tooling and the internal software that keeps operations running.',
    'hero.ctaWork': 'View selected work', 'hero.ctaTalk': 'Get in touch',
    'stats.repos': 'Repositories', 'stats.featured': 'Featured projects', 'stats.langs': 'Languages', 'stats.domains': 'Core domains',
    'about.title': 'About',
    'about.p1': "I'm a developer working at the intersection of software engineering and information security. Most of what I ship runs inside organisations: security operations hubs, investigation tooling, fraud detection pipelines and dashboards that people depend on every day.",
    'about.p2': 'That kind of work is rarely public, so a good part of this portfolio is described rather than linked — client names, data and source code stay confidential. What I can show is the shape of the problem, the stack and the outcome.',
    'about.p3': 'Outside of client work I build in the open: AI generation pipelines, OSINT tooling, and small web apps for communities and hackathons.',
    'focus.osint.t': 'OSINT & Investigation', 'focus.osint.d': 'Collection, correlation and visual analysis of open-source intelligence.',
    'focus.sec.t': 'Defensive Security',     'focus.sec.d': 'Fraud detection, account hardening and monitoring for internal threats.',
    'focus.corp.t': 'Enterprise Systems',    'focus.corp.d': 'Internal platforms: onboarding, payments, field operations, uptime.',
    'focus.ai.t': 'AI & Automation',         'focus.ai.d': 'Generation pipelines, agent tooling and data ingestion at scale.',
    'projects.title': 'Selected work',
    'projects.lede': 'Client and internal projects are shown without names, links or identifying data. Open-source work links straight to the repository.',
    'filter.all': 'All', 'filter.security': 'Security & OSINT', 'filter.enterprise': 'Enterprise', 'filter.ai': 'AI & Automation', 'filter.web': 'Web & Open source',
    'card.private': 'Confidential', 'card.source': 'Source', 'card.featured': 'Featured', 'card.live': 'Live',
    'stack.title': 'Stack',
    'stack.Languages': 'Languages', 'stack.Frontend': 'Frontend', 'stack.Backend': 'Backend',
    'stack.Data': 'Data', 'stack.Security': 'Security', 'stack.Infra & AI': 'Infra & AI',
    'contact.title': 'Contact',
    'contact.lede': 'Open to security engineering, full-stack and automation work. The fastest way to reach me is email.',
    'foot.built': 'Built from scratch — no framework, no tracking.'
  },
  pt: {
    'nav.venture': 'Empresa', 'nav.about': 'Sobre', 'nav.projects': 'Projetos', 'nav.stack': 'Stack', 'nav.contact': 'Contato',
    'hero.status': 'Sócio-fundador na Request.Coffee',
    'hero.roles': ['Sócio-fundador, Request.Coffee', 'Engenheiro de Segurança', 'Desenvolvedor Full-Stack', 'Ferramentas de OSINT'],
    'venture.title': 'Empresa',
    'venture.role': 'Sócio-fundador',
    'venture.award': 'Top 5 empresas de cibersegurança do Brasil — The Manifest',
    'venture.desc': 'A Request.Coffee é uma empresa brasileira de cibersegurança com pentest, laboratórios práticos de CTF, consultoria especializada e eventos que conectam o ecossistema de segurança no Brasil. Sou sócio-fundador e atuo tanto no técnico quanto no produto.',
    'venture.co': 'Fundada em sociedade com Marcelo Rabello.',
    'venture.visit': 'Acessar request.coffee',
    'hero.lede': 'Construo sistemas em que segurança é o produto, não um detalhe posterior — plataformas de OSINT, detecção de fraude, ferramentas de análise de RF e o software interno que mantém a operação de pé.',
    'hero.ctaWork': 'Ver trabalhos', 'hero.ctaTalk': 'Falar comigo',
    'stats.repos': 'Repositórios', 'stats.featured': 'Projetos em destaque', 'stats.langs': 'Linguagens', 'stats.domains': 'Áreas principais',
    'about.title': 'Sobre',
    'about.p1': 'Sou desenvolvedor atuando na interseção entre engenharia de software e segurança da informação. A maior parte do que entrego roda dentro de organizações: núcleos de operação de segurança, ferramentas de investigação, pipelines de detecção de fraude e dashboards dos quais as pessoas dependem todo dia.',
    'about.p2': 'Esse tipo de trabalho raramente é público, então boa parte deste portfólio é descrita em vez de linkada — nomes de clientes, dados e código-fonte permanecem confidenciais. O que posso mostrar é o formato do problema, a stack e o resultado.',
    'about.p3': 'Fora do trabalho com clientes, construo em aberto: pipelines de geração com IA, ferramentas de OSINT e aplicações web para comunidades e hackathons.',
    'focus.osint.t': 'OSINT & Investigação', 'focus.osint.d': 'Coleta, correlação e análise visual de inteligência de fontes abertas.',
    'focus.sec.t': 'Segurança Defensiva',    'focus.sec.d': 'Detecção de fraude, proteção de contas e monitoramento de ameaças internas.',
    'focus.corp.t': 'Sistemas Corporativos', 'focus.corp.d': 'Plataformas internas: onboarding, pagamentos, operação em campo, disponibilidade.',
    'focus.ai.t': 'IA & Automação',          'focus.ai.d': 'Pipelines de geração, tooling para agentes e ingestão de dados em escala.',
    'projects.title': 'Trabalhos selecionados',
    'projects.lede': 'Projetos de clientes e internos são exibidos sem nomes, links ou dados identificáveis. Trabalhos open source linkam direto para o repositório.',
    'filter.all': 'Todos', 'filter.security': 'Segurança & OSINT', 'filter.enterprise': 'Corporativo', 'filter.ai': 'IA & Automação', 'filter.web': 'Web & Open source',
    'card.private': 'Confidencial', 'card.source': 'Código', 'card.featured': 'Destaque', 'card.live': 'No ar',
    'stack.title': 'Stack',
    'stack.Languages': 'Linguagens', 'stack.Frontend': 'Frontend', 'stack.Backend': 'Backend',
    'stack.Data': 'Dados', 'stack.Security': 'Segurança', 'stack.Infra & AI': 'Infra & IA',
    'contact.title': 'Contato',
    'contact.lede': 'Aberto a trabalhos de engenharia de segurança, full-stack e automação. O caminho mais rápido é o e-mail.',
    'foot.built': 'Feito do zero — sem framework, sem rastreamento.'
  }
};

const BOOT_LINES = [
  '> init portfolio.sys',
  '> loading modules ........ ok',
  '> auth renan.pontes ...... ok',
  '> redacting client data .. ok',
  '> ready'
];
