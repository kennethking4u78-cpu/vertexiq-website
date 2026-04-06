export default function VertexIQSystemsWebsite() {
  const brand = {
    name: 'VertexIQ Systems',
    tagline: 'From Idea to Scalable Digital Products',
    email: 'info@vertexiqsystems.com',
    ukWhatsappNumber: '447376174981',
    ghWhatsappNumber: '233534177839',
    calendlyUrl: 'https://calendly.com/kennethking4u78/30min',
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
      desc: 'Premium websites, landing pages, and digital platforms designed to position your brand, build trust, and convert visitors into inquiries.',
      bullets: ['High-converting pages', 'Responsive UX', 'Performance-focused builds'],
    },
    {
      title: 'Business Systems',
      desc: 'Operational dashboards, internal tools, portals, and smart systems tailored to how your business works behind the scenes.',
      bullets: ['Custom workflows', 'Admin portals', 'Scalable architecture'],
    },
    {
      title: 'App Development',
      desc: 'Modern mobile and web applications built for usability, product quality, and long-term growth.',
      bullets: ['Cross-platform products', 'Clean UI', 'Launch-ready delivery'],
    },
    {
      title: 'Automation & Consulting',
      desc: 'Technical guidance, integrations, and automation that help businesses reduce manual work and move faster.',
      bullets: ['API integrations', 'Process automation', 'Product strategy'],
    },
  ];

  const audiences = [
    {
      title: 'Startups',
      text: 'Founders who need a strong MVP, launch-ready product, or a premium digital presence to move fast and attract opportunities.',
    },
    {
      title: 'Growing Businesses',
      text: 'Companies looking to upgrade their website, improve customer experience, or build systems that support scale.',
    },
    {
      title: 'Teams & Operators',
      text: 'Businesses that need dashboards, portals, or internal tools to improve visibility, speed, and operational efficiency.',
    },
  ];

  const outcomes = [
    'Stronger online credibility',
    'Better client conversion',
    'Less manual admin work',
    'Clearer business operations',
    'More scalable digital infrastructure',
    'A premium brand impression',
  ];

  const projects = [
    {
      name: 'Operations Intelligence Dashboard',
      category: 'Custom System',
      summary: 'A premium dashboard concept designed to centralize reporting, team performance, and executive visibility in one place.',
      result: 'Improved clarity, faster reporting, and stronger operational oversight.',
    },
    {
      name: 'Premium Brand Website',
      category: 'Web Experience',
      summary: 'A high-trust digital presence crafted to improve perception, clarity, and lead conversion for growth-focused brands.',
      result: 'Sharper positioning and a stronger first impression for potential clients.',
    },
    {
      name: 'Booking & Service Platform',
      category: 'Digital Product',
      summary: 'A customer-facing service platform built to simplify inquiries, bookings, and engagement from first contact to delivery.',
      result: 'A smoother journey from inquiry to completed transaction.',
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

  const testimonials = [
    {
      quote:
        'VertexIQ Systems approached the project with structure, clarity, and a premium level of execution. The result felt far above a typical freelancer build.',
      name: 'Business Client Review',
    },
    {
      quote:
        'The process was clear, strategic, and focused on outcomes. It felt like working with a serious digital product team.',
      name: 'Project Experience Review',
    },
  ];

  return (
    <div className="min-h-screen bg-[#040714] pb-24 text-white md:pb-0">
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
              <a href="#who-we-help" className="transition hover:text-white">Who We Help</a>
              <a href="#work" className="transition hover:text-white">Work</a>
              <a href="#process" className="transition hover:text-white">Process</a>
              <a href="#start-project" className="transition hover:text-white">Start Project</a>
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
                  href="#start-project"
                  className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-7 py-4 text-sm font-semibold shadow-xl shadow-[#6C4CF1]/25 transition hover:scale-[1.02]"
                >
                  Start Your Project
                </a>
                <a
                  href={brand.calendlyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl border border-white/15 bg-white/5 px-7 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book Free Strategy Call
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

      <section className="border-y border-white/10 bg-white/[0.03] py-20" id="who-we-help">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Who We Help</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Built for founders, growing businesses, and teams that need serious digital execution.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-300">
              Whether you need a launch-ready platform, a stronger business website, or internal tools that improve operations, VertexIQ Systems is built to deliver premium outcomes.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {audiences.map((item) => (
              <div key={item.title} className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-7 shadow-lg shadow-black/20">
                <h3 className="text-2xl font-bold">{item.title}</h3>
                <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Outcomes</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">What your business gains from the right digital product.</h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
              We do not just ship code. We help businesses improve perception, streamline operations, and create stronger digital experiences that support growth.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {outcomes.map((item) => (
              <div key={item} className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5 text-slate-200">
                {item}
              </div>
            ))}
          </div>
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
                <p className="mt-4 text-sm font-medium text-[#b8cfff]">Result: {project.result}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Testimonials</p>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">A professional experience clients can feel throughout the project.</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <div key={item.name} className="rounded-[1.8rem] border border-white/10 bg-[#0a1124] p-8 shadow-lg shadow-black/20">
                <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
                <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="process">
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
                Your request has been received successfully.
              </h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Thank you for reaching out to VertexIQ Systems. This confirmation page means your project request has gone through, and we will review it carefully before responding with the next steps.
              </p>

              <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
                <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
                Submission confirmed
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Step 1</p>
                  <p className="mt-2 font-semibold text-white">Check your email</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Look out for your confirmation and any follow-up details from us.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Step 2</p>
                  <p className="mt-2 font-semibold text-white">Prepare your goals</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Be ready with your priorities, timeline, and what success looks like for your project.</p>
                </div>
                <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
                  <p className="text-sm text-slate-400">Step 3</p>
                  <p className="mt-2 font-semibold text-white">Need immediate support?</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">Use the direct contact options if you want to add extra context now.</p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#start-project"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Submit Another Request
                </a>
                <a
                  href="#services"
                  className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Explore Services
                </a>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">Direct Contact</p>
              <h3 className="mt-4 text-2xl font-bold">Need a faster response?</h3>
              <p className="mt-4 leading-7 text-slate-300">
                If your project is urgent or you want to share additional details before we reply, use any of the options below.
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

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-[#050816]/60 p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">Expected response</p>
                <p className="mt-3 text-lg font-semibold text-white">Usually within 1 business day</p>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  Serious and time-sensitive project inquiries can also be pushed faster through WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20" id="start-project">
        <div className="overflow-hidden rounded-[2.2rem] border border-white/10 bg-gradient-to-br from-[#0a1f44] via-[#0a122d] to-[#060b1b] shadow-2xl shadow-[#091126]/50">
          <div className="grid gap-10 px-8 py-10 md:grid-cols-[1fr_0.95fr] md:px-12 md:py-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-[#8db4ff]">Start Project</p>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-5xl">Ready to turn your idea into a serious digital product?</h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
                Submit your project brief and we will review your goals, recommend the right direction, and respond with the next steps.
              </p>

              <div className="mt-8 rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">What happens next</p>
                <div className="mt-5 space-y-4 text-slate-300">
                  <p>1. We review your inquiry and assess the best direction.</p>
                  <p>2. We respond with recommendations and the next steps.</p>
                  <p>3. We move to WhatsApp or a consultation call if the project is a fit.</p>
                </div>
              </div>

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
              <form action="https://formsubmit.co/b7ead2955da23d14f0e6002b8fbaa5e9" method="POST" className="space-y-5">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="New VertexIQ Lead" />
                <input type="hidden" name="_next" value="https://www.vertexiqsystems.com/#thank-you" />

                <input name="name" required className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Your name" />
                <input name="email" type="email" required className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Email address" />
                <input name="business" className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Business name" />
                <select name="service" className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-slate-300 outline-none">
                  <option value="">What do you need built?</option>
                  <option>Website / Landing Page</option>
                  <option>Business System / Dashboard</option>
                  <option>Web App / SaaS</option>
                  <option>Mobile App</option>
                  <option>Automation / Consulting</option>
                </select>
                <div className="grid gap-4 md:grid-cols-2">
                  <select name="budget" className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-slate-300 outline-none">
                    <option value="">Budget range</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $3,000</option>
                    <option>$3,000 - $5,000</option>
                    <option>$5,000+</option>
                  </select>
                  <select name="timeline" className="w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 text-slate-300 outline-none">
                    <option value="">Timeline</option>
                    <option>Immediately</option>
                    <option>Within 2 weeks</option>
                    <option>Within 1 month</option>
                    <option>Just exploring</option>
                  </select>
                </div>
                <textarea name="message" required className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-[#050816] px-5 py-4 outline-none placeholder:text-slate-500" placeholder="Tell us about your project, goals, and what success looks like for you" />

                <button type="submit" className="w-full rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-6 py-4 text-center font-semibold shadow-xl shadow-[#6C4CF1]/20 transition hover:scale-[1.01]">
                  Send Project Brief
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
            <a href="#who-we-help" className="hover:text-white">Who We Help</a>
            <a href="#work" className="hover:text-white">Work</a>
            <a href="#process" className="hover:text-white">Process</a>
            <a href="#start-project" className="hover:text-white">Start Project</a>
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
            WhatsApp UK
          </a>
          <a
            href="#start-project"
            className="rounded-2xl bg-gradient-to-r from-[#6C4CF1] to-[#2EA8FF] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Start Project
          </a>
        </div>
      </div>
    </div>
  );
}