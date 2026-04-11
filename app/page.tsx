import Link from "next/link";
import CTASection from "@/components/CTASection";
import { caseStudies, links, services, testimonials } from "@/components/site-data";

export default function HomePage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,76,241,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(46,168,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(79,70,229,0.10),transparent_35%)]" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#6C4CF1]/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[#2EA8FF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-[#6C4CF1]/30 bg-[#6C4CF1]/10 px-4 py-2 text-sm text-[#d8d0ff]">
                Trusted by growing businesses across Ghana, UK, and globally
              </div>

              <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
                We Help Businesses in <span className="bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] bg-clip-text text-transparent">Ghana, UK & Worldwide</span> Get More Clients with High-Converting Websites & Smart Digital Systems
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                We design powerful websites and automation systems that help you attract customers, increase sales, and run your business more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Get Your Free Growth Audit
                </Link>
                <a
                  href={links.ukWhatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Chat With Us on WhatsApp
                </a>
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 md:grid-cols-3">
                {[
                  ["Client Growth Focused", "Built to generate leads and revenue"],
                  ["Smart Digital Systems", "Designed to improve operations and efficiency"],
                  ["Global Service Delivery", "Serving Ghana, UK, and worldwide"],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-sm text-slate-400">{title}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#6C4CF1]/20 to-[#2EA8FF]/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#081022] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Growth System Preview</p>
                      <h3 className="mt-1 text-2xl font-bold">Lead & Client Conversion Engine</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      Premium Build
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Lead Dashboard</p>
                        <div className="mt-5 space-y-3">
                          <div className="h-3 rounded-full bg-slate-200" />
                          <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                          <div className="mt-2 h-28 rounded-[1.25rem] bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF]" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Built For</p>
                          <p className="mt-2 text-lg font-semibold">Businesses that want more visibility, leads, and sales.</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Offer</p>
                          <p className="mt-2 text-lg font-semibold">Free Growth Audit available now</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {["More Leads", "Better Conversion", "Smarter Operations"].map((item) => (
                        <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-8 border-t border-white/10 pt-12 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Trusted Introduction</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                We don’t just build websites — we create digital systems that help your business grow.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-300">
                Trusted by growing businesses across Ghana, UK, and globally.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                We create digital systems that help you grow, automate operations, and generate consistent revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-lg font-black shadow-lg shadow-[#6C4CF1]/20">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <Link
            href="/services"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Explore Services
          </Link>
          <Link
            href="/case-studies"
            className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            View Case Studies
          </Link>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Testimonials</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Businesses value our speed, professionalism, and results-focused approach.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.author} className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-8 shadow-lg shadow-black/20">
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">{item.author}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {caseStudies.map((item) => (
              <div key={item.title} className="rounded-[1.9rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Case Study</p>
                <h3 className="mt-3 text-2xl font-bold">{item.title}</h3>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p><span className="font-semibold text-white">Problem:</span> {item.problem}</p>
                  <p><span className="font-semibold text-white">Solution:</span> {item.solution}</p>
                  <p><span className="font-semibold text-white">Result:</span> {item.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#081022]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
          <a
            href={links.ukWhatsapp}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
          <Link
            href="/contact"
            className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Free Audit
          </Link>
        </div>
      </div>
    </div>
  );
}
