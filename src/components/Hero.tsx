import { TechOrbit } from "./TechOrbit";

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 md:px-10 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between font-mono-ui text-xs text-muted-foreground mb-16">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
            Available for projects
          </span>
          <span className="flex items-center gap-2">scroll <span className="animate-blink">↓</span></span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-mono-ui text-sm text-muted-foreground mb-10">— Senior Full Stack Developer</p>
            <h1 className="font-display text-[clamp(3.5rem,11vw,9rem)]">
              <span className="block">DESIGN</span>
              <span className="block text-lime">BUILD</span>
              <span className="block">SCALE</span>
            </h1>
            <p className="mt-10 max-w-md text-muted-foreground leading-relaxed">
              I turn complex ideas into digital products people love to use.
              Specialized in modern architectures, performance, and user experience.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-lime text-primary-foreground px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                View projects
              </a>
              <a
                href="#contact"
                className="border border-border px-6 py-3 rounded-md font-mono-ui text-sm hover:border-lime hover:text-lime transition-colors"
              >
                Let's talk →
              </a>
            </div>
          </div>
          <div id="stack" className="hidden lg:block">
            <TechOrbit />
          </div>
        </div>
      </div>
    </section>
  );
}
