import { useState, useEffect, useRef } from "react";
import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import gdp1 from "@/assets/gdp1.png";
import gdp2 from "@/assets/gdp2.png";
import gdp3 from "@/assets/gdp3.png";
import gdp4 from "@/assets/gdp4.png";
import gdp5 from "@/assets/gdp5.png";
import gdp6 from "@/assets/gdp6.png";

import lav1 from "@/assets/lavanderia.png";
import lav2 from "@/assets/lavanderia1.png";
import lav3 from "@/assets/lavanderia2.png";
import lav4 from "@/assets/lavanderia3.png";
import lav5 from "@/assets/lavanderia4.png";
import lav6 from "@/assets/lavanderia5.png";
import lav7 from "@/assets/lavanderia6.png";

import crea1 from "@/assets/creaclass1.png";
import crea2 from "@/assets/creaclass2.png";
import crea3 from "@/assets/creaclass3.png";
import crea4 from "@/assets/creaclass4.png";

import prom1 from "@/assets/promhil1.png";
import prom2 from "@/assets/promhil2.png";
import prom3 from "@/assets/promhil3.png";
import prom4 from "@/assets/promhil4.png";

import cen1 from "@/assets/cenprod1.jpeg";
import cen2 from "@/assets/cenprod2.jpeg";
import cen3 from "@/assets/cenprod3.jpeg";
import cen4 from "@/assets/cenprod4.jpeg";
import cen5 from "@/assets/cenprod5.png";

import rut1 from "@/assets/ruteando1.png";
import rut2 from "@/assets/ruteando2.png";
import rut3 from "@/assets/ruteando3.png";
import rut4 from "@/assets/ruteando4.png";
import rut5 from "@/assets/ruteando5.png";

type Project = {
  num: string;
  title: string;
  desc: { EN: string; ES: string };
  stack: string[];
  date: string;
  url: string;
  image: string;
  gallery?: string[];
};

const projects: Project[] = [
  {
    num: "01",
    title: "Ruteando Modo Alfa",
    desc: {
      EN: "Landing page designed to promote local tours in Piura.",
      ES: "Landing page diseñada para promocionar tours locales en Piura.",
    },
    stack: ["React", "HTML", "CSS", "JavaScript"],
    date: "2026",
    url: "#",
    image: rut1,
    gallery: [rut1, rut2, rut3, rut4, rut5],
  },
  {
    num: "02",
    title: "CENPROD",
    desc: {
      EN: "Real-time management and query system adaptable via Google Sheets. Features QR certificate generation with instant validation.",
      ES: "Sistema de gestión y consultas adaptable en tiempo real vía Google Sheets. Genera certificados con QR para validación instantánea.",
    },
    stack: ["React", "JavaScript", "Node.js", "Google Sheets API", "QR Code Generation"],
    date: "2026",
    url: "#",
    image: cen1,
    gallery: [cen1, cen2, cen3, cen4, cen5],
  },
  {
    num: "03",
    title: "Vulcano",
    desc: {
      EN: "Growing ERP system managing multiple areas, from sales to warehouse operations.",
      ES: "Sistema ERP en crecimiento que gestiona múltiples áreas, desde el área comercial hasta el almacén.",
    },
    stack: ["Python", "FastAPI", "React", "SQL", "AIIS"],
    date: "2025 - Presente",
    url: "#",
    image: prom1,
    gallery: [prom1, prom2, prom3, prom4],
  },
  {
    num: "04",
    title: "CREACLASS",
    desc: {
      EN: "AI platform to generate learning materials for teachers. Developed in a Co-working environment with other devs.",
      ES: "Plataforma con IA para generar materiales de aprendizaje. Desarrollado en colaboración con otros devs (Co-working).",
    },
    stack: ["Python", "Flask", "React", "MongoDB", "AWS"],
    date: "2025",
    url: "#",
    image: crea1,
    gallery: [crea1, crea2, crea3, crea4],
  },
  {
    num: "05",
    title: "Lavandería Lucy",
    desc: {
      EN: "Custom laundry management system with order tracking, finance control, and detailed reports.",
      ES: "Sistema a medida para gestión de órdenes, seguimiento de procesos, control de finanzas y reportes detallados.",
    },
    stack: ["Python", "FastAPI", "React", "SQL", "Render"],
    date: "2024",
    url: "#",
    image: lav2,
    gallery: [lav1, lav2, lav3, lav4, lav5, lav6, lav7],
  },
  {
    num: "06",
    title: "Sistema de Consultas GDP",
    desc: {
      EN: "Comprehensive system for sales management, advanced reporting, and detailed queries.",
      ES: "Sistema integral para la gestión de ventas, generación de reportes avanzados y consultas detalladas.",
    },
    stack: ["Flask", "HTML", "CSS", "Tailwind", "MongoDB", "Spreadsheet", "Heroku"],
    date: "2023",
    url: "#",
    image: gdp2,
    gallery: [gdp1, gdp2, gdp3, gdp4, gdp5, gdp6],
  },
];

