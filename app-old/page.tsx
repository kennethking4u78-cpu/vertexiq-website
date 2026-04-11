export default function VertexIQSystemsWebsite() {
  const brand = {
    name: 'VertexIQ Systems',
    tagline: 'From Idea to Scalable Digital Products',
    email: 'info@vertexiqsystems.com',
    ukWhatsappNumber: '447376174981',
    ghWhatsappNumber: '233534177839',
    calendlyUrl: 'https://calendly.com/kennethking4u78/30min',
  };

  const whatsappMessage = `Hi 👋 thanks for contacting VertexIQ Systems.
We help businesses get more clients with websites and smart systems.

Please tell us:

1. What your business does
2. What you need help with

We’ll assist you right away 👍`;

  const ukWhatsappHref = `https://wa.me/${brand.ukWhatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const ghWhatsappHref = `https://wa.me/${brand.ghWhatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const services = [
    {
      title: 'High-Converting Websites',
      desc: 'We design websites that do not just look good — they turn visitors into paying customers.',
    },
    {
      title: 'Business Automation Systems',
      desc: 'Save time and reduce stress with systems that automate your operations and workflows.',
    },
    {
      title: 'Custom Web Applications',
      desc: 'We build scalable platforms tailored to your business needs, helping you grow without limits.',
    },
  ];

  const reasons = [
    'We focus on results, not just design',
    'We understand both Ghana and international markets',
    'Fast delivery and reliable support',
    'Affordable solutions with high value',
    'We help you grow — not just build',
  ];

  const locations = ['Ghana', 'United Kingdom', 'Worldwide'];

  return (
    <div className="min-h-screen bg-[#040714] pb-24 text-white md:pb-0">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,76,241,0.24),transparent_28%),radial-gradient(circle_at_top_right,rgba(46,168,255,0.16),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(79,70,229,0.10),transparent_35%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#6C4CF1]/10 blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-[#2EA8FF]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 pt-8">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#6C4CF1] via-[#4F46E5] to-[#2EA8FF] shadow-lg shadow-[#6C4CF1]/20">
                <span className="text-xl font-black">V</span>
              </div>
              <div>
                <p className="text-lg font-bold tracking-[0.18em]">VERTEXIQ</p>
                <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Systems</p>
              </div>
            </div>

            <div className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
              <a href="#offer" className="transition hover:text-white">Free Audit</a>
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#case-studies" className="transition hover:text-white">Case Studies</a>
              <a href="#why-us" className="transition hover:text-white">Why Us</a>
              <a href="#lead-form" className="transition hover:text-white">Contact</a>
            </div>

            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
            >
              Book Free Strategy Call
            </a>
          </nav>

          <div className="grid gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-[#6C4CF1]/30 bg-[#6C4CF1]/10 px-4 py-2 text-sm text-[#d8d0ff]">
                Trusted by growing businesses across Ghana, UK, and globally
              </div>

              <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
                We Help Businesses in <span className="bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] bg-clip-text text-transparent">Ghana, UK & Worldwide</span> Get More Clients with High-Converting Websites & Smart Digital Systems
              </h1>

              <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
                We design powerful websites and automation systems that help you attract customers, increase sales, and run your business more efficiently.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#offer"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Get Your Free Growth Audit
                </a>
                <a
                  href={ukWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Chat With Us on WhatsApp
                </a>
              </div>

              <div className="mt-10 grid max-w-3xl gap-4 md:grid-cols-3">
                {[
                  ['Client Growth Focused', 'Built to generate leads and revenue'],
                  ['Smart Digital Systems', 'Designed to improve operations and efficiency'],
                  ['Global Service Delivery', 'Serving Ghana, UK, and worldwide'],
                ].map(([title, value]) => (
                  <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 backdrop-blur">
                    <p className="text-sm text-slate-400">{title}</p>
                    <p className="mt-3 text-sm font-semibold leading-6 text-white">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-[#6C4CF1]/20 to-[#2EA8FF]/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur-xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-[#081022] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Growth System Preview</p>
                      <h3 className="mt-1 text-2xl font-bold">Lead & Client Conversion Engine</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      Premium Build
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Lead Dashboard</p>
                        <div className="mt-5 space-y-3">
                          <div className="h-3 rounded-full bg-slate-200" />
                          <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                          <div className="mt-2 h-28 rounded-[1.25rem] bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF]" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Built For</p>
                          <p className="mt-2 text-lg font-semibold">Businesses that want more visibility, leads, and sales.</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Offer</p>
                          <p className="mt-2 text-lg font-semibold">Free Growth Audit available now</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {['More Leads', 'Better Conversion', 'Smarter Operations'].map((item) => (
                        <div key={item} className="rounded-[1.25rem] border border-white/10 bg-white/5 px-4 py-4 text-center text-sm font-medium text-slate-200">
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-white/[0.03] py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Trusted Introduction</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                We don’t just build websites — we create digital systems that help your business grow.
              </h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-300">
                Trusted by growing businesses across Ghana, UK, and globally.
              </p>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                We create digital systems that help you grow, automate operations, and generate consistent revenue.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="offer">
        <div className="overflow-hidden rounded-[2.2rem] border border-[#6C4CF1]/20 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Free Business Growth Audit</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Discover what is stopping your business from getting more clients.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                Get a FREE review of your website or business system and discover:
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'What’s stopping you from getting clients',
                  'How to improve conversions',
                  'Simple changes that can increase your revenue',
                ].map((item) => (
                  <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 px-5 py-4 text-slate-200">
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Book Free Audit
                </a>
                <a
                  href={ukWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Chat With Us on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">Why this works</p>
              <h3 className="mt-4 text-2xl font-bold">A focused audit that reveals your biggest growth opportunities</h3>
              <div className="mt-8 space-y-4">
                <div className="rounded-[1.4rem] border border-white/10 bg-[#050816]/60 p-5">
                  <p className="text-sm text-slate-400">Visibility</p>
                  <p className="mt-2 font-semibold text-white">See where your website or system is losing attention and trust.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[#050816]/60 p-5">
                  <p className="text-sm text-slate-400">Conversion</p>
                  <p className="mt-2 font-semibold text-white">Identify changes that can help you turn more visitors into inquiries and customers.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-[#050816]/60 p-5">
                  <p className="text-sm text-slate-400">Efficiency</p>
                  <p className="mt-2 font-semibold text-white">Find opportunities to simplify operations and reduce manual work.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="services">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Services</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              The digital systems we use to help businesses grow.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            Whether you need more customers, smoother operations, or a custom solution built for scale, VertexIQ Systems delivers with clarity and purpose.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[1.9rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-lg font-black shadow-lg shadow-[#6C4CF1]/20">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20" id="case-studies">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Case Studies</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              Real examples of how better digital systems can improve business results.
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <div className="rounded-[1.9rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Case Study 1</p>
              <h3 className="mt-3 text-2xl font-bold">Retail Business (Ghana)</h3>
              <div className="mt-6 space-y-4 text-slate-300">
                <p><span className="font-semibold text-white">Problem:</span> Low online visibility and no customer inquiries.</p>
                <p><span className="font-semibold text-white">Solution:</span> Website redesign + lead capture system.</p>
                <p><span className="font-semibold text-white">Result:</span> +65% increase in customer inquiries within 30 days.</p>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-[#0a1124] p-8 shadow-xl shadow-black/20">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Case Study 2</p>
              <h3 className="mt-3 text-2xl font-bold">Service Business (UK)</h3>
              <div className="mt-6 space-y-4 text-slate-300">
                <p><span className="font-semibold text-white">Problem:</span> Poor website performance.</p>
                <p><span className="font-semibold text-white">Solution:</span> Conversion-focused redesign.</p>
                <p><span className="font-semibold text-white">Result:</span> Increased leads and improved customer engagement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Testimonials</p>
          <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
            Businesses value our speed, professionalism, and results-focused approach.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-8 shadow-lg shadow-black/20">
            <p className="text-lg leading-8 text-slate-200">
              “VertexIQ Systems transformed our online presence. We started getting real customer inquiries within weeks.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">Business Owner, Ghana</p>
          </div>

          <div className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-8 shadow-lg shadow-black/20">
            <p className="text-lg leading-8 text-slate-200">
              “Professional, fast, and result-driven. Highly recommended.”
            </p>
            <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">Client, UK</p>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20" id="why-us">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Why Choose Us</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                We focus on helping your business grow — not just making things look good.
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((item) => (
                <div key={item} className="rounded-[1.6rem] border border-white/10 bg-[#0a1124] p-6 text-slate-200 shadow-lg shadow-black/20">
                  <p className="text-base font-medium leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Where We Serve</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              We proudly serve clients in Ghana, the United Kingdom, and worldwide.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            No matter where your business is, we can help you grow digitally with high-converting websites and smart digital systems.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {locations.map((location) => (
            <div key={location} className="rounded-[1.8rem] border border-white/10 bg-white/5 p-8 text-center shadow-lg shadow-black/20">
              <p className="text-2xl font-bold">{location}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-[2rem] border border-amber-400/20 bg-gradient-to-br from-[#111322] to-[#0a1124] p-8 shadow-xl shadow-black/20 md:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-amber-300">Limited Availability</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
              We only take a limited number of projects each month to ensure quality.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              Book your slot now before spaces fill up.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="lead-form">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Ready to Grow Your Business?</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">
                Get a FREE Website & Business Audit and discover how to attract more customers and scale your business.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                We’ll review your current setup, identify opportunities, and show you the next best steps for growth.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Book Free Consultation
                </a>
                <a
                  href={ukWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">What happens next</p>
                <div className="mt-5 space-y-4 text-slate-300">
                  <p>1. We review your request carefully.</p>
                  <p>2. We identify the most important growth opportunities.</p>
                  <p>3. We contact you with the next steps shortly.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <form action="https://formsubmit.co/b7ead2955da23d14f0e6002b8fbaa5e9" method="POST" className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New VertexIQ Growth Audit Lead" />
                <input type="hidden" name="_next" value="https://www.vertexiqsystems.com/#thank-you" />

                <input
                  name="name"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Name"
                />
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Email"
                />
                <input
                  name="phone"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Phone / WhatsApp"
                />
                <input
                  name="businessType"
                  className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Business Type"
                />
                <textarea
                  name="message"
                  required
                  className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500"
                  placeholder="Message"
                />

                <button
                  type="submit"
                  className="w-full rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]"
                >
                  Get My Free Audit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="thank-you">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-emerald-400/20 bg-[linear-gradient(135deg,#07111f_0%,#0d1832_45%,#0b1020_100%)] shadow-2xl shadow-[#091126]/50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(46,168,255,0.12),transparent_30%)]" />
          <div className="absolute right-8 top-8 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            Request Received
          </div>

          <div className="relative grid gap-10 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300">Thank You</p>
              <h2 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
                Thank you! Your request has been received.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                We will contact you shortly.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Submission confirmed
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">Direct Contact</p>
              <h3 className="mt-4 text-2xl font-bold">Need a faster response?</h3>
              <p className="mt-4 leading-7 text-slate-300">
                You can also reach us directly through WhatsApp or email.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href={ukWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp UK — +44 7376 174981
                </a>
                <a
                  href={ghWhatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp Ghana — +233 534 177 839
                </a>
                <a
                  href={`mailto:${brand.email}`}
                  className="block rounded-2xl bg-gradient-to-r from-emerald-400 via-[#6C4CF1] to-[#2EA8FF] px-5 py-4 font-semibold text-white shadow-xl shadow-emerald-400/10"
                >
                  Email — {brand.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#040714]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-semibold text-white">{brand.name}</p>
            <p className="mt-1">{brand.tagline}</p>
          </div>
          <div className="flex flex-wrap gap-5">
            <a href="#offer" className="hover:text-white">Free Audit</a>
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#case-studies" className="hover:text-white">Case Studies</a>
            <a href="#why-us" className="hover:text-white">Why Us</a>
            <a href="#lead-form" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#081022]/95 p-3 backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3">
          <a
            href={ukWhatsappHref}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-center text-sm font-semibold text-white"
          >
            WhatsApp
          </a>
          <a
            href="#offer"
            className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Free Audit
          </a>
        </div>
      </div>
    </div>
  );
}