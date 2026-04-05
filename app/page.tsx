export default function VertexIQSystemsWebsite() {
  const brand = {
    name: 'VertexIQ Systems',
    tagline: 'From Idea to Scalable Digital Products',
    email: 'hello@vertexiqsystems.com',
    whatsappNumber: '233000000000',
    calendlyUrl: 'https://calendly.com/vertexiqsystems/discovery-call',
  };

  const whatsappHref = `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(
    "Hello VertexIQ Systems, I'd like to discuss a project."
  )}`;

  const services = [
    {
      title: 'Custom Web Development',
      desc: 'Premium websites engineered for speed, trust, and conversion.',
      bullets: ['Responsive design', 'SEO-ready structure', 'High-performance build'],
    },
    {
      title: 'Business Systems',
      desc: 'Dashboards, CRMs, portals, and internal tools tailored to your operations.',
      bullets: ['Custom workflows', 'Admin dashboards', 'Role-based access'],
    },
    {
      title: 'Mobile App Development',
      desc: 'Scalable mobile products built for usability, retention, and business growth.',
      bullets: ['Cross-platform apps', 'Polished UI/UX', 'Launch support'],
    },
    {
      title: 'Automation & Integrations',
      desc: 'Connect your tools and automate repetitive processes to scale efficiently.',
      bullets: ['API integrations', 'Workflow automation', 'Operational efficiency'],
    },
  ];

  const process = [
    {
      title: 'Discovery & Strategy',
      text: 'We clarify goals, audience, technical needs, and success metrics before any design or development begins.',
    },
    {
      title: 'Design & Product Planning',
      text: 'We map the experience, structure the flow, and create a refined interface aligned with your business positioning.',
    },
    {
      title: 'Build & Launch',
      text: 'We develop the product carefully, test thoroughly, and prepare it for a smooth, confident launch.',
    },
    {
      title: 'Support & Scale',
      text: 'After launch, we optimize, expand, and improve the platform so it continues to serve your growth.',
    },
  ];

  const projects = [
    {
      name: 'Sales Operations Dashboard',
      category: 'Custom System',
      summary: 'A modern reporting dashboard built to centralize data, improve visibility, and reduce manual admin work.',
      result: 'Improved reporting clarity and streamlined daily operations.',
    },
    {
      name: 'Premium Corporate Website',
      category: 'Web Platform',
      summary: 'A polished conversion-focused website designed to elevate trust and present a stronger digital presence.',
      result: 'Sharper positioning and a stronger first impression for potential clients.',
    },
    {
      name: 'Service Booking Mobile App',
      category: 'Mobile Product',
      summary: 'A clean customer-facing app that simplified bookings, communication, and service delivery.',
      result: 'A smoother journey from inquiry to completed transaction.',
    },
  ];

  const testimonials = [
    {
      quote:
        'VertexIQ Systems approached the work like a serious product team. The final result felt premium and well thought through.',
      name: 'Client Project Review',
    },
    {
      quote:
        'The process was clear, professional, and focused on outcomes. Our digital presence looked stronger immediately.',
      name: 'Business Growth Review',
    },
  ];

  const stats = [
    ['Premium UX', 'Designed for trust'],
    ['Scalable Builds', 'Ready for growth'],
    ['Business Focused', 'Built with outcomes in mind'],
  ];

  return (
    <div className="min-h-screen bg-[#050816] text-white">
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(108,76,241,0.28),transparent_35%),radial-gradient(circle_at_top_right,rgba(46,168,255,0.18),transparent_30%),linear-gradient(to_bottom,rgba(5,8,22,0.45),rgba(5,8,22,1))]" />
        <div className="relative mx-auto max-w-7xl px-6 py-8">
          <nav className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C4CF1] via-[#4F46E5] to-[#2EA8FF] shadow-lg shadow-[#6C4CF1]/20">
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
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-5 py-3 text-sm font-semibold shadow-lg shadow-[#6C4CF1]/20 md:inline-flex"
            >
              Book a Free Consultation
            </a>
          </nav>

          <div className="grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-[#6C4CF1]/30 bg-[#6C4CF1]/10 px-4 py-2 text-sm text-[#d8d0ff]">
                Scalable Solutions for Modern Businesses
              </div>
              <h1 className="max-w-4xl text-5xl font-black leading-tight md:text-7xl">
                We Build <span className="bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] bg-clip-text text-transparent">Scalable Web Apps, Systems & Digital Platforms</span> for Growing Businesses.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                From strategy to deployment, VertexIQ Systems designs and builds premium digital products that help businesses operate better, look stronger, and grow faster.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Book a Free Consultation
                </a>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book a Discovery Call
                </a>
              </div>

              <div className="mt-10 grid max-w-2xl grid-cols-1 gap-4 md:grid-cols-3">
                {stats.map(([title, value]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">{title}</p>
                    <p className="mt-2 text-sm font-semibold text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-300">
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Web Applications</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Business Systems</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Automation</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2">Consulting</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#6C4CF1]/25 to-[#2EA8FF]/20 blur-3xl" />
              <div className="relative rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] border border-white/10 bg-[#091126] p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-400">Featured Product Preview</p>
                      <h3 className="mt-1 text-2xl font-bold">Client Management Portal</h3>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-medium text-emerald-300">Premium Build</div>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl bg-white p-4 text-slate-900">
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Dashboard</p>
                      <div className="mt-4 space-y-3">
                        <div className="h-3 rounded-full bg-slate-200" />
                        <div className="h-3 w-4/5 rounded-full bg-slate-200" />
                        <div className="h-24 rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF]" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-slate-400">What We Deliver</p>
                        <p className="mt-2 text-lg font-semibold">Premium UX, scalable systems, polished brand presence.</p>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="text-sm text-slate-400">Project Investment</p>
                        <p className="mt-2 text-lg font-semibold">Projects typically start from $500+</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="services">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Services</p>
          <h2 className="mt-4 text-3xl font-black md:text-5xl">What VertexIQ Systems helps businesses build.</h2>
          <p className="mt-5 text-lg text-slate-300">
            We create polished digital products and systems that improve visibility, streamline operations, and help brands grow with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div key={service.title} className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
              <div className="mb-5 h-12 w-12 rounded-2xl bg-gradient-to-br from-[#6C4CF1]/90 to-[#2EA8FF]/90" />
              <h3 className="text-xl font-bold">{service.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{service.desc}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-400">
                {service.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Why VertexIQ</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">A premium digital partner focused on results, not just code.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                We combine business thinking, modern design, and clean engineering to deliver digital products that feel premium and perform with purpose.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Scalable solutions for growth',
                'Fast, clear project delivery',
                'Modern design and user experience',
                'Business-focused technical strategy',
              ].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-[#0a1124] p-6 text-slate-200">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="work">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Featured Work</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Selected product directions and premium project concepts.</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Your website should show business value, not just design. These examples present the kind of polished outcome clients can expect.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.name} className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#0a1124]">
              <div className="h-52 bg-[linear-gradient(135deg,rgba(108,76,241,0.9),rgba(46,168,255,0.85))]" />
              <div className="p-7">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{project.category}</p>
                <h3 className="mt-3 text-2xl font-bold">{project.name}</h3>
                <p className="mt-4 leading-7 text-slate-300">{project.summary}</p>
                <p className="mt-4 text-sm font-medium text-[#b8cfff]">Result: {project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Client Confidence</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">A premium experience clients can feel throughout the project.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.75rem] border border-white/10 bg-[#0a1124] p-8">
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="process">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Our Process</p>
            <h2 className="mt-4 text-3xl font-black md:text-5xl">Professional structure from concept to launch.</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
              We keep the process clear and intentional so your project feels organized, premium, and aligned with your business goals.
            </p>
          </div>
          <div className="space-y-5">
            {process.map((step, index) => (
              <div key={step.title} className="flex items-start gap-5 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#6C4CF1] to-[#2EA8FF] text-sm font-black">
                  0{index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="mt-2 text-slate-300">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24" id="contact">
        <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] to-[#0a1024] p-8 shadow-2xl shadow-[#091126]/50 md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Let’s Build</p>
              <h2 className="mt-4 text-3xl font-black md:text-5xl">Ready to launch something polished, scalable, and serious?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Reach out to VertexIQ Systems to discuss your website, app, dashboard, platform, or custom business system.
              </p>
              <div className="mt-8 space-y-4 text-slate-200">
                <p>
                  Email:{' '}
                  <a href={`mailto:${brand.email}`} className="text-[#b8cfff] hover:text-white">
                    {brand.email}
                  </a>
                </p>
                <p>
                  WhatsApp:{' '}
                  <a href={whatsappHref} target="_blank" rel="noreferrer" className="text-[#b8cfff] hover:text-white">
                    Chat with us directly
                  </a>
                </p>
                <p>
                  Discovery Call:{' '}
                  <a href={brand.calendlyUrl} target="_blank" rel="noreferrer" className="text-[#b8cfff] hover:text-white">
                    Book a time
                  </a>
                </p>
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-7">
              <div className="space-y-5">
                <input className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Your name" />
                <input className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Email address" />
                <input className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Project type" />
                <textarea className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Tell us about your project" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]"
                  >
                    Send via WhatsApp
                  </a>
                  <a
                    href={`mailto:${brand.email}`}
                    className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-center font-semibold transition hover:bg-white/10"
                  >
                    Send via Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#050816]">
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
