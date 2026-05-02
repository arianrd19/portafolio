import { useLang } from "@/i18n/LanguageContext";
import { ScrambleText } from "./ScrambleText";
import { TechOrbit } from "./TechOrbit";
export function Hero() {
  const { lang, t } = useLang();
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 pb-10 md:pb-16 px-6 md:px-10 lg:px-16 2xl:px-24 overflow-hidden">
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute -z-0 right-[-10%] top-[20%] size-[600px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-magenta) 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -z-0 left-[-10%] bottom-[10%] size-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-cyan) 0%, transparent 70%)" }}
      />
      <div className="relative w-full">
        <div className="flex items-center justify-between font-mono-ui text-xs text-muted-foreground mb-16 animate-fade-in">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
            {t.hero.available}
          </span>
          <span className="flex items-center gap-2">
            {t.hero.scroll} <span className="animate-blink">↓</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">
          <div>
            <p
              className="font-mono-ui text-sm text-muted-foreground mb-10 animate-fade-up"
              style={{ animationDelay: "120ms" }}
            >
              {t.hero.role}
            </p>
            <h1 className="font-display text-[clamp(2.5rem,8vw,6.5rem)] leading-[0.95]">
              <ScrambleText
                key={`design-${lang}`}
                as="span"
                className="block whitespace-nowrap"
                text={t.hero.design}
                delay={200}
                duration={900}
              />
              <ScrambleText
                key={`build-${lang}`}
                as="span"
                className="block whitespace-nowrap text-gradient-brand"
                text={t.hero.build}
                delay={500}
                duration={1100}
              />
              <ScrambleText
                key={`scale-${lang}`}
                as="span"
                className="block whitespace-nowrap"
                text={t.hero.scale}
                delay={850}
                duration={900}
              />
            </h1>
            <p
              className="mt-10 max-w-md text-muted-foreground leading-relaxed animate-fade-up text-lg"
              style={{ animationDelay: "700ms" }}
            >
              {t.hero.tagline}
            </p>
            <div
              className="mt-10 flex flex-wrap gap-4 animate-fade-up"
              style={{ animationDelay: "850ms" }}
            >
              <a
                href="#projects"
                className="bg-gradient-brand text-white px-8 py-4 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 animate-glow-pulse"
              >
                {t.hero.viewProjects}
              </a>
              <a
                href="#contact"
                className="group border border-border px-8 py-4 rounded-md font-mono-ui text-sm hover:border-lime hover:text-lime transition-colors inline-flex items-center gap-2"
              >
                {t.hero.letsTalk}
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
          <div
            id="stack"
            className="hidden lg:flex w-full justify-center items-center animate-fade-in lg:justify-end xl:justify-center"
            style={{ animationDelay: "400ms" }}
          >
            <div className="w-full max-w-[600px] flex items-center justify-center">
              <TechOrbit />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
