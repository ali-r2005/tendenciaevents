export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="w-full bg-brand-canvas/95 border-b border-brand-border sticky top-0 z-50 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-green transition-transform group-hover:scale-125 duration-300" />
            <span className="text-[19px] font-medium tracking-tight text-brand-neutral">
              Tendencia
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-wide text-brand-muted">
            <a href="#pillars" className="hover:text-brand-neutral transition-colors">
              The Tendencia Way
            </a>
            <a href="#services" className="hover:text-brand-neutral transition-colors">
              Services
            </a>
            <a href="#testimonials" className="hover:text-brand-neutral transition-colors">
              Testimonials
            </a>
            <a href="#offices" className="hover:text-brand-neutral transition-colors">
              Offices
            </a>
          </nav>
          <a
            href="/contact-us"
            className="text-[13px] font-medium px-4 py-1.5 rounded-custom border border-brand-border text-brand-neutral hover:border-brand-green hover:bg-brand-green hover:text-white transition-all"
          >
            Need Inspiration
          </a>
        </div>
      </header>

      <main className="max-w-[1240px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
        {/* Hero */}
        <section className="w-full">
          <div
            className="rounded-custom overflow-hidden bg-brand-neutral bg-cover bg-center h-[560px] sm:h-[640px] lg:h-[700px] relative w-full flex items-center justify-center p-6 shadow-2xl"
            style={{ backgroundImage: "url('/BG.jpg')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-black/60" />
            <div className="absolute inset-2 sm:inset-4 border border-white/15 rounded-[4px] pointer-events-none" />
            <div className="absolute top-8 text-center text-white/70 text-[11px] tracking-[0.25em] uppercase">
              Tangier &amp; Marrakech · Morocco
            </div>
            <div className="relative z-10 text-center max-w-3xl px-4 flex flex-col items-center">
              <h1 className="font-display text-4xl sm:text-6xl lg:text-[64px] font-normal tracking-tight text-white leading-[1.1] mb-6">
                Event Management &amp; Team Building Agency in Morocco
              </h1>
              <p className="text-white/85 text-base sm:text-lg font-light mb-3">
                Creating Memories, tailored with care — Yes, We Can DARE!
              </p>
              <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto mb-10">
                Tendencia Events &amp; Travel designs and delivers corporate
                events, team building programs, and incentive travel
                experiences across Morocco — with dedicated offices in
                Tangier and Marrakech and the same relentless attention to
                detail on every project, wherever it happens.
              </p>
              <a
                href="/contact-us"
                className="bg-brand-green hover:bg-brand-green/90 transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase flex items-center gap-3"
              >
                Need Inspiration
              </a>
            </div>
          </div>
        </section>

        {/* The Tendencia Way */}
        <section id="pillars" className="space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12 items-start">
            <div className="md:col-span-3">
              <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted block pt-2">
                The Tendencia Way
              </span>
            </div>
            <div className="md:col-span-9">
              <p className="font-display text-2xl sm:text-3xl lg:text-[34px] leading-[1.3] font-normal text-brand-neutral">
                Every event we manage in Morocco — from corporate seminars to
                large-scale incentive trips — is guided by six principles
                that define how our team works with you, from first brief to
                final report.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
            {[
              {
                title: "Yes we Can!",
                body: "We turn your dreams into reality. With determination and creativity, we take on every challenge to create unforgettable events and trips.",
              },
              {
                title: "Yes we surprise!",
                body: "We love creating surprises. We aim to amaze you with unexpected moments and memorable experiences.",
              },
              {
                title: "Yes we motivate!",
                body: "We are here to motivate you. We understand the importance of creating a stimulating environment that inspires and engages participants.",
              },
              {
                title: "Yes we manage!",
                body: "We manage with expertise. The organization of an event or trip requires meticulous attention to detail, careful planning, and efficient coordination.",
              },
              {
                title: "Yes we adapt!",
                body: "We adapt to your needs. Each project is unique, and we understand the importance of adjusting to your specific requirements.",
              },
              {
                title: "Yes we inspire!",
                body: "We are passionate about inspiration. We are committed to stimulating your creativity and offering innovative ideas.",
              },
            ].map((pillar) => (
              <div key={pillar.title} className="border-t border-brand-border pt-6 space-y-3">
                <h3 className="font-display text-xl text-brand-neutral font-normal">
                  {pillar.title}
                </h3>
                <p className="text-[14px] text-brand-muted leading-relaxed">{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              Services Offered
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              Full-service event &amp; destination management
            </h2>
            <p className="text-[14px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              As a full-service event management and destination management
              company (DMC) in Morocco, Tendencia covers every stage of your
              event or corporate trip — from destination management and
              event production to team building and incentive travel. Our
              MICE expertise means we handle everything from corporate
              seminars and PCO-managed conferences to incentive travel
              programs and large-scale exhibitions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-6">
            {[
              {
                title: "Event & Destination Management",
                items: [
                  "Destination management (DMC Morocco)",
                  "Event Management",
                  "Conference Management",
                  "Corporate Events",
                  "Premium Events",
                  "Destination Expertise",
                ],
              },
              {
                title: "Seminars & Incentive Travel",
                items: [
                  "Seminar - PCO (Professional Congress Organizer)",
                  "Corporate Incentives",
                  "Team Building",
                  "Team Cohesion",
                  "Team Development",
                ],
              },
              {
                title: "Event Production",
                items: ["Lighting Solutions", "Set Design"],
              },
              {
                title: "Travel & Guest Experience",
                items: [
                  "Accommodation Arrangements",
                  "Guided Tours",
                  "Leisure Activities",
                  "24/24 assistance",
                ],
              },
            ].map((group) => (
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
              Our Process
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              The Tendencia Way, step by step
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {[
              "Evaluation and brainstorming session by a dedicated team",
              "Crafting the offer by incorporating Tendencia's distinctive concepts",
              "Deployment of technical and human resources for implementation",
              "Assessment of performance and return on investment (ROI)",
            ].map((step, i) => (
              <div key={step} className="border-t border-brand-border pt-6 space-y-4">
                <span className="text-xs font-medium text-brand-green">
                  0{i + 1}
                </span>
                <p className="text-[14px] text-brand-muted leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quote break */}
        <section className="w-full">
          <div className="rounded-custom overflow-hidden h-[300px] sm:h-[360px] relative w-full flex items-center justify-center p-8 bg-brand-neutral">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70" />
            <div className="relative z-10 max-w-3xl text-center px-4">
              <p className="font-display text-2xl sm:text-4xl leading-[1.3] text-white font-normal">
                &ldquo;Tendencia brilliantly managed our event, even at the
                last minute. Their team perfectly understood our needs and
                orchestrated every detail with impeccable precision.&rdquo;
              </p>
              <span className="inline-block mt-4 text-xs uppercase tracking-[0.25em] text-brand-yellow">
                Adil Ettouhami, Foliatech
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              Client Testimonials
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              Trusted across Morocco and beyond
            </h2>
            <p className="text-[14px] text-brand-muted leading-relaxed max-w-2xl pt-2">
              Trusted by leading organizations across Morocco and
              internationally for corporate events, seminars, and incentive
              travel — including Accor, The World Bank, Lear Corporation, and
              Ciments du Maroc.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            {[
              {
                quote:
                  "The organization of our event by Tendencia was impeccable. Every detail was carefully considered, with remarkable creativity in crafting solutions.",
                author: "Gustavo Ruiz Checo Trigo",
              },
              {
                quote:
                  "For the celebration of our centenary, we were extremely satisfied with the organization by Tendencia.",
                author: "Amina Essaoudi, Lear Corporation",
              },
              {
                quote:
                  "The collaboration with Tendencia during the CHAN 2018 in Tangier was exemplary. Their agency brilliantly conducted the audit and quality management control.",
                author: "Kenza Baghdadli, Moroccan Football Federation",
              },
              {
                quote:
                  "The organization of our event by Tendencia exceeded our expectations. Their team was able to capture the essence of our brand.",
                author: "Alice Rahou, Accor",
              },
              {
                quote: "Thanks to Tendencia, our event at the Port of Tangier City was a total success.",
                author: "Rajae El Hannach, Port of Tangier City",
              },
              {
                quote: "Collaborating with Tendencia was an enriching experience. Their team demonstrated exceptional expertise.",
                author: "Lamia El Akkad, Experience Morocco",
              },
              {
                quote: "The organization of our event by Tendencia was flawless. Their team was able to meet the high standards of our institution.",
                author: "Sultana Ajem, The World Bank",
              },
              {
                quote: "We were very satisfied with the organization of our event by Tendencia for Ciments du Maroc.",
                author: "Ghita Kbila, Ciments du Maroc",
              },
            ].map((t) => (
              <blockquote key={t.author} className="bg-brand-subtle p-6 rounded-custom">
                <p className="text-[14px] text-brand-neutral leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-3 text-[13px] font-medium text-brand-muted">
                  {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="space-y-8">
          <div className="space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              Our Team
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal text-brand-neutral tracking-tight">
              The people behind every event
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 pt-4">
            {[
              { name: "Nabih Kabbaj", role: "CEO & Managing Director" },
              { name: "Noorddine Khabbach", role: "Logistics Manager" },
              { name: "Sabrine Elbarie", role: "Digital Marketing Manager" },
              { name: "Najlae Riahi", role: "Travel & Event Designer" },
              { name: "Fatimazahra Bakkali", role: "Production Project Manager" },
            ].map((member) => (
              <div key={member.name} className="border-t border-brand-border pt-4">
                <p className="font-medium text-brand-neutral text-[14px]">{member.name}</p>
                <p className="text-[13px] text-brand-muted">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA banner */}
        <section className="w-full">
          <div className="rounded-custom overflow-hidden bg-brand-neutral h-[380px] sm:h-[440px] relative w-full flex items-center justify-center p-6 text-center shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/70" />
            <div className="relative z-10 max-w-2xl px-4 flex flex-col items-center">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-yellow mb-4">
                Tangier &amp; Marrakech · Nationwide across Morocco
              </span>
              <h2 className="font-display text-3xl sm:text-5xl text-white font-normal mb-8 leading-tight">
                Need Inspiration for your next event?
              </h2>
              <a
                href="/contact-us"
                className="bg-brand-green hover:bg-brand-green/90 transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </section>

        {/* Offices */}
        <section id="offices" className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-4">
          <div>
            <h3 className="font-display text-xl text-brand-neutral font-normal">
              Event Management &amp; Team Building Agency in Tangier
            </h3>
            <p className="mt-2 text-[14px] text-brand-muted">
              Avenue Moulay Ismail, rue de Marrakech, Résidence Volubilis C,
              1er étage, bureau 51, 90000 Tanger
            </p>
            <p className="mt-2 text-[14px] text-brand-muted">
              Tel: +(212) 6 62 47 88 51 | +(212) 5 31 56 55 10
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl text-brand-neutral font-normal">
              Event Management &amp; Team Building Agency in Marrakech
            </h3>
            <p className="mt-2 text-[14px] text-brand-muted">
              Résidence La Carelle Atlas Immeuble H6 Étage 3 N°21
            </p>
            <p className="mt-2 text-[14px] text-brand-muted">
              Tel: +(212) 6 62 47 88 51 | +(212) 5 39 32 01 91
            </p>
          </div>
          <p className="sm:col-span-2 text-[14px] text-brand-muted pt-2 border-t border-brand-border">
            Main contact: +(212) 5 39 32 01 91 | info@tendenciaevents.com
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="pt-8 pb-16 space-y-12 max-w-[1240px] mx-auto px-4 sm:px-6">
        <div className="border border-brand-border bg-brand-subtle p-8 sm:p-12 rounded-custom">
          <h3 className="font-display text-2xl sm:text-3xl text-brand-neutral font-normal mb-3">
            Creating Memories, tailored with care.
          </h3>
          <p className="text-[14px] text-brand-muted max-w-3xl leading-relaxed">
            Corporate events, team building, and incentive travel across
            Morocco — with dedicated offices in Tangier and Marrakech.
          </p>
        </div>

        <div className="pt-4 border-b border-brand-border pb-4">
          <h2 className="font-display text-6xl sm:text-8xl md:text-9xl font-normal tracking-tight text-brand-neutral leading-none select-none">
            Tendencia
          </h2>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-brand-muted">
          <div>Copyright © 2026 Tendencia Events &amp; Travel | All Rights Reserved</div>
          <div className="flex items-center gap-6">
            <a href="/terms-and-conditions" className="hover:text-brand-neutral transition-colors">
              Terms and Conditions
            </a>
            <a href="/privacy-policy" className="hover:text-brand-neutral transition-colors">
              Privacy Policy
            </a>
            <a href="/contact-us" className="hover:text-brand-neutral transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
