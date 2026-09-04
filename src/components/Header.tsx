'use client';

import { useState } from "react";
import { getDictionary } from "../../i18n";

export function Header() {
  const t = getDictionary();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-brand-canvas/95 border-b border-brand-border sticky top-0 z-50 backdrop-blur-md">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-brand-green transition-transform group-hover:scale-125 duration-300" />
          <span className="text-[19px] font-medium tracking-tight text-brand-neutral">
            {t.header.brand}
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-brand-muted">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-brand-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="/contact-us"
            className="hidden sm:inline-block text-[13px] font-medium px-4 py-1.5 rounded-custom bg-brand-green text-white hover:bg-brand-blue transition-colors"
          >
            {t.header.cta}
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((open) => !open)}
            className="md:hidden flex flex-col items-center justify-center gap-1.5 w-9 h-9 rounded-custom border border-brand-border"
          >
            <span
              className={`block w-5 h-[2px] bg-brand-neutral transition-transform duration-200 ${
                isMenuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-brand-neutral transition-opacity duration-200 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-brand-neutral transition-transform duration-200 ${
                isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden border-t border-brand-border bg-brand-canvas px-4 sm:px-6 py-4 flex flex-col gap-4 text-[14px] text-brand-muted">
          {t.header.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-yellow transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href="/contact-us"
            onClick={() => setIsMenuOpen(false)}
            className="text-[13px] font-medium px-4 py-2 rounded-custom bg-brand-green text-white hover:bg-brand-blue transition-colors text-center"
          >
            {t.header.cta}
          </a>
        </nav>
      )}
    </header>
  );
}
