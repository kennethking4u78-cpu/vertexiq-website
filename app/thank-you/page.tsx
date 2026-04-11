import Link from "next/link";
import { links, site } from "@/components/site-data";

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-[2.4rem] border border-emerald-400/20 bg-[linear-gradient(135deg,#07111f_0%,#0d1832_45%,#0b1020_100%)] shadow-2xl shadow-[#091126]/50">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(46,168,255,0.12),transparent_30%)]" />
        <div className="absolute right-8 top-8 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-300">
          Request Received
        </div>

        <div className="relative grid gap-10 px-8 py-10 md:grid-cols-[1.1fr_0.9fr] md:px-12 md:py-14">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-300">Thank You</p>
            <h1 className="mt-4 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
              Thank you! Your request has been received.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We will contact you shortly.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-200">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
              Submission confirmed
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Submit Another Request
              </Link>
              <Link
                href="/"
                className="rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Return Home
              </Link>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#b8cfff]">Direct Contact</p>
            <h2 className="mt-4 text-2xl font-bold">Need a faster response?</h2>
            <p className="mt-4 leading-7 text-slate-300">
              You can also reach us directly through WhatsApp or email.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={links.ukWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp UK — +44 7376 174981
              </a>
              <a
                href={links.ghWhatsapp}
                target="_blank"
                rel="noreferrer"
                className="block rounded-2xl border border-white/10 bg-white/5 px-5 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                WhatsApp Ghana — +233 534 177 839
              </a>
              <a
                href={`mailto:${site.email}`}
                className="block rounded-2xl bg-gradient-to-r from-emerald-400 via-[#6C4CF1] to-[#2EA8FF] px-5 py-4 font-semibold text-white shadow-xl shadow-emerald-400/10"
              >
                Email — {site.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
