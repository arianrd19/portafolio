import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        <Reveal className="relative">
          <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden flex items-end justify-center hover-lift">
            <div className="size-full flex items-center justify-center font-mono-ui text-muted-foreground text-xs">
              <div className="text-center">
                <div className="size-32 mx-auto mb-4 rounded-full bg-lime/20 border border-lime flex items-center justify-center animate-float">
                  <span className="text-lime font-display text-5xl">A</span>
                </div>
                anthony.dev
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-ui text-xs text-lime mb-2">— About</p>
          <h2 className="font-display text-4xl md:text-6xl mb-8">Hi, I'm Anthony.</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a full stack developer with over <span className="text-foreground font-semibold">5 years building</span>{" "}
            digital products from start to finish. I'm equally comfortable on the frontend and backend, and obsessed with
            code quality as much as the end-user experience.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">
            I work best in environments where autonomy matters and problems are genuinely hard. If your team values clean
            code, direct communication, and shipping on time, we're probably a great fit.
          </p>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-lime text-primary-foreground px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
          >
            Let's work together
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
