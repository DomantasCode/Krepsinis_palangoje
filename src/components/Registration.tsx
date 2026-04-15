import { useState } from "react";

type CardId = "treniruotes" | "stovyklos";

export default function Registration() {
  const [openCard, setOpenCard] = useState<CardId | null>(null);

  const toggle = (id: CardId) => setOpenCard((prev) => (prev === id ? null : id));

  return (
    <section
      id="registracija-forma"
      className="relative py-16 md:py-24 bg-surface-container-low overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary-container to-tertiary" />
      <div className="hidden md:block absolute top-16 right-8 md:right-16 w-32 h-32 border-2 border-primary/10 rounded-full" />
      <div className="hidden md:block absolute bottom-16 left-8 md:left-16 w-24 h-24 border-2 border-tertiary/10 rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-tertiary-container text-on-tertiary-container font-label text-xs md:text-sm rounded-full mb-4 md:mb-6 uppercase tracking-widest font-bold">
            Pirma treniruotė nemokama
          </span>
          <h3 className="text-2xl md:text-5xl font-black font-headline text-on-background uppercase tracking-tighter mb-3 md:mb-4">
            Registracija
          </h3>
          <p className="text-on-surface-variant max-w-lg mx-auto text-sm md:text-lg">
            Pasirinkite tinkamą programą ir užregistruokite vaiką
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Treniruotės — Exoclass */}
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-xl shadow-on-surface/5 border border-outline-variant/30">
            <button
              type="button"
              onClick={() => toggle("treniruotes")}
              className={`w-full text-left p-5 md:p-6 border-b bg-gradient-to-br from-primary/5 to-transparent md:cursor-default active:bg-primary/10 md:active:bg-transparent transition-colors ${
                openCard === "treniruotes" ? "border-outline-variant/30" : "border-transparent"
              }`}
              aria-expanded={openCard === "treniruotes"}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">calendar_month</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70">
                    01 — Treniruotės
                  </div>
                  <h4 className="font-black font-headline text-on-background text-lg md:text-xl tracking-tight leading-tight">
                    Dieninės treniruotės
                  </h4>
                </div>
                <span
                  className={`md:hidden w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 shadow-md shadow-primary/30 transition-transform duration-300 ${
                    openCard === "treniruotes" ? "rotate-180" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">expand_more</span>
                </span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Pasirinkite tinkamą grupę ir užsiregistruokite per Exoclass sistemą.
              </p>
              <span className="md:hidden mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary">
                {openCard === "treniruotes" ? "Suskleisti" : "Spausk išskleisti"}
              </span>
            </button>
            <div className={`${openCard === "treniruotes" ? "block" : "hidden"} md:block`}>
              <iframe
                src="https://embed.exoclass.com/lt/embed/provider/cc909582-9556-49fb-ae29-4ded9b2fee2e/group-management?color=3d1172"
                width="100%"
                height="900"
                style={{ border: "none" }}
                title="Treniruočių registracija"
                loading="lazy"
              />
            </div>
          </div>

          {/* Stovyklos — Google Form */}
          <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-xl shadow-on-surface/5 border border-outline-variant/30">
            <button
              type="button"
              onClick={() => toggle("stovyklos")}
              className={`w-full text-left p-5 md:p-6 border-b bg-gradient-to-br from-tertiary/5 to-transparent md:cursor-default active:bg-tertiary/10 md:active:bg-transparent transition-colors ${
                openCard === "stovyklos" ? "border-outline-variant/30" : "border-transparent"
              }`}
              aria-expanded={openCard === "stovyklos"}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-11 h-11 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[24px]">wb_sunny</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary/70">
                    02 — Stovykla
                  </div>
                  <h4 className="font-black font-headline text-on-background text-lg md:text-xl tracking-tight leading-tight">
                    Vasaros stovyklos
                  </h4>
                </div>
                <span
                  className={`md:hidden w-9 h-9 rounded-full bg-tertiary text-on-tertiary flex items-center justify-center shrink-0 shadow-md shadow-tertiary/30 transition-transform duration-300 ${
                    openCard === "stovyklos" ? "rotate-180" : ""
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px]">expand_more</span>
                </span>
              </div>
              <p className="text-xs md:text-sm text-on-surface-variant leading-relaxed">
                Užpildykite formą ir susisieksime dėl artimiausios stovyklos Palangoje.
              </p>
              <span className="md:hidden mt-3 inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-tertiary">
                {openCard === "stovyklos" ? "Suskleisti" : "Spausk išskleisti"}
              </span>
            </button>
            <div className={`${openCard === "stovyklos" ? "block" : "hidden"} md:block`}>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdy56GzZBJ9M_XRUAS0oTpEc5Ekum9VZheAg7iTtyAFDYOiVA/viewform?embedded=true"
                width="100%"
                height="900"
                style={{ border: "none" }}
                title="Stovyklų registracija"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
