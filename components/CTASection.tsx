import { links, site } from "./site-data";

export default function CTASection() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
        <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
              Ready to Grow Your Business?
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Get a FREE Website & Business Audit and discover how to attract more customers and scale your business.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              We review your current setup, identify missed opportunities, and show you the next best steps for growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={site.calendlyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
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
              What happens next
            </p>
            <div className="mt-6 space-y-4 text-slate-300">
              <p>1. We review your website or business system.</p>
              <p>2. We identify the biggest conversion and growth opportunities.</p>
              <p>3. We contact you with practical next steps.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
