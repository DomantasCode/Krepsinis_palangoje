import { useState } from "react";

const navLinks = [
  { label: "Apie mus", href: "#apie-mus" },
  { label: "Treniruotės", href: "#treniruotes" },
  { label: "Naujienos", href: "#naujienos" },
  { label: "D.U.K.", href: "#registracija" },
  { label: "Kontaktai", href: "#kontaktai" },
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

        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/skm_treniruotespalangoje/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-10 h-10 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/10 transition-all"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a
            href="#registracija-forma"
            className="bg-primary hover:bg-primary-dim text-on-primary font-bold px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 uppercase tracking-wider text-sm shadow-lg shadow-primary/20"
          >
            Registracija
          </a>
        </div>

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
          <a
            href="https://www.instagram.com/skm_treniruotespalangoje/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            aria-label="Instagram"
            className="inline-flex items-center gap-2 text-on-surface-variant font-medium font-headline uppercase text-sm hover:text-primary transition-colors mt-1"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </header>
  );
}