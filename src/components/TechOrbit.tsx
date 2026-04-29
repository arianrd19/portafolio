type Tech = { name: string; angle: number; highlight?: boolean };

const ring1: Tech[] = [
  { name: "HTML", angle: 60, highlight: true },
  { name: "CSS", angle: 200, highlight: true },
  { name: "Javascript", angle: 280, highlight: true },
  { name: "React", angle: 150 },
];
const ring2: Tech[] = [
  { name: "Next.js", angle: 170 },
  { name: "TypeScript", angle: 280 },
  { name: "Docker", angle: 30 },
  { name: "Python", angle: 240 },
];
const ring3: Tech[] = [
  { name: "MySQL", angle: 70 },
  { name: "Supabase", angle: 30 },
  { name: "PHP", angle: 350 },
  { name: "MongoDB", angle: 320 },
];

function Ring({ size, items, duration, reverse = false }: { size: number; items: Tech[]; duration: number; reverse?: boolean }) {
  return (
    <div
      className="absolute top-1/2 left-1/2 rounded-full border border-dashed border-border/60"
      style={{
        width: size,
        height: size,
        marginLeft: -size / 2,
        marginTop: -size / 2,
        animation: `${reverse ? "orbit-reverse" : "orbit"} ${duration}s linear infinite`,
      }}
    >
      {items.map((t) => {
        const rad = (t.angle * Math.PI) / 180;
        const x = Math.cos(rad) * (size / 2);
        const y = Math.sin(rad) * (size / 2);
        return (
          <div
            key={t.name}
            className="absolute font-mono-ui text-xs whitespace-nowrap flex items-center gap-2"
            style={{
              left: "50%",
              top: "50%",
              transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${reverse ? "" : "-"}${0}deg)`,
              animation: `${reverse ? "orbit" : "orbit-reverse"} ${duration}s linear infinite`,
            }}
          >
            <span
              className={`size-1.5 rounded-full ${t.highlight ? "bg-lime animate-pulse-dot" : "bg-muted-foreground"}`}
            />
            <span className={t.highlight ? "text-lime" : "text-muted-foreground"}>{t.name}</span>
          </div>
        );
      })}
    </div>
  );
}

export function TechOrbit() {
  return (
    <div className="relative w-full aspect-square max-w-[640px] mx-auto">
      {/* Center sun */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-3 rounded-full bg-lime glow-lime animate-pulse-dot" />
      <Ring size={260} items={ring1} duration={45} />
      <Ring size={420} items={ring2} duration={70} reverse />
      <Ring size={580} items={ring3} duration={95} />
    </div>
  );
}
