import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

type Project = {
  num: string;
  title: string;
  desc: { EN: string; ES: string };
  stack: string[];
  date: string;
  url: string;
};

const projects: Project[] = [
  { num: "01", title: "Vamos Rural", desc: { EN: "Rural tourism platform in the Dominican Republic", ES: "Plataforma de turismo rural en República Dominicana" }, stack: ["React", "Next.js", "TypeScript", "Django", "PostgreSQL", "Docker"], date: "Sep. 2025", url: "https://www.vamosrural.com/" },
  { num: "02", title: "Mapple Studios SRL", desc: { EN: "Online sublimation and custom merchandise store", ES: "Tienda online de sublimación y merchandising personalizado" }, stack: ["JavaScript", "PHP", "MySQL"], date: "Ene. 2026", url: "https://www.mapplestudios.com/" },
  { num: "03", title: "Active Labor Solutions", desc: { EN: "Job platform — connects candidates and companies", ES: "Plataforma de empleo — conecta candidatos y empresas" }, stack: ["JavaScript", "PHP", "MySQL"], date: "Ene. 2025", url: "https://www.als.com.do/" },
  { num: "04", title: "Easy Online English", desc: { EN: "Course platform to learn how to speak English online", ES: "Plataforma de cursos para aprender inglés en línea" }, stack: ["React", "TypeScript", "Node.js", "MongoDB"], date: "Ene. 2024", url: "https://www.easyonlineenglish.com/" },
  { num: "05", title: "Las Lomas Serenas", desc: { EN: "Real estate website with affordable apartment project", ES: "Sitio inmobiliario con proyecto de apartamentos asequibles" }, stack: ["JavaScript", "PHP", "MySQL"], date: "Ene. 2026", url: "https://www.laslomasserenas.com/" },
  { num: "06", title: "Estancia Las Mercedes", desc: { EN: "Apartment rental website built on WordPress", ES: "Sitio de alquiler de apartamentos construido en WordPress" }, stack: ["WordPress", "PHP", "MySQL"], date: "Ene. 2023", url: "https://www.estancia-lasmercedes.com/" },
];

export function Projects() {
  const { lang, t } = useLang();
  return (
    <section id="projects" className="px-6 md:px-10 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex items-end justify-between mb-12">
          <div>
            <p className="font-mono-ui text-xs text-lime mb-2">{t.projects.kicker}</p>
            <h2 className="font-display text-5xl md:text-7xl">{t.projects.title}</h2>
          </div>
          <span className="font-mono-ui text-xs text-muted-foreground hidden md:block">
            {projects.length.toString().padStart(2, "0")} {t.projects.cases}
          </span>
        </Reveal>

        <div className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <Reveal key={p.num} index={i}>
              <a
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card hover-lift group relative bg-card border border-border rounded-xl p-6 flex flex-col min-h-[320px] overflow-hidden"
              >
                <div
                  className="pointer-events-none absolute -top-20 -right-20 size-60 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-3xl"
                  style={{ background: "radial-gradient(circle, var(--accent-magenta) 0%, transparent 70%)" }}
                />
                <div className="relative flex items-start justify-between font-mono-ui text-xs text-muted-foreground">
                  <div className="flex items-center gap-3">
                    <span>{p.num}</span>
                    <span className="num-bar h-px bg-border block" />
                  </div>
                  <span className="arrow text-lime">{t.projects.view} ↗</span>
                </div>
                <h3 className="relative mt-8 text-2xl font-semibold tracking-tight transition-colors group-hover:text-lime">
                  {p.title}
                </h3>
                <p className="relative mt-2 text-sm text-muted-foreground max-w-md">{p.desc[lang]}</p>
                <div className="relative mt-auto pt-8 flex items-end justify-between">
                  <div className="flex flex-wrap gap-1.5 max-w-[75%]">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="font-mono-ui text-[10px] px-2 py-1 bg-secondary text-muted-foreground rounded transition-colors group-hover:text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <span className="font-mono-ui text-xs text-muted-foreground">{p.date}</span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <button className="story-link font-mono-ui text-sm text-muted-foreground hover:text-lime transition-colors">
            {t.projects.viewAll} ↓
          </button>
        </Reveal>
      </div>
    </section>
  );
}
