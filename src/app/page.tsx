import { Metadata } from "next";
import { getDictionary } from "../../i18n";

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.meta.title,
  description: dictionary.meta.description,
};

export default function Home() {
  const t = getDictionary();

  return (
    <>

      <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
        {/* Hero */}
        <section className="w-full">
          <div
            className="rounded-custom overflow-hidden bg-brand-neutral bg-cover bg-center h-[560px] sm:h-[640px] lg:h-[700px] relative w-full flex items-center justify-center p-6 shadow-2xl"
            style={{ backgroundImage: "url('/BG.jpg')" }}
          >
            <div className="absolute inset-0 " />
            <div className="absolute inset-2 sm:inset-4 border border-white/15 rounded-[4px] pointer-events-none" />
            <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center">
              <span className="inline-block bg-white/10 border border-white/25 backdrop-blur-sm text-white/90 text-[13px] sm:text-sm font-medium px-4 py-1.5 rounded-custom mb-6">
                {t.hero.tagline}
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-white leading-[1.1] mb-6">
                {t.hero.title}
              </h1>
              <p className="text-white/70 text-base sm:text-lg font-light mb-3">
                {t.hero.subtagline}
              </p>
              <p className="text-white/70 text-base sm:text-lg max-w-xl mx-auto mb-10">
                {t.hero.description}
              </p>
              <a
                href="/contact-us"
                className="bg-brand-blue hover:bg-brand-green transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase flex items-center gap-3"
              >
                {t.hero.cta}
              </a>
            </div>
          </div>
        </section>

        {/* The Tendencia Way */}
        <section id="pillars" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                {t.pillars.label}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
                The Tendencia Way — Six Core Values
              </h2>
              <p className="text-[16px] text-brand-muted leading-relaxed max-w-2xl pt-2">
                {t.pillars.intro}
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="w-full h-64 sm:h-80 bg-brand-canvas rounded-custom overflow-hidden border border-brand-border">
                <img
                  src="/pillars-image.jpg"
                  alt="The Tendencia Way"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {t.pillars.items.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-brand-subtle border border-brand-border rounded-custom p-6 space-y-3 hover:border-brand-green hover:-translate-y-1 transition-all duration-200"
              >
                <h3 className="font-display text-lg text-brand-neutral font-normal">
                  {pillar.title}
                </h3>
                <p className="text-[15px] text-brand-muted leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="md:col-span-7 space-y-2">
              <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
                {t.services.label}
              </span>
              <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
                {t.services.title}
              </h2>
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
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              {t.process.title}
            </h2>
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
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              {t.testimonials.title}
            </h2>
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

        {/* CTA banner */}
        <section className="w-full">
          <div className="rounded-custom overflow-hidden h-[380px] sm:h-[440px] relative w-full flex items-center justify-center p-6 text-center shadow-xl" style={{ background: "linear-gradient(135deg, #147f4c 0%, #2497cd 50%, #f4c71a 100%)" }}>
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
