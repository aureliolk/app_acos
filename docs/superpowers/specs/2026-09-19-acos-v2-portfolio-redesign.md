# Acos v2 — Reforma completa do portfólio

**Data:** 2026-09-19
**Status:** Aprovado em design (usuário), aguardando revisão de spec
**Tipo:** Arquitetural — rewrite in-place do repo `app_acos`

## 1. Contexto

O `app_acos` ("Acos Services") é o portfólio de 2022: Next.js 12 + React 18 + TS 4.7 + Tailwind 3.1, Apollo Client + GraphQL Codegen consumindo GraphCMS (Hygraph) — sem `.env` no repo, logo sem acesso ao CMS. Contato via nodemailer exige SMTP inexistente. O dono do projeto é hoje **desenvolvedor sênior** com produtos reais em produção; o portfólio precisa refletir o stack e o nível atuais.

**Decisões do usuário:**
- Direção visual: **dark tech / IA premium**
- Marca: **"Acos"** mantida
- Contato: **só links diretos** (sem formulário, sem backend)
- Stack: **a stack atual do usuário** (Next.js moderno), não a de 2022

## 2. Objetivo

Portfólio single-page, estático e rápido, com a marca Acos, apresentando o desenvolvedor como sênior e os 6 produtos reais em produção, rodando na stack que ele usa hoje.

**Não-objetivos:** CMS, formulário de contato, multi-idioma, seção de feedbacks, testes unitários (verificação = build + lint + visual QA).

## 3. Stack alvo

| Camada | Escolha |
|---|---|
| Framework | Next.js (App Router, versão LTS atual compatível com Node 22 arm64; referência: Next 16 usado em `app_glmdashboard`) |
| UI | React 19, TypeScript **strict** |
| Estilo | Tailwind CSS (versão suportada pela ferramenta de scaffold; tokens próprios abaixo) |
| Animação | `motion` (framer-motion atual) |
| Ícones | `lucide-react` |
| Fontes | `next/font`: Geist Sans + Geist Mono |
| Dados | Arquivos TS tipados em `src/content/` (sem runtime externo) |

**Removido do projeto:** Apollo Client, graphql/codegen, GraphCMS, nodemailer, react-typical, react-scroll-parallax, carousels (react-multi-carousel/react-responsive-carousel), swiper, scroll-to-element, headlessui, phosphor-react, custom progress bars, todo `src/graphql/`, `src/pages/api/contact.ts`, contexts de scroll pixel-hardcoded.

## 4. Conteúdo (fonte da verdade: `src/content/`)

### 4.1 Projetos (`projects.ts`) — ordem e one-liners reais

| # | Nome | URL | Destaque | Descrição (pt-BR) | Tags |
|---|---|---|---|---|---|
| 1 | LumibotX | https://lumibotx.com.br | ⭐ | SaaS de atendimento com IA: captura e gestão de leads via bot, planos Free → Enterprise | Next.js · IA · SaaS · WhatsApp |
| 2 | ChatX | https://chatx.space | ⭐ | Atendimento com IA multi-tenant para clínicas — evolução da plataforma Lumibot | Next.js · Prisma · BullMQ · Multi-tenant |
| 3 | XAgentPro | https://xagentpro.dev/chat | ⭐ | Plataforma de agentes de IA conversacionais | Agentes · IA · TypeScript |
| 4 | Metris (SMR) | https://smr.med.br | — | Gestão contábil médica: site + ferramentas servindo +5.000 médicos em 19 estados | WordPress · Web · Cliente |
| 5 | BoxIA ML | https://ml.chatx.space/chat | — | Copiloto de IA para operações no Mercado Livre | IA · FastMCP · Python · Node |
| 6 | ClipDownX | https://clipdownx.cloud | — | Baixador de vídeo/áudio self-hosted | Express · Better Auth · Docker |

