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