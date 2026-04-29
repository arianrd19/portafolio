import { useEffect, useState } from "react";

const STORAGE_KEY = "exit-intent-shown";

export function ExitIntentModal() {
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const handle = (e: MouseEvent) => {
      // Sólo cuando el ratón sale por arriba del viewport
      if (e.clientY <= 0 && !closed) {
        setOpen(true);
        sessionStorage.setItem(STORAGE_KEY, "1");
      }
    };
    document.addEventListener("mouseleave", handle);
    return () => document.removeEventListener("mouseleave", handle);
  }, [closed]);

  const close = () => {
    setOpen(false);
    setClosed(true);
  };

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[100] flex items-center justify-center px-6 animate-fade-in"
    >
      <button
        aria-label="Close"
        onClick={close}
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
      />
      <div className="relative w-full max-w-md bg-card border border-border rounded-2xl p-8 shadow-2xl animate-fade-up">
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-4 right-4 size-8 grid place-items-center text-muted-foreground hover:text-lime transition-colors font-mono-ui"
        >
          ✕
        </button>

        <p className="font-mono-ui text-xs text-lime mb-3">— Wait a moment</p>
        <h3 className="font-display text-3xl md:text-4xl mb-4">Leaving already?</h3>
        <p className="text-muted-foreground mb-2">
          I have the skills to turn your idea into a real product.
        </p>
        <p className="text-muted-foreground mb-8">Let's talk, no commitment.</p>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/18498686348?text=Hi%20Anthony%2C%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20talk%20about%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="group bg-lime text-primary-foreground px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
          >
            Let's chat on WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button
            onClick={close}
            className="font-mono-ui text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            Maybe another time
          </button>
        </div>
      </div>
    </div>
  );
}
