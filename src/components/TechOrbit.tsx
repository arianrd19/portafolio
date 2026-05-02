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

function Ring({
  size,
  items,
  duration,
  reverse = false,
}: {
  size: number;
  items: Tech[];
  duration: number;
  reverse?: boolean;
}) {
  const radius = size / 2;
  return (
    <>
      {/* Static dashed circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-border/60"
        style={{ width: size, height: size }}
      />
      {/* Rotating layer with planets positioned by cos/sin */}
      <div
        className="absolute top-1/2 left-1/2"
        style={{
          width: 0,
          height: 0,
          animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
          transformOrigin: "center",
        }}
      >
        {items.map((t) => {
          const rad = (t.angle * Math.PI) / 180;
          const x = Number((Math.cos(rad) * radius).toFixed(2));
          const y = Number((Math.sin(rad) * radius).toFixed(2));
          return (
            <div
              key={t.name}
              className="absolute"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {/* Counter-rotate so text stays upright */}
              <div
                className="flex items-center gap-2 font-mono-ui text-xs whitespace-nowrap"
                style={{
                  animation: `${reverse ? "orbit" : "orbit-reverse"} ${duration}s linear infinite`,
                  transformOrigin: "center",
                }}
              >
                <span
                  className={`size-1.5 rounded-full shrink-0 ${
                    t.highlight ? "bg-lime animate-pulse-dot" : "bg-muted-foreground"
                  }`}
                />
                <span className={t.highlight ? "text-lime" : "text-muted-foreground"}>
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

export function TechOrbit() {
  return (
    <div className="relative w-full aspect-square max-w-[560px] mx-auto">
      {/* Sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-lime glow-lime animate-pulse-dot z-10" />
      <Ring size={220} items={ring1} duration={45} />
      <Ring size={360} items={ring2} duration={70} reverse />
      <Ring size={500} items={ring3} duration={95} />
    </div>
  );
}
