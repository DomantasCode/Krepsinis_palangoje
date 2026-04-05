import { useState } from "react";

interface NewsItem {
  tag: string;
  tagColor: string;
  title: string;
  summary: string;
  fullText: string;
  image?: string;
  bg: string;
  textColor: string;
  span: number;
  date?: { month: string; day: string };
  icon?: string;
  sideImage?: string;
  author?: { name: string };
}

const news: NewsItem[] = [
  {
    tag: "PRANEŠIMAS",
    tagColor: "bg-primary text-white",
    title: "Naujas treneris iš Eurolygos akademijos",
    summary:
      "Džiaugiamės pranešę, kad nuo liepos mėnesio prie mūsų šeimos jungiasi treneris Arvydas.",
    fullText:
      "Treneris Arvydas turi daugiau nei 15 metų patirtį dirbant su jaunaisiais krepšininkais Eurolygos akademijose. Jo specializacija – individualus žaidėjų tobulėjimas ir metimo technika. Arvydas prisijungs prie komandos liepos mėnesį ir ves vasaros stovyklos treniruotes. Tai puiki galimybė jauniesiems krepšininkams mokytis iš aukščiausio lygio specialisto.",
    image: "/news-coach.png",
    bg: "bg-slate-900",
    textColor: "text-white",
    span: 2,
  },
  {
    tag: "PATARIMAI",
    tagColor: "bg-tertiary-container text-on-tertiary-container",
    title: "5 pratimai metimo nuotoliui didinti",
    summary:
      "Ekspertų patarimai, kaip sukurti jėgą metimui iš kojų darbo.",
    fullText:
      "Metimo nuotolis priklauso ne tik nuo rankų jėgos – pagrindas yra kojų darbas ir viso kūno koordinacija. Rekomenduojami pratimai: pritūpimai su šuoliu, vienos kojos balanso pratimai, medicininio kamuolio metimai, plaštakos stiprinimo pratimai ir reguliarios metimo sesijos nuo skirtingų taškų. Kiekvieną pratimą atlikite 3 serijas po 10 kartojimų.",
    bg: "bg-surface-container-lowest",
    textColor: "text-on-background",
    span: 1,
    icon: "sports_basketball",
    author: { name: "Treneris V. Chomičius" },
  },
  {
    tag: "RENGINYS",
    tagColor: "bg-white/20 text-white",
    title: "Paplūdimio 3x3 turnyras: Palanga Open",
    summary:
      "Registracija į kasmetinę krepšinio šventę jau atvira U12 ir U14 kategorijoms.",
    fullText:
      "Palanga Open 3x3 turnyras vyks liepos 15 d. paplūdimio aikštelėse. Kviečiame komandas registruotis U12 ir U14 amžiaus kategorijose. Kiekviena komanda – 3-4 žaidėjai. Nugalėtojus laukia taurės ir specialūs prizai. Registracija iki liepos 10 d. Dalyvavimas nemokamas!",
    bg: "bg-primary",
    textColor: "text-on-primary",
    span: 1,
    date: { month: "LIE", day: "15" },
  },
  {
    tag: "BENDRUOMENĖ",
    tagColor: "bg-white/20 text-white",
    title: "Pajūrio Dvasia: Bendruomenės dėmesio centre",
    summary:
      "Susipažinkite su vietos krepšinio entuziastais, remiančiais jaunųjų talentų augimą kurorte.",
    fullText:
      "Mūsų bendruomenė – tai ne tik treneriai ir žaidėjai. Tai tėvai, savanoriai ir vietos verslai, kurie kartu kuria krepšinio kultūrą Palangoje. Šį mėnesį kalbėjomės su keliais bendruomenės nariais apie tai, kodėl jaunimo sportas yra svarbus ir kaip kiekvienas gali prisidėti. Ačiū visiems, kurie palaiko jaunuosius talentus!",
    bg: "bg-tertiary",
    textColor: "text-on-tertiary",
    span: 2,
    sideImage: "/training-1.png",
  },
];

