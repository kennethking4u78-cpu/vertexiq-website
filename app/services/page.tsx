import type { Metadata } from "next";
import { solutions } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { ButtonLink, CardLink, Container, PageIntro } from "@/components/ui";
export const metadata:Metadata=createMetadata("Services","The existing VertexIQ services route, now connected to the expanded Website 2.0 Solutions architecture.","/services");
export default function Page(){return <><PageIntro eyebrow="Services · Existing route preserved" title="Explore VertexIQ Solutions." description="Our service capability now spans digital growth, business systems, custom software, SaaS, mobile applications, automation and integration." actions={<ButtonLink href="/solutions">View the Solutions index</ButtonLink>}/><section className="py-20"><Container><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{solutions.map(x=><CardLink key={x.slug} href={`/solutions/${x.slug}`} title={x.name} description={x.summary}/>)}</div></Container></section></>}
