import { Link } from "@tanstack/react-router";

const nav = [
  { to: "/", hash: "projects", label: "Projects" },
  { to: "/", hash: "stack", label: "Stack" },
  { to: "/", hash: "about", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="font-mono-ui text-sm tracking-widest text-foreground hover:text-lime transition-colors">
          <span className="text-lime">[</span>ANTHONY MARC SOSA<span className="text-lime">]</span>
        </Link>
        <nav className="hidden md:flex items-center gap-8 font-mono-ui text-sm">
          {nav.map((n) => (
            <a key={n.label} href={`#${n.hash}`} className="text-muted-foreground hover:text-foreground transition-colors">
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-md border border-border hover:border-lime hover:text-lime transition-colors"
          >
            Contact
          </a>
          <span className="px-2 py-1 text-xs border border-border rounded text-muted-foreground">EN</span>
        </nav>
      </div>
    </header>
  );
}
