import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/components/site-data";

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected examples of digital work focused on visibility, leads, and growth."
        description="These case studies reflect the type of outcome-focused work VertexIQ Systems aims to deliver for growing businesses."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, index) => (
            <div key={item.title} className="rounded-[1.9rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Case Study {index + 1}</p>
              <h2 className="mt-3 text-2xl font-bold">{item.title}</h2>
              <div className="mt-6 space-y-4 text-slate-300">
                <p><span className="font-semibold text-white">Problem:</span> {item.problem}</p>
                <p><span className="font-semibold text-white">Solution:</span> {item.solution}</p>
                <p><span className="font-semibold text-white">Result:</span> {item.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
