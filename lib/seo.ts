import type { Metadata } from "next";
import { site } from "./content";

export function createMetadata(title: string, description: string, path: string): Metadata {
  const url = path === "/" ? site.domain : `${site.domain}${path}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url, siteName: site.name, type: "website", images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name} technology and software engineering` }] },
    twitter: { card: "summary_large_image", title, description, images: ["/opengraph-image"] },
  };
}
