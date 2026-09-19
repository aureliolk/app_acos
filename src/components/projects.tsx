import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/project-card";
import { Reveal } from "@/components/reveal";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  return (
    <section id="projetos" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-violet-400">01 · portfólio</p>
        <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Projetos em produção</h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Produtos reais rodando em produção — SaaS de IA, atendimento automatizado e ferramentas self-hosted.
        </p>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[...featured, ...rest].map((p, i) => (
          <Reveal key={p.slug} delay={i * 0.05}>
            <ProjectCard project={p} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}