import { useState } from "react";

const navLinks = [
  { label: "Treniruotės", href: "#treniruotes" },
  { label: "Naujienos", href: "#naujienos" },
  { label: "D.U.K.", href: "#registracija" },
  { label: "Kontaktai", href: "#registracija" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-xl shadow-orange-900/5">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-6 h-16 md:h-20">
        <a
          href="#pradzia"
          className="text-2xl font-black italic text-primary font-headline leading-none"
        >
          LOGO
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-on-surface-variant font-medium font-headline tracking-tight uppercase text-sm hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#registracija-forma"
          className="hidden md:inline-block bg-primary hover:bg-primary-dim text-on-primary font-bold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 uppercase tracking-wider text-sm shadow-lg shadow-primary/20"
        >
          Registracija
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Meniu"
        >
          <span
            className={`block w-6 h-0.5 bg-on-background transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-background transition-all duration-300 ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-on-background transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white/95 backdrop-blur-md ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-on-surface-variant font-medium font-headline uppercase text-sm hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#registracija-forma"
            onClick={() => setOpen(false)}
            className="bg-primary text-on-primary font-bold px-8 py-3 rounded-full uppercase tracking-wider text-sm mt-2"
          >
            Registracija
          </a>
        </div>
      </div>
    </header>
  );
}