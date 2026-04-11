import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { reasons } from "@/components/site-data";

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        eyebrow="Why Choose Us"
        title="We focus on helping your business grow — not just making things look good."
        description="VertexIQ Systems blends premium design, business strategy, and practical systems thinking to build assets that support growth."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item) => (
            <div key={item} className="rounded-[1.6rem] border border-white/10 bg-[#0a1124] p-6 text-slate-200 shadow-lg shadow-black/20">
              <p className="text-base font-medium leading-7">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