function Modal({ item, onClose }: { item: NewsItem; onClose: () => void }) {
  const modalImage = item.image || item.sideImage;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-surface-container-lowest rounded-t-[2rem] md:rounded-[2rem] max-w-2xl w-full max-h-[90vh] md:max-h-[85vh] overflow-y-auto shadow-2xl animate-[slideUp_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        {modalImage && (
          <div className="relative h-56 md:h-72 overflow-hidden rounded-t-[2rem]">
            <img
              className="w-full h-full object-cover"
              src={modalImage}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
          </div>
        )}
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 ${modalImage
              ? "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60"
              : "bg-surface-container-highest text-on-surface hover:bg-outline-variant"
            }`}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className={`p-6 md:p-10 ${!modalImage ? "pt-12 md:pt-14" : ""}`}>
          <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
            {item.tag}
          </span>
          <h3 className="text-2xl md:text-3xl font-black font-headline text-on-background mb-4">
            {item.title}
          </h3>
          <p className="text-on-surface-variant leading-relaxed">
            {item.fullText}
          </p>
          {item.author && (
            <div className="flex items-center gap-3 mt-6 pt-6 border-t border-outline-variant/30">
              <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center">
                <span className="material-symbols-outlined text-on-primary-container">person</span>
              </div>
              <span className="font-bold text-sm">{item.author.name}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function NewsCard({ item, onClick }: { item: NewsItem; onClick: () => void }) {
  // Hero card with background image
  if (item.image) {
    return (
      <div
        className={`md:col-span-${item.span} relative group rounded-[2rem] overflow-hidden ${item.bg} cursor-pointer h-[250px] md:h-[300px]`}
        onClick={onClick}
      >
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          alt={item.title}
          src={item.image}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent p-6 md:p-10 flex flex-col justify-end">
          <span className={`${item.tagColor} text-xs font-bold px-3 py-1 rounded-full w-fit mb-4`}>
            {item.tag}
          </span>
          <h4 className="text-2xl md:text-3xl font-bold text-white mb-2 font-headline">
            {item.title}
          </h4>
          <p className="text-slate-300 max-w-lg text-sm md:text-base">
            {item.summary}
          </p>
        </div>
      </div>
    );
  }

  // Card with side image
  if (item.sideImage) {
    return (
      <div
        className={`md:col-span-${item.span} rounded-[2rem] overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-transform`}
        onClick={onClick}
      >
        <div className="grid md:grid-cols-2 h-full">
          <div className={`${item.bg} p-6 md:p-8 ${item.textColor} flex flex-col justify-center relative overflow-hidden`}>
            <div className="absolute -left-8 -bottom-8 opacity-10">
              <span className="material-symbols-outlined text-[10rem]">waves</span>
            </div>
            <div className="relative z-10">
              <span className={`${item.tagColor} text-xs font-bold px-3 py-1 rounded-full inline-block mb-3`}>
                {item.tag}
              </span>
              <h4 className="text-xl md:text-2xl font-bold font-headline mb-3">
                {item.title}
              </h4>
              <p className="opacity-90 text-sm">{item.summary}</p>
            </div>
          </div>
          <div className="h-48 md:h-auto relative">
            <img
              className="absolute inset-0 w-full h-full object-cover"
              alt={item.title}
              src={item.sideImage}
            />
          </div>
        </div>
      </div>
    );
  }

  // Date card
  if (item.date) {
    return (
      <div
        className={`${item.bg} p-6 md:p-8 rounded-[2rem] ${item.textColor} flex flex-col hover:translate-y-[-8px] transition-transform relative overflow-hidden cursor-pointer`}
        onClick={onClick}
      >
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-white/10" />
        <div className="relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-white/20 rounded-xl px-3 py-2 text-center leading-tight">
              <span className="text-xs font-bold block">{item.date.month}</span>
              <span className="text-2xl font-black block">{item.date.day}</span>
            </div>
            <div>
              <span className={`${item.tagColor} text-xs font-bold px-2 py-0.5 rounded inline-block mb-1`}>
                {item.tag}
              </span>
              <h4 className="text-lg font-bold font-headline">{item.title}</h4>
            </div>
          </div>
          <p className="opacity-90 text-sm">{item.summary}</p>
        </div>
      </div>
    );
  }

  // Default card with icon
  return (
    <div
      className={`${item.bg} p-6 md:p-8 rounded-[2rem] shadow-xl shadow-on-surface/5 flex flex-col hover:translate-y-[-8px] transition-transform relative overflow-hidden cursor-pointer`}
      onClick={onClick}
    >
      {item.icon && (
        <div className="absolute top-4 right-4 opacity-5">
          <span className="material-symbols-outlined text-[8rem] text-primary">
            {item.icon}
          </span>
        </div>
      )}
      <div className="relative z-10">
        <span className={`${item.tagColor} text-xs font-bold px-3 py-1 rounded-full inline-block mb-4`}>
          {item.tag}
        </span>
        <h4 className={`text-xl font-bold font-headline mb-3 ${item.textColor}`}>
          {item.title}
        </h4>
        <p className="text-on-surface-variant text-sm">{item.summary}</p>
      </div>
      {item.author && (
        <div className="flex items-center gap-3 mt-4 relative z-10">
          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary-container text-sm">person</span>
          </div>
          <span className="text-xs font-bold">{item.author.name}</span>
        </div>
      )}
    </div>
  );
}

export default function News() {
  const [selected, setSelected] = useState<NewsItem | null>(null);

  return (
    <>
      <section id="naujienos" className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-3 md:gap-4">
            <div>
              <h3 className="text-2xl md:text-4xl font-black font-headline text-on-background uppercase tracking-tight">
                Žinios iš <span className="text-primary">Aikštelės</span>
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base">
                Sek naujienas tiesiai iš krepšinio sostinės pajūryje.
              </p>
            </div>
            <a
              className="text-primary font-bold flex items-center gap-2 hover:underline shrink-0"
              href="https://www.instagram.com/skm_treniruotespalangoje/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sekite mus Instagram{" "}
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item, i) => (
              <NewsCard key={i} item={item} onClick={() => setSelected(item)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <div className="relative bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-linear-to-r from-primary-dim via-primary to-primary-dim" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-center sm:text-left text-on-primary font-bold font-headline uppercase tracking-tight text-sm md:text-base">
            Pirma treniruotė nemokama <span className="hidden sm:inline">— registruokis dabar</span>
          </p>
          <a
            href="#registracija-forma"
            className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-2.5 rounded-full hover:scale-105 transition-transform text-sm shrink-0"
          >
            <span className="sm:hidden">REGISTRUOTIS DABAR</span>
            <span className="hidden sm:inline">REGISTRUOTIS</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        </div>
      </div>

      {/* Modal */}
      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}
