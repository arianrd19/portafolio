const values = [
  {
    num: "01",
    title: "Clean Code",
    sub: "The code I write today is maintained by someone tomorrow.",
    symbol: "{ }",
    quote: "Code that reads like prose, not a puzzle.",
  },
  {
    num: "02",
    title: "Performance",
    sub: "Every millisecond counts in the user experience.",
    symbol: "</>",
    quote: "Metrics first, optimization after. Always measured.",
  },
  {
    num: "03",
    title: "Communication",
    sub: "Clear updates, without unnecessary jargon.",
    symbol: "[ ]",
    quote: "The best teams speak plainly. So do I.",
  },
];

export function Values() {
  return (
    <section className="px-6 md:px-10 py-24 border-t border-border/60">
      <div className="mx-auto max-w-7xl">
        <p className="font-mono-ui text-xs text-lime mb-2">— Principles</p>
        <h2 className="font-display text-4xl md:text-6xl mb-14">How I work.</h2>
        <div className="grid md:grid-cols-3 gap-5">
          {values.map((v) => (
            <div
              key={v.num}
              className="bg-card border border-border rounded-xl p-8 hover:border-lime transition-colors group"
            >
              <span className="font-mono-ui text-xs text-muted-foreground">{v.num}</span>
              <h3 className="mt-6 text-2xl font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.sub}</p>
              <div className="my-10 font-mono-ui text-4xl text-lime/80 group-hover:text-lime transition-colors">
                {v.symbol}
              </div>
              <p className="text-sm italic text-muted-foreground">"{v.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
