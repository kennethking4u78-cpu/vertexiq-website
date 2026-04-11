import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vertexiqsystems.com"),
  title: "VertexIQ Systems | High-Converting Websites & Smart Digital Systems",
  description:
    "VertexIQ Systems helps businesses in Ghana, UK and globally get more clients through high-converting websites and smart digital systems.",
  keywords: [
    "Web design Ghana",
    "Web development UK",
    "Business automation systems",
    "Custom web applications",
    "High-converting websites",
    "Website design Ghana",
    "Business growth systems",
    "Web applications UK",
  ],
  openGraph: {
    title: "VertexIQ Systems | High-Converting Websites & Smart Digital Systems",
    description:
      "We help businesses in Ghana, UK and worldwide get more clients with powerful websites and smart digital systems.",
    url: "https://www.vertexiqsystems.com",
    siteName: "VertexIQ Systems",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "VertexIQ Systems",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VertexIQ Systems | High-Converting Websites & Smart Digital Systems",
    description:
      "We help businesses get more clients with powerful websites and smart digital systems.",
    images: ["/hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#040714] text-white">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}