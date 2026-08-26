import Link from "next/link";
import { industries, products, site, solutions } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040812]">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div><p className="font-bold tracking-[0.16em] text-white">VERTEXIQ SYSTEMS</p><p className="mt-4 max-w-sm leading-7 text-slate-400">Websites, business systems and software platforms designed around how businesses actually work.</p><p className="mt-5 text-sm text-slate-500">Ghana · United Kingdom · Global delivery</p></div>
          <FooterGroup title="Solutions" items={solutions.slice(0, 4).map((x) => ({ href: `/solutions/${x.slug}`, label: x.name }))}/>
          <FooterGroup title="Technology" items={products.map((x) => ({ href: `/products/${x.slug}`, label: x.name }))}/>
          <FooterGroup title="Company" items={[{href:"/about",label:"About"},{href:"/our-work",label:"Our Work"},{href:"/how-we-work",label:"How We Work"},{href:"/contact",label:"Contact"},{href:"/privacy",label:"Privacy"}]}/>
        </div>
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between"><p>© {new Date().getFullYear()} {site.name}.</p><div className="flex gap-5"><Link href="/locations">Locations</Link><Link href="/industries">{industries.length} industries</Link><Link href="/insights">Insights</Link></div></div>
      </div>
    </footer>
  );
}

function FooterGroup({ title, items }: { title: string; items: { href: string; label: string }[] }) { return <div><p className="text-sm font-semibold text-white">{title}</p><ul className="mt-4 grid gap-3 text-sm text-slate-400">{items.map((item) => <li key={item.href}><Link className="hover:text-white" href={item.href}>{item.label}</Link></li>)}</ul></div>; }
