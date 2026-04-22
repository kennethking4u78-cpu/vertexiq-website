import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { caseStudies } from "@/components/site-data";

const featuredProjects = [
  {
    name: "EcoClean App",
    type: "Live Project",
    summary:
      "A digital platform designed to support service visibility, cleaner client interaction, and a stronger online presence.",
    highlights: [
      "Modern business-facing interface",
      "Clear service presentation",
      "Stronger digital credibility",
      "Built to support growth and user trust",
    ],
  },
  {
    name: "MedLink Ghana",
    type: "Live Project",
    summary:
      "A healthcare-focused digital platform created to improve clarity, accessibility, and platform usability for a growing audience.",
    highlights: [
      "Professional healthcare presentation",
      "Improved digital trust and accessibility",
      "Clean user experience structure",
      "Built for long-term platform growth",
    ],
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case Studies"
        title="Selected examples of digital work focused on visibility, leads, and growth."
        description="These case studies reflect the type of outcome-focused work VertexIQ Systems aims to deliver for growing businesses."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
            Results-Focused Work
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
            We build digital systems designed to improve visibility, trust, and conversion.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            Every project is approached from a business perspective — not just design. The goal is
            always to help the brand communicate clearly, look credible, and move users toward action.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((item, index) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20"
            >
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                  Case Study {index + 1}
                </p>
                <div className="rounded-full bg-[#6C4CF1]/15 px-3 py-1 text-xs font-medium text-[#cfc1ff]">
                  Outcome Focused
                </div>
              </div>

              <h2 className="text-2xl font-bold text-white">{item.title}</h2>

              <div className="mt-6 space-y-4 text-slate-300">
                <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Problem</p>
                  <p className="mt-3 leading-7">
                    <span className="font-semibold text-white">Challenge:</span> {item.problem}
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Solution</p>
                  <p className="mt-3 leading-7">
                    <span className="font-semibold text-white">Approach:</span> {item.solution}
                  </p>
                </div>

                <div className="rounded-[1.3rem] border border-emerald-400/15 bg-emerald-400/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-emerald-300">Result</p>
                  <p className="mt-3 text-lg font-semibold leading-8 text-white">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
              Featured Live Projects
            </p>
            <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
              Real examples that strengthen trust and demonstrate delivery capability.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              These projects help communicate the standard, structure, and professionalism VertexIQ
              Systems brings into digital work.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {featuredProjects.map((project) => (
              <div
                key={project.name}
                className="rounded-[2rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">
                    {project.type}
                  </p>
                  <div className="rounded-full bg-[#2EA8FF]/10 px-3 py-1 text-xs font-medium text-[#8ad5ff]">
                    Premium Build
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white">{project.name}</h3>
                <p className="mt-4 leading-8 text-slate-300">{project.summary}</p>

                <div className="mt-6 grid gap-3">
                  {project.highlights.map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-8 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                What These Case Studies Show
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Strategy, credibility, and business-focused execution.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                The real value of a digital project is not just how it looks — it is how clearly it
                communicates, how well it builds trust, and how effectively it supports growth.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Better credibility for growing brands",
                "Stronger digital positioning in competitive markets",
                "Improved user experience and trust",
                "Clear structure that supports conversion and growth",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}