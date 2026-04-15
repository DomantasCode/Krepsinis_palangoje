import { useEffect, useState } from "react";
import { useCountUp } from "../hooks/useCountUp";

type ModalId = "treniruotes" | "stovyklos" | null;

interface ModalContent {
  label: string;
  title: string;
  icon: string;
  accent: "primary" | "tertiary";
  intro: string;
  bullets: { icon: string; text: string }[];
  cta: string;
}

const modals: Record<Exclude<ModalId, null>, ModalContent> = {
  treniruotes: {
    label: "01 — Treniruotės",
    title: "Dieninės treniruotės",
    icon: "calendar_month",
    accent: "primary",
    intro:
      "Nuoseklus darbas vasaros metu — skirtas vaikams nuo 6 iki 16 metų. Grupes formuojame pagal amžių ir patirtį, todėl kiekvienas vaikas treniruojasi tinkamo lygio aplinkoje. Dieninės treniruotės — tai kelias, kuriame tobulėjimas ateina natūraliai su realiu rezultatu.",
    bullets: [
      { icon: "schedule", text: "Kelios treniruotės per savaitę lauko arba vidaus aikštelėse Palangoje" },
      { icon: "person", text: "Individualus dėmesys kiekvienam vaikui — grupės pagal amžių ir lygį" },
      { icon: "sports_basketball", text: "Technika, fizinis pasiruošimas ir komandinis žaidimas" },
      { icon: "verified", text: "Patyrę treneriai su 20+ metų patirtimi" },
      { icon: "savings", text: "Pirma treniruotė — nemokama" },
    ],
    cta: "Registruotis į treniruotes",
  },
  stovyklos: {
    label: "02 — Stovykla",
    title: "Vasaros stovyklos",
    icon: "wb_sunny",
    accent: "tertiary",
    intro:
      "Daugiau nei treniruotės — tai patirtis, kurioje vaikai ne tik tobulėja kaip žaidėjai, bet ir atranda, kas yra tikra komanda. Sportas, disciplina, poilsis prie jūros ir draugystės, kurios lieka visam gyvenimui — viskas vienoje vasaros savaitėje Palangoje.",
    bullets: [
      { icon: "fitness_center", text: "Treniruotės kelis kartus per dieną" },
      { icon: "beach_access", text: "Poilsis prie Baltijos jūros tarp treniruočių" },
      { icon: "groups", text: "Komandiniai žaidimai, rungtynės ir bendrystė" },
      { icon: "psychology", text: "Disciplina ir charakteris, kurį vaikas parsiveža namo" },
      { icon: "shield", text: "Patyrę treneriai ir saugi, prižiūrima aplinka" },
    ],
    cta: "Registruotis į stovyklą",
  },
};

export default function AboutVariantB() {
  const { ref, value } = useCountUp(20);
  const [openModal, setOpenModal] = useState<ModalId>(null);

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [openModal]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpenModal(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const content = openModal ? modals[openModal] : null;
  const accentClasses =
    content?.accent === "primary"
      ? {
          label: "text-primary/70",
          icon: "bg-primary text-on-primary",
          bullet: "text-primary",
          button: "bg-primary text-on-primary hover:bg-primary-dim shadow-primary/25",
        }
      : {
          label: "text-tertiary/70",
          icon: "bg-tertiary text-on-tertiary",
          bullet: "text-tertiary",
          button: "bg-tertiary text-on-tertiary hover:brightness-110 shadow-tertiary/25",
        };

  const treniruotesCard = (
    <button
      type="button"
      onClick={() => setOpenModal("treniruotes")}
      className="group relative flex items-stretch h-[170px] md:h-[190px] bg-gradient-to-br from-surface-container-lowest to-primary/[0.03] rounded-3xl overflow-hidden [mask-image:linear-gradient(#000,#000)] border border-outline-variant/30 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer w-full"
    >
      <div className="relative w-36 md:w-44 shrink-0 overflow-hidden h-full bg-gradient-to-br from-primary/15 via-primary/10 to-primary/5 border-r border-dashed border-primary/20 flex flex-col items-center justify-center gap-1.5 text-center px-2">
        <span className="material-symbols-outlined text-3xl md:text-4xl text-primary/40">
          image
        </span>
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-primary/60 leading-tight">
          Čia bus jūsų nuotrauka
        </p>
      </div>

      <div className="flex-1 p-4 md:p-5 flex flex-col justify-center min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/70 mb-1">
          01 — Treniruotės
        </div>
        <div>
          <h3 className="font-black font-headline text-on-background tracking-tight text-lg md:text-xl mb-2 leading-tight">
            Dieninės treniruotės
          </h3>
          <p className="hidden md:block text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
            nuoseklus darbas vasaros metu — individualus dėmesys kiekvienam vaikui,
            pritaikytas pagal amžių ir lygį.
          </p>
          <div className="inline-flex items-center gap-1.5 text-primary text-xs font-bold uppercase tracking-wider relative">
            <span>Sužinoti daugiau</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-primary group-hover:w-[calc(100%-1.25rem)] transition-all duration-300" />
          </div>
        </div>
      </div>
    </button>
  );

  const stovyklosCard = (
    <button
      type="button"
      onClick={() => setOpenModal("stovyklos")}
      className="group relative flex items-stretch h-[170px] md:h-[190px] bg-gradient-to-br from-surface-container-lowest to-tertiary/[0.03] rounded-3xl overflow-hidden [mask-image:linear-gradient(#000,#000)] border border-outline-variant/30 hover:border-tertiary/50 hover:shadow-xl hover:shadow-tertiary/10 hover:-translate-y-1 transition-all duration-300 text-left cursor-pointer w-full"
    >
      <div className="relative w-36 md:w-44 shrink-0 overflow-hidden h-full bg-gradient-to-br from-tertiary/15 via-tertiary/10 to-tertiary/5 border-r border-dashed border-tertiary/20 flex flex-col items-center justify-center gap-1.5 text-center px-2">
        <span className="material-symbols-outlined text-3xl md:text-4xl text-tertiary/40">
          image
        </span>
        <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider text-tertiary/60 leading-tight">
          Čia bus jūsų nuotrauka
        </p>
      </div>

      <div className="flex-1 p-4 md:p-5 flex flex-col justify-center min-w-0">
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary/70 mb-1">
          02 — Stovykla
        </div>
        <div>
          <h3 className="font-black font-headline text-on-background tracking-tight text-lg md:text-xl mb-2 leading-tight">
            Vasaros stovyklos
          </h3>
          <p className="hidden md:block text-xs md:text-sm text-on-surface-variant leading-relaxed mb-3">
            daugiau nei treniruotės — sportas, disciplina, poilsis prie jūros ir komandos
            jausmas vienoje patirtyje.
          </p>
          <div className="inline-flex items-center gap-1.5 text-tertiary text-xs font-bold uppercase tracking-wider relative">
            <span>Sužinoti daugiau</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
            <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-tertiary group-hover:w-[calc(100%-1.25rem)] transition-all duration-300" />
          </div>
        </div>
      </div>
    </button>
  );

  return (
    <section id="apie-mus" className="pt-12 pb-2 md:py-20 bg-surface-container-low relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-tertiary/5 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-14">
          <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Apie mus
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-headline text-on-background uppercase tracking-tight leading-[1.05]">
            Nuoseklus darbas. <span className="text-primary">Tikri rezultatai.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 md:gap-10 items-stretch mb-12 md:mb-16">
          {/* Left: photo with animated counter overlay */}
          <div className="lg:col-span-2">
            <div
              ref={ref}
              className="relative h-full min-h-[320px] md:min-h-[420px] rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 bg-gradient-to-br from-surface-container-high to-surface-container border-2 border-dashed border-outline-variant/50"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 pointer-events-none">
                <span className="material-symbols-outlined text-5xl md:text-6xl text-on-surface-variant/40">
                  image
                </span>
                <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-on-surface-variant/60 text-center px-4">
                  Čia bus jūsų nuotrauka
                </p>
              </div>

              <div className="relative h-full flex flex-col justify-end p-7 md:p-9 text-on-background">
                <div className="text-xs font-bold uppercase tracking-[0.25em] text-on-surface-variant mb-2">
                  Daugiau nei
                </div>
                <div className="flex items-baseline gap-1 font-black font-headline leading-none mb-3 text-primary">
                  <span className="text-7xl md:text-9xl tracking-tighter">{value}</span>
                  <span className="text-4xl md:text-6xl">+</span>
                </div>
                <div className="text-base md:text-lg font-bold font-headline uppercase tracking-tight leading-tight text-on-background">
                  metų patirties su<br />jaunaisiais krepšininkais
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <p className="hidden md:block text-on-surface-variant leading-relaxed md:text-lg mb-5">
              Per daugiau nei 20 metų darbo su jaunaisiais krepšininkais supratome vieną dalyką –
              didžiausią progresą lemia ne atsitiktinės treniruotės, o{" "}
              <span className="text-on-background font-bold">
                nuoseklus, kokybiškas darbas ir tinkama aplinka
              </span>
              .
            </p>
            <div className="md:hidden flex flex-col gap-4 mb-6">
              {treniruotesCard}
              {stovyklosCard}
            </div>
            <div className="md:hidden space-y-3 mb-6">
              <div className="relative bg-surface-container-lowest rounded-2xl p-5 pl-6 border border-outline-variant/30 shadow-sm">
                <span className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-primary" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-[20px]">
                    groups
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                    Patirtis
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Esame komanda, kuri ne tik treniruoja, bet ir kuria prasmingą patirtį. Dirbome su
                  skirtingo amžiaus ir lygio žaidėjais, organizavome stovyklas ir aiškiai matėme,
                  kas veikia{" "}
                  <span className="text-on-background font-bold">ilgalaikėje perspektyvoje</span>.
                </p>
              </div>
              <div className="relative bg-surface-container-lowest rounded-2xl p-5 pl-6 border border-outline-variant/30 shadow-sm">
                <span className="absolute left-0 top-4 bottom-4 w-1 rounded-r-full bg-tertiary" />
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-tertiary text-[20px]">
                    psychology
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-tertiary">
                    Požiūris
                  </span>
                </div>
                <p className="text-on-surface-variant leading-relaxed text-sm">
                  Kiekvienas vaikas skirtingas – todėl ir ugdymas negali būti vienodas. Remiamės{" "}
                  <span className="text-on-background font-bold">realia patirtimi, o ne teorija</span>,
                  ir visą šią patirtį šiandien sutelkiame{" "}
                  <span className="text-on-background font-bold">Palangoje</span>.
                </p>
              </div>
            </div>
            <p className="hidden md:block text-on-surface-variant leading-relaxed md:text-lg mb-5">
              Esame komanda, kuri ne tik treniruoja, bet ir kuria prasmingą patirtį. Dirbome su
              skirtingo amžiaus ir lygio žaidėjais, organizavome stovyklas ir aiškiai matėme, kas
              veikia ilgalaikėje perspektyvoje.
            </p>
            <p className="hidden md:block text-on-surface-variant leading-relaxed md:text-lg mb-6">
              Kiekvienas vaikas skirtingas – todėl ir ugdymas negali būti vienodas. Remiamės{" "}
              <span className="text-on-background font-bold">realia patirtimi, o ne teorija</span>,
              ir visą šią patirtį šiandien sutelkiame{" "}
              <span className="text-on-background font-bold">Palangoje</span>.
            </p>
            <p className="hidden md:block text-on-surface-variant leading-relaxed md:text-lg">
              Kuriame aplinką, kurioje kiekvienas vaikas gali augti —{" "}
              <span className="text-on-background font-bold">
                kaip žaidėjas ir kaip asmenybė
              </span>
              .
            </p>
          </div>
        </div>

        <div className="hidden md:grid md:grid-cols-2 gap-4 md:gap-5">
          {treniruotesCard}
          {stovyklosCard}
        </div>
      </div>

      {/* Modal */}
      {content && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="about-modal-title"
        >
          <div
            className="absolute inset-0 bg-on-background/60 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]"
            onClick={() => setOpenModal(null)}
          />
          <div className="relative bg-surface-container-lowest rounded-[2rem] shadow-2xl max-w-xl w-full max-h-[90dvh] overflow-y-auto animate-[slideUp_0.25s_ease-out]">
            <button
              type="button"
              onClick={() => setOpenModal(null)}
              className="absolute top-4 right-4 md:top-5 md:right-5 w-10 h-10 rounded-full bg-surface-container-high hover:bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-on-background transition-colors z-10 cursor-pointer"
              aria-label="Uždaryti"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            <div className="p-6 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-12 h-12 rounded-2xl ${accentClasses.icon} flex items-center justify-center shrink-0`}
                >
                  <span className="material-symbols-outlined text-[26px]">{content.icon}</span>
                </div>
                <div>
                  <div
                    className={`text-[10px] font-bold uppercase tracking-[0.2em] ${accentClasses.label}`}
                  >
                    {content.label}
                  </div>
                  <h3
                    id="about-modal-title"
                    className="font-black font-headline text-on-background text-xl md:text-2xl tracking-tight leading-tight"
                  >
                    {content.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
                {content.intro}
              </p>

              <ul className="space-y-3 mb-8">
                {content.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-surface-container-low rounded-xl p-3 md:p-4"
                  >
                    <span
                      className={`material-symbols-outlined ${accentClasses.bullet} shrink-0 mt-0.5`}
                    >
                      {b.icon}
                    </span>
                    <p className="text-sm md:text-base text-on-background font-medium leading-snug">
                      {b.text}
                    </p>
                  </li>
                ))}
              </ul>

              <a
                href="#registracija-forma"
                onClick={() => setOpenModal(null)}
                className={`flex w-full items-center justify-center gap-2 ${accentClasses.button} font-bold px-7 md:px-8 py-3 md:py-4 rounded-full transition-all hover:scale-[1.02] shadow-lg text-sm md:text-base`}
              >
                {content.cta}
                <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
