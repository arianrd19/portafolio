import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

const nav = [
  { hash: "projects", label: "Projects" },
  { hash: "stack", label: "Stack" },
  { hash: "about", label: "About" },
];

export function SiteHeader() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = localStorage.getItem("lang");
    if (saved === "EN" || saved === "ES") setLang(saved);
  }, []);

  const toggleLang = () => {
    const next = lang === "EN" ? "ES" : "EN";
    setLang(next);
    if (typeof window !== "undefined") localStorage.setItem("lang", next);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link
          to="/"
          className="font-mono-ui text-sm tracking-widest text-foreground hover:text-lime transition-colors"
        >
          <span className="text-lime">[</span>ANTHONY MARC SOSA<span className="text-lime">]</span>
        </Link>
        <nav className="flex items-center gap-3 md:gap-8 font-mono-ui text-sm">
          <div className="hidden md:flex items-center gap-8">
            {nav.map((n) => (
              <a
                key={n.label}
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
            Contact
          </a>
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-2 py-1 text-xs border border-border rounded text-muted-foreground hover:border-lime hover:text-lime transition-colors min-w-10"
          >
            {lang}
          </button>
        </nav>
      </div>
    </header>
  );
}
