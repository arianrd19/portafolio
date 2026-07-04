export type Lang = "EN" | "ES";

type Dict = {
  nav: { projects: string; stack: string; about: string; contact: string };
  hero: {
    role: string;
    available: string;
    scroll: string;
    design: string;
    build: string;
    scale: string;
    tagline: string;
    viewProjects: string;
    letsTalk: string;
  };
  projects: { kicker: string; title: string; view: string; viewAll: string };
  tech: { kicker: string; title: string };
  about: {
    kicker: string;
    title: string;
    p1: string;
    p2: string;
    p3: string;
    cta: string;
    download: string;
  };
  values: { kicker: string; title: string; items: { title: string; sub: string; quote: string }[] };
  contact: {
    kicker: string;
    title1: string;
    title2: string;
    sub: string;
    cta: string;
    footer: string;
  };
  exit: { kicker: string; title: string; p1: string; p2: string; cta: string; dismiss: string };
};

export type { Dict };

export const translations: Record<Lang, Dict> = {
  EN: {
    nav: { projects: "Projects", stack: "Stack", about: "About", contact: "Contact" },
    hero: {
      role: "— Freelance Developer",
      available: "Available for projects",
      scroll: "scroll",
      design: "DESIGN",
      build: "BUILD",
      scale: "SCALE",
      tagline:
        "I turn complex ideas into digital products people love to use. Specialized in modern architectures, performance, and user experience.",
      viewProjects: "View projects",
      letsTalk: "Let's talk",
    },
    projects: {
      kicker: "— Selected work",
      title: "Projects.",
      view: "View project",
      viewAll: "View all projects",
    },
    tech: { kicker: "— Stack", title: "Tools of the trade." },
    about: {
      kicker: "— About",
      title: "Hi, I'm Arian.",
      p1: "I'm a Full Stack developer specialized in creating web solutions that help businesses and entrepreneurs optimize processes, automate tasks, and turn ideas into functional digital products.",
      p2: "I have over 5 years of experience building complete applications, from planning to implementation. My approach is to build scalable, secure, and user-friendly software, avoiding unnecessary complexity and always looking for the most efficient and cost-effective solution.",
      p3: "I'm motivated by new challenges, solving technical problems, and creating tools that generate real impact for those who use them. I believe the best software is the one that makes work simpler for people.",
      cta: "Let's work together",
      download: "Download CV",
    },
    values: {
      kicker: "— Principles",
      title: "How I work.",
      items: [
        {
          title: "Clean Code",
          sub: "The code I write today is maintained by someone tomorrow.",
          quote: "Code that reads like prose, not a puzzle.",
        },
        {
          title: "Performance",
          sub: "Every millisecond counts in the user experience.",
          quote: "Metrics first, optimization after. Always measured.",
        },
        {
          title: "Communication",
          sub: "Clear updates, without unnecessary jargon.",
          quote: "The best teams speak plainly. So do I.",
        },
      ],
    },
    contact: {
      kicker: "— Contact",
      title1: "Have a project",
      title2: "in mind?",
      sub: "Tell me about it. I reply in less than 24 hours.",
      cta: "Send a message",
      footer: "Crafted with care.",
    },
    exit: {
      kicker: "— Wait a moment",
      title: "Leaving already?",
      p1: "I have the skills to turn your idea into a real product.",
      p2: "Let's talk, no commitment.",
      cta: "Let's chat on WhatsApp",
      dismiss: "Maybe another time",
    },
  },
  ES: {
    nav: { projects: "Proyectos", stack: "Stack", about: "Sobre mí", contact: "Contacto" },
    hero: {
      role: "— Desarrollador Freelance",
      available: "Disponible para proyectos",
      scroll: "desliza",
      design: "DISEÑO",
      build: "DESARROLLO",
      scale: "ESCALA",
      tagline:
        "Convierto ideas complejas en productos digitales que la gente disfruta usar. Especializado en arquitecturas modernas, rendimiento y experiencia de usuario.",
      viewProjects: "Ver proyectos",
      letsTalk: "Hablemos",
    },
    projects: {
      kicker: "— Trabajos seleccionados",
      title: "Proyectos.",
      view: "Ver proyecto",
      viewAll: "Ver todos los proyectos",
    },
    tech: { kicker: "— Stack", title: "Herramientas que uso." },
    about: {
      kicker: "— Sobre mí",
      title: "Hola, soy Arian.",
      p1: "Soy desarrollador Full Stack especializado en crear soluciones web que ayudan a empresas y emprendedores a optimizar procesos, automatizar tareas y convertir ideas en productos digitales funcionales.",
      p2: "Cuento con más de 5 años de experiencia desarrollando aplicaciones completas, desde la planificación hasta la implementación. Mi enfoque es construir software escalable, seguro y fácil de usar, evitando la complejidad innecesaria y buscando siempre la solución más eficiente y rentable.",
      p3: "Me motiva enfrentar nuevos desafíos, resolver problemas técnicos y crear herramientas que generen un impacto real en quienes las utilizan. Considero que el mejor software es aquel que hace el trabajo más simple para las personas.",
      cta: "Trabajemos juntos",
      download: "Descargar CV",
    },
    values: {
      kicker: "— Principios",
      title: "Cómo trabajo.",
      items: [
        {
          title: "Código Limpio",
          sub: "El código que escribo hoy lo mantendrá alguien mañana.",
          quote: "Código que se lee como prosa, no como un acertijo.",
        },
        {
          title: "Rendimiento",
          sub: "Cada milisegundo cuenta en la experiencia del usuario.",
          quote: "Primero medir, luego optimizar. Siempre con datos.",
        },
        {
          title: "Comunicación",
          sub: "Actualizaciones claras, sin jerga innecesaria.",
          quote: "Los mejores equipos hablan claro. Yo también.",
        },
      ],
    },
    contact: {
      kicker: "— Contacto",
      title1: "¿Tienes un proyecto",
      title2: "en mente?",
      sub: "Cuéntame. Respondo en menos de 24 horas.",
      cta: "Enviar mensaje",
      footer: "Hecho con dedicación.",
    },
    exit: {
      kicker: "— Espera un momento",
      title: "¿Te vas tan pronto?",
      p1: "Tengo lo necesario para convertir tu idea en un producto real.",
      p2: "Hablemos, sin compromiso.",
      cta: "Hablar por WhatsApp",
      dismiss: "Quizás en otro momento",
    },
  },
};
