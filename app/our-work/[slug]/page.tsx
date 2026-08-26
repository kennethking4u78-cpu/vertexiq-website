import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { implementationById, implementations } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { ImplementationPage } from "@/components/ContentTemplates";
export const dynamicParams=false;
export function generateStaticParams(){return implementations.map(({slug})=>({slug}));}
function getBySlug(slug:string){return implementations.find(x=>x.slug===slug) ?? implementationById(slug);}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=getBySlug(slug);return item?createMetadata(item.client,item.summary,`/our-work/${slug}`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=getBySlug(slug);if(!item)notFound();return <ImplementationPage implementation={item}/>;}
