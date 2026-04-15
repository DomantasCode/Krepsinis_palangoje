import { useEffect, useState } from "react";
import { fetchPopup, urlFor, type SanityPopup } from "../lib/sanity";
import { useModalLock } from "../hooks/useModalLock";

const STORAGE_KEY = "popup-dismissed-version";

export default function Popup() {
  const [popup, setPopup] = useState<SanityPopup | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout> | null = null;
    fetchPopup()
      .then((data) => {
        if (cancelled || !data) return;
        const dismissedVersion = Number(localStorage.getItem(STORAGE_KEY) || 0);
        if (dismissedVersion >= data.version) return;
        setPopup(data);
        timer = setTimeout(() => {
          if (!cancelled) setOpen(true);
        }, 1200);
      })
      .catch((err) => console.error("Failed to fetch popup:", err));
    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  const close = () => {
    if (popup) localStorage.setItem(STORAGE_KEY, String(popup.version));
    setOpen(false);
  };

  useModalLock(open, close);

  if (!popup || !open) return null;

  const imageUrl = popup.image ? urlFor(popup.image).width(800).auto("format").url() : null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 animate-[fadeIn_0.25s_ease]"
      onClick={close}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />
      <div
        className="relative bg-surface-container-lowest rounded-3xl max-w-md w-full overflow-hidden shadow-2xl animate-[slideUp_0.35s_cubic-bezier(0.16,1,0.3,1)]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Uždaryti"
          className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center bg-white/90 text-on-surface hover:bg-white hover:scale-110 transition-all z-10 shadow-md"
        >
          <span className="material-symbols-outlined text-xl">close</span>
        </button>

        {imageUrl && (
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              loading="lazy"
              className="w-full h-full object-cover"
              src={imageUrl}
              alt={popup.title}
            />
          </div>
        )}

        <div className="p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-black font-headline text-on-background mb-3 leading-tight">
            {popup.title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed whitespace-pre-line mb-6">
            {popup.message}
          </p>
          {popup.ctaText && popup.ctaLink && (
            <a
              href={popup.ctaLink}
              onClick={close}
              className="inline-flex items-center justify-center gap-2 bg-primary text-on-primary font-bold px-8 py-3.5 rounded-full hover:bg-primary-dim hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            >
              {popup.ctaText}
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
