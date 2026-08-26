import type { Metadata } from "next";
import { CalendarDays, CheckCircle2, Mail, MessageCircle } from "lucide-react";
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Confirmation after contacting VertexIQ Systems.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/thank-you" },
};

const nextSteps = [
  ["We review", "We read the business context, goals and workflow you shared."],
  ["We assess", "We identify the most useful website, system or product conversation."],
  ["We reply", "We contact you with a practical next step or suitable booking option."],
] as const;

const directContacts = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, icon: Mail },
  { label: "WhatsApp UK", value: "+44 7376 174981", href: site.ukWhatsapp, icon: MessageCircle },
  { label: "WhatsApp Ghana", value: "+233 534 177 839", href: site.ghWhatsapp, icon: MessageCircle },
  { label: "Book a call", value: "Free strategy consultation", href: site.calendlyUrl, icon: CalendarDays },
] as const;

export default function ThankYouPage() {
  return <>
    <section className="hero-shell"><Container className="relative py-16 sm:py-20 lg:py-24"><div className="max-w-4xl"><div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-200"><CheckCircle2 aria-hidden="true" size={17}/>Request received</div><div className="mt-7"><Eyebrow>Thank you</Eyebrow></div><h1 className="display-title mt-5">Your request is in.</h1><p className="lead mt-6 max-w-3xl">VertexIQ will review the context you shared and respond with an appropriate next step.</p><div className="mt-9 flex flex-wrap gap-3"><ButtonLink href="/">Return home</ButtonLink><ButtonLink href="/products" variant="secondary">Explore our products</ButtonLink></div></div></Container></section>
    <section className="py-16 sm:py-20"><Container><div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]"><div><Eyebrow>What happens next</Eyebrow><div className="mt-6 grid gap-4 sm:grid-cols-3">{nextSteps.map(([title,description],index)=><article key={title} className="card"><p className="text-xs font-bold uppercase tracking-[.16em] text-cyan-200">Step {index+1}</p><h2 className="mt-4 text-xl font-semibold text-white">{title}</h2><p className="mt-3 text-sm leading-6 text-slate-400">{description}</p></article>)}</div><p className="mt-6 text-sm leading-6 text-slate-500">Please do not send passwords, payment details or sensitive operational information by email or messaging.</p></div><aside className="card" aria-label="Direct contact options"><Eyebrow>Direct contact</Eyebrow><h2 className="mt-4 text-2xl font-semibold text-white">Need to add useful context?</h2><p className="mt-3 leading-7 text-slate-400">Use one of the established VertexIQ contact channels.</p><div className="mt-6 grid gap-3">{directContacts.map(item=>{const Icon=item.icon;const external=item.href.startsWith("http");return <a key={item.label} href={item.href} target={external?"_blank":undefined} rel={external?"noreferrer":undefined} className="flex min-h-16 items-center gap-4 rounded-xl border border-white/8 p-4 hover:border-cyan-200/20"><span className="grid size-10 shrink-0 place-items-center rounded-lg bg-cyan-300/10 text-cyan-200"><Icon aria-hidden="true" size={18}/></span><span className="min-w-0"><span className="block text-xs text-slate-500">{item.label}</span><span className="mt-1 block break-words text-sm font-semibold text-white">{item.value}</span></span></a>})}</div></aside></div></Container></section>
  </>;
}
