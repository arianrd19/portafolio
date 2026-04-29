import { TechOrbit } from "./TechOrbit";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 md:px-10 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -z-0 right-[-10%] top-[20%] size-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--lime) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="flex items-center justify-between font-mono-ui text-xs text-muted-foreground mb-16 animate-fade-in">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
            Available for projects
          </span>
          <span className="flex items-center gap-2">
            scroll <span className="animate-blink">↓</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p
              className="font-mono-ui text-sm text-muted-foreground mb-10 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              — Senior Full Stack Developer
            </p>
            <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)]">
              <span className="block animate-fade-up" style={{ animationDelay: "200ms" }}>DESIGN</span>
              <span className="block text-lime animate-fade-up" style={{ animationDelay: "350ms" }}>BUILD</span>
              <span className="block animate-fade-up" style={{ animationDelay: "500ms" }}>SCALE</span>
            </h1>
            <p
              className="mt-10 max-w-md text-muted-foreground leading-relaxed animate-fade-up"
              style={{ animationDelay: "700ms" }}
            >
              I turn complex ideas into digital products people love to use.
              Specialized in modern architectures, performance, and user experience.
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "850ms" }}
            >
              <a
                href="#projects"
                className="bg-lime text-primary-foreground px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 animate-glow-pulse"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="group border border-border px-6 py-3 rounded-md font-mono-ui text-sm hover:border-lime hover:text-lime transition-colors inline-flex items-center gap-2"
              >
                Let's talk
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </div>
          <div id="stack" className="hidden lg:block animate-fade-in" style={{ animationDelay: "400ms" }}>
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
