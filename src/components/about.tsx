import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="sobre" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-violet-400">03 · sobre</p>
        <h2 className="mt-2 text-3xl font-bold lg:text-4xl">De primeiro projeto a produtos em produção</h2>
      </Reveal>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Reveal delay={0.05}>
          <p className="leading-relaxed text-zinc-400">
            Este site foi o meu primeiro projeto sério — e ele continua aqui, agora escrito com a mesma stack que uso
            no dia a dia. Hoje desenho e mantenho produtos reais: SaaS multi-tenant de atendimento com IA, agentes
            conversacionais e infraestrutura self-hosted com Docker e Coolify.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="leading-relaxed text-zinc-400">
            Trabalho com o ciclo completo: Next.js e React no front, Fastify/Node com Prisma, BullMQ e Postgres no
            back, integrações de LLM (OpenRouter, OpenAI, Gemini, Whisper) e operação em VPS com Cloudflare. Nada
            de barra de score: o portfólio é o que está no ar.
          </p>
        </Reveal>
      </div>
    </section>
  );
}