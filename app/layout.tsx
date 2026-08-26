import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { site } from "@/lib/content";
import HashScrollHandler from "@/components/HashScrollHandler";

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: "VertexIQ Systems | Technology That Helps Businesses Grow", template: "%s | VertexIQ Systems" },
  description:
    "Websites, business systems, software platforms, mobile apps and AI automation designed around how businesses actually work.",
  openGraph: {
    title: "VertexIQ Systems | Technology That Helps Businesses Grow",
    description:
      "Websites, business systems and software platforms designed around how businesses actually work.",
    url: "https://www.vertexiqsystems.com",
    siteName: "VertexIQ Systems",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "VertexIQ Systems — technology that helps businesses grow and run better",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexIQ Systems | Technology That Helps Businesses Grow",
    description:
      "Websites, business systems and software platforms designed around how businesses actually work.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.domain,
    email: site.email,
    description: "A product-led technology and software engineering company building websites, business systems and software platforms.",
  };
  return (
    <html lang="en-GB">
      <body className="min-h-screen bg-[#040714] text-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }} />
        <a href="#main-content" className="sr-only z-[100] rounded-lg bg-white px-4 py-3 text-slate-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4">Skip to main content</a>
        <Nav />
        <HashScrollHandler />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
