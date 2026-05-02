import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

export function Contact() {
  const { t } = useLang();
  return (
    <section
      id="contact"
      className="px-6 md:px-10 py-10 md:py-16 border-t border-border/60 relative overflow-hidden"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-[700px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--accent-magenta) 0%, transparent 70%)" }}
      />
      <div className="relative mx-auto max-w-7xl text-center">
        <Reveal>
          <p className="font-mono-ui text-xs text-lime mb-4">{t.contact.kicker}</p>
          <h2 className="font-display text-5xl md:text-8xl tracking-tight">
            {t.contact.title1} <em className="text-shimmer not-italic">{t.contact.title2}</em>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md mx-auto">{t.contact.sub}</p>
          <a
            href="https://wa.me/message/GPOMR44DE7TSK1"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-2 bg-gradient-brand text-white px-8 py-4 rounded-md font-mono-ui text-sm font-semibold hover:-translate-y-0.5 transition-all duration-300 animate-glow-pulse"
          >
            {t.contact.cta}
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { t } = useLang();
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono-ui text-xs text-muted-foreground">
        <span>
          © {new Date().getFullYear()} Arian Reyes Diestra — {t.contact.footer}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
          {t.hero.available}
        </span>
      </div>
    </footer>
  );
}
