import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function About() {
  const { t } = useLang();
  const socials = [
    { label: "GitHub", url: "https://github.com", arrow: "↗" },
    { label: "LinkedIn", url: "https://linkedin.com", arrow: "↗" },
    { label: "WhatsApp", url: "https://wa.me/18498686348", arrow: "↗" },
    { label: t.about.download, url: "#", arrow: "↓" },
  ];

  return (
    <section id="about" className="px-6 md:px-10 py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        <Reveal className="relative">
          <div className="aspect-square w-full max-w-md rounded-2xl bg-gradient-to-br from-secondary to-card border border-border overflow-hidden flex items-end justify-center hover-lift">
            <div className="size-full flex items-center justify-center font-mono-ui text-muted-foreground text-xs">
              <div className="text-center">
                <div className="size-32 mx-auto mb-4 rounded-full bg-gradient-brand border border-border flex items-center justify-center animate-float">
                  <span className="text-white font-display text-5xl">A</span>
                </div>
                arian.dev
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <p className="font-mono-ui text-xs text-lime mb-2">{t.about.kicker}</p>
          <h2 className="font-display text-4xl md:text-6xl mb-8">{t.about.title}</h2>
          <p
            className="text-lg text-muted-foreground leading-relaxed mb-6"
            dangerouslySetInnerHTML={{ __html: t.about.p1html }}
          />
          <p className="text-lg text-muted-foreground leading-relaxed mb-10">{t.about.p2}</p>

          <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10 font-mono-ui text-sm">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target={s.arrow === "↗" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="story-link text-muted-foreground hover:text-lime transition-colors inline-flex items-center gap-1"
              >
                {s.label} <span>{s.arrow}</span>
              </a>
            ))}
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 bg-gradient-brand text-white px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
          >
            {t.about.cta}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
