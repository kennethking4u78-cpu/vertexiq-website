export default function VertexIQSystemsWebsite() {
  const brand = {
    name: 'VertexIQ Systems',
    tagline: 'From Idea to Scalable Digital Products',
    email: 'info@vertexiqsystems.com',
    whatsappNumber: '447000000000',
    calendlyUrl: 'https://calendly.com/vertexiqsystems/discovery-call',
  };

  const whatsappHref = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    "Hello VertexIQ Systems, I'd like to discuss a project."
  )}`;

  return (
    <div className="min-h-screen bg-[#040714] text-white">

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <h1 className="text-5xl md:text-7xl font-black leading-tight">
          We Build <span className="bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] bg-clip-text text-transparent">Scalable Digital Systems</span>
        </h1>

        <p className="mt-6 text-lg text-slate-300 max-w-2xl">
          Premium websites, business systems, and applications designed to help businesses grow, operate smarter, and stand out.
        </p>

        <div className="mt-8 flex gap-4 flex-wrap">
          <a href={brand.calendlyUrl} target="_blank" className="px-6 py-4 rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] font-semibold">
            Book Consultation
          </a>

          <a href={whatsappHref} target="_blank" className="px-6 py-4 rounded-2xl border border-white/20">
            WhatsApp
          </a>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="mx-auto max-w-7xl px-6 py-20" id="contact">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl">

          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr]">

            {/* LEFT */}
            <div>
              <h2 className="text-4xl font-black">
                Ready to build something serious?
              </h2>

              <p className="mt-5 text-slate-300">
                Reach out to VertexIQ Systems to discuss your website, digital platform, or system.
              </p>

              <div className="mt-8 grid gap-4 lg:grid-cols-3">

                {/* EMAIL */}
                <div className="min-w-0 rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Email</p>

                  <a
                    href={`mailto:${brand.email}`}
                    className="mt-2 block text-sm font-semibold break-words"
                  >
                    {brand.email}
                  </a>
                </div>

                {/* WHATSAPP */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">WhatsApp</p>

                  <a href={whatsappHref} target="_blank" className="mt-2 block font-semibold">
                    Chat directly
                  </a>
                </div>

                {/* CONSULT */}
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Consultation</p>

                  <a href={brand.calendlyUrl} target="_blank" className="mt-2 block font-semibold">
                    Book a call
                  </a>
                </div>

              </div>
            </div>

            {/* FORM */}
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">

              <form
                action="https://formsubmit.co/info@vertexiqsystems.com"
                method="POST"
                className="space-y-4"
              >
                <input type="hidden" name="_captcha" value="false" />

                <input
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full p-3 rounded bg-black/40"
                />

                <input
                  name="email"
                  required
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 rounded bg-black/40"
                />

                <textarea
                  name="message"
                  required
                  placeholder="Tell us about your project"
                  className="w-full p-3 rounded bg-black/40"
                />

                <button className="w-full py-4 rounded bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] font-semibold">
                  Send Message
                </button>

              </form>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 text-center text-slate-400">
        <p className="text-white font-semibold">{brand.name}</p>
        <p>{brand.tagline}</p>
      </footer>

    </div>
  );
}