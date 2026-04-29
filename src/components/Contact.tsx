import { Reveal } from "./Reveal";

export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 border-t border-border/60 relative overflow-hidden">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--lime) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="font-mono-ui text-xs text-lime mb-4">— Contact</p>
          <h2 className="font-display text-5xl md:text-8xl tracking-tight">
            Have a project <em className="text-shimmer not-italic">in mind?</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">
            Tell me about it. I reply in less than 24 hours.
          </p>
          <a
            href="https://wa.me/18498686348?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 bg-lime text-primary-foreground px-8 py-4 rounded-md font-mono-ui text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 animate-glow-pulse"
          >
            Send a message
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono-ui text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Anthony Marc Sosa — Crafted with care.</span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
          Available for projects
        </span>
      </div>
    </footer>
  );
}
