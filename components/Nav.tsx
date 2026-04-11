import Link from "next/link";
import { site } from "./site-data";

const links = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/why-us", label: "Why Us" },
  { href: "/locations", label: "Locations" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07101f]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#6C4CF1] via-[#4F46E5] to-[#2EA8FF] shadow-lg shadow-[#6C4CF1]/20">
            <span className="text-xl font-black text-white">V</span>
          </div>
          <div>
            <p className="text-lg font-bold tracking-[0.18em] text-white">VERTEXIQ</p>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-300">Systems</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 text-sm text-slate-300 lg:flex">
          {links.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.calendlyUrl}
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-2xl border border-white/10 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/15 md:inline-flex"
        >
          Book Free Strategy Call
        </a>
      </div>
    </header>
  );
}
