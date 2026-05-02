import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const STORAGE_KEY = "exit-intent-shown";

export function ExitIntentModal() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(STORAGE_KEY) === "1") return;

    const handle = (e: MouseEvent) => {
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

        <p className="font-mono-ui text-xs text-lime mb-3">{t.exit.kicker}</p>
        <h3 className="font-display text-3xl md:text-4xl mb-4">{t.exit.title}</h3>
        <p className="text-muted-foreground mb-2">{t.exit.p1}</p>
        <p className="text-muted-foreground mb-8">{t.exit.p2}</p>

        <div className="flex flex-col gap-3">
          <a
            href="https://wa.me/message/GPOMR44DE7TSK1"
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="group bg-gradient-brand text-white px-6 py-3 rounded-md font-mono-ui text-sm font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2"
          >
            {t.exit.cta}
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <button
            onClick={close}
            className="font-mono-ui text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
          >
            {t.exit.dismiss}
          </button>
        </div>
      </div>
    </div>
  );
}
