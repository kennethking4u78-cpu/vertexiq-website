import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { reasons } from "@/components/site-data";
import { CheckCircle } from "lucide-react";

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="We build systems that generate leads, not just websites that look good."
        description="VertexIQ Systems combines design, strategy, and automation to help businesses in Ghana, the UK, and worldwide grow with clarity and consistency."
      />

      {/* CORE DIFFERENTIATORS */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
            What Makes Us Different
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
            We think like business partners — not just designers.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every project is built with one goal in mind: helping your business
            attract more customers, convert better, and operate more efficiently.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-[1.6rem] border border-white/10 bg-[#0a1124] p-6 text-slate-200 shadow-lg shadow-black/20"
            >
              <CheckCircle className="mt-1 text-[#8db4ff]" size={18} />
              <p className="text-base leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW YOU WORK */}
      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                How We Work
              </p>
              <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                A simple process focused on results.
              </h2>
            </div>

            <div className="space-y-6 text-slate-300">
              <div>
                <p className="font-semibold text-white">1. Strategy First</p>
                <p>
                  We understand your business, goals, and customers before
                  designing anything.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">2. Build for Conversion</p>
                <p>
                  Every page and system is designed to turn visitors into leads
                  and customers.
                </p>
              </div>

              <div>
                <p className="font-semibold text-white">3. Optimize & Scale</p>
                <p>
                  We refine, improve, and help you scale with better systems and
                  automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
              Who We Work With
            </p>
            <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
              Built for businesses serious about growth.
            </h2>
          </div>

          <div className="grid gap-4">
            {[
              "Businesses struggling to get consistent leads",
              "Founders who want a professional online presence",
              "Companies ready to scale with better systems",
              "Brands targeting local and international customers",
            ].map((item) => (
              <div
                key={item}
                className="rounded-[1.5rem] border border-white/10 bg-[#0a1124] px-5 py-4 text-slate-200"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST POSITIONING */}
      <section className="border-t border-white/10 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-black text-white md:text-5xl">
            Local expertise. Global standards.
          </h2>
          <p className="mt-6 text-lg text-slate-300">
            Whether you're in Ghana, the UK, or anywhere in the world, we bring
            the same level of quality, strategy, and execution to every project.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  );
}