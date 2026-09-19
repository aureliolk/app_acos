import { Mail, MessageCircle } from "lucide-react";
import { contacts, type Contact } from "@/content/social";
import { Reveal } from "@/components/reveal";

function LinkedinIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v6.19H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.26 2.37 4.26 5.46v5.97zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function GithubIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55v-2.17c-3.2.7-3.87-1.37-3.87-1.37-.52-1.33-1.28-1.69-1.69-1.69-1.38-.94.1-.92.1-.92 1.53.11 2.33 1.57 2.33 1.57 1.36 2.33 4.01 1.12 2.9.12.15-1.1.6-1.85 1.08-2.28-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.57-2.99-.05-.39-.24-1.39.05-2.28 0 0 1.28-.41 4.2 1.57a10.9 10.9 0 0 1 5.9 0c2.9-1.98 4.18-1.57 4.18-1.57.29.89.1 1.89.05 2.28.98.71 1.57 1.73 1.57 2.99 0 4.42-2.7 5.29-5.26 5.57.55.47 1.04 1.4 1.04 2.83v3.72c0 .31.21.68.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
    </svg>
  );
}

const icons: Record<Contact["icon"], React.ReactNode> = {
  whatsapp: <MessageCircle size={20} />,
  mail: <Mail size={20} />,
  linkedin: <LinkedinIcon />,
  github: <GithubIcon />,
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