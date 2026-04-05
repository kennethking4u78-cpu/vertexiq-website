export default function VertexIQSystemsWebsite() {
  const brand = {
    name: 'VertexIQ Systems',
    tagline: 'From Idea to Scalable Digital Products',
    email: 'info@vertexiqsystems.com',
    ukWhatsappNumber: '447376174981',
    ghWhatsappNumber: '233534177839',
    calendlyUrl: 'https://calendly.com/vertexiqsystems/discovery-call',
  };

  const ukWhatsappHref = `https://wa.me/${brand.ukWhatsappNumber}?text=${encodeURIComponent(
    "Hello VertexIQ Systems, I'd like to discuss a project."
  )}`;

  const ghWhatsappHref = `https://wa.me/${brand.ghWhatsappNumber}?text=${encodeURIComponent(
    "Hello VertexIQ Systems, I'd like to discuss a project."
  )}`;

  const services = [
    {
      title: 'Web Platforms',
      desc: 'Premium websites, landing pages, and custom digital platforms designed to position your brand and convert attention into action.',
      bullets: ['High-converting pages', 'Responsive UX', 'Performance-focused build'],
    },
    {
      title: 'Business Systems',
      desc: 'Operational dashboards, internal tools, portals, and smart systems tailored to how your business works behind the scenes.',
      bullets: ['Custom workflows', 'Admin portals', 'Scalable architecture'],
    },
    {
      title: 'App Development',
      desc: 'Modern mobile and web applications built for usability, growth, and serious product quality.',
      bullets: ['Cross-platform products', 'Clean UI', 'Launch-ready delivery'],
    },
    {
      title: 'Automation & Consulting',
      desc: 'Technical guidance, integrations, and automation that help businesses reduce manual work and move faster.',
      bullets: ['API integrations', 'Process automation', 'Product strategy'],
    },
  ];

  const projects = [
    {
      name: 'Operations Intelligence Dashboard',
      category: 'Custom System',
      summary: 'A premium dashboard concept designed to centralize reporting, team performance, and executive visibility in one place.',
    },
    {
      name: 'Premium Brand Website',
      category: 'Web Experience',
      summary: 'A high-trust digital presence crafted to improve perception, clarity, and lead conversion for growth-focused brands.',
    },
    {
      name: 'Booking & Service Platform',
      category: 'Digital Product',
      summary: 'A customer-facing service platform built to simplify inquiries, bookings, and engagement from first contact to delivery.',
    },
  ];

  const process = [
    'Discovery & Strategy',
    'Design & Experience',
    'Development & Testing',
    'Launch & Growth Support',
  ];

  const benefits = [
    'Premium design quality',
    'Business-first execution',
    'Scalable systems thinking',
    'Clear professional delivery',
  ];

  const stats = [
    ['Premium Positioning', 'Built to elevate your brand'],
    ['Scalable Products', 'Designed for long-term growth'],
    ['Professional Delivery', 'Clear process and communication'],
  ];

  return (
    <div className="min-h-screen bg-[#040714] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,76,241,0.26),transparent_28%),radial-gradient(circle_at_top_right,rgba(46,168,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_center,rgba(79,70,229,0.12),transparent_35%)]" />
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
              <a href="#services" className="transition hover:text-white">Services</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="#contact" className="transition hover:text-white">Contact</a>
            </div>

            <a
              href={brand.calendlyUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
            >
              Book a Free Consultation
            </a>
          </nav>

          <div className="grid gap-14 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-28">
            <div className="max-w-4xl">
              <div className="inline-flex rounded-full border border-[#6C4CF1]/30 bg-[#6C4CF1]/10 px-4 py-2 text-sm text-[#d8d0ff]">
                Scalable Solutions for Modern Businesses
              </div>

              <h1 className="mt-7 text-5xl font-black leading-[1.05] md:text-7xl">
                We Build <span className="bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] bg-clip-text text-transparent">Scalable Web Apps, Systems & Digital Platforms</span> for Growing Businesses.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
                From strategy to launch, VertexIQ Systems designs premium digital experiences that help businesses operate better, present stronger, and scale with confidence.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Book a Free Consultation
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

              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
                {['Web Applications', 'Business Systems', 'Automation', 'Consulting'].map((item) => (
                  <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-12 grid max-w-3xl gap-4 md:grid-cols-3">
                {stats.map(([title, value]) => (
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
                      <p className="text-sm text-slate-400">Featured Product View</p>
                      <h3 className="mt-1 text-2xl font-bold">VertexIQ Client Portal</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">
                      Premium Build
                    </div>
                  </div>

                  <div className="mt-8 space-y-4">
                    <div className="grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
                      <div className="rounded-[1.5rem] bg-white p-5 text-slate-900">
                        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-500">Dashboard</p>
                        <div className="mt-5 space-y-3">
                          <div className="h-3 rounded-full bg-slate-200" />
                          <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                          <div className="mt-2 h-28 rounded-[1.25rem] bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF]" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Built For</p>
                          <p className="mt-2 text-lg font-semibold">Businesses that want polished systems and stronger digital presence.</p>
                        </div>
                        <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                          <p className="text-sm text-slate-400">Starting Investment</p>
                          <p className="mt-2 text-lg font-semibold">Projects typically start from $500+</p>
                        </div>
                      </div>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-3">
                      {['Fast Delivery', 'Smart Architecture', 'Premium UX'].map((item) => (
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

      <section className="mx-auto max-w-7xl px-6 py-20" id="services">
        <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Services</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">What VertexIQ Systems helps businesses build.</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-slate-300">
            We create polished digital products, smart systems, and modern platforms that improve operations, elevate perception, and support growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="group rounded-[1.9rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white/[0.07]">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-lg font-black shadow-lg shadow-[#6C4CF1]/20">
                {service.title.charAt(0)}
              </div>
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{service.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Why VertexIQ</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">A premium digital partner focused on business results, not just code.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We bring together product thinking, modern design, and technical execution so your business gets something that feels premium and performs with purpose.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((item) => (
                <div key={item} className="rounded-[1.6rem] border border-white/10 bg-[#0a1124] p-6 text-slate-200 shadow-lg shadow-black/20">
                  <p className="text-base font-medium leading-7">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="work">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Featured Work</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Premium digital experiences built to make businesses look stronger.</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            These concepts reflect the level of polish, structure, and product quality VertexIQ Systems brings to every build.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[#0a1124] shadow-xl shadow-black/20">
              <div className="h-56 bg-[linear-gradient(135deg,rgba(108,76,241,0.95),rgba(46,168,255,0.85))]" />
              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20" id="process">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Process</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Clear structure. Premium delivery. Strong outcomes.</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Every project follows a refined process so your business gets clarity, momentum, and a final product delivered with confidence.
              </p>
            </div>

            <div className="space-y-5">
              {process.map((step, index) => (
                <div key={step} className="flex items-start gap-5 rounded-[1.6rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-sm font-black shadow-lg shadow-[#6C4CF1]/20">
                    0{index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{step}</h3>
                    <p className="mt-2 leading-7 text-slate-300">
                      A focused phase designed to keep communication clear, quality high, and business objectives at the center of the build.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="contact">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Let’s Build</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Ready to launch something polished, scalable, and serious?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Reach out to VertexIQ Systems to discuss your website, digital platform, business dashboard, app, or custom system.
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <div className="min-w-0 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 xl:col-span-1">
                  <p className="text-sm text-slate-400">Email</p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="mt-2 block text-sm font-semibold leading-6 text-white hover:text-[#b8cfff] break-words"
                  >
                    {brand.email}
                  </a>
                </div>
                <div className="min-w-0 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 xl:col-span-1">
                  <p className="text-sm text-slate-400">UK WhatsApp</p>
                  <a href={ukWhatsappHref} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold leading-6 text-white hover:text-[#b8cfff] break-words">
                    +44 7376 174981
                  </a>
                </div>
                <div className="min-w-0 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 xl:col-span-1">
                  <p className="text-sm text-slate-400">Ghana WhatsApp</p>
                  <a href={ghWhatsappHref} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold leading-6 text-white hover:text-[#b8cfff] break-words">
                    +233 534 177 839
                  </a>
                </div>
                <div className="min-w-0 rounded-[1.4rem] border border-white/10 bg-white/5 p-4 xl:col-span-1">
                  <p className="text-sm text-slate-400">Consultation</p>
                  <a href={brand.calendlyUrl} target="_blank" rel="noreferrer" className="mt-2 block text-sm font-semibold leading-6 text-white hover:text-[#b8cfff]">
                    Book a call
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-[1.9rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <form action="https://formsubmit.co/info@vertexiqsystems.com" method="POST" className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Website Inquiry - VertexIQ" />
                <input type="hidden" name="_next" value="https://www.vertexiqsystems.com" />

                <input name="name" required className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Your name" />
                <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Email address" />
                <input name="service" className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="What do you need built?" />
                <textarea name="message" required className="min-h-[150px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Tell us about your project" />

                <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]">
                  Send Message
                </button>
              </form>
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
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
