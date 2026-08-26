import type { Metadata } from "next";
import { industries } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { CardLink, Container, CTA, PageIntro, SectionHeading } from "@/components/ui";
export const metadata: Metadata=createMetadata("Industries","Technology experience across automotive, care, field services, healthcare, professional services, education and growing businesses.","/industries");
export default function Page(){return <><PageIntro eyebrow="Industries" title="Technology that understands the operation." description="Every sector has its own pressures, language and working patterns. We connect our engineering capability to the realities of each environment."/><section className="py-20"><Container><SectionHeading eyebrow="Sector experience" title="Find the technology path for your industry"/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{industries.map(x=><CardLink key={x.slug} href={`/industries/${x.slug}`} eyebrow="Industry" title={x.name} description={x.summary}/>)}</div></Container></section><CTA/></>}
