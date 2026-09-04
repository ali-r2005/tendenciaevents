'use client';

import { getDictionary } from "../../i18n";

export function Header() {
  const t = getDictionary();

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
        <a
          href="/contact-us"
          className="text-[13px] font-medium px-4 py-1.5 rounded-custom bg-brand-green text-white hover:bg-brand-blue transition-colors"
        >
          {t.header.cta}
        </a>
      </div>
    </header>
  );
}
