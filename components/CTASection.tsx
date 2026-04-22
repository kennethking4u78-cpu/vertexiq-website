import { links, site } from "./site-data";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
        <div className="grid gap-10 px-8 py-10 md:px-12 md:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
              Ready to Grow Your Business?
            </p>

            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl lg:text-6xl">
              Get a FREE Website & Business Audit
            </h2>

            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              We review your current setup, identify missed opportunities, and show you the next
              best steps to attract more customers, improve conversions, and grow with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
              >
                Book Free Consultation
              </a>

              <a
                href={links.ukWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">
              What Happens Next
            </p>

            <div className="mt-6 space-y-5 text-slate-300">
              <div className="rounded-2xl border border-white/10 bg-[#0a1124] px-5 py-4">
                <p className="font-semibold text-white">
                  1. We review your website or business system
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a1124] px-5 py-4">
                <p className="font-semibold text-white">
                  2. We identify the biggest conversion and growth opportunities
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-[#0a1124] px-5 py-4">
                <p className="font-semibold text-white">
                  3. We contact you with practical next steps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}