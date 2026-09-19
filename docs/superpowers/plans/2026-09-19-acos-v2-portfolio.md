# Acos v2 — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reescrever in-place o portfólio `app_acos` como site estático Next.js moderno (dark tech/IA premium) apresentando Aurélio como sênior e os 6 produtos reais.

**Architecture:** Single-page estática (App Router, SSG), conteúdo em arquivos TS tipados, zero backend/external data. Componentes pequenos e focados, animações com `motion`, reveal on scroll.

**Tech Stack:** Next.js (App Router, versão do scaffold atual) · React 19 · TypeScript strict · Tailwind CSS v4 · motion · lucide-react · clsx + tailwind-merge · next/font (Geist)

**Spec:** `docs/superpowers/specs/2026-09-19-acos-v2-portfolio-redesign.md`

## Global Constraints

- TypeScript **strict**; proibido `@ts-ignore`, `as any`, `@ts-expect-error`.
- Nenhum commit sem aprovação explícita do usuário — se o usuário não aprovou, pular a etapa de commit e prosseguir.
- Node arm64 v22 do nvm para instalar/build (`nvm use 22` antes de npm). `/usr/local/bin/node` é x64 e quebra tooling.
- Sem backend, sem CMS, sem API routes, sem formulário. Todos os links externos com `target="_blank" rel="noopener noreferrer"`.
- Modo dark único; pt-BR; mobile-first.
- Dados de contato EXATOS: WhatsApp `https://wa.me/5573991211575`, e-mail `mailto:contato@acos-global.com`, LinkedIn `https://www.linkedin.com/in/aureliolk/`, GitHub `https://github.com/aureliolk`.
- Proibido placeholder tipo TBD/TODO no código e no conteúdo.

---

### Task 1: Limpeza do legado + scaffold moderno in-place

