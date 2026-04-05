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
        Išmok <span className="text-primary italic">Techniką</span>
      </>
    ),
    text: "Geras metimas prasideda nuo taisyklingos formos. Mokome vaikus šaudyti taikliai, varyti kamuolį abiem rankomis ir atlikti perdavimus, kurie veikia tikrose rungtynėse. Kiekvienas pratimas skirtas tam, kad technika taptų antru instinktu.",
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/training-1.png",
    imageAlt: "Treneris koreguoja jaunojo žaidėjo metimo formą",
    reverse: false,
    extra: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            sports_basketball
          </span>
          <p className="font-bold">Metimo mechanika ir taiklumas</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            footprint
          </span>
          <p className="font-bold">Kamuolio valdymas ir perdavimai</p>
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
        Būk <span className="text-tertiary italic">Stiprus</span>
      </>
    ),
    text: "Treniruotėse stipriname ne tik krepšinio įgūdžius, bet ir fizinę formą. Vaikai lavina greitį, vikrumą ir ištvermę. Gera fizinė forma padeda žaisti geriau ir jaustis užtikrintai.",
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/training-2.png",
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
        Žaisk <span className="text-primary italic">Komandoje</span>
      </>
    ),
    text: (
      <>
        Krepšinis – tai komandinis žaidimas. Per rungtynes ir grupinius pratimus
        vaikai mokosi{" "}
        <span className="font-bold text-primary">pasitikėti komandos draugais</span>,
        {" "}dalintis kamuoliu ir priimti sprendimus kartu. Čia susiranda{" "}
        <span className="font-bold text-primary">naujų draugų</span> ir supranta,
        kad pergalė visada priklauso visai komandai.
      </>
    ),
    imageBg: "bg-primary rotate-3",
    imageRotate: "-rotate-1 hover:rotate-0",
    image: "/training-3.png",
    imageAlt: "Vaikai žaidžia krepšinį komandoje",
    reverse: false,
    extra: (
      <div className="space-y-4">
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            groups
          </span>
          <p className="font-bold">Komandinės rungtynės kiekvieną savaitę</p>
        </div>
        <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl border-l-4 border-tertiary">
          <span className="material-symbols-outlined text-tertiary">
            handshake
          </span>
          <p className="font-bold">Bendravimas ir lyderystė aikštėje</p>
        </div>
      </div>
    ),
    cta: null,
  },
];

export default function Training() {
  return (
    <section id="treniruotes" className="py-16 md:py-24 bg-surface-container-lowest relative">
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
