import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { services } from "@/components/site-data";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="High-converting websites, smart automation systems, and custom web applications."
        description="VertexIQ Systems helps businesses in Ghana, the UK, and worldwide attract more customers, improve operations, and build digital infrastructure for growth."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.9rem] border border-white/10 bg-white/5 p-8 shadow-lg shadow-black/20">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 leading-8 text-slate-300">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
