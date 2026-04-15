import { useRef, useState } from "react";
import heroVideo from "../assets/hero-video.mp4";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      if (videoRef.current.muted) {
        videoRef.current.currentTime = 0;
        videoRef.current.muted = false;
        setIsMuted(false);
      } else {
        videoRef.current.muted = true;
        setIsMuted(true);
      }
    }
  };
  return (
    <section
      id="pradzia"
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden bg-linear-to-b from-surface-container-low to-surface"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="relative z-10 text-center md:text-left">
          <span className="hidden md:inline-block px-3 py-1 md:px-4 md:py-1.5 bg-tertiary-container text-on-tertiary-container font-label text-xs md:text-sm rounded-full mb-4 md:mb-6 uppercase tracking-widest font-bold">
            Palanga 2026
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black font-headline text-on-background leading-[0.95] md:leading-[0.9] tracking-tight md:tracking-tighter mb-4 md:mb-6 italic">
            KREPŠINIS{" "}
            <span className="text-primary block">VAIKAMS PALANGOJE</span>
          </h1>
          <p className="hidden md:block text-sm md:text-xl text-on-surface-variant max-w-md mx-auto md:mx-0 mb-5 md:mb-8 leading-relaxed">
            Dieninės treniruotės ir vasaros stovyklos vaikams Palangoje.
            Technika, fizinis pasiruošimas ir komandinis žaidimas gryname ore
            prie jūros.
          </p>
          <div className="hidden md:flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
            <a
              href="#registracija-forma"
              className="bg-primary text-on-primary font-bold px-6 md:px-10 py-3 md:py-5 rounded-full flex items-center gap-2 md:gap-3 hover:shadow-2xl transition-all text-xs md:text-base"
            >
              REGISTRUOTIS{" "}
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
            <a
              href="https://www.instagram.com/skm_treniruotespalangoje/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-surface-container-lowest text-on-surface font-bold w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-outline-variant/20 hover:bg-surface-container transition-all flex items-center justify-center"
            >
              <svg className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="relative group flex justify-center">
          {/* 9:16 Video Frame */}
          <div className="relative aspect-9/16 w-full max-w-56 md:max-w-85 bg-slate-800 rounded-[2rem] md:rounded-[3rem] overflow-hidden border-8 md:border-12 border-surface-container-highest shadow-[0_30px_60px_-15px_rgba(161,57,0,0.2)] md:shadow-[0_50px_100px_-20px_rgba(161,57,0,0.2)] rotate-3 group-hover:rotate-0 transition-transform duration-700">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
            />
            <button
              onClick={toggleMute}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors cursor-pointer"
              aria-label={isMuted ? "Įjungti garsą" : "Išjungti garsą"}
            >
              <span className="material-symbols-outlined text-xl">
                {isMuted ? "volume_off" : "volume_up"}
              </span>
            </button>
          </div>
          {/* Decor */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-tertiary/10 rounded-full blur-3xl" />
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
        </div>

        {/* Mobile-only text and buttons placed after video */}
        <div className="flex md:hidden flex-col items-center gap-5 w-full mt-6">
          <p className="text-sm text-center text-on-surface-variant max-w-md leading-relaxed px-4">
            Dieninės treniruotės ir vasaros stovyklos vaikams Palangoje.
            Technika, fizinis pasiruošimas ir komandinis žaidimas gryname ore
            prie jūros.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#registracija-forma"
              className="bg-primary text-on-primary font-bold px-6 py-3 rounded-full flex items-center gap-2 hover:shadow-2xl transition-all text-xs"
            >
            REGISTRUOTIS{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </a>
          <a
            href="https://www.instagram.com/skm_treniruotespalangoje/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-surface-container-lowest text-on-surface font-bold w-12 h-12 rounded-full border-2 border-outline-variant/20 hover:bg-surface-container transition-all flex items-center justify-center"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          </div>
        </div>
      </div>

      {/* Background text */}
      <div className="absolute top-0 right-0 -z-10 translate-x-1/2 -translate-y-1/2 opacity-10 hidden lg:block">
        <p className="text-[20rem] font-black text-outline font-headline select-none whitespace-nowrap">
          PALANGA
        </p>
      </div>
    </section>
  );
}
