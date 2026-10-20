import { Metadata } from "next";
import { getDictionary } from "../../i18n";
import SectionHeading from "@/components/SectionHeading";

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

const pillarAccents = [
  { panel: "bg-brand-green/5", bar: "bg-brand-green", stroke: "#147f4c", underline: "/underline-green.svg" },
  { panel: "bg-brand-blue/5", bar: "bg-brand-blue", stroke: "#2497cd", underline: "/underline-blue.svg" },
  { panel: "bg-brand-yellow/10", bar: "bg-brand-yellow", stroke: "#f4c71a", underline: "/underline-gold.svg" },
];

export default function Home() {
  const t = getDictionary();

  return (
    <>

      <main className="w-full max-w-[1700px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
        {/* Hero */}
        <section className="w-full pt-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-6 flex flex-col items-start">
              <span className="inline-block bg-brand-green/10 border border-brand-green/25 text-brand-green text-[13px] sm:text-sm font-medium px-4 py-1.5 rounded-custom mb-6">
                {t.hero.tagline}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-brand-neutral leading-[1.1] mb-6">
                {t.hero.title}
              </h1>
              <p className="text-brand-neutral text-base sm:text-lg font-light mb-3">
                {t.hero.subtagline}
              </p>
              <p className="text-brand-muted text-base sm:text-lg max-w-xl mb-10">
                {t.hero.description}
              </p>
              <a
                href="/contact-us"
                className="bg-brand-blue hover:bg-brand-green transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase flex items-center gap-3"
              >
                {t.hero.cta}
              </a>
            </div>
            <div className="lg:col-span-6">
              <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[600px] rounded-custom overflow-hidden bg-brand-canvas border border-brand-border shadow-2xl">
                <img
                  src="/hero.jpg"
                  alt="Tendencia Events & Travel — events in Morocco"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-2 sm:inset-4 border border-white/25 rounded-[4px] pointer-events-none" />
              </div>
            </div>
          </div>
        </section>

        {/* The Tendencia Way */}
        <section id="pillars" className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.pillars.label}
            </span>
            <SectionHeading>The Tendencia Way — Six Core Values</SectionHeading>
            <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              {t.pillars.intro}
            </p>
          </div>

          <div className="space-y-6 sm:space-y-8 pt-4">
            {t.pillars.items.map((pillar, i) => {
              const accent = pillarAccents[i % pillarAccents.length];
              const reversed = i % 2 === 1;
              return (
                <article
                  key={pillar.title}
                  className={`group relative overflow-hidden rounded-custom border border-brand-border bg-white shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  {/* Image panel */}
                  <div className="relative lg:w-[58%] h-64 sm:h-80 lg:h-[440px] overflow-hidden">
                    <img
                      src={pillar.image}
                      alt={pillar.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    <div className="absolute inset-2 sm:inset-4 border border-white/25 rounded-[4px] pointer-events-none" />
                    <span className="absolute bottom-6 left-6 inline-flex items-center bg-white/10 border border-white/25 backdrop-blur-sm text-white text-[12px] font-medium tracking-[0.2em] uppercase px-4 py-1.5 rounded-custom">
                      Pillar 0{i + 1} / 0{t.pillars.items.length}
                    </span>
                  </div>

                  {/* Text panel */}
                  <div className={`relative lg:w-[42%] flex flex-col justify-center p-8 sm:p-12 lg:p-14 ${accent.panel}`}>
                    <span className={`absolute top-0 ${reversed ? "right-0" : "left-0"} h-full w-1.5 ${accent.bar} hidden lg:block`} />
                    <span
                      aria-hidden="true"
                      className="absolute -top-4 right-6 font-display text-[120px] sm:text-[160px] leading-none text-transparent select-none pointer-events-none opacity-60"
                      style={{ WebkitTextStroke: `2px ${accent.stroke}` }}
                    >
                      0{i + 1}
                    </span>
                    <div className="relative">
                      <h3 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
                        {pillar.title}
                      </h3>
                      <img
                        src={accent.underline}
                        alt=""
                        aria-hidden="true"
                        className="mt-3 h-auto w-[120px] sm:w-[160px]"
                      />
                      <p className="mt-6 text-[16px] sm:text-[18px] text-brand-muted leading-relaxed max-w-md">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                {t.services.label}
              </span>
              <SectionHeading>{t.services.title}</SectionHeading>
              <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
                {t.services.intro}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="w-full h-64 sm:h-80 bg-brand-canvas rounded-custom overflow-hidden border border-brand-border">
                <img
                  src="/services-image.jpg"
                  alt="Tendencia Events services"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            {t.services.groups.map((group) => (
              <div key={group.title} className="space-y-4">
                <h3 className="font-medium text-brand-neutral">{group.title}</h3>
                <ul className="space-y-2 text-[13.5px] text-brand-muted">
                  {group.items.map((item) => (
                    <li key={item} className="border-t border-brand-border pt-2 first:pt-0 first:border-0">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.process.label}
            </span>
            <SectionHeading>{t.process.title}</SectionHeading>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
            {t.process.steps.map((step, i) => (
              <div
                key={step}
                className="bg-brand-subtle border border-brand-border rounded-custom p-6 space-y-4 hover:border-brand-green transition-colors"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-brand-green text-white text-xs font-medium">
                  0{i + 1}
                </span>
                <p className="text-[16px] text-brand-muted leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="space-y-8">
          <style>{`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .testimonials-scroll {
              animation: scroll 30s linear infinite;
            }
            .testimonials-scroll:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.testimonials.label}
            </span>
            <SectionHeading>{t.testimonials.title}</SectionHeading>
            <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              {t.testimonials.intro}
            </p>
          </div>
          <div className="relative w-full overflow-hidden pt-4">
            <div className="flex gap-6 testimonials-scroll">
              {t.testimonials.items.map((item) => (
                <blockquote key={item.author} className="flex-shrink-0 w-[320px] sm:w-[400px] bg-brand-subtle p-6 rounded-custom border border-brand-border">
                  <div className="flex gap-0.5 mb-3 text-brand-yellow text-[15px]" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-[15px] text-brand-neutral leading-relaxed mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="text-[13px] font-medium text-brand-muted">
                    {item.author}
                  </footer>
                </blockquote>
              ))}
              {t.testimonials.items.map((item) => (
                <blockquote key={`${item.author}-dupe`} className="flex-shrink-0 w-[320px] sm:w-[400px] bg-brand-subtle p-6 rounded-custom border border-brand-border">
                  <div className="flex gap-0.5 mb-3 text-brand-yellow text-[15px]" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-[15px] text-brand-neutral leading-relaxed mb-4">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <footer className="text-[13px] font-medium text-brand-muted">
                    {item.author}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.team.label}
            </span>
            <SectionHeading>{t.team.title}</SectionHeading>
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

        {/* CTA banner */}
        <section className="w-full">
          <div className="rounded-custom overflow-hidden h-[380px] sm:h-[440px] relative w-full flex items-center justify-center p-6 text-center shadow-xl" style={{ background: "linear-gradient(135deg, #147f4c 0%, #2497cd 50%, #f4c71a 100%)" }}>
            <div className="relative z-10 max-w-2xl px-4 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.25em] text-white mb-4">
                {t.ctaBanner.eyebrow}
              </span>
              <SectionHeading variant="light" align="center" wrapperClassName="mb-8">
                {t.ctaBanner.title}
              </SectionHeading>
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
        <section id="offices" className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
          <div>
            <h3 className="font-display text-xl text-brand-neutral font-normal">
              {t.offices.tangier.title}
            </h3>
            <p className="mt-2 text-[16px] text-brand-muted">
              {t.offices.tangier.address}
            </p>
            <p className="mt-2 text-[16px] text-brand-muted">
              {t.offices.tangier.phone}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-brand-neutral font-normal">
              {t.offices.marrakech.title}
            </h3>
            <p className="mt-2 text-[16px] text-brand-muted">
              {t.offices.marrakech.address}
            </p>
            <p className="mt-2 text-[16px] text-brand-muted">
              {t.offices.marrakech.phone}
            </p>
          </div>
          <p className="sm:col-span-2 text-[16px] text-brand-muted pt-2 border-t border-brand-border">
            {t.offices.mainContact}
          </p>
        </section>
      </main>

    </>
  );
}
