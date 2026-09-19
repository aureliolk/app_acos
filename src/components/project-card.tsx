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