import { useState, useEffect, useRef } from "react";
import { PortableText, type PortableTextComponents, type PortableTextBlock } from "@portabletext/react";
import { fetchNews, fetchUpcomingEvent, urlFor, type SanityNewsItem } from "../lib/sanity";
import { useModalLock } from "../hooks/useModalLock";

const portableTextComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-on-surface-variant leading-relaxed mb-4 last:mb-0">{children}</p>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-black font-headline text-on-background mt-6 mb-3">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary pl-4 italic text-on-surface-variant my-4">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-on-surface-variant space-y-1 mb-4">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-on-surface-variant space-y-1 mb-4">{children}</ol>
    ),
  },
  marks: {
    strong: ({ children }) => <strong className="font-bold text-on-background">{children}</strong>,
    em: ({ children }) => <em className="italic">{children}</em>,
    link: ({ children, value }) => (
      <a
        href={value?.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary font-bold hover:underline"
      >
        {children}
      </a>
    ),
  },
};

interface NewsCardData {
  _id: string;
  title: string;
  tag: string;
  summary: string;
  fullText: PortableTextBlock[];
  image?: string;
  gallery?: string[];
  isEvent?: boolean;
  eventDate?: string;
  keepMainImage?: boolean;
}

function ImagePlaceholder({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-surface-container-high to-surface-container border-2 border-dashed border-outline-variant/50 ${className}`}
    >
      <span className="material-symbols-outlined text-4xl md:text-5xl text-on-surface-variant/40">
        image
      </span>
      <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-on-surface-variant/60 text-center px-3">
        Čia bus jūsų nuotrauka
      </p>
    </div>
  );
}

const MONTHS_LT = ["SAU", "VAS", "KOV", "BAL", "GEG", "BIR", "LIE", "RGP", "RGS", "SPA", "LAP", "GRD"];

function formatEventDate(iso: string): { month: string; day: string } {
  const d = new Date(iso);
  return { month: MONTHS_LT[d.getMonth()], day: String(d.getDate()) };
}

function toCardData(item: SanityNewsItem): NewsCardData {
  return {
    _id: item._id,
    title: item.title,
    tag: item.tag,
    summary: item.summary,
    fullText: item.fullText,
    image: item.image ? urlFor(item.image).width(1200).auto("format").url() : undefined,
    gallery: item.gallery?.map((img) => urlFor(img).width(800).auto("format").url()),
    isEvent: item.isEvent,
    eventDate: item.eventDate,
  };
}

function Modal({ item, onClose }: { item: NewsCardData; onClose: () => void }) {
  useModalLock(true, onClose);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-surface-container-lowest rounded-t-[2rem] md:rounded-[2rem] max-w-2xl w-full max-h-[90dvh] md:max-h-[85dvh] overflow-y-auto shadow-2xl animate-[slideUp_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-56 md:h-72 overflow-hidden rounded-t-[2rem]">
          {item.keepMainImage && item.image ? (
            <>
              <img loading="lazy" className="w-full h-full object-cover" src={item.image} alt={item.title} />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
            </>
          ) : (
            <ImagePlaceholder className="w-full h-full rounded-t-[2rem]" />
          )}
        </div>
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center transition-colors z-10 ${item.keepMainImage && item.image
              ? "bg-black/40 backdrop-blur-sm text-white hover:bg-black/60"
              : "bg-surface-container-highest text-on-surface hover:bg-outline-variant"
            }`}
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
              {item.tag}
            </span>
            {item.isEvent && item.eventDate && (
              <span className="inline-flex items-center gap-1.5 text-on-surface-variant text-sm font-medium">
                <span className="material-symbols-outlined text-base leading-none">event</span>
                {new Date(item.eventDate).toLocaleDateString("lt-LT", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            )}
          </div>
          <h3 className="text-2xl md:text-3xl font-black font-headline text-on-background mb-4">
            {item.title}
          </h3>
          <div className="text-on-surface-variant leading-relaxed">
            <PortableText value={item.fullText} components={portableTextComponents} />
          </div>
          {item.gallery && item.gallery.length > 0 && (
            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-3">
              {item.gallery.map((_, i) => (
                <ImagePlaceholder
                  key={i}
                  className="aspect-square rounded-2xl"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FeaturedCard({
  item,
  onClick,
  standalone = false,
}: {
  item: NewsCardData;
  onClick: () => void;
  standalone?: boolean;
}) {
  const eventDate = item.isEvent && item.eventDate ? formatEventDate(item.eventDate) : null;

  return (
    <div
      className={`relative group rounded-[2rem] overflow-hidden bg-slate-900 cursor-pointer h-[260px] ${
        standalone ? "md:h-[300px]" : "md:h-full md:min-h-[300px]"
      }`}
      onClick={onClick}
    >
      {item.image ? (
        <img
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
          alt={item.title}
          src={item.image}
        />
      ) : (
        <div className="absolute inset-0 bg-linear-to-br from-slate-900 via-primary-dim to-slate-900">
          <div className="absolute -right-20 -bottom-20 opacity-10">
            <span className="material-symbols-outlined text-[24rem] text-white">sports_basketball</span>
          </div>
        </div>
      )}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent" />

      {eventDate && (
        <div className="absolute top-6 right-6 md:top-8 md:right-8 bg-primary text-on-primary rounded-2xl px-5 py-3 text-center leading-tight shadow-2xl">
          <span className="text-xs font-bold block">{eventDate.month}</span>
          <span className="text-3xl md:text-4xl font-black block">{eventDate.day}</span>
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-6 md:p-12 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full">
            {item.tag}
          </span>
          <span className="text-white/60 text-xs font-bold uppercase tracking-widest">
            Naujausias
          </span>
        </div>
        <h4 className="text-2xl md:text-4xl font-black text-white mb-3 font-headline leading-tight max-w-2xl">
          {item.title}
        </h4>
        <p className="text-slate-300 max-w-xl text-sm md:text-base line-clamp-2">
          {item.summary}
        </p>
        <div className="inline-flex items-center gap-2 mt-4 text-white font-bold text-sm group-hover:gap-3 transition-all">
          Skaityti daugiau
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </div>
      </div>
    </div>
  );
}

function SmallCard({ item, onClick }: { item: NewsCardData; onClick: () => void }) {
  const eventDate = item.isEvent && item.eventDate ? formatEventDate(item.eventDate) : null;

  if (eventDate) {
    return (
      <div
        className="bg-linear-to-br from-primary to-primary-dim p-5 md:p-6 rounded-[2rem] text-on-primary flex flex-col hover:translate-y-[-8px] transition-transform relative overflow-hidden cursor-pointer h-full min-h-[200px]"
        onClick={onClick}
      >
        <div className="absolute -right-6 -top-6 w-28 h-28 rounded-full bg-white/10" />
        <div className="absolute -right-2 -top-2 w-16 h-16 rounded-full bg-white/10" />
        <div className="relative z-10 flex items-start gap-3 mb-3">
          <div className="bg-white/20 rounded-xl px-3 py-2 text-center leading-tight shrink-0">
            <span className="text-xs font-bold block">{eventDate.month}</span>
            <span className="text-2xl font-black block">{eventDate.day}</span>
          </div>
          <div className="min-w-0 pt-1">
            <span className="bg-white/20 text-xs font-bold px-2 py-0.5 rounded inline-block mb-1">
              {item.tag}
            </span>
            <h4 className="text-base md:text-lg font-bold font-headline leading-tight">
              {item.title}
            </h4>
          </div>
        </div>
        <p className="relative z-10 opacity-90 text-sm line-clamp-3">{item.summary}</p>
      </div>
    );
  }

  if (item.image) {
    return (
      <div
        className="group rounded-[2rem] overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-transform h-full min-h-[200px] bg-slate-900 shadow-xl shadow-on-surface/10"
        onClick={onClick}
      >
        <div className="grid grid-cols-[1.1fr_1fr] h-full min-h-[200px]">
          <div className="p-5 md:p-7 text-white flex flex-col justify-center relative overflow-hidden bg-linear-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 bg-linear-to-br from-primary/15 via-transparent to-tertiary/10" />
            <div className="absolute -left-4 -bottom-4 opacity-10">
              <span className="material-symbols-outlined text-[9rem] text-primary-container">groups</span>
            </div>
            <div className="relative z-10">
              <span className="bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full inline-block mb-3 w-fit">
                {item.tag}
              </span>
              <h4 className="text-base md:text-xl font-black font-headline leading-tight mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-slate-300 line-clamp-3">{item.summary}</p>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <img
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              src={item.image}
              alt={item.title}
            />
            <div className="absolute inset-0 bg-linear-to-r from-slate-900/40 to-transparent md:w-12" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-[2rem] overflow-hidden cursor-pointer hover:translate-y-[-8px] transition-transform h-full min-h-[200px] bg-surface-container-lowest shadow-xl shadow-on-surface/5"
      onClick={onClick}
    >
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-primary via-primary-container to-primary" />
      <div className="absolute -right-8 -bottom-8 opacity-[0.07]">
        <span className="material-symbols-outlined text-[13rem] text-primary">
          sports_basketball
        </span>
      </div>
      <div className="absolute -right-0 -top-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
      <div className="relative z-10 p-5 md:p-6 pl-6 md:pl-7 flex flex-col justify-end h-full">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-primary text-on-primary text-xs font-bold px-3 py-1 rounded-full inline-block w-fit">
            {item.tag}
          </span>
          <span className="material-symbols-outlined text-primary text-base">campaign</span>
        </div>
        <h4 className="text-lg md:text-xl font-black font-headline mb-2 text-on-background leading-tight">
          {item.title}
        </h4>
        <p className="text-on-surface-variant text-sm line-clamp-3">{item.summary}</p>
      </div>
    </div>
  );
}

function UpcomingEventCard({ event, onClick }: { event: NewsCardData; onClick: () => void }) {
  const eventDate = event.eventDate ? formatEventDate(event.eventDate) : null;
  const fullDate = event.eventDate
    ? new Date(event.eventDate).toLocaleDateString("lt-LT", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div
      onClick={onClick}
      className="relative group rounded-[2rem] overflow-hidden bg-linear-to-br from-primary via-primary-dim to-primary text-on-primary cursor-pointer hover:translate-y-[-8px] transition-transform h-[260px] md:h-full md:min-h-[300px] p-5 md:p-6 flex flex-col"
    >
      <div className="absolute -right-12 -top-12 w-48 h-48 rounded-full bg-white/10" />
      <div className="absolute -right-4 -top-4 w-24 h-24 rounded-full bg-white/10" />
      <div className="absolute -left-8 -bottom-8 w-40 h-40 rounded-full bg-white/5" />

      <div className="relative z-10 flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-3">
          <span className="material-symbols-outlined text-base">event</span>
          <span className="text-xs font-bold uppercase tracking-widest opacity-90">
            Artimiausias renginys
          </span>
        </div>

        <div className="flex items-start gap-3 mb-3">
          {eventDate && (
            <div className="bg-white text-primary rounded-xl px-3 py-2 text-center leading-tight shadow-xl shrink-0">
              <span className="text-xs font-bold block">{eventDate.month}</span>
              <span className="text-2xl md:text-3xl font-black block">{eventDate.day}</span>
            </div>
          )}
          <h4 className="text-base md:text-lg font-black font-headline leading-tight pt-1">
            {event.title}
          </h4>
        </div>

        <p className="text-sm opacity-90 line-clamp-2 mb-2">{event.summary}</p>

        {fullDate && (
          <div className="text-xs font-bold uppercase tracking-wide opacity-80 mt-auto">
            {fullDate}
          </div>
        )}

        <div className="inline-flex items-center gap-2 mt-2 font-bold text-sm group-hover:gap-3 transition-all">
          Sužinoti daugiau
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </div>
      </div>
    </div>
  );
}

function AllAnnouncementsModal({
  items,
  onClose,
  onSelect,
}: {
  items: NewsCardData[];
  onClose: () => void;
  onSelect: (item: NewsCardData) => void;
}) {
  useModalLock(true, onClose);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-end md:items-center justify-center p-0 md:p-4 animate-[fadeIn_0.2s_ease]"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-surface-container-lowest rounded-t-[2rem] md:rounded-[2rem] max-w-3xl w-full max-h-[90dvh] md:max-h-[85dvh] overflow-y-auto shadow-2xl animate-[slideUp_0.3s_ease]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-surface-container-highest text-on-surface hover:bg-outline-variant transition-colors z-10"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <div className="p-6 md:p-10 pt-12 md:pt-14">
          <h3 className="text-2xl md:text-3xl font-black font-headline text-on-background mb-6">
            Visi pranešimai
          </h3>
          <div className="space-y-3">
            {items.map((item) => (
              <button
                key={item._id}
                onClick={() => {
                  onClose();
                  onSelect(item);
                }}
                className="w-full text-left bg-surface-container-low hover:bg-surface-container rounded-2xl p-4 md:p-5 flex gap-4 items-center transition-colors group"
              >
                {item.image ? (
                  <img
                    loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-xl object-cover shrink-0"
                  />
                ) : (
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary text-3xl">campaign</span>
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full inline-block mb-1">
                    {item.tag}
                  </span>
                  <h4 className="text-base md:text-lg font-bold font-headline text-on-background leading-tight line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-on-surface-variant line-clamp-1">{item.summary}</p>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0">
                  arrow_forward
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function News() {
  const [items, setItems] = useState<NewsCardData[]>([]);
  const [upcomingEvent, setUpcomingEvent] = useState<NewsCardData | null>(null);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<NewsCardData | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [headInView, setHeadInView] = useState(false);
  const headRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = headRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setHeadInView(true); obs.disconnect(); } }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    Promise.all([fetchNews(), fetchUpcomingEvent()])
      .then(([news, event]) => {
        setItems(news.map(toCardData));
        setUpcomingEvent(event ? toCardData(event) : null);
      })
      .catch((err) => console.error("Failed to fetch news:", err))
      .finally(() => setLoading(false));
  }, []);

  const announcements = items.filter((item) => item.tag === "PRANEŠIMAS");
  const featured = announcements[0];
  const bottomAnnouncement = announcements[1];
  const community = items.find((item) => item.tag === "BENDRUOMENĖ");
  const hasMoreAnnouncements = announcements.length > 2;

  return (
    <>
      <section id="naujienos" className="py-16 md:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div ref={headRef} className={`flex flex-col sm:flex-row justify-between items-start sm:items-end mb-8 md:mb-12 gap-3 md:gap-4 animate-on-scroll ${headInView ? "in-view" : ""}`}>
            <div>
              <h3 className="text-2xl md:text-4xl font-black font-headline text-on-background uppercase tracking-tight">
                Žinios iš <span className="text-primary">Aikštelės</span>
              </h3>
              <p className="text-on-surface-variant text-sm md:text-base">
                Sek naujienas tiesiai iš krepšinio sostinės pajūryje.
              </p>
            </div>
            {hasMoreAnnouncements ? (
              <button
                onClick={() => setShowAll(true)}
                className="text-primary font-bold flex items-center gap-2 hover:underline shrink-0"
              >
                Peržiūrėti visus pranešimus
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </button>
            ) : (
              <a
                className="text-primary font-bold flex items-center gap-2 hover:underline shrink-0"
                href="https://www.instagram.com/krepsinispalangoje/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sekite mus Instagram{" "}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            )}
          </div>

          {loading ? (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 rounded-[2rem] bg-surface-container-high animate-pulse h-[300px] md:h-[400px]" />
                <div className="rounded-[2rem] bg-surface-container-high animate-pulse h-[300px] md:h-[400px]" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="rounded-[2rem] bg-surface-container-high animate-pulse h-[280px]" />
                ))}
              </div>
            </div>
          ) : items.length === 0 ? (
            <div className="text-center py-12 text-on-surface-variant">
              Naujienų dar nėra.
            </div>
          ) : (
            <div className="space-y-6">
              {(featured || upcomingEvent) && (
                <div
                  className={`grid grid-cols-1 gap-6 ${
                    featured && upcomingEvent ? "md:grid-cols-3" : "md:grid-cols-1"
                  }`}
                >
                  {featured && (
                    <div
                      className={upcomingEvent ? "md:col-span-2" : ""}
                      style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
                    >
                      <FeaturedCard
                        item={featured}
                        onClick={() => setSelected({ ...featured, keepMainImage: true })}
                        standalone={!upcomingEvent}
                      />
                    </div>
                  )}
                  {upcomingEvent && (
                    <div style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}>
                      <UpcomingEventCard
                        event={upcomingEvent}
                        onClick={() => setSelected({ ...upcomingEvent, keepMainImage: true })}
                      />
                    </div>
                  )}
                </div>
              )}
              {(bottomAnnouncement || community) && (
                <div
                  className={`grid grid-cols-1 gap-6 md:items-start ${
                    bottomAnnouncement && community ? "md:grid-cols-6" : "md:grid-cols-1"
                  }`}
                >
                  {bottomAnnouncement && (
                    <div
                      className={community ? "md:col-span-2" : ""}
                      style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
                    >
                      <SmallCard
                        item={{ ...bottomAnnouncement, image: undefined }}
                        onClick={() => setSelected({ ...bottomAnnouncement, keepMainImage: true })}
                      />
                    </div>
                  )}
                  {community && (
                    <div
                      className={bottomAnnouncement ? "md:col-span-4" : ""}
                      style={{ animation: "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.55s both" }}
                    >
                      <SmallCard
                        item={community}
                        onClick={() => setSelected({ ...community, keepMainImage: true })}
                      />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
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

      {selected && <Modal item={selected} onClose={() => setSelected(null)} />}
      {showAll && (
        <AllAnnouncementsModal
          items={announcements}
          onClose={() => setShowAll(false)}
          onSelect={(item) => setSelected({ ...item, keepMainImage: true })}
        />
      )}
    </>
  );
}
