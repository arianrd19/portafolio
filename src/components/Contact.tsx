export function Contact() {
  return (
    <section id="contact" className="px-6 md:px-10 py-32 border-t border-border/60">
      <div className="mx-auto max-w-7xl text-center">
        <p className="font-mono-ui text-xs text-lime mb-4">— Contact</p>
        <h2 className="font-display text-5xl md:text-8xl tracking-tight">
          Have a project <em className="text-lime not-italic">in mind?</em>
        </h2>
        <p className="mt-6 text-muted-foreground max-w-md mx-auto">
          Tell me about it. I reply in less than 24 hours.
        </p>
        <a
          href="https://wa.me/18498686348?text=Hi%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-block bg-lime text-primary-foreground px-8 py-4 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Send a message →
        </a>
      </div>
    </section>
  );
}

export function SiteFooter() {
  return (
    <footer className="px-6 md:px-10 py-10 border-t border-border/60">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 font-mono-ui text-xs text-muted-foreground">
        <span>© {new Date().getFullYear()} Anthony Marc Sosa — Crafted with care.</span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-lime animate-pulse-dot" />
          Available for projects
        </span>
      </div>
    </footer>
  );
}
