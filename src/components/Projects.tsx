import { useState, useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

type Project = {
  num: string;
  title: string;
  desc: { EN: string; ES: string };
  stack: string[];
  date: string;
  url: string;
  flag: string;
  image: string;
};

const projects: Project[] = [
  {
    num: "01",
    title: "Vamos Rural",
    desc: {
      EN: "Rural tourism platform in the Dominican Republic",
      ES: "Plataforma de turismo rural en República Dominicana",
    },
    stack: ["React", "Next.js", "TypeScript", "Django", "PostgreSQL", "Docker"],
    date: "Sep. 2025",
    url: "https://www.vamosrural.com/",
    flag: "🇪🇸",
    image:
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "02",
    title: "Mapple Studios SRL",
    desc: {
      EN: "Online sublimation and custom merchandise store",
      ES: "Tienda online de sublimación y merchandising personalizado",
    },
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2026",
    url: "https://www.mapplestudios.com/",
    flag: "🇩🇴",
    image:
      "https://images.unsplash.com/photo-1558024920-b41e1887dc32?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "03",
    title: "Active Labor Solutions",
    desc: {
      EN: "Job platform — connects candidates and companies",
      ES: "Plataforma de empleo — conecta candidatos y empresas",
    },
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2025",
    url: "https://www.als.com.do/",
    flag: "🇩🇴",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "04",
    title: "Easy Online English",
    desc: {
      EN: "Course platform to learn how to speak English online",
      ES: "Plataforma de cursos para aprender inglés en línea",
    },
    stack: ["React", "TypeScript", "Node.js", "MongoDB"],
    date: "Ene. 2024",
    url: "https://www.easyonlineenglish.com/",
    flag: "🇺🇸",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "05",
    title: "Las Lomas Serenas",
    desc: {
      EN: "Real estate website with affordable apartment project",
      ES: "Sitio inmobiliario con proyecto de apartamentos asequibles",
    },
    stack: ["JavaScript", "PHP", "MySQL"],
    date: "Ene. 2026",
    url: "https://www.laslomasserenas.com/",
    flag: "🇩🇴",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    num: "06",
    title: "Estancia Las Mercedes",
    desc: {
      EN: "Apartment rental website built on WordPress",
      ES: "Sitio de alquiler de apartamentos construido en WordPress",
    },
    stack: ["WordPress", "PHP", "MySQL"],
    date: "Ene. 2023",
    url: "https://www.estancia-lasmercedes.com/",
    flag: "🇩🇴",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=1200&q=80",
  },
];

function ProjectCard({ p, lang, t }: { p: Project; lang: string; t: any }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth >= 1024) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsActive(entry.isIntersecting);
        });
      },
      { rootMargin: "-25% 0px -25% 0px", threshold: 0 },
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <a
      ref={ref}
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-14 border-b border-border/40 transition-all duration-500 overflow-hidden ${isActive ? "is-active" : ""}`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-lime origin-left scale-x-0 group-[.is-active]:scale-x-100 lg:group-[.is-active]:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

      <div className="absolute inset-0 z-0 opacity-0 group-[.is-active]:opacity-40 lg:group-[.is-active]:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover object-center blur-sm scale-105 group-[.is-active]:scale-100 lg:group-[.is-active]:scale-105 lg:group-hover:scale-100 transition-transform duration-700"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-3 lg:w-1/2">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground group-[.is-active]:text-lime lg:group-[.is-active]:text-foreground lg:group-hover:text-lime transition-colors duration-300 flex items-center gap-4">
          {p.title} <span>{p.flag}</span>
        </h3>
        <p className="text-muted-foreground font-mono-ui text-sm md:text-base">
          {p.desc[lang as keyof typeof p.desc]}
        </p>
      </div>

      <div className="relative z-10 flex flex-col items-start lg:items-end gap-5 mt-8 lg:mt-0 lg:w-1/2">
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {p.stack.map((s) => (
            <span
              key={s}
              className="font-mono-ui text-xs px-3 py-1.5 border border-border/60 bg-background/50 text-muted-foreground rounded transition-colors group-[.is-active]:border-foreground/20 lg:group-[.is-active]:border-border/60 lg:group-hover:border-foreground/20"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between w-full lg:w-auto lg:gap-8 mt-2">
          <span className="font-mono-ui text-xs text-muted-foreground hidden lg:block">
            {p.date}
          </span>
          <button className="border border-lime text-lime px-6 py-2.5 font-mono-ui text-sm font-semibold group-[.is-active]:bg-lime group-[.is-active]:text-black lg:group-[.is-active]:bg-transparent lg:group-[.is-active]:text-lime lg:group-hover:bg-lime lg:group-hover:text-black transition-all duration-300 rounded whitespace-nowrap">
            {t.projects?.view || "View project ↗"}
          </button>
        </div>
      </div>
    </a>
  );
}

export function Projects() {
  const { lang, t } = useLang();
  const [showAll, setShowAll] = useState(false);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-16 2xl:px-24 py-10 md:py-16 w-full">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="flex flex-col items-center justify-center mb-20 text-center">
          <h2 className="font-display text-5xl md:text-7xl">{t.projects?.title || "Projects"}</h2>
          <p className="font-mono-ui text-sm text-muted-foreground mt-4">
            {lang === "ES" ? "Una selección de trabajo reciente" : "A selection of recent work"}
          </p>
        </Reveal>

        <div className="flex flex-col border-t border-border/40">
          {displayedProjects.map((p, i) => (
            <Reveal key={p.num} index={i}>
              <ProjectCard p={p} lang={lang} t={t} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="story-link font-mono-ui text-sm text-muted-foreground hover:text-lime transition-colors"
          >
            {showAll
              ? lang === "ES"
                ? "Ver menos ↑"
                : "Show less ↑"
              : t.projects?.viewAll || (lang === "ES" ? "Ver todos ↓" : "View all ↓")}
          </button>
        </Reveal>
      </div>
    </section>
  );
}
