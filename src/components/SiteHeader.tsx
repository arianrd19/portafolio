import { Link } from "@tanstack/react-router";
import { useLang } from "@/i18n/LanguageContext";

export function SiteHeader() {
  const { lang, setLang, t } = useLang();

  const nav = [
    { hash: "projects", label: t.nav.projects },
    { hash: "stack", label: t.nav.stack },
    { hash: "about", label: t.nav.about },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono-ui text-sm tracking-widest text-foreground hover:text-lime transition-colors"
        >
          <span className="text-lime">[</span>ARIAN REYES DIESTRA<span className="text-lime">]</span>
        </Link>
        <nav className="flex items-center gap-3 md:gap-8 font-mono-ui text-sm">
          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.hash}
                href={`#${n.hash}`}
                className="story-link text-muted-foreground hover:text-foreground transition-colors"
              >
                {n.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-md border border-border hover:border-lime hover:text-lime transition-colors"
          >
            {t.nav.contact}
          </a>
          <div className="flex items-center text-xs border border-border rounded overflow-hidden">
            <button
              onClick={() => setLang("EN")}
              aria-label="English"
              className={`px-2 py-1 transition-colors ${
                lang === "EN" ? "bg-lime text-primary-foreground" : "text-muted-foreground hover:text-lime"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("ES")}
              aria-label="Español"
              className={`px-2 py-1 transition-colors ${
                lang === "ES" ? "bg-lime text-primary-foreground" : "text-muted-foreground hover:text-lime"
              }`}
            >
              ES
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
