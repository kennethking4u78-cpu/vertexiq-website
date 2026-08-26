import type { Metadata } from "next";
import { implementations, productById } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { ButtonLink, CardLink, Container, PageIntro } from "@/components/ui";
export const metadata:Metadata=createMetadata("Case Studies","The existing VertexIQ case-studies route, preserved and connected to verified client implementations.","/case-studies");
export default function Page(){return <><PageIntro eyebrow="Case studies · Existing route preserved" title="Verified client implementations." description="The previous anonymous claims have been retired from this page. Explore real VertexIQ client work with clear connections to the relevant product." actions={<ButtonLink href="/our-work">Visit Our Work</ButtonLink>}/><section className="py-20"><Container><div className="grid gap-5 md:grid-cols-2">{implementations.map(x=>{const p=productById(x.productId)!;return <CardLink key={x.id} href={`/our-work/${x.slug}`} eyebrow={`Powered by ${p.name}`} title={x.client} description={x.summary}/>})}</div></Container></section></>}
