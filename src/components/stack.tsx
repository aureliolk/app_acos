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