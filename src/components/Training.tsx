import type { ReactNode } from "react";


interface TrainingSection {
  num: string;
  numColor: string;
  title: ReactNode;
  text: ReactNode;
  imageBg: string;
  imageRotate: string;
  image: string;
  imageAlt: string;
  reverse: boolean;
  extra: ReactNode;
  cta: string | null;
}

const sections: TrainingSection[] = [
  {
    num: "01",
    numColor: "text-tertiary",
    title: (
      <>
        Tvirtas <span className="text-primary italic">Pagrindas</span>
      </>
    ),
    text: (
      <>
        Nuo pirmo kamuolio paėmimo iki tikro žaidėjo — kelias, kurį vaikas nueina
        nejučia. Per žaidybinius pratimus vaikai išmoksta taisyklingo metimo,
        driblingo ir perdavimų, todėl tobulėjimas ateina{" "}
        <span className="font-bold text-primary">be spaudimo, bet su rezultatais</span>.
        Po kelių savaičių tėvai pamato skirtumą, o vaikai pajunta, kaip tampa
        taiklesni, greitesni ir drąsesni aikštėje.
      </>
    ),
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/Gemini_Generated_Image_o7isr1o7isr1o7is.png",
    imageAlt: "Treneris koreguoja jaunojo žaidėjo metimo formą",
    reverse: false,
    extra: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            sports_basketball
          </span>
          <p className="font-bold">Taisyklingas metimas ir kamuolio valdymas</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            trending_up
          </span>
          <p className="font-bold">Matoma pažanga jau po pirmų savaičių</p>
        </div>
      </div>
    ),
    cta: null,
  },
  {
    num: "02",
    numColor: "text-primary",
    title: (
      <>
        Tvirtas <span className="text-tertiary italic">Charakteris</span>
      </>
    ),
    text: (
      <>
        Krepšinis moko ne tik mesti kamuolį — jis moko mąstyti. Treniruotėse
        vaikai mokosi suprasti žaidimą, pasirinkti teisingą sprendimą ir
        pasitikėti savimi. Vaikams tai — žaidimas, kuriame jie tampa vis
        gudresni. Tėvams —{" "}
        <span className="font-bold text-tertiary">pasitikėjimas savimi ir gebėjimas nepasiduoti</span>
        , kurie vaikui pravers toli už aikštės ribų.
      </>
    ),
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/Gemini_Generated_Image_phvof8phvof8phvo.png",
    imageAlt: "Vaikai sportuoja lauke",
    reverse: true,
    extra: null,
    cta: "Pradėk treniruotis",
  },
  {
    num: "03",
    numColor: "text-tertiary",
    title: (
      <>
        Tikra <span className="text-primary italic">Bendrystė</span>
      </>
    ),
    text: (
      <>
        Komanda, į kurią vaikas{" "}
        <span className="font-bold text-primary">nori grįžti kiekvieną savaitę</span>.
        Rungtynėse, komandiniuose pratimuose ir{" "}
        <span className="font-bold text-primary">vasaros stovyklose</span>{" "}
        vaikai atranda, kas yra tikra komanda — kai pergalė dalinama, o
        nesėkmė neša į priekį visus kartu. Čia formuojasi ne tik žaidėjai,
        bet ir{" "}
        <span className="font-bold text-primary">draugystės, kurios lieka visam gyvenimui</span>.
      </>
    ),
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/Gemini_Generated_Image_rtlfovrtlfovrtlf.png",
    imageAlt: "Vaikai žaidžia krepšinį komandoje",
    reverse: false,
    extra: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            groups
          </span>
          <p className="font-bold">Komandinės rungtynės ir stovyklos</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            diversity_3
          </span>
          <p className="font-bold">Draugai už krepšinio aikštės</p>
        </div>
      </div>
    ),
    cta: null,
  },
];

export default function Training() {
  return (
    <section id="treniruotes" className="pt-8 pb-16 md:py-24 bg-surface-container-lowest relative">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-20">
          <span className="inline-block text-primary font-bold text-xs uppercase tracking-[0.2em] mb-3">
            Ko mokome
          </span>
          <h2 className="text-3xl md:text-5xl font-black font-headline text-on-background uppercase tracking-tight leading-[1.05] mb-4">
            Trys pamatai, <span className="text-primary">ant kurių statome</span> žaidėją
          </h2>
          <p className="text-on-surface-variant text-sm md:text-lg leading-relaxed">
            Nuo pirmo kamuolio paėmimo iki tikros komandos — štai ką vaikas parsineša iš kiekvienos treniruotės ir stovyklos Palangoje.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 md:mt-8">
            <span className="h-px w-8 bg-outline-variant" />
            <span className="material-symbols-outlined text-primary text-[20px]">sports_basketball</span>
            <span className="h-px w-8 bg-outline-variant" />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16 md:space-y-32">
        {sections.map((s, i) => (
          <div
            key={i}
            className={`flex flex-col ${s.reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-10 md:gap-16`}
          >
            {/* Image */}
            <div className="w-full md:w-1/2 relative">
              <div
                className={`absolute inset-0 ${s.imageBg} rounded-2xl`}
              />
              <img
                className={`relative rounded-xl md:rounded-2xl w-full h-[220px] md:h-[450px] object-cover shadow-2xl ${s.imageRotate} transition-transform duration-500`}
                alt={s.imageAlt}
                src={s.image}
              />
            </div>
            {/* Text */}
            <div className="w-full md:w-1/2">
              <span
                className={`${s.numColor} font-bold tracking-tighter text-3xl md:text-5xl opacity-20 mb-2 md:mb-4 block`}
              >
                {s.num}
              </span>
              <h2 className="text-2xl md:text-5xl font-black font-headline text-on-background mb-3 md:mb-6">
                {s.title}
              </h2>
              <p className="text-sm md:text-lg text-on-surface-variant leading-relaxed mb-5 md:mb-8">
                {s.text}
              </p>
              {s.extra}
              {s.cta && (
                <a
                  href="#registracija-forma"
                  className="inline-flex items-center gap-2 md:gap-3 mt-4 bg-primary text-on-primary font-bold px-7 md:px-10 py-3 md:py-4 rounded-full hover:bg-primary-dim transition-all hover:scale-105 shadow-xl shadow-primary/25 text-sm md:text-base"
                >
                  {s.cta}
                  <span className="material-symbols-outlined">arrow_forward</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
