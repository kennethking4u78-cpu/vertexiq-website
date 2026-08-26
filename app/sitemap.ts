import type { MetadataRoute } from "next";
import { industries, implementations, products, site, solutions } from "@/lib/content";
const staticPaths=["","/solutions","/industries","/products","/our-work","/about","/why-us","/how-we-work","/contact","/business-technology-review","/insights","/privacy","/services","/case-studies","/locations"];
export default function sitemap():MetadataRoute.Sitemap{
  const paths=[...staticPaths,...solutions.map(x=>`/solutions/${x.slug}`),...industries.map(x=>`/industries/${x.slug}`),...products.map(x=>`/products/${x.slug}`),...implementations.map(x=>`/our-work/${x.slug}`)];
  return paths.map((path,index)=>({url:`${site.domain}${path}`,changeFrequency:path===""?"weekly":"monthly",priority:index===0?1:path.split("/").length<=2?.8:.7}));
}
