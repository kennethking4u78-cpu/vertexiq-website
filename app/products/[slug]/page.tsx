import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { productById, products } from "@/lib/content";
import { createMetadata } from "@/lib/seo";
import { ProductPage } from "@/components/ContentTemplates";
export const dynamicParams=false;
export function generateStaticParams(){return products.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const item=productById(slug);return item?createMetadata(slug==="motix"?"MOTIX™ Garage Management Software":item.name,item.summary,`/products/${slug}`):{};}
export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const item=productById(slug);if(!item)notFound();return <ProductPage product={item}/>;}