function ProjectModal({ project, onClose, lang, t }: { project: Project; onClose: () => void; lang: string; t: any }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = project.gallery?.length ? project.gallery : [project.image];

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-5xl bg-background border border-border/40 rounded-xl overflow-hidden shadow-2xl flex flex-col md:flex-row z-10 max-h-[90vh]">
        
        {/* Image Gallery Section */}
        <div className="relative flex-1 bg-black/20 flex items-center justify-center min-h-[300px] md:min-h-0 group">
          <img 
            src={images[currentImageIndex]} 
            alt={`${project.title} screenshot ${currentImageIndex + 1}`} 
            className="w-full h-full object-contain max-h-[40vh] md:max-h-[90vh] p-2 md:p-4"
          />
          
          {images.length > 1 && (
            <>
              <button onClick={prevImage} className="absolute left-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors opacity-0 group-hover:opacity-100">
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button onClick={nextImage} className="absolute right-4 p-2 rounded-full bg-black/50 hover:bg-black text-white transition-colors opacity-0 group-hover:opacity-100">
                <ChevronRight className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${idx === currentImageIndex ? 'bg-lime w-4' : 'bg-white/50 hover:bg-white'}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Details Section */}
        <div className="w-full md:w-[400px] p-6 md:p-8 flex flex-col border-t md:border-t-0 md:border-l border-border/40 overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors text-muted-foreground hover:text-foreground z-20">
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4 mt-2">
            <h3 className="text-2xl md:text-3xl font-bold font-display">{project.title}</h3>
          </div>

          <p className="text-muted-foreground font-mono-ui text-sm mb-6">
            {project.desc[lang as keyof typeof project.desc]}
          </p>

          <div className="mb-8">
            <h4 className="font-mono-ui text-xs text-foreground/70 uppercase tracking-wider mb-3">
              {lang === "ES" ? "Tecnologías" : "Tech Stack"}
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.stack.map(s => (
                <span key={s} className="font-mono-ui text-xs px-2.5 py-1 bg-white/5 border border-white/10 rounded text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-auto pt-6 border-t border-border/40">
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono-ui text-xs text-muted-foreground">
                {lang === "ES" ? "Fecha" : "Date"}
              </span>
              <span className="font-mono-ui text-sm text-foreground">{project.date}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ p, lang, t, onOpenModal }: { p: Project; lang: string; t: any; onOpenModal: () => void }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
    <div
      ref={ref}
      className={`group relative flex flex-col lg:flex-row lg:items-center justify-between py-10 lg:py-14 border-b border-border/40 transition-all duration-500 overflow-hidden ${isActive ? "is-active" : ""}`}
    >
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-lime origin-left scale-x-0 group-[.is-active]:scale-x-100 lg:group-[.is-active]:scale-x-0 lg:group-hover:scale-x-100 transition-transform duration-500 ease-out z-20" />

      <div className="absolute inset-0 z-0 opacity-0 group-[.is-active]:opacity-40 lg:group-[.is-active]:opacity-0 lg:group-hover:opacity-40 transition-opacity duration-700 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent z-10" />
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover object-center blur-sm scale-105 group-[.is-active]:scale-100 lg:group-[.is-active]:scale-105 lg:group-hover:scale-100 transition-transform duration-700"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 flex flex-col gap-3 lg:w-1/2">
        <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground group-[.is-active]:text-lime lg:group-[.is-active]:text-foreground lg:group-hover:text-lime transition-colors duration-300 flex items-center gap-4">
          {p.title}
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
          <button 
            onClick={onOpenModal}
            className="border border-lime text-lime px-6 py-2.5 font-mono-ui text-sm font-semibold group-[.is-active]:bg-lime group-[.is-active]:text-black lg:group-[.is-active]:bg-transparent lg:group-[.is-active]:text-lime lg:group-hover:bg-lime lg:group-hover:text-black transition-all duration-300 rounded whitespace-nowrap"
          >
            {t.projects?.view || "View project ↗"}
          </button>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { lang, t } = useLang();
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="px-6 md:px-10 lg:px-16 2xl:px-24 py-10 md:py-16 w-full relative z-10">
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
              <ProjectCard p={p} lang={lang} t={t} onOpenModal={() => setSelectedProject(p)} />
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

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
          lang={lang} 
          t={t} 
        />
      )}
    </section>
  );
}
