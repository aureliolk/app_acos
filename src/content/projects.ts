export type Project = {
  slug: string;
  name: string;
  url: string;
  description: string;
  tags: string[];
  featured: boolean;
  screenshot: string | null;
};

export const projects: Project[] = [
  {
    slug: "lumibotx",
    name: "LumibotX",
    url: "https://lumibotx.com.br",
    description: "SaaS de atendimento com IA: captura e gestão de leads via bot, planos Free → Enterprise.",
    tags: ["Next.js", "IA", "SaaS", "WhatsApp"],
    featured: true,
    screenshot: "/projects/lumibotx.png",
  },
  {
    slug: "chatx",
    name: "ChatX",
    url: "https://chatx.space",
    description: "Atendimento com IA multi-tenant para clínicas — evolução da plataforma Lumibot.",
    tags: ["Next.js", "Prisma", "BullMQ", "Multi-tenant"],
    featured: true,
    screenshot: "/projects/chatx.png",
  },
  {
    slug: "xagentpro",
    name: "XAgentPro",
    url: "https://xagentpro.dev/chat",
    description: "Plataforma de agentes de IA conversacionais.",
    tags: ["Agentes", "IA", "TypeScript"],
    featured: true,
    screenshot: "/projects/xagentpro.png",
  },
  {
    slug: "metris",
    name: "Metris (SMR)",
    url: "https://smr.med.br",
    description: "Gestão contábil médica: site + ferramentas servindo +5.000 médicos em 19 estados.",
    tags: ["WordPress", "Web", "Cliente"],
    featured: false,
    screenshot: "/projects/metris.png",
  },
  {
    slug: "boxia-ml",
    name: "BoxIA ML",
    url: "https://ml.chatx.space/chat",
    description: "Copiloto de IA para operações no Mercado Livre.",
    tags: ["IA", "FastMCP", "Python", "Node"],
    featured: false,
    screenshot: "/projects/boxia-ml.png",
  },
  {
    slug: "srm",
    name: "SRM",
    url: "https://srm.med.br",
    description:
      "Sistema de Relacionamento Médico: CRM de clínicas em produção — jornada do paciente, LTV, recorrência e indicações.",
    tags: ["Next.js 16", "Prisma", "PostgreSQL", "Cliente"],
    featured: false,
    screenshot: "/projects/srm.png",
  },
  {
    slug: "clipdownx",
    name: "ClipDownX",
    url: "https://clipdownx.cloud",
    description: "Baixador de vídeo e áudio self-hosted.",
    tags: ["Express", "Better Auth", "Docker"],
    featured: false,
    screenshot: null,
  },
];