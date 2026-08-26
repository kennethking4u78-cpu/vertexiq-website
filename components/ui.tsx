import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Check } from "lucide-react";
import type { StatusTone } from "@/lib/content";

export function Container({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

export function ButtonLink({ href, children, variant = "primary" }: { href: string; children: ReactNode; variant?: "primary" | "secondary" | "quiet" }) {
  return <Link href={href} className={`button button-${variant}`}>{children}<ArrowRight aria-hidden="true" size={17} /></Link>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav aria-label="Breadcrumb" className="mb-8"><ol className="flex flex-wrap items-center gap-2 text-sm text-slate-400">{items.map((item, index) => <li key={item.label} className="flex items-center gap-2">{index > 0 && <span aria-hidden="true">/</span>}{item.href ? <Link className="hover:text-white" href={item.href}>{item.label}</Link> : <span aria-current="page" className="text-slate-200">{item.label}</span>}</li>)}</ol></nav>;
}

export function PageIntro({ eyebrow, title, description, breadcrumbs, actions }: { eyebrow: string; title: string; description: string; breadcrumbs?: { label: string; href?: string }[]; actions?: ReactNode }) {
  return <section className="hero-shell"><Container className="relative py-16 sm:py-20 lg:py-24">{breadcrumbs && <Breadcrumbs items={breadcrumbs} />}<div className="max-w-4xl"><Eyebrow>{eyebrow}</Eyebrow><h1 className="display-title mt-5">{title}</h1><p className="lead mt-6 max-w-3xl">{description}</p>{actions && <div className="mt-9 flex flex-wrap gap-3">{actions}</div>}</div></Container></section>;
}

export function SectionHeading({ eyebrow, title, description, align = "left" }: { eyebrow: string; title: string; description?: string; align?: "left" | "center" }) {
  return <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl`}><Eyebrow>{eyebrow}</Eyebrow><h2 className="section-title mt-4">{title}</h2>{description && <p className="lead mt-5">{description}</p>}</div>;
}

export function StatusBadge({ label, tone }: { label: string; tone: StatusTone }) {
  return <span className={`status status-${tone}`}>{label}</span>;
}

export function ProductVisual({ eyebrow = "Connected capability", title, description, items, compact = false }: { eyebrow?: string; title: string; description: string; items: string[]; compact?: boolean }) {
  return <div className={`relative overflow-hidden rounded-3xl border border-cyan-200/10 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,.1),transparent_35%),#08111e] ${compact ? "min-h-72 p-6 sm:p-8" : "min-h-96 p-7 sm:p-10"}`}><div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(148,163,184,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,.12)_1px,transparent_1px)] [background-size:32px_32px]" aria-hidden="true"/><div className="relative flex h-full flex-col"><p className="eyebrow">{eyebrow}</p><h2 className="mt-4 max-w-xl text-2xl font-semibold text-white sm:text-3xl">{title}</h2><p className="mt-4 max-w-xl leading-7 text-slate-400">{description}</p><ul className="mt-auto grid gap-3 pt-8 sm:grid-cols-2">{items.map(item=><li key={item} className="rounded-xl border border-white/8 bg-black/20 px-4 py-3 text-sm font-medium text-slate-200">{item}</li>)}</ul></div></div>;
}

export function Checklist({ items }: { items: string[] }) {
  return <ul className="grid gap-3">{items.map((item) => <li key={item} className="flex gap-3 text-slate-300"><span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-cyan-300/10 text-cyan-200"><Check aria-hidden="true" size={14}/></span><span>{item}</span></li>)}</ul>;
}

export function CardLink({ href, eyebrow, title, description, footer }: { href: string; eyebrow?: string; title: string; description: string; footer?: ReactNode }) {
  return <Link href={href} className="card group flex h-full flex-col"><div>{eyebrow && <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">{eyebrow}</p>}<h3 className="mt-3 text-xl font-semibold text-white group-hover:text-cyan-100">{title}</h3><p className="mt-4 leading-7 text-slate-400">{description}</p></div><div className="mt-auto pt-7 text-sm font-semibold text-cyan-200">{footer ?? <>Explore <ArrowRight className="ml-1 inline" aria-hidden="true" size={15}/></>}</div></Link>;
}

export function CTA({ title = "Let’s find the right technology move.", description = "Start with a focused review of your goals, workflows and current systems.", primaryHref = "/business-technology-review", primaryLabel = "Get your free technology review" }: { title?: string; description?: string; primaryHref?: string; primaryLabel?: string }) {
  return <section className="py-20 sm:py-24"><Container><div className="cta-panel"><Eyebrow>Start a useful conversation</Eyebrow><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl">{title}</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{description}</p><div className="mt-8 flex flex-wrap gap-3"><ButtonLink href={primaryHref}>{primaryLabel}</ButtonLink><ButtonLink href="/contact" variant="secondary">Contact VertexIQ</ButtonLink></div></div></Container></section>;
}
