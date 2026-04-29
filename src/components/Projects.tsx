type Project = {
  num: string;
  title: string;
  desc: string;
  stack: string[];
  date: string;
  url: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Vamos Rural",
    desc: "Rural tourism platform in the Dominican Republic",
    stack: ["React", "Next.js", "TypeScript", "Django", "PostgreSQL", "Docker"],
    date: "Sep. 2025",
    url: "https://www.vamosrural.com/",
  },
  {
    num: "02",
    title: "Mapple Studios SRL",
    desc: "Online sublimation and custom merchandise store in the Dominican Republic",
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2026",
    url: "https://www.mapplestudios.com/",
  },
  {
    num: "03",
    title: "Active Labor Solutions",
    desc: "Job platform in the Dominican Republic — connects candidates and companies",
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2025",
    url: "https://www.als.com.do/",
  },
  {
    num: "04",
    title: "Easy Online English",
    desc: "Course platform to learn how to speak English online",
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    date: "Ene. 2024",
    url: "https://www.easyonlineenglish.com/",
  },
  {
    num: "05",
    title: "Las Lomas Serenas",
    desc: "Real estate website with affordable apartment project",
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2026",
    url: "https://www.laslomasserenas.com/",
  },
  {
    num: "06",
    title: "Estancia Las Mercedes",
    desc: "Apartment rental website built on WordPress",
    stack: ["WordPress", "PHP", "MySQL"],
    date: "Ene. 2023",
    url: "https://www.estancia-lasmercedes.com/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="px-6 md:px-10 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-ui text-xs text-lime mb-2">— Selected work</p>
            <h2 className="font-display text-5xl md:text-7xl">Projects.</h2>
          </div>
          <span className="font-mono-ui text-xs text-muted-foreground hidden md:block">
            {projects.length.toString().padStart(2, "0")} cases
          </span>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p) => (
            <a
              key={p.num}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-lime transition-all duration-300 flex flex-col min-h-[320px]"
            >
              <div className="flex items-start justify-between font-mono-ui text-xs text-muted-foreground">
                <span>{p.num}</span>
                <span className="opacity-0 group-hover:opacity-100 group-hover:text-lime transition-opacity">
                  View project ↗
                </span>
              </div>
              <h3 className="mt-8 text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground max-w-md">{p.desc}</p>
              <div className="mt-auto pt-8 flex items-end justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono-ui text-[10px] px-2 py-1 bg-secondary text-muted-foreground rounded"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <span className="font-mono-ui text-xs text-muted-foreground">{p.date}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="font-mono-ui text-sm text-muted-foreground hover:text-lime transition-colors">
            View all projects ↓
          </button>
        </div>
      </div>
    </section>
  );
}
