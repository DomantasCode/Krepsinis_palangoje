export default function Registration() {
  return (
    <section
      id="registracija-forma"
      className="relative py-16 md:py-24 bg-surface-container-low overflow-hidden"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-primary-container to-tertiary" />

      {/* Decorative elements */}
      <div className="absolute top-16 right-8 md:right-16 w-32 h-32 border-2 border-primary/10 rounded-full" />
      <div className="absolute bottom-16 left-8 md:left-16 w-24 h-24 border-2 border-tertiary/10 rounded-full" />

      <div className="relative max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-tertiary-container text-on-tertiary-container font-label text-xs md:text-sm rounded-full mb-4 md:mb-6 uppercase tracking-widest font-bold">
            Pirma treniruotė nemokama
          </span>
          <h3 className="text-2xl md:text-5xl font-black font-headline text-on-background uppercase tracking-tighter mb-3 md:mb-4">
            Registracija į{" "}
            <span className="text-primary italic">treniruotes</span>
          </h3>
          <p className="text-on-surface-variant max-w-lg mx-auto text-sm md:text-lg">
            Pasirinkite tinkamą grupę ir užregistruokite vaiką
          </p>
        </div>

        {/* Iframe container */}
        <div className="bg-surface-container-lowest rounded-[2rem] overflow-hidden shadow-xl shadow-on-surface/5">
          <iframe
            src="https://embed.exoclass.com/lt/embed/provider/cc909582-9556-49fb-ae29-4ded9b2fee2e/group-management?color=3d1172"
            width="100%"
            height="1000"
            style={{ border: "none" }}
            title="Registracijos forma"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
