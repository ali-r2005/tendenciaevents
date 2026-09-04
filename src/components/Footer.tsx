'use client';

import { getDictionary } from "../../i18n";

export function Footer() {
  const t = getDictionary();

  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 pt-8 pb-16 space-y-12">
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-[13px] text-brand-muted">
        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-neutral">Explore</h4>
          <nav className="flex flex-col gap-2">
            {t.footer.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a href="/contact-us" className="hover:text-brand-neutral transition-colors">
              {t.footer.cta}
            </a>
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-neutral">Follow Us</h4>
          <nav className="flex flex-col gap-2">
            {t.footer.social.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-yellow transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="space-y-3">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-brand-neutral">Language</h4>
          <nav className="flex flex-col gap-2">
            {t.footer.languages.map((lang) => (
              <a
                key={lang.href}
                href={lang.href}
                className="hover:text-brand-yellow transition-colors"
              >
                {lang.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted border-t border-brand-border pt-6">
        <div>{t.footer.copyright}</div>
        <div className="flex items-center gap-6">
          {t.footer.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-brand-yellow transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
