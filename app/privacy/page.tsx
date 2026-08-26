import type { Metadata } from "next";
import Link from "next/link";
import { Container, PageIntro } from "@/components/ui";
import { site } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
export const metadata:Metadata=createMetadata("Privacy Information","Privacy information for visitors and people who contact VertexIQ Systems through this website.","/privacy");
const sections=[
  {title:"Information you provide",text:"When you submit a contact or business technology review form, you may provide your name, company, email address, telephone number, sector, area of interest and a message about your enquiry."},
  {title:"How the current form works",text:"The website currently sends form submissions through FormSubmit, a third-party form-delivery service, so that the enquiry can be delivered to VertexIQ Systems. Email is currently used to receive and respond to these enquiries."},
  {title:"Why we use the information",text:"The information is used to review your enquiry, respond to you, understand the service or product you are interested in and manage the resulting business conversation."},
  {title:"What not to submit",text:"Please do not submit passwords, payment-card details, patient information, special-category personal data or confidential operational information through the public forms."},
  {title:"Retention and requests",text:"Enquiry information may remain in the email systems used to manage the conversation. If you want to ask about information submitted through this website, request correction or request deletion, contact VertexIQ using the address below. A request may require identity verification."},
  {title:"Cookies and analytics",text:"This website does not currently use analytics or advertising tracking. Essential platform or third-party service behaviour may still apply when you follow an external link."},
  {title:"Future changes",text:"This information will be reviewed if the website introduces a new enquiry-management process, analytics technology or another material change to how visitor information is handled."},
];
export default function Page(){return <><PageIntro eyebrow="Privacy" title="Privacy information for this website." description="A plain-language foundation describing the current public enquiry flow. It is not a substitute for advice tailored to VertexIQ's complete business processing activities."/><section className="py-20"><Container className="max-w-4xl"><div className="grid gap-9">{sections.map(x=><section key={x.title}><h2 className="text-xl font-semibold text-white">{x.title}</h2><p className="mt-3 leading-8 text-slate-400">{x.text}</p></section>)}<section><h2 className="text-xl font-semibold text-white">Contact</h2><p className="mt-3 leading-8 text-slate-400">Email <a className="text-cyan-200 underline underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a> or use the <Link className="text-cyan-200 underline underline-offset-4" href="/contact">contact page</Link>.</p></section><p className="border-t border-white/10 pt-6 text-sm text-slate-500">Last reviewed: 25 August 2026.</p></div></Container></section></>}
