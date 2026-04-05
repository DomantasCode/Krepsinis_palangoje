import { useState } from "react";

const faqs = [
  {
    question: "Kokio amžiaus vaikai gali dalyvauti treniruotėse?",
    answer:
      "Treniruotės skirtos vaikams nuo 6 iki 16 metų. Grupes formuojame pagal amžių ir patirtį, todėl kiekvienas vaikas treniruojasi tinkamo lygio grupėje.",
  },
  {
    question: "Ar reikia turėti krepšinio patirties?",
    answer:
      "Ne, patirtis nebūtina. Priimame ir visiškai pradedančiuosius. Treneriai pritaiko užduotis pagal kiekvieno vaiko lygį.",
  },
  {
    question: "Kur vyksta treniruotės?",
    answer:
      "Treniruotės vyksta Palangoje, lauko aikštelėse. Esant blogam orui persikeliame į salę.",
  },
  {
    question: "Ką reikia atsinešti į treniruotę?",
    answer:
      "Patogią sportinę aprangą, sportbačius, gertuvę su vandeniu. Kamuolius ir kitą inventorių suteikiame mes.",
  },
  {
    question: "Kiek kainuoja treniruotės?",
    answer:
      "Pirma treniruotė nemokama. Dėl tolimesnių kainų susisiekite su mumis el. paštu arba per Instagram.",
  },
  {
    question: "Kaip užregistruoti vaiką?",
    answer:
      "Galite užpildyti kontaktinę formą šioje svetainėje arba parašyti mums per Instagram. Susisieksime su jumis dėl detalių.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section
      id="registracija"
      className="py-16 md:py-24 bg-surface-container-lowest scroll-mt-20 md:scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* FAQ */}
          <div>
            <h3 className="text-2xl md:text-4xl font-black font-headline text-on-background uppercase tracking-tight mb-6 md:mb-8">
              Dažnai užduodami{" "}
              <span className="text-primary">klausimai</span>
            </h3>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="bg-surface-container-low rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between p-5 text-left gap-4"
                  >
                    <span className="font-bold font-headline text-on-background text-sm md:text-base">
                      {faq.question}
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                    >
                      expand_more
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openIndex === i ? "max-h-60 pb-5" : "max-h-0"}`}
                  >
                    <p className="px-5 text-on-surface-variant leading-relaxed text-sm md:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact form */}
          <div className="relative bg-on-background rounded-[2rem] p-8 md:p-12 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-tertiary/20" />
            <div className="relative z-10">
              <h3 className="text-xl md:text-3xl font-black font-headline text-white mb-2 uppercase tracking-tighter">
                Susisiekite su <span className="text-primary-container">mumis</span>
              </h3>
              <p className="text-slate-300 text-sm md:text-base mb-4">
                Turite klausimų? Parašykite mums arba paskambinkite.
              </p>
              <a
                href="tel:+37061240647"
                className="inline-flex items-center gap-2 text-primary-container font-bold mb-8 hover:underline"
              >
                <span className="material-symbols-outlined text-xl">call</span>
                +370 (612) 40 647
              </a>
              <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
                <input
                  className="bg-white/10 border-0 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary-container text-base outline-none"
                  placeholder="El. paštas"
                  type="email"
                />
                <input
                  className="bg-white/10 border-0 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary-container text-base outline-none"
                  placeholder="Telefono numeris"
                  type="tel"
                />
                <textarea
                  className="bg-white/10 border-0 rounded-xl px-5 py-3.5 text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary-container text-base outline-none resize-none h-28"
                  placeholder="Jūsų žinutė..."
                />
                <button
                  type="submit"
                  className="bg-primary text-on-primary font-bold px-10 py-4 rounded-full text-base hover:scale-105 transition-transform shadow-lg shadow-primary/30 mt-2"
                >
                  SIŲSTI ŽINUTĘ
                </button>
              </form>
            </div>
            {/* Decorative */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 border-2 border-white/5 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
