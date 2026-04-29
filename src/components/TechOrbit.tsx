type Tech = { name: string; angle: number; highlight?: boolean };

const ring1: Tech[] = [
  { name: "HTML", angle: 0, highlight: true },
  { name: "React", angle: 90 },
  { name: "CSS", angle: 180, highlight: true },
  { name: "Javascript", angle: 270, highlight: true },
];
const ring2: Tech[] = [
  { name: "Docker", angle: 30 },
  { name: "Next.js", angle: 120 },
  { name: "Python", angle: 210 },
  { name: "TypeScript", angle: 300 },
];
const ring3: Tech[] = [
  { name: "MySQL", angle: 60 },
  { name: "Supabase", angle: 150 },
  { name: "MongoDB", angle: 240 },
  { name: "PHP", angle: 330 },
];

function Planet({
  size,
  angle,
  duration,
  reverse,
  highlight,
  name,
}: {
  size: number;
  angle: number;
  duration: number;
  reverse: boolean;
  highlight?: boolean;
  name: string;
}) {
  // El contenedor exterior rota desde el centro (origin centro).
  // El hijo está empujado hacia "arriba" (translateY(-radio)) y luego se contra-rota
  // para mantener el texto siempre recto.
  return (
    <div
      className="absolute top-1/2 left-1/2"
      style={{
        width: 0,
        height: 0,
        transform: `rotate(${angle}deg)`,
        animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
        transformOrigin: "center",
      }}
    >
      <div
        className="absolute flex items-center gap-2 font-mono-ui text-xs whitespace-nowrap -translate-x-1/2 -translate-y-1/2"
        style={{
          top: -size / 2,
          left: 0,
          animation: `${reverse ? "orbit" : "orbit-reverse"} ${duration}s linear infinite`,
          transformOrigin: "center",
        }}
      >
        <span
          className={`size-1.5 rounded-full shrink-0 ${
            highlight ? "bg-lime animate-pulse-dot" : "bg-muted-foreground"
          }`}
        />
        <span className={highlight ? "text-lime" : "text-muted-foreground"}>{name}</span>
      </div>
    </div>
  );
}

function Ring({ size, items, duration, reverse = false }: { size: number; items: Tech[]; duration: number; reverse?: boolean }) {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/60"
        style={{ width: size, height: size }}
      />
      {items.map((t) => (
        <Planet
          key={t.name}
          size={size}
          angle={t.angle}
          duration={duration}
          reverse={reverse}
          highlight={t.highlight}
          name={t.name}
        />
      ))}
    </>
  );
}

export function TechOrbit() {
  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto">
      {/* Sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-lime glow-lime animate-pulse-dot z-10" />
      <Ring size={260} items={ring1} duration={45} />
      <Ring size={420} items={ring2} duration={70} reverse />
      <Ring size={580} items={ring3} duration={95} />
    </div>
  );
}
