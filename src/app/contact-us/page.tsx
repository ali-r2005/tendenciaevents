import { Metadata } from "next";
import { getDictionary } from "../../../i18n";

const dictionary = getDictionary();

export const metadata: Metadata = {
  title: dictionary.contactUsPage.meta.title,
  description: dictionary.contactUsPage.meta.description,
};

export default function ContactUs() {
  const t = getDictionary();

  return (
    <main className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 py-6 space-y-24 sm:space-y-32">
      {/* Hero + Form */}
      <section className="pt-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          <div className="md:col-span-5 space-y-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-brand-muted">
              {t.contactUsPage.label}
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-normal text-brand-neutral tracking-tight">
              {t.contactUsPage.title}
            </h1>
            <p className="text-[16px] text-brand-muted leading-relaxed max-w-lg pt-2">
              {t.contactUsPage.intro}
            </p>

            <div className="pt-8 space-y-2">
              <h2 className="font-medium text-brand-neutral">{t.contactUsPage.contactInfoLabel}</h2>
              <p className="text-[15px] text-brand-muted">{t.contactUsPage.phone}</p>
              <p className="text-[15px] text-brand-muted">{t.contactUsPage.email}</p>
            </div>
          </div>

          <div className="md:col-span-7">
            <form className="bg-brand-subtle border border-brand-border rounded-custom p-6 sm:p-8 space-y-5">
              <h2 className="font-display text-2xl text-brand-neutral font-normal">
                {t.contactUsPage.form.title}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="firstName" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.firstName}
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="lastName" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.lastName}
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.email}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.company}
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.phone}
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="poste" className="text-[13px] text-brand-muted">
                    {t.contactUsPage.form.fields.poste}
                  </label>
                  <input
                    id="poste"
                    name="poste"
                    type="text"
                    className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-[13px] text-brand-muted">
                  {t.contactUsPage.form.fields.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full bg-white border border-brand-border rounded-custom px-4 py-2.5 text-[15px] text-brand-neutral outline-none focus:border-brand-green transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-block bg-brand-green hover:bg-brand-blue transition-colors px-8 py-3.5 rounded-custom text-white text-[13px] font-medium tracking-wide uppercase"
              >
                {t.contactUsPage.form.submit}
              </button>
            </form>
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
