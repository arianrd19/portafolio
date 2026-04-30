import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

type Tech = { name: string; slug: string; color: string };

// Simple Icons CDN — https://cdn.simpleicons.org/{slug}/{hex}
const icon = (slug: string, color: string) =>
  `https://cdn.simpleicons.org/${slug}/${color.replace("#", "")}`;

// Three orbital rings (inner → outer)
const ring1: Tech[] = [
  { name: "React", slug: "react", color: "#61DAFB" },
  { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
  { name: "TypeScript", slug: "typescript", color: "#3178C6" },
  { name: "Node.js", slug: "nodedotjs", color: "#5FA04E" },
  { name: "Next.js", slug: "nextdotjs", color: "#FFFFFF" },
];

const ring2: Tech[] = [
  { name: "HTML", slug: "html5", color: "#E34F26" },
  { name: "CSS", slug: "css", color: "#663399" },
  { name: "Tailwind", slug: "tailwindcss", color: "#06B6D4" },
  { name: "Python", slug: "python", color: "#3776AB" },
  { name: "Django", slug: "django", color: "#0C4B33" },
  { name: "PHP", slug: "php", color: "#777BB4" },
  { name: "Laravel", slug: "laravel", color: "#FF2D20" },
];

const ring3: Tech[] = [
  { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
  { name: "MySQL", slug: "mysql", color: "#4479A1" },
  { name: "MongoDB", slug: "mongodb", color: "#47A248" },
  { name: "Supabase", slug: "supabase", color: "#3FCF8E" },
  { name: "Docker", slug: "docker", color: "#2496ED" },
  { name: "Git", slug: "git", color: "#F05032" },
  { name: "Figma", slug: "figma", color: "#F24E1E" },
  { name: "WordPress", slug: "wordpress", color: "#21759B" },
];

function Orbit({
  items,
  radius,
  duration,
  reverse = false,
}: {
  items: Tech[];
  radius: number;
  duration: number;
  reverse?: boolean;
}) {
  const step = 360 / items.length;
  return (
    <>
      {/* Dashed orbit ring */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/40"
        style={{ width: radius * 2, height: radius * 2 }}
      />
      {/* Rotating layer */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: 0,
          height: 0,
          animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
          transformOrigin: "center",
        }}
      >
        {items.map((t, i) => {
          const angle = step * i;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <div
              key={t.name}
              className="absolute"
              style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
            >
              {/* Counter-rotation keeps content upright */}
              <div
                className="flex flex-col items-center gap-1 group"
                style={{
                  animation: `${reverse ? "orbit" : "orbit-reverse"} ${duration}s linear infinite`,
                  transformOrigin: "center",
                }}
              >
                <div className="size-9 md:size-11 rounded-xl bg-card/60 backdrop-blur border border-border/50 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:border-primary/60 group-hover:shadow-[0_0_24px_-6px_var(--accent-cyan)]">
                  <img
                    src={icon(t.slug, t.color)}
                    alt={t.name}
                    width={22}
                    height={22}
                    loading="lazy"
                    className="size-5 md:size-6"
                  />
                </div>
                <span className="font-mono-ui text-[10px] md:text-xs text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                  {t.name}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export function TechStack() {
  const { t, lang } = useLang();
  const subtitle = lang === "ES" ? "Tecnologías que uso a diario" : "Technologies I work with daily";

  return (
    <section id="stack" className="py-24 md:py-32 border-t border-border/60 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-mono-ui text-xs text-lime mb-3">{t.tech.kicker}</p>
            <h2 className="font-display text-4xl md:text-6xl">
              {lang === "ES" ? "Tech " : "Tech "}
              <span className="text-gradient-brand">Stack</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">{subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative w-full aspect-square max-w-[640px] mx-auto">
            {/* Central sun */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="size-14 md:size-16 rounded-full bg-gradient-brand animate-glow-pulse flex items-center justify-center">
                <span className="font-mono-ui text-[10px] md:text-xs text-background font-bold">ARD</span>
              </div>
            </div>

            <Orbit items={ring1} radius={110} duration={32} />
            <Orbit items={ring2} radius={200} duration={55} reverse />
            <Orbit items={ring3} radius={290} duration={80} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
