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