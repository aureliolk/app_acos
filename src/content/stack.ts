export type StackGroup = { domain: string; items: string[] };

export const stack: StackGroup[] = [
  { domain: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"] },
  { domain: "Backend", items: ["Node.js 22", "Fastify", "Express", "Prisma ORM", "BullMQ", "Redis", "PostgreSQL"] },
  { domain: "IA", items: ["OpenRouter", "OpenAI", "Gemini/GLM", "Whisper", "Evolution API", "FastMCP"] },
  { domain: "Infra", items: ["Docker", "Coolify", "VPS", "Vercel", "Cloudflare", "GitHub Actions"] },
];