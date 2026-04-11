import PageHero from "@/components/PageHero";
import { links, site } from "@/components/site-data";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Free Business Growth Audit"
        title="Get a FREE review of your website or business system."
        description="Discover what is stopping you from getting clients, how to improve conversions, and simple changes that can increase your revenue."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Free Growth Audit</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Ready to grow your business?
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Get a FREE Website & Business Audit and discover how to attract more customers and scale your business.
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

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">What happens next</p>
                <div className="mt-5 space-y-4 text-slate-300">
                  <p>1. We review your request carefully.</p>
                  <p>2. We identify the most important growth opportunities.</p>
                  <p>3. We contact you with the next steps shortly.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <form action="https://formsubmit.co/b7ead2955da23d14f0e6002b8fbaa5e9" method="POST" className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New VertexIQ Growth Audit Lead" />
                <input type="hidden" name="_next" value="https://www.vertexiqsystems.com/thank-you" />

                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Email"
                />
                <input
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Phone / WhatsApp"
                />
                <input
                  name="businessType"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Business Type"
                />
                <textarea
                  name="message"
                  required
                  className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]"
                >
                  Get My Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
