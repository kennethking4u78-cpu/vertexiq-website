import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { locations } from "@/components/site-data";

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="We proudly serve clients in Ghana, the United Kingdom, and worldwide."
        description="No matter where your business is, VertexIQ Systems can help you grow digitally with high-converting websites and smart systems."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {locations.map((location) => (
            <div key={location} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-black/20">
              <p className="text-2xl font-bold">{location}</p>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
