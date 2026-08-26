import Link from "next/link";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#060b16]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300" aria-label="VertexIQ Systems home">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-cyan-200/20 bg-cyan-300/10">
            <span className="text-lg font-bold text-cyan-100">V</span>
          </div>
          <div>
            <p className="text-sm font-bold tracking-[0.18em] text-white">VERTEXIQ</p>
            <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">Systems</p>
          </div>
        </Link>

        <DesktopNav />

        <div className="flex items-center gap-3"><Link href="/contact" className="hidden text-sm font-semibold text-slate-200 hover:text-white xl:inline-flex">Contact</Link><Link href="/business-technology-review" className="button button-primary hidden xl:inline-flex">Free technology review</Link><MobileNav /></div>
      </div>
    </header>
  );
}
