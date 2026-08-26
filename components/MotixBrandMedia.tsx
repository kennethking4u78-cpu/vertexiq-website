import Image from "next/image";

type Props = { compact?: boolean };

export default function MotixBrandMedia({ compact=false }: Props) {
  return <figure className={`motix-brand-media ${compact?"motix-brand-media-compact":""}`}><Image src="/products/motix/motix-logo-master.png" alt="Official MOTIX logo with the tagline Manage. Service. Grow." width={1536} height={1024} sizes={compact?"(max-width: 1024px) 100vw, 50vw":"(max-width: 1024px) 100vw, 65vw"} className="h-full w-full object-contain" priority={!compact}/><figcaption className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[.14em] text-slate-300">MOTIX™ by VertexIQ Systems</figcaption></figure>;
}
