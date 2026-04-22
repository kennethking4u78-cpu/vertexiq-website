import PageHero from "@/components/PageHero";
import { links, site } from "@/components/site-data";
import { Mail, MessageCircle, PhoneCall, CalendarDays, MapPin } from "lucide-react";

const contactCards = [
  {
    title: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    note: "Best for proposals, project briefs, and formal inquiries.",
  },
  {
    title: "WhatsApp UK",
    value: "+44 7376 174981",
    href: links.ukWhatsapp,
    icon: MessageCircle,
    note: "Fast response for UK and international inquiries.",
  },
  {
    title: "WhatsApp Ghana",
    value: "+233 534 177 839",
    href: links.ghWhatsapp,
    icon: MessageCircle,
    note: "Direct support for Ghana-based businesses and founders.",
  },
  {
    title: "Book a Call",
    value: "Free Strategy Consultation",
    href: site.calendlyUrl,
    icon: CalendarDays,
    note: "Book a call to discuss your website, system, or app idea.",
  },
];

const officeLocations = [
  {
    label: "Ghana Office",
    value: "Plot 8, Block XIII, Anwomaso Road, Anwomaso, Kumasi, Ghana",
  },
  {
    label: "UK Office",
    value: "Bartle House, 9 Oxford Court, Manchester, England, M2 3WQ",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Get a FREE Website & Business Audit"
        description="Tell us about your business, your current challenge, and what you want to achieve. We’ll review your request and contact you with the next best steps."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="mb-10 max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                Start Your Project
              </p>
              <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-5xl">
                Let’s help you attract more clients and grow with confidence.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Whether you need a website, a smarter digital workflow, or a custom platform,
                this is the best place to start.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-black/20 backdrop-blur">
              <form
                action="https://formsubmit.co/b7ead2955da23d14f0e6002b8fbaa5e9"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New VertexIQ Inquiry" />
                <input type="hidden" name="_next" value="https://www.vertexiqsystems.com/thank-you" />

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Name</label>
                    <input
                      name="name"
                      required
                      placeholder="Your full name"
                      className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">Email</label>
                    <input
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Phone / WhatsApp
                    </label>
                    <input
                      name="phone"
                      placeholder="Your phone or WhatsApp number"
                      className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-300">
                      Business Type
                    </label>
                    <input
                      name="businessType"
                      placeholder="e.g. Retail, Healthcare, Services"
                      className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-slate-300">
                    What do you need help with?
                  </label>
                  <textarea
                    name="message"
                    required
                    placeholder="Tell us about your business, what you need, and your goals."
                    className="min-h-[180px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-white outline-none placeholder:text-slate-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold text-white shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]"
                >
                  Send My Request
                </button>

                <p className="text-sm leading-6 text-slate-400">
                  Thank you! Your request has been received. We will contact you shortly.
                </p>
              </form>
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-[2rem] border border-white/10 bg-[#0a1124] p-7 shadow-xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                Direct Contact
              </p>
              <h3 className="mt-4 text-2xl font-bold text-white">
                Prefer to reach us another way?
              </h3>
              <p className="mt-4 leading-7 text-slate-300">
                Use any of the options below if you want a faster response or prefer direct contact.
              </p>

              <div className="mt-8 space-y-4">
                {contactCards.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="block rounded-[1.5rem] border border-white/10 bg-white/5 p-5 transition hover:bg-white/10"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-[1rem] bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-white shadow-lg shadow-[#6C4CF1]/20">
                          <Icon size={20} />
                        </div>
                        <div>
                          <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                            {item.title}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                          <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0a1124] p-7 shadow-xl shadow-black/20">
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">
                Office Presence
              </p>

              <div className="mt-6 space-y-5">
                {officeLocations.map((location) => (
                  <div
                    key={location.label}
                    className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5"
                  >
                    <div className="flex items-start gap-3">
                      <MapPin className="mt-1 text-[#8db4ff]" size={18} />
                      <div>
                        <p className="font-semibold text-white">{location.label}</p>
                        <p className="mt-2 leading-7 text-slate-300">{location.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#6C4CF1]/20 bg-[#6C4CF1]/10 p-7 shadow-xl shadow-[#6C4CF1]/10">
              <div className="flex items-start gap-3">
                <PhoneCall className="mt-1 text-[#b8cfff]" size={20} />
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b8cfff]">
                    What Happens Next
                  </p>
                  <div className="mt-4 space-y-3 text-slate-200">
                    <p>1. We review your website or business need.</p>
                    <p>2. We identify the best next steps for your growth.</p>
                    <p>3. We contact you with practical recommendations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}