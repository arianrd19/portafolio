import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";
import { Github, Linkedin } from "lucide-react";

const nums = ["01", "02", "03"];

export function About() {
  const { lang, t } = useLang();
  const values = t.values?.items?.map((it: any, i: number) => ({ ...it, num: nums[i] })) || [];

  return (
    <section id="about" className="px-6 md:px-10 lg:px-16 2xl:px-24 py-10 md:py-16 w-full">
      <div className="mx-auto max-w-[1600px]">
        <Reveal className="mb-12">
          <h2 className="font-display text-4xl md:text-6xl">{t.about?.title || "About me"}</h2>
        </Reveal>

        <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Column 1: Image and Buttons */}
          <Reveal className="flex flex-col gap-4">
            <div className="relative aspect-[3/4] w-full max-w-[320px] rounded-lg overflow-hidden border border-border/40 bg-card">
              {/* Lime Green Corner Decoration */}
              <div className="absolute top-0 right-0 w-16 h-16 pointer-events-none z-10">
                <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-lime rounded-tr" />
              </div>
              <img
                src="/src/assets/4RD.png"
                alt="Arian Reyes Diestra"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="w-full max-w-[320px] flex flex-col gap-3 mt-2">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="https://github.com/arianrd19"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-md border border-border/60 hover:border-lime/60 hover:text-lime transition-colors font-mono-ui text-xs text-muted-foreground"
                >
                  <Github className="size-4" /> GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/arianrd/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-md border border-border/60 hover:border-lime/60 hover:text-lime transition-colors font-mono-ui text-xs text-muted-foreground"
                >
                  <Linkedin className="size-4" /> LinkedIn ↗
                </a>
              </div>
              <a
                href="https://wa.me/message/GPOMR44DE7TSK1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-md border border-lime/30 bg-lime/5 text-lime hover:bg-lime/10 transition-colors font-mono-ui text-sm font-medium"
              >
                WhatsApp
              </a>
              <a
                href="#"
                className="flex items-center justify-center gap-2 py-3 rounded-md border border-lime text-lime hover:bg-lime hover:text-black transition-colors font-mono-ui text-sm font-medium"
              >
                Download CV
              </a>
            </div>
          </Reveal>

          {/* Column 2: Text and CTA */}
          <Reveal delay={120} className="flex flex-col gap-8 py-4">
            <div
              className="text-lg md:text-xl text-muted-foreground leading-relaxed [&>strong]:text-foreground [&>strong]:font-semibold"
              dangerouslySetInnerHTML={{
                __html:
                  t.about?.p1html ||
                  "I'm a full stack developer with over <strong>5 years building</strong> digital products from start to finish. I'm equally comfortable on the frontend and backend, and obsessed with code quality as much as the end-user experience.",
              }}
            />
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {t.about?.p2 ||
                "I work best in environments where autonomy matters and problems are genuinely hard. If your team values clean code, direct communication, and shipping on time, we're probably a great fit."}
            </p>
            <div>
              <a
                href="#contact"
                className="inline-block mt-4 bg-lime text-black px-8 py-4 rounded font-mono-ui text-sm font-semibold hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300"
              >
                Let's work together
              </a>
            </div>
          </Reveal>

          {/* Column 3: Values */}
          <Reveal
            delay={240}
            className="lg:border-l lg:border-lime/40 lg:pl-10 flex flex-col gap-10 py-4"
          >
            {values.length > 0 ? (
              values.map((v: any, i: number) => (
                <div key={v.num || i} className="flex flex-col gap-2">
                  <div className="flex items-start gap-4">
                    <span className="font-mono-ui text-sm text-lime mt-1">{v.num}</span>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-2">{v.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{v.sub}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              // Fallback if translations are missing
              <>
                <div className="flex items-start gap-4">
                  <span className="font-mono-ui text-sm text-lime mt-1">01</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Clean Code</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The code I write today is maintained by someone tomorrow.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono-ui text-sm text-lime mt-1">02</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Performance</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Every millisecond counts in the user experience.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="font-mono-ui text-sm text-lime mt-1">03</span>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Communication</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Clear updates, without unnecessary jargon.
                    </p>
                  </div>
                </div>
              </>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
