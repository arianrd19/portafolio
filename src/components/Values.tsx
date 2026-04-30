import { Reveal } from "./Reveal";
import { useLang } from "@/i18n/LanguageContext";

const symbols = ["{ }", "</>", "[ ]"];
const nums = ["01", "02", "03"];

export function Values() {
  const { t } = useLang();
  const values = t.values.items.map((it, i) => ({ ...it, num: nums[i], symbol: symbols[i] }));
  return (
    <section className="px-6 md:px-10 py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="font-mono-ui text-xs text-lime mb-2">{t.values.kicker}</p>
          <h2 className="font-display text-4xl md:text-6xl mb-14">{t.values.title}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <Reveal key={v.num} index={i} delayStep={120}>
              <div className="hover-lift bg-card border border-border rounded-xl p-8 group h-full">
                <span className="font-mono-ui text-xs text-muted-foreground">{v.num}</span>
                <h3 className="mt-6 text-2xl font-semibold transition-colors group-hover:text-lime">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{v.sub}</p>
                <div className="my-10 font-mono-ui text-4xl text-gradient-brand opacity-80 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110 origin-left">
                  {v.symbol}
                </div>
                <p className="text-sm italic text-muted-foreground">"{v.quote}"</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
