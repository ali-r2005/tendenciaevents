import { Metadata } from "next";
import { getDictionary } from "../../../../i18n";

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.receptiveServicesPage.meta.title,
  description: dictionary.receptiveServicesPage.meta.description,
};

export default function ReceptiveServices() {
  const t = getDictionary();

  return (
    <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
      {/* Hero */}
      <section className="space-y-8 pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.receptiveServicesPage.label}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-normal text-brand-neutral tracking-tight">
              {t.receptiveServicesPage.title}
            </h1>
            <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              {t.receptiveServicesPage.intro}
            </p>
            <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              {t.receptiveServicesPage.description}
            </p>
            <a
              href="/contact-us"
              className="inline-block bg-brand-green hover:bg-brand-blue transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase mt-4"
            >
              {t.receptiveServicesPage.cta}
            </a>
          </div>
          <div className="md:col-span-5">
            <div className="w-full h-64 sm:h-80 bg-brand-canvas rounded-custom overflow-hidden border border-brand-border">
              <img
                src="/services-image.jpg"
                alt="Receptive Services in Morocco"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What this service includes */}
      <section className="space-y-8">
        <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
          {t.receptiveServicesPage.includesLabel}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.receptiveServicesPage.includes.map((item) => (
            <div
              key={item}
              className="bg-brand-subtle border border-brand-border rounded-custom p-6 hover:border-brand-green hover:-translate-y-1 transition-all duration-200"
            >
              <p className="text-[15px] text-brand-muted leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related services */}
      <section className="space-y-8">
        <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
          {t.receptiveServicesPage.relatedLabel}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.receptiveServicesPage.related.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="bg-brand-subtle border border-brand-border rounded-custom p-6 space-y-3 hover:border-brand-green hover:-translate-y-1 transition-all duration-200 block"
            >
              <h3 className="font-display text-lg text-brand-neutral font-normal">
                {service.title}
              </h3>
              <p className="text-[15px] text-brand-muted leading-relaxed">{service.body}</p>
              <span className="inline-block text-[13px] font-medium text-brand-green">
                Learn more →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="w-full">
        <div
          className="rounded-custom overflow-hidden h-[380px] sm:h-[440px] relative w-full flex items-center justify-center p-6 text-center shadow-xl"
          style={{ background: "linear-gradient(135deg, #147f4c 0%, #2497cd 50%, #f4c71a 100%)" }}
        >
          <div className="relative z-10 max-w-2xl px-4 flex flex-col items-center">
            <span className="text-xs uppercase tracking-[0.25em] text-white mb-4">
              {t.ctaBanner.eyebrow}
            </span>
            <h2 className="font-display text-3xl sm:text-5xl text-white font-normal mb-8 leading-tight">
              {t.ctaBanner.title}
            </h2>
            <a
              href="/contact-us"
              className="bg-white hover:bg-brand-yellow transition-colors px-8 py-3.5 rounded-custom text-brand-green text-[13px] font-medium tracking-wide uppercase"
            >
              {t.ctaBanner.cta}
            </a>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
        <div>
          <h3 className="font-display text-xl text-brand-neutral font-normal">
            {t.offices.tangier.title}
          </h3>
          <p className="mt-2 text-[16px] text-brand-muted">{t.offices.tangier.address}</p>
          <p className="mt-2 text-[16px] text-brand-muted">{t.offices.tangier.phone}</p>
        </div>
        <div>
          <h3 className="font-display text-xl text-brand-neutral font-normal">
            {t.offices.marrakech.title}
          </h3>
          <p className="mt-2 text-[16px] text-brand-muted">{t.offices.marrakech.address}</p>
          <p className="mt-2 text-[16px] text-brand-muted">{t.offices.marrakech.phone}</p>
        </div>
        <p className="sm:col-span-2 text-[16px] text-brand-muted pt-2 border-t border-brand-border">
          {t.offices.mainContact}
        </p>
      </section>
    </main>
  );
}
