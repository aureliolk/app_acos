import { ArrowDown } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Typewriter } from "@/components/typewriter";

const words = [
  "Engenheiro de IA aplicada",
  "Full-Stack Sênior",
  "SaaS multi-tenant",
  "Automação de atendimento",
];

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-screen items-center overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]"
      />
      <div aria-hidden className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-violet-600/20 blur-[120px]" />
      <div aria-hidden className="absolute right-1/4 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <Reveal>
          <p className="font-mono text-sm text-zinc-500">{"// Olá, eu sou"}</p>
          <h1 className="mt-4 text-5xl font-bold tracking-tight lg:text-7xl">Aurélio</h1>
          <p className="mt-4 text-2xl font-semibold text-zinc-300 lg:text-4xl">
            <Typewriter words={words} />
          </p>
          <p className="mt-2 text-xl text-zinc-400 lg:text-2xl">Senior Full-Stack &amp; AI Engineer</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-6 py-3 font-medium text-white transition-opacity hover:opacity-90"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-lg border border-zinc-800 px-6 py-3 text-zinc-300 transition-colors hover:border-zinc-600 hover:text-zinc-100"
            >
              Fale comigo
            </a>
          </div>
          <p className="mt-10 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-1.5 text-sm text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            7 produtos em produção
          </p>
        </Reveal>
      </div>
      <ArrowDown aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600" />
    </section>
  );
}