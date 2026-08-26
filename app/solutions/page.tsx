import type { Metadata } from "next";
import { solutions } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { CardLink, Container, CTA, PageIntro, SectionHeading } from "@/components/ui";
export const metadata: Metadata = createMetadata("Business Technology Solutions", "Websites, business systems, custom software, SaaS, mobile apps, AI automation and integrations built around real business workflows.", "/solutions");
export default function SolutionsIndex(){return <><PageIntro eyebrow="Solutions" title="Technology built around the business problem." description="From customer acquisition to connected operations, VertexIQ designs and engineers practical technology that supports how your business needs to work."/><section className="py-20"><Container><SectionHeading eyebrow="Seven connected capabilities" title="Start with the outcome you need"/><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">{solutions.map(x=><CardLink key={x.slug} href={`/solutions/${x.slug}`} eyebrow={x.eyebrow} title={x.name} description={x.summary}/>)}</div></Container></section><CTA/></>}