- Screenshot real de cada produto, capturada na implementação e commitada em `public/projects/<slug>.png`.
- Card: screenshot (next/image), nome, one-liner, tags, link externo (`target="_blank" rel="noopener noreferrer"`), hover glow.
- Os 3 SaaS de IA em destaque (grid maior), demais em grid padrão.
- Card funciona mesmo com o produto fora do ar (screenshot fixa commitada).

### 4.2 Stack (`stack.ts`) — chips por domínio (sem scores)

- **Frontend:** Next.js 16, React 19, TypeScript, Tailwind CSS, shadcn/ui, Vite
- **Backend:** Node.js 22, Fastify, Express, Prisma ORM, BullMQ, Redis, PostgreSQL
- **IA:** OpenRouter, OpenAI, Gemini/GLM, Whisper, Evolution API (WhatsApp), FastMCP
- **Infra:** Docker, Coolify, VPS, Vercel, Cloudflare, GitHub Actions

### 4.3 Contato (`social.ts`)

- LinkedIn: https://www.linkedin.com/in/aureliolk/
- GitHub: https://github.com/aureliolk
- WhatsApp: `5573991211575` (link `https://wa.me/5573991211575`)
- E-mail: `contato@acos-global.com` (link `mailto:contato@acos-global.com`)

### 4.4 Hero

- Título: "Aurélio — **Senior Full-Stack & AI Engineer**"
- Typewriter custom (hook próprio, sem lib) ciclando: "Engenheiro de IA aplicada" → "Full-Stack Sênior" → "SaaS multi-tenant" → "Automação de atendimento"
- Selo: "6 produtos em produção"

## 5. Estrutura de arquivos

```
src/
  app/
    layout.tsx        # fonts (Geist), metadata, globals
    page.tsx          # compõe as seções
    globals.css       # tokens Tailwind
  components/
    header.tsx        # fixo, glass blur, âncoras, CTA
    hero.tsx
    projects.tsx      # + project-card.tsx
    stack.tsx
    about.tsx
    contact.tsx
    footer.tsx
    typewriter.tsx
    reveal.tsx        # wrapper motion p/ reveal on scroll
  content/
    projects.ts
    stack.ts
    social.ts
  lib/
    cn.ts             # clsx + tailwind-merge
public/
  projects/           # screenshots reais (6)
  og.png, favicon.ico # novos
```

## 6. Sistema visual

| Token | Valor |
|---|---|
| Fundo | `zinc-950` |
| Superfície | `zinc-900` |
| Borda | `zinc-800` |
| Texto | `zinc-100` (primário), `zinc-400` (secundário) |
| Accent | gradiente `violet-500 → cyan-400` (typewriter, links, hover glow) |
| Hero | grid background sutil + glow radial |
| Cards | `rounded-xl`, hover glow accent, borda sutil |
| Modo | dark único, mobile-first |

Header fixo com blur; seções com reveal on scroll; CTA "Fale comigo" rola para contato.

## 7. SEO e metadados

- Metadata API: title, description, OG image própria (`public/og.png`), favicon novo.
- Sitemap e `robots.txt` básicos.

## 8. Verificação (critério de done)

1. `npm run build` passando (typecheck incluso, sem `@ts-ignore`/`as any`).
2. `npm run lint` limpo.
3. Playwright: navegação desktop (1440) + mobile (390) — seções renderizam, âncoras funcionam, 6 links externos corretos, screenshots arquivados.
4. README.md atualizado (sobre, stack nova, como executar).

## 9. Riscos e observações

- **ClipDownX retornou 503** na checagem: se persistir, a captura de screenshot pode falhar — nesses casos entra screenshot de fallback genérico (ou skip com link), card segue funcional.
- Scaffolding Next: usar a versão que o ambiente Node 22 arm64 suportar sem fricção; se Tailwind 4 não estiver disponível no scaffold, seguir com a versão instalada e manter os mesmos tokens.
- Git: commit da spec e das etapas somente sob pedido explícito do usuário.
