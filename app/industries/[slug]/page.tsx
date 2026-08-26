import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { industries, industryBySlug } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { IndustryPage } from "@/components/ContentTemplates";
export const dynamicParams=false;
export function generateStaticParams(){return industries.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=industryBySlug(slug);return item?createMetadata(item.name,item.summary,`/industries/${slug}`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=industryBySlug(slug);if(!item)notFound();return <IndustryPage industry={item}/>;}
