import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { solutionBySlug, solutions } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { SolutionPage } from "@/components/ContentTemplates";
export const dynamicParams = false;
export function generateStaticParams(){return solutions.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=solutionBySlug(slug);return item?createMetadata(item.name,item.summary,`/solutions/${slug}`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=solutionBySlug(slug);if(!item)notFound();return <SolutionPage solution={item}/>;}
