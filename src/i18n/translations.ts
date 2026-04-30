export type Lang = "EN" | "ES";

export const translations = {
  EN: {
    nav: { projects: "Projects", stack: "Stack", about: "About", contact: "Contact" },
    hero: {
      role: "— Senior Full Stack Developer",
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
      cases: "cases",
      view: "View project",
      viewAll: "View all projects",
    },
    tech: { kicker: "— Stack", title: "Tools of the trade." },
    about: {
      kicker: "— About",
      title: "Hi, I'm Arian.",
      p1html:
        "I'm a full stack developer with over <b>5 years building</b> digital products from start to finish. I'm equally comfortable on the frontend and backend, and obsessed with code quality as much as the end-user experience.",
      p2: "I work best in environments where autonomy matters and problems are genuinely hard. If your team values clean code, direct communication, and shipping on time, we're probably a great fit.",
      cta: "Let's work together",
      download: "Download CV",
    },
    values: {
      kicker: "— Principles",
      title: "How I work.",
      items: [
        { title: "Clean Code", sub: "The code I write today is maintained by someone tomorrow.", quote: "Code that reads like prose, not a puzzle." },
        { title: "Performance", sub: "Every millisecond counts in the user experience.", quote: "Metrics first, optimization after. Always measured." },
        { title: "Communication", sub: "Clear updates, without unnecessary jargon.", quote: "The best teams speak plainly. So do I." },
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
      role: "— Desarrollador Full Stack Senior",
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
      cases: "casos",
      view: "Ver proyecto",
      viewAll: "Ver todos los proyectos",
    },
    tech: { kicker: "— Stack", title: "Herramientas que uso." },
    about: {
      kicker: "— Sobre mí",
      title: "Hola, soy Arian.",
      p1html:
        "Soy desarrollador full stack con más de <b>5 años creando</b> productos digitales de principio a fin. Me siento igual de cómodo en frontend y backend, y soy obsesivo con la calidad del código y la experiencia del usuario.",
      p2: "Doy lo mejor en entornos donde la autonomía importa y los problemas son realmente difíciles. Si tu equipo valora el código limpio, la comunicación directa y entregar a tiempo, probablemente encajemos.",
      cta: "Trabajemos juntos",
      download: "Descargar CV",
    },
    values: {
      kicker: "— Principios",
      title: "Cómo trabajo.",
      items: [
        { title: "Código Limpio", sub: "El código que escribo hoy lo mantendrá alguien mañana.", quote: "Código que se lee como prosa, no como un acertijo." },
        { title: "Rendimiento", sub: "Cada milisegundo cuenta en la experiencia del usuario.", quote: "Primero medir, luego optimizar. Siempre con datos." },
        { title: "Comunicación", sub: "Actualizaciones claras, sin jerga innecesaria.", quote: "Los mejores equipos hablan claro. Yo también." },
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
} as const;

export type Dict = typeof translations["EN"];
