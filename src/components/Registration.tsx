import { useState } from "react";

type CardId = "treniruotes" | "stovyklos";
type ResidentChoice = "palanga" | "kita" | null;
type CampDate = "06-29" | "07-06" | null;

const PALANGA_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSdy56GzZBJ9M_XRUAS0oTpEc5Ekum9VZheAg7iTtyAFDYOiVA/viewform?embedded=true";

const CAMP_DATES = [
  {
    id: "06-29" as const,
    label: "06.29 – 07.03",
    name: "Pirmoji stovyklos savaitė",
    src: "https://embed.exoclass.com/lt/embed/provider/cc909582-9556-49fb-ae29-4ded9b2fee2e/group-management/9d2855fc-2a3c-4331-95f0-ed755c06f2b5?color=3d1172",
  },
  {
    id: "07-06" as const,
    label: "07.06 – 07.10",
    name: "Antroji stovyklos savaitė",
    src: "https://embed.exoclass.com/lt/embed/provider/cc909582-9556-49fb-ae29-4ded9b2fee2e/group-management/d5e4f507-2a8a-451f-bce4-052cb939215a?color=3d1172",
  },
];

export default function Registration() {
  const [openCard, setOpenCard] = useState<CardId | null>(null);
  const [residentChoice, setResidentChoice] = useState<ResidentChoice>(null);
  const [campDate, setCampDate] = useState<CampDate>(null);

  const toggle = (id: CardId) => setOpenCard((prev) => (prev === id ? null : id));

  const resetCampChoice = () => {
    setResidentChoice(null);
    setCampDate(null);
  };

  const selectResident = (choice: ResidentChoice) => {
    setResidentChoice(choice);
    setCampDate(null);
  };

  const selectedCampDate = CAMP_DATES.find((d) => d.id === campDate);

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
          {/* Treniruotės — placeholder */}
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
              <div className="p-8 md:p-12 min-h-[360px] md:min-h-[500px] flex flex-col items-center justify-center gap-4 text-center bg-gradient-to-br from-primary/[0.03] to-transparent border-2 border-dashed border-primary/20 m-4 md:m-6 rounded-2xl">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[36px] md:text-[44px]">
                    construction
                  </span>
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-primary/70 mb-2">
                    Netrukus
                  </div>
                  <h5 className="text-lg md:text-2xl font-black font-headline text-on-background tracking-tight leading-tight mb-2">
                    Čia bus treniruočių Exoclass
                  </h5>
                  <p className="text-xs md:text-sm text-on-surface-variant max-w-sm mx-auto leading-relaxed">
                    Dieninių treniruočių registracijos forma atsiras netrukus.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stovyklos */}
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
              {residentChoice === null && (
                <div className="p-6 md:p-8">
                  <div className="text-center mb-5 md:mb-6">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary/70 mb-2">
                      1 žingsnis iš 2
                    </div>
                    <h5 className="text-lg md:text-2xl font-black font-headline text-on-background tracking-tight leading-tight mb-2">
                      Ar esate Palangos gyventojas?
                    </h5>
                    <p className="text-xs md:text-sm text-on-surface-variant">
                      Pasirinkite, kad parodytume Jums tinkamą registracijos kanalą
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-3 md:gap-4">
                    <button
                      type="button"
                      onClick={() => selectResident("palanga")}
                      className="group flex flex-col items-center justify-center gap-2 md:gap-3 p-5 md:p-7 rounded-2xl bg-gradient-to-br from-tertiary/10 to-tertiary/5 border-2 border-tertiary/20 hover:border-tertiary hover:shadow-lg hover:shadow-tertiary/15 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <span className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-tertiary text-on-tertiary flex items-center justify-center shadow-md shadow-tertiary/30">
                        <span className="material-symbols-outlined text-[28px] md:text-[32px]">
                          home
                        </span>
                      </span>
                      <div className="text-center">
                        <div className="text-xs md:text-sm font-black font-headline text-on-background uppercase tracking-tight">
                          Taip
                        </div>
                        <div className="text-[11px] md:text-xs text-on-surface-variant mt-0.5">
                          Palangos gyventojas
                        </div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => selectResident("kita")}
                      className="group flex flex-col items-center justify-center gap-2 md:gap-3 p-5 md:p-7 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-0.5 active:scale-[0.98] transition-all cursor-pointer"
                    >
                      <span className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center shadow-md shadow-primary/30">
                        <span className="material-symbols-outlined text-[28px] md:text-[32px]">
                          directions_car
                        </span>
                      </span>
                      <div className="text-center">
                        <div className="text-xs md:text-sm font-black font-headline text-on-background uppercase tracking-tight">
                          Ne
                        </div>
                        <div className="text-[11px] md:text-xs text-on-surface-variant mt-0.5">
                          Iš kitur
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="mt-5 md:mt-6 flex items-start gap-2 text-[11px] md:text-xs text-on-surface-variant bg-surface-container-low rounded-xl p-3">
                    <span className="material-symbols-outlined text-tertiary text-[18px] shrink-0 mt-px">
                      info
                    </span>
                    <p className="leading-relaxed">
                      Palangos gyventojams skirtas atskiras registracijos kanalas, todėl prašome pasirinkti tinkamą variantą.
                    </p>
                  </div>
                </div>
              )}

              {residentChoice === "kita" && campDate === null && (
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between gap-3 mb-4 md:mb-5">
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-1">
                        2 žingsnis iš 2
                      </div>
                      <h5 className="text-lg md:text-2xl font-black font-headline text-on-background tracking-tight leading-tight">
                        Pasirinkite stovyklos savaitę
                      </h5>
                    </div>
                    <button
                      type="button"
                      onClick={resetCampChoice}
                      className="text-[11px] font-bold text-on-surface-variant hover:text-on-background inline-flex items-center gap-1 cursor-pointer shrink-0"
                    >
                      <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                      Atgal
                    </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    {CAMP_DATES.map((d) => (
                      <button
                        key={d.id}
                        type="button"
                        onClick={() => setCampDate(d.id)}
                        className="group relative flex flex-col items-start gap-2 p-5 md:p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/20 hover:border-primary hover:shadow-lg hover:shadow-primary/15 hover:-translate-y-0.5 active:scale-[0.98] transition-all text-left cursor-pointer"
                      >
                        <span className="w-11 h-11 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-md shadow-primary/30">
                          <span className="material-symbols-outlined text-[24px]">event</span>
                        </span>
                        <div>
                          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-1">
                            {d.name}
                          </div>
                          <div className="text-base md:text-lg font-black font-headline text-on-background tracking-tight">
                            {d.label}
                          </div>
                        </div>
                        <span className="absolute top-4 right-4 text-primary group-hover:translate-x-1 transition-transform">
                          <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {residentChoice === "palanga" && (
                <div>
                  <div className="px-4 md:px-6 py-4 border-b border-outline-variant/30 bg-tertiary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-tertiary text-on-tertiary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">home</span>
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary/80">
                          Pasirinkote
                        </div>
                        <div className="text-sm md:text-base font-black font-headline text-on-background truncate">
                          Palangos gyventojas
                        </div>
                      </div>
                    </div>
                    <button
                      type="button"
                      onClick={resetCampChoice}
                      className="inline-flex items-center justify-center gap-2 bg-surface-container-lowest text-on-background font-bold text-xs md:text-sm px-4 py-2.5 rounded-full border-2 border-tertiary hover:bg-tertiary hover:text-on-tertiary active:scale-[0.98] transition-all shrink-0 cursor-pointer shadow-sm"
                    >
                      <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
                      Pakeisti pasirinkimą
                    </button>
                  </div>
                  <iframe
                    src={PALANGA_FORM}
                    width="100%"
                    height="900"
                    style={{ border: "none" }}
                    title="Stovyklų registracija (Palangos gyventojams)"
                    loading="lazy"
                  />
                </div>
              )}

              {residentChoice === "kita" && selectedCampDate && (
                <div>
                  <div className="px-4 md:px-6 py-4 border-b border-outline-variant/30 bg-primary/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div className="min-w-0 flex items-center gap-3">
                      <span className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[22px]">event</span>
                      </span>
                      <div className="min-w-0">
                        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/80">
                          Ne Palangos · {selectedCampDate.name}
                        </div>
                        <div className="text-sm md:text-base font-black font-headline text-on-background truncate">
                          {selectedCampDate.label}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        type="button"
                        onClick={() => setCampDate(null)}
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-container-lowest text-on-background font-bold text-xs md:text-sm px-3 md:px-4 py-2.5 rounded-full border-2 border-primary hover:bg-primary hover:text-on-primary active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">calendar_month</span>
                        Kita data
                      </button>
                      <button
                        type="button"
                        onClick={resetCampChoice}
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-container-lowest text-on-background font-bold text-xs md:text-sm px-3 md:px-4 py-2.5 rounded-full border-2 border-outline-variant hover:border-tertiary hover:bg-tertiary hover:text-on-tertiary active:scale-[0.98] transition-all cursor-pointer shadow-sm"
                      >
                        <span className="material-symbols-outlined text-[18px]">swap_horiz</span>
                        <span className="hidden sm:inline">Pakeisti</span>
                      </button>
                    </div>
                  </div>
                  <iframe
                    key={selectedCampDate.id}
                    src={selectedCampDate.src}
                    width="100%"
                    height="900"
                    style={{ border: "none" }}
                    title={`Stovyklų registracija (${selectedCampDate.label})`}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
