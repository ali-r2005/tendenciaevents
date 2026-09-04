import { Metadata } from "next";
import { getDictionary } from "../../../i18n";
import { FAQAccordion } from "@/components/FAQAccordion";

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.aboutUsPage.meta.title,
  description: dictionary.aboutUsPage.meta.description,
};

export default function AboutUs() {
  const t = getDictionary();

  return (
    <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
      {/* Hero */}
      <section className="w-full">
        <div
          className="rounded-custom overflow-hidden bg-brand-neutral bg-cover bg-center h-[280px] sm:h-[340px] lg:h-[380px] relative w-full flex items-center justify-center p-6 shadow-2xl"
          style={{ backgroundImage: "url('/BG.jpg')" }}
        >
          <div className="absolute inset-0 " />
          <div className="absolute inset-2 sm:inset-4 border border-white/15 rounded-[4px] pointer-events-none" />
          <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center">
            <span className="inline-block bg-white/10 border border-white/25 backdrop-blur-sm text-white/90 text-[13px] sm:text-sm font-medium px-4 py-1.5 rounded-custom mb-6">
              {t.aboutUsPage.label}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-white leading-[1.1] mb-6">
              {t.aboutUsPage.title}
            </h1>
            <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto">
              {t.aboutUsPage.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="md:col-span-7 space-y-2">
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              {t.aboutUsPage.story.label}
            </h2>
            <div className="space-y-4 pt-4">
              {t.aboutUsPage.story.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-[16px] text-brand-muted leading-relaxed">
                  {paragraph}
                </p>
              ))}
              <p className="text-brand-neutral font-medium pt-2">
                — {t.aboutUsPage.story.signatureName}, {t.aboutUsPage.story.signatureRole}
              </p>
            </div>
          </div>
          <div className="md:col-span-5">
            <div className="w-full h-64 sm:h-80 bg-brand-canvas rounded-custom overflow-hidden border border-brand-border">
              <img
                src="/our-story.webp"
                alt="Our Story"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="space-y-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
            {t.aboutUsPage.mission.label}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
            {t.aboutUsPage.mission.title}
          </h2>
          <p className="text-[16px] text-brand-muted leading-relaxed pt-2">
            {t.aboutUsPage.mission.intro}
          </p>
        </div>
        <div className="space-y-4 pt-2">
          <h3 className="font-medium text-brand-neutral">{t.aboutUsPage.mission.valuesLabel}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.aboutUsPage.mission.values.map((value) => (
              <div
                key={value.title}
                className="bg-brand-subtle border border-brand-border rounded-custom p-6 space-y-3 hover:border-brand-green hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-display text-lg text-brand-neutral font-normal">
                  {value.title}
                </h3>
                <p className="text-[15px] text-brand-muted leading-relaxed">{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Tendencia */}
      <section className="space-y-8">
        <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
          {t.aboutUsPage.whyChoose.label}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.aboutUsPage.whyChoose.items.map((item) => (
            <div
              key={item.title}
              className="bg-brand-subtle border border-brand-border rounded-custom p-6 space-y-3 hover:border-brand-green hover:-translate-y-1 transition-all duration-200"
            >
              <h3 className="font-display text-lg text-brand-neutral font-normal">
                {item.title}
              </h3>
              <p className="text-[15px] text-brand-muted leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
            {t.team.label}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
            {t.team.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
          {t.team.members.map((member) => (
            <div key={member.name} className="bg-brand-subtle rounded-custom overflow-hidden border border-brand-border">
              <div className="w-full h-48 bg-brand-canvas flex items-center justify-center text-brand-muted text-[13px] overflow-hidden">
                <img
                  src={`/team/${member.name.toLowerCase().replace(/\s+/g, "-")}.jpg`}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <p className="font-medium text-brand-neutral text-[16px]">{member.name}</p>
                <p className="text-[13px] text-brand-muted mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-8">
        <div className="space-y-2">
          <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
            {t.aboutUsPage.faq.label}
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
            {t.aboutUsPage.faq.title}
          </h2>
        </div>
        <FAQAccordion items={t.aboutUsPage.faq.items} />
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
