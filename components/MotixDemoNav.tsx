import Link from "next/link";

const items=[
  {id:"garage",label:"Sample Garage",href:"/products/motix/demo/garage"},
  {id:"bookings",label:"Bookings / Front Desk",href:"/products/motix/demo/bookings"},
  {id:"workshop",label:"Live Workshop",href:"/products/motix/demo/workshop"},
  {id:"technician",label:"Technician App",href:"/products/motix/demo/technician"},
] as const;

export default function MotixDemoNav({active}:{active:(typeof items)[number]["id"]}){
  return <nav aria-label="MOTIX product demonstrations" className="mb-5 overflow-x-auto rounded-xl border border-white/10 bg-[#050a13] p-1.5"><div className="flex min-w-max items-center gap-1"><Link href="/products/motix" className="inline-flex min-h-10 items-center rounded-lg px-3 text-xs font-bold text-cyan-200">Product overview</Link><span className="mx-1 h-5 w-px bg-white/10" aria-hidden="true"/>{items.map(item=><Link key={item.id} href={item.href} aria-current={active===item.id?"page":undefined} className={`inline-flex min-h-10 items-center rounded-lg px-3 text-xs font-semibold ${active===item.id?"bg-blue-600 text-white":"text-slate-400 hover:bg-white/[.04] hover:text-white"}`}>{item.label}</Link>)}</div></nav>;
}
