import CTASection from "@/components/CTASection";
import PageHero from "@/components/PageHero";
import { MapPin, Globe } from "lucide-react";

const officeLocations = [
  {
    country: "Ghana",
    city: "Kumasi",
    officeLabel: "Ghana Office",
    addressLines: [
      "Plot 8, Block XIII",
      "Anwomaso Road, Anwomaso",
      "Kumasi, Ghana",
    ],
    description:
      "Serving businesses across Ghana with high-converting websites, automation systems, and scalable digital solutions.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Plot+8+Block+XIII+Anwomaso+Road+Anwomaso+Kumasi+Ghana",
  },
  {
    country: "United Kingdom",
    city: "Manchester",
    officeLabel: "UK Office",
    addressLines: [
      "Bartle House",
      "9 Oxford Court",
      "Manchester, England, M2 3WQ",
    ],
    description:
      "Supporting UK-based businesses with premium websites, automation systems, and scalable digital growth solutions.",
    mapUrl:
      "https://www.google.com/maps/search/?api=1&query=Bartle+House+9+Oxford+Court+Manchester+England+M2+3WQ",
  },
  {
    country: "Worldwide",
    city: "Remote Delivery",
    officeLabel: "Global Service",
    addressLines: [
      "Remote-first collaboration",
      "Online consultations and delivery",
      "Serving clients globally",
    ],
    description:
      "We work with founders and businesses across multiple regions through efficient remote delivery, strategy calls, and digital project execution.",
    mapUrl: "/contact",
  },
];

export default function LocationsPage() {
  return (
    <>
      <PageHero
        eyebrow="Locations"
        title="Our Office Locations in Ghana, UK & Worldwide"
        description="VertexIQ Systems supports businesses locally and internationally with high-converting websites, smart systems, and premium digital solutions."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
            Our Presence
          </p>
          <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
            Local presence, international mindset, global delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            We proudly serve businesses in Ghana, the United Kingdom, and worldwide with
            modern digital solutions built for trust, visibility, and growth.
          </p>
        </div>

        <div className="grid gap-6 xl:grid-cols-3">
          {officeLocations.map((location) => (
            <div
              key={location.officeLabel}
              className="rounded-[2rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20"
            >
              <div className="flex items-center gap-2 text-sm uppercase tracking-[0.28em] text-slate-400">
                {location.country === "Worldwide" ? <Globe size={16} /> : <MapPin size={16} />}
                <span>{location.officeLabel}</span>
              </div>

              <h3 className="mt-4 text-2xl font-bold text-white">{location.city}</h3>

              <div className="mt-5 space-y-1 text-slate-300">
                {location.addressLines.map((line) => (
                  <p key={line} className="leading-7">
                    {line}
                  </p>
                ))}
              </div>

              <p className="mt-6 leading-7 text-slate-400">{location.description}</p>

              <a
                href={location.mapUrl}
                target={location.country === "Worldwide" ? "_self" : "_blank"}
                rel={location.country === "Worldwide" ? undefined : "noreferrer"}
                className="mt-6 inline-block text-sm font-medium text-[#8db4ff] hover:underline"
              >
                {location.country === "Worldwide" ? "Get in touch →" : "View on Google Maps →"}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[1fr_1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                Why Our Locations Matter
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                We understand local markets while delivering at international standards.
              </h2>
            </div>

            <div className="grid gap-4">
              {[
                "Support for businesses in Ghana with modern digital growth solutions",
                "Professional service access for UK-based companies and founders",
                "Remote-friendly delivery for clients anywhere in the world",
                "Clear communication, premium execution, and scalable thinking",
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
        </div>
      </section>

      <CTASection />
    </>
  );
}