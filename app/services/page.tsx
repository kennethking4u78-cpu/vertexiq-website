import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { services } from "@/components/site-data";

const serviceDetails = [
  {
    title: "High-Converting Websites",
    description:
      "We design websites that do not just look impressive — they are built to turn visitors into leads, inquiries, and paying customers.",
    points: [
      "Conversion-focused landing pages",
      "Premium responsive design",
      "Clear call-to-action structure",
      "Trust-building layout and messaging",
    ],
    outcome: "Best for businesses that want more visibility, stronger positioning, and more client inquiries.",
  },
  {
    title: "Business Automation Systems",
    description:
      "We help you save time and reduce operational stress by creating smart systems that automate repetitive business tasks and workflows.",
    points: [
      "Lead capture and follow-up systems",
      "Internal workflow automation",
      "Booking and inquiry automation",
      "Efficiency-focused digital processes",
    ],
    outcome: "Best for businesses that want to operate faster, reduce manual work, and improve service delivery.",
  },
  {
    title: "Custom Web Applications",
    description:
      "We build scalable platforms tailored to your business model, helping you deliver services digitally and grow without technical limits.",
    points: [
      "Client portals and dashboards",
      "Custom admin systems",
      "Scalable business platforms",
      "Tailored user-focused experiences",
    ],
    outcome: "Best for founders and companies building products, platforms, portals, or specialized internal systems.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-converting websites, smart automation systems, and custom web applications."
        description="VertexIQ Systems helps businesses in Ghana, the UK, and worldwide attract more customers, improve operations, and build digital infrastructure for growth."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
            What We Build
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
            Solutions designed to help businesses grow, convert better, and run smarter.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            We do not offer generic builds. Every service is designed to improve business performance,
            strengthen your digital presence, and support long-term growth.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {serviceDetails.map((service, index) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-xl shadow-black/20 backdrop-blur"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-lg font-black text-white shadow-lg shadow-[#6C4CF1]/20">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold text-white">{service.title}</h3>
              <p className="mt-4 leading-8 text-slate-300">{service.description}</p>

              <div className="mt-6 space-y-3">
                {service.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-[#0a1124] px-4 py-3 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.5rem] border border-[#6C4CF1]/20 bg-[#6C4CF1]/10 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8cfff]">
                  Best Outcome
                </p>
                <p className="mt-3 leading-7 text-slate-200">{service.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-7 shadow-lg shadow-black/20"
              >
                <h3 className="text-xl font-bold text-white">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{service.description}</p>
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
                Why Businesses Choose VertexIQ
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                We focus on results, not just visuals.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Every project is shaped around business outcomes — stronger positioning, better
                conversion, smoother operations, and more opportunities to grow.
              </p>
            </div>

            <div className="grid gap-4">
              {[
                "Premium design with business strategy behind it",
                "Experience serving Ghana, UK, and global clients",
                "Fast, reliable, and scalable delivery",
                "Solutions built for growth, not just launch day",
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