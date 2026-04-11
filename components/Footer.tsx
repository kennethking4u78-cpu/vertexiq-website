import Link from "next/link";
import { site } from "./site-data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040714]">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">{site.name}</p>
          <p className="mt-1">{site.tagline}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          <Link href="/" className="hover:text-white">Home</Link>
          <Link href="/services" className="hover:text-white">Services</Link>
          <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
          <Link href="/why-us" className="hover:text-white">Why Us</Link>
          <Link href="/locations" className="hover:text-white">Locations</Link>
          <Link href="/contact" className="hover:text-white">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
