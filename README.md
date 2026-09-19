# Acos — Portfólio v2

<div align="center">
  <img src="public/projects/lumibotx.png" alt="Acos v2 — portfólio" width="720px" />
</div>

Portfólio pessoal de **Aurélio** (Acos) — Senior Full-Stack & AI Engineer. Versão 2 do meu primeiro
projeto sério, agora escrita com a stack que uso de verdade no dia a dia.

Ao contrário da versão de 2022 (Next 12 + GraphCMS + Apollo), esta versão é **100% estática**:
sem CMS, sem backend, sem formulário. O conteúdo mora em arquivos TypeScript tipados e os projetos
exibidos são produtos reais em produção.

## Projetos em destaque

| Produto | URL |
|---|---|
| LumibotX — SaaS de atendimento com IA | https://lumibotx.com.br |
| ChatX — Atendimento IA multi-tenant | https://chatx.space |
| XAgentPro — Agentes de IA | https://xagentpro.dev/chat |
| Metris — Gestão contábil médica | https://smr.med.br |
| BoxIA ML — Copiloto Mercado Livre | https://ml.chatx.space/chat |
| SRM — Sistema de Relacionamento Médico | https://srm.med.br |
| ClipDownX — Downloader self-hosted | https://clipdownx.cloud |

## Stack

- **Next.js 16** (App Router, Turbopack) + **React 19** + **TypeScript strict**
- **Tailwind CSS 4** · **motion** (animações) · **lucide-react** (ícones)
- Fontes Geist via `next/font` · `next/image` para os screenshots
- Deploy: Vercel (https://acos-services.vercel.app)

## Como executar

```sh
# Node 22 (arm64 via nvm)
nvm use 22

# instalar dependências
npm install

# desenvolvimento
npm run dev

# build de produção
npm run build && npm start
```

## Editando o conteúdo

Todo o conteúdo do site é versionado em código:

- `src/content/projects.ts` — projetos, descrições, tags e screenshots
- `src/content/stack.ts` — tecnologias por domínio
- `src/content/social.ts` — links de contato (WhatsApp, e-mail, LinkedIn, GitHub)

Screenshots dos produtos ficam em `public/projects/` (capturados dos sites reais).

## Estrutura

```
src/
  app/        # layout, page, globals, sitemap, robots, icon
  components/ # header, hero, projects, stack, about, contact, footer, primitivas
  content/    # fonte da verdade dos dados
  lib/        # cn (clsx + tailwind-merge)
```

---

<p align="center">
  <a href="https://www.linkedin.com/in/aureliolk/">LinkedIn</a> ·
  <a href="https://github.com/aureliolk">GitHub</a> ·
  <a href="https://wa.me/5573991211575">WhatsApp</a> ·
  <a href="mailto:contato@acos-global.com">contato@acos-global.com</a>
</p>