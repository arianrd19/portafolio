import { Reveal } from "./Reveal";

const techs = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "Django", "Python", "PHP", "PostgreSQL", "MySQL", "MongoDB",
  "Supabase", "Docker", "WordPress", "HTML", "CSS", "Tailwind",
];

export function TechStack() {
  // Duplicamos para que el marquee sea continuo sin saltos
  const row = [...techs, ...techs];
  return (
    <section className="py-24 border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10 mb-12">
        <Reveal>
          <p className="font-mono-ui text-xs text-lime mb-2">— Stack</p>
          <h2 className="font-display text-4xl md:text-6xl">Tools of the trade.</h2>
        </Reveal>
      </div>

      <div className="relative group">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
          {row.map((t, i) => (
            <div
              key={`${t}-${i}`}
              className="flex items-center gap-6 px-8 py-6 font-display text-4xl md:text-6xl text-muted-foreground hover:text-lime transition-colors whitespace-nowrap"
            >
              {t}
              <span className="text-lime/60">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