**Files:**
- Delete: `src/pages/`, `src/components/`, `src/graphql/`, `src/lib/`, `src/styles/`, `codegen.yaml`, `.eslintrc.json`, `next.config.js`, `postcss.config.js`, `tailwind.config.js`, `package-lock.json`, `yarn.lock`, `youtube_uploader_mcp.log`, `public/tecLogo/`, `public/LgAcosv4x.png`, `public/ssAcosServices.png`, `public/bgportifolio.svg`, `public/mokup-event.png`, `public/RocketSeatLab.png`, `public/RocketSeatLabv1.png`, `public/favIcon.ico`, `README.md` (reescrito na Task 8)
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `.gitignore`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css` (via scaffold)

**Interfaces:**
- Produces: repo com Next.js App Router funcional, `npm run build` verde, aliases `@/*` → `src/*`.

- [ ] **Step 1: Garantir Node 22 arm64**

```bash
source ~/.nvm/nvm.sh && nvm use 22 && node -v && npm -v
```
Expected: `v22.x.x` (arm64).

- [ ] **Step 2: Scaffold limpo em diretório temporário**

```bash
cd ~/Projects && npx --yes create-next-app@latest acos-scaffold --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm --turbopack --yes
```

- [ ] **Step 3: Remover código legado do app_acos e copiar scaffold**

```bash
cd ~/Projects/app_acos
rm -rf src/pages src/components src/graphql src/lib src/styles \
       codegen.yaml .eslintrc.json next.config.js postcss.config.js \
       tailwind.config.js package-lock.json yarn.lock youtube_uploader_mcp.log \
       public/tecLogo public/LgAcosv4x.png public/ssAcosServices.png \
       public/bgportifolio.svg public/mokup-event.png public/RocketSeatLab.png \
       public/RocketSeatLabv1.png public/favIcon.ico
cp ~/Projects/acos-scaffold/package.json ~/Projects/acos-scaffold/tsconfig.json \
   ~/Projects/acos-scaffold/next.config.ts ~/Projects/acos-scaffold/postcss.config.mjs \
   ~/Projects/acos-scaffold/eslint.config.mjs ~/Projects/acos-scaffold/.gitignore ./
cp -R ~/Projects/acos-scaffold/src ./src
rm -rf ~/Projects/acos-scaffold
```

- [ ] **Step 4: Ajustar package.json** — manter scripts `dev/build/lint/start` apenas; renomear para `app_acos`; adicionar deps: `motion`, `lucide-react`, `clsx`, `tailwind-merge`.

```json
{
  "name": "app_acos",
  "version": "2.0.0",
  "private": true,
  "scripts": { "dev": "next dev --turbopack", "build": "next build --turbopack", "start": "next start", "lint": "eslint ." }
}
```
(dependencies vêm do scaffold + as 4 acima; usar `npm i motion lucide-react clsx tailwind-merge`)

- [ ] **Step 5: Instalar e baseline verde**

```bash
npm install && npm run build
```
Expected: build conclui sem erro.

- [ ] **Step 6: Commit (só se autorizado)** — `feat: scaffold Next.js App Router (Acos v2 base)`

---

### Task 2: Tokens visuais + layout base

**Files:**
- Modify: `src/app/globals.css`, `src/app/layout.tsx`
- Create: `src/lib/cn.ts`

**Interfaces:**
- Produces: `cn(...inputs: ClassValue[]): string` em `@/lib/cn`; fontes como CSS vars `--font-geist-sans`/`--font-geist-mono`; metadata global.

- [ ] **Step 1: `src/lib/cn.ts`**

```ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

- [ ] **Step 2: `src/app/globals.css`** (Tailwind 4)

```css
@import "tailwindcss";

@theme inline {
  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

html { scroll-behavior: smooth; }
body { background: #09090b; color: #f4f4f5; }
::selection { background: rgba(139, 92, 246, 0.35); }
```

- [ ] **Step 3: `src/app/layout.tsx`** — Geist fonts + metadata

```tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Acos — Aurélio · Senior Full-Stack & AI Engineer",
  description:
    "Portfólio de Aurélio, engenheiro full-stack sênior. 6 produtos em produção: SaaS de IA, atendimento automatizado e infraestrutura self-hosted.",
  metadataBase: new URL("https://acos-services.vercel.app"),
  openGraph: {
    title: "Acos — Senior Full-Stack & AI Engineer",
    description: "6 produtos em produção: SaaS de IA, atendimento automatizado e infra self-hosted.",
    images: ["/og.png"],
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-zinc-950 font-sans text-zinc-100 antialiased`}>
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 4: `npm run build` verde.**

- [ ] **Step 5: Commit (só se autorizado)** — `feat: design tokens + layout base`

---

### Task 3: Camada de conteúdo (fonte da verdade)

**Files:**
- Create: `src/content/projects.ts`, `src/content/stack.ts`, `src/content/social.ts`

**Interfaces:**
- Produces: `Project` (`slug, name, url, description, tags: string[], featured: boolean, screenshot: string | null`), `StackGroup` (`domain: string, items: string[]`), `Contact` (`label, href, icon: "whatsapp" | "mail" | "linkedin" | "github"`).

- [ ] **Step 1: `src/content/projects.ts`**

```ts
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
    slug: "clipdownx",
    name: "ClipDownX",
    url: "https://clipdownx.cloud",
    description: "Baixador de vídeo e áudio self-hosted.",
    tags: ["Express", "Better Auth", "Docker"],
    featured: false,
    screenshot: "/projects/clipdownx.png",
  },
];
```

- [ ] **Step 2: `src/content/stack.ts`**

```ts
export type StackGroup = { domain: string; items: string[] };

export const stack: StackGroup[] = [
  { domain: "Frontend", items: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "shadcn/ui", "Vite"] },
  { domain: "Backend", items: ["Node.js 22", "Fastify", "Express", "Prisma ORM", "BullMQ", "Redis", "PostgreSQL"] },
  { domain: "IA", items: ["OpenRouter", "OpenAI", "Gemini/GLM", "Whisper", "Evolution API", "FastMCP"] },
  { domain: "Infra", items: ["Docker", "Coolify", "VPS", "Vercel", "Cloudflare", "GitHub Actions"] },
];
```

- [ ] **Step 3: `src/content/social.ts`**

```ts
export type Contact = { label: string; href: string; icon: "whatsapp" | "mail" | "linkedin" | "github" };

export const contacts: Contact[] = [
  { label: "WhatsApp", href: "https://wa.me/5573991211575", icon: "whatsapp" },
  { label: "E-mail", href: "mailto:contato@acos-global.com", icon: "mail" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/aureliolk/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/aureliolk", icon: "github" },
];
```

- [ ] **Step 4: `npx tsc --noEmit` limpo (o build da Task 2 já cobre).**

- [ ] **Step 5: Commit (só se autorizado)** — `feat: content data layer (projects, stack, social)`

---

### Task 4: Primitivas (Reveal, Typewriter, Header, Footer)

**Files:**
- Create: `src/components/reveal.tsx`, `src/components/typewriter.tsx`, `src/components/header.tsx`, `src/components/footer.tsx`

**Interfaces:**
- Produces: `Reveal({ children, delay?, className? })`; `Typewriter({ words: string[] })`; `Header` (fixed, âncoras `#inicio #projetos #stack #sobre #contato`); `Footer`.

- [ ] **Step 1: `src/components/reveal.tsx`**

```tsx
"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
```

- [ ] **Step 2: `src/components/typewriter.tsx`**

```tsx
"use client";

import { useEffect, useState } from "react";

export function Typewriter({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let delay = deleting ? 35 : 70;
    if (!deleting && sub === word.length) delay = 1800;
    else if (deleting && sub === 0) delay = 300;

    const timeout = setTimeout(() => {
      if (!deleting) {
        if (sub < word.length) setSub(sub + 1);
        else setDeleting(true);
      } else if (sub > 0) {
        setSub(sub - 1);
      } else {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      }
    }, delay);
    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words]);

  return (
    <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
      {words[index % words.length].slice(0, sub)}
      <span className="animate-pulse text-zinc-600">▍</span>
    </span>
  );
}
```

- [ ] **Step 3: `src/components/header.tsx`** (client; glass ao rolar; menu mobile)

```tsx
"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";

const links = [
  { href: "#inicio", label: "Início" },
  { href: "#projetos", label: "Projetos" },
  { href: "#stack", label: "Stack" },
  { href: "#sobre", label: "Sobre" },
  { href: "#contato", label: "Contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all",
        scrolled || open ? "border-b border-zinc-800/70 bg-zinc-950/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#inicio" className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-xl font-bold text-transparent">
          Acos
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-zinc-400 transition-colors hover:text-zinc-100">
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="rounded-lg bg-gradient-to-r from-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Fale comigo
          </a>
        </nav>
        <button className="text-zinc-300 md:hidden" aria-label="Abrir menu" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-zinc-800/70 bg-zinc-950/95 px-6 py-4 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block py-3 text-zinc-300">
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
```

- [ ] **Step 4: `src/components/footer.tsx`**

```tsx
export function Footer() {
  return (
    <footer className="border-t border-zinc-800/70 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 text-sm text-zinc-500 sm:flex-row">
        <span>© 2026 Acos · Aurélio</span>
        <span className="font-mono text-xs text-zinc-600">Construído com Next.js + Tailwind</span>
      </div>
    </footer>
  );
}
```

- [ ] **Step 5: `npm run build` verde.**

- [ ] **Step 6: Commit (só se autorizado)** — `feat: primitives (reveal, typewriter, header, footer)`

---

### Task 5: Hero

**Files:**
- Create: `src/components/hero.tsx`
- Modify: `src/app/page.tsx` (compor Header + Hero + Footer)

**Interfaces:**
- Consumes: `Reveal`, `Typewriter`.
- Produces: seção `id="inicio"`.

- [ ] **Step 1: `src/components/hero.tsx`**

```tsx
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
          <p className="font-mono text-sm text-zinc-500">// Olá, eu sou</p>
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
            6 produtos em produção
          </p>
        </Reveal>
      </div>
      <ArrowDown aria-hidden className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-600" />
    </section>
  );
}
```

- [ ] **Step 2: `src/app/page.tsx`**

```tsx
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
      </main>
    </>
  );
}
```

- [ ] **Step 3: `npm run dev` + conferência visual rápida no browser (hero renderiza, typewriter anima).**

- [ ] **Step 4: Commit (só se autorizado)** — `feat: hero section`

---

### Task 6: Projetos + screenshots reais

**Files:**
- Create: `public/projects/*.png` (6 screenshots via Playwright), `src/components/projects.tsx`, `src/components/project-card.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Project`, `projects` de `@/content/projects`; `Reveal`.
- Produces: `Projects` (seção `id="projetos"`); `ProjectCard({ project })` (renderiza sem imagem quando `screenshot === null`).

- [ ] **Step 1: Capturar screenshots (1440×900, full hero/landing) via Playwright → salvar em `public/projects/`: `lumibotx.png`, `chatx.png`, `xagentpro.png`, `metris.png`, `boxia-ml.png`, `clipdownx.png`. Se um site estiver inacessível (ex.: ClipDownX 503), deixar o arquivo ausente e marcar `screenshot: null` no content.**

- [ ] **Step 2: `src/components/project-card.tsx`**

```tsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
import { cn } from "@/lib/cn";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/60 transition-all",
        "hover:border-violet-500/50 hover:shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]",
        project.featured && "border-zinc-700/80 bg-zinc-900/80"
      )}
    >
      {project.screenshot ? (
        <Image
          src={project.screenshot}
          alt={`Screenshot do projeto ${project.name}`}
          width={1200}
          height={750}
          className="aspect-[16/10] w-full border-b border-zinc-800 object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      ) : (
        <div className="aspect-[16/10] w-full border-b border-zinc-800 bg-gradient-to-br from-zinc-900 via-zinc-900 to-violet-950/40" />
      )}
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <ArrowUpRight size={18} className="shrink-0 text-zinc-500 transition-colors group-hover:text-cyan-400" />
        </div>
        <p className="flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>
        <ul className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-md bg-zinc-800 px-2 py-0.5 font-mono text-xs text-zinc-400">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </a>
  );
}
```

- [ ] **Step 3: `src/components/projects.tsx`**

```tsx
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
```

- [ ] **Step 4: Adicionar `<Projects />` ao `page.tsx` (após Hero).**

- [ ] **Step 5: `next.config.ts` — nada a configurar (imagens locais). `npm run build` verde.**

- [ ] **Step 6: Commit (só se autorizado)** — `feat: projects section com screenshots reais`

---

### Task 7: Stack, Sobre e Contato

**Files:**
- Create: `src/components/stack.tsx`, `src/components/about.tsx`, `src/components/contact.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `stack` de `@/content/stack`; `contacts` de `@/content/social`; `Reveal`.
- Produces: seções `id="stack"`, `id="sobre"`, `id="contato"`.

- [ ] **Step 1: `src/components/stack.tsx`**

```tsx
import { stack } from "@/content/stack";
import { Reveal } from "@/components/reveal";

export function Stack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-violet-400">02 · stack</p>
        <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Tecnologias que eu uso hoje</h2>
      </Reveal>
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {stack.map((group, gi) => (
          <Reveal key={group.domain} delay={gi * 0.08}>
            <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-6">
              <h3 className="text-sm font-semibold tracking-wide text-zinc-300 uppercase">{group.domain}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 font-mono text-xs text-zinc-400"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: `src/components/about.tsx`**

```tsx
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
```

- [ ] **Step 3: `src/components/contact.tsx`**

```tsx
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react";
import { contacts, type Contact } from "@/content/social";
import { Reveal } from "@/components/reveal";

const icons: Record<Contact["icon"], React.ReactNode> = {
  whatsapp: <MessageCircle size={20} />,
  mail: <Mail size={20} />,
  linkedin: <Linkedin size={20} />,
  github: <Github size={20} />,
};

export function Contact() {
  return (
    <section id="contato" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <p className="font-mono text-sm text-violet-400">04 · contato</p>
        <h2 className="mt-2 text-3xl font-bold lg:text-4xl">Vamos construir algo?</h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Projeto novo, automação com IA ou uma consultoria? Me chame por qualquer um desses canais.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {contacts.map((c, i) => (
          <Reveal key={c.label} delay={i * 0.05}>
            <a
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/60 px-5 py-4 transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_-12px_rgba(34,211,238,0.5)]"
            >
              <span className="text-zinc-400">{icons[c.icon]}</span>
              <span className="font-medium text-zinc-200">{c.label}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 4: `src/app/page.tsx` final**

```tsx
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Projects } from "@/components/projects";
import { Stack } from "@/components/stack";
import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Projects />
        <Stack />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
```

- [ ] **Step 5: `npm run build` verde. Commit (só se autorizado)** — `feat: stack, about e contact sections`

---

### Task 8: Favicon, OG image, sitemap/robots, README

**Files:**
- Create: `src/app/icon.svg`, `src/app/sitemap.ts`, `src/app/robots.ts`, `public/og.png` (gerada na Task 9), `README.md` (reescrito)

**Interfaces:**
- Consumes: metadata já definida no `layout.tsx`.

- [ ] **Step 1: `src/app/icon.svg`** (usado como favicon pelo Next)

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#8b5cf6"/>
      <stop offset="1" stop-color="#22d3ee"/>
    </linearGradient>
  </defs>
  <rect width="64" height="64" rx="14" fill="#09090b"/>
  <text x="32" y="44" font-family="Arial, sans-serif" font-size="36" font-weight="bold" text-anchor="middle" fill="url(#g)">A</text>
</svg>
```

- [ ] **Step 2: `src/app/sitemap.ts`**

```ts
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: "https://acos-services.vercel.app", lastModified: new Date() }];
}
```

- [ ] **Step 3: `src/app/robots.ts`**

```ts
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://acos-services.vercel.app/sitemap.xml",
  };
}
```

- [ ] **Step 4: `README.md`** — reescrever: o que é (Acos v2, portfólio), stack (Next.js App Router, React 19, TS strict, Tailwind, motion, lucide), como executar (`npm i`, `npm run dev`, `npm run build`), conteúdo editável em `src/content/`, deploy Vercel existente. Remover badges/links antigos do acos-labx.

- [ ] **Step 5: Commit (só se autorizado)** — `docs+feat: favicon, sitemap/robots e README v2`

---

### Task 9: Verificação final (done)

**Files:** sem mudança de código; evidências.

- [ ] **Step 1: `npm run build` — verde.**
- [ ] **Step 2: `npm run lint` — limpo.**
- [ ] **Step 3: OG image** — screenshot Playwright da hero em 1200×630 → `public/og.png`.
- [ ] **Step 4: Visual QA Playwright** — desktop 1440 e mobile 390: seções renderizam, âncoras navegam, typewriter anima, cards com hover ok; 6 links externos corretos (href + target/rel); screenshots arquivados como evidência.
- [ ] **Step 5: `npx tsc --noEmit` — sem erros.**
- [ ] **Step 6: Report final com evidências.**