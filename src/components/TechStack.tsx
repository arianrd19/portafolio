import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";
import { IconCloudGlobe } from "./IconCloudGlobe";

export function TechStack() {
  const { t, lang } = useLang();
  const subtitle =
    lang === "ES" ? "Tecnologías que uso a diario" : "Technologies I work with daily";

  return (
    <section
      id="stack"
      className="py-10 md:py-16 border-t border-border/60 overflow-hidden relative"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <Reveal>
          <div className="text-center mb-10">
            <p className="font-mono-ui text-xs text-lime mb-3">{t.tech?.kicker || "MY SKILLS"}</p>
            <h2 className="font-display text-4xl md:text-6xl">
              {lang === "ES" ? "Tech " : "Tech "}
              <span className="text-gradient-brand">Stack</span>
            </h2>
            <p className="mt-3 text-sm md:text-base text-muted-foreground">{subtitle}</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative w-full aspect-square max-w-[640px] mx-auto flex items-center justify-center cursor-pointer">
            <IconCloudGlobe />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
