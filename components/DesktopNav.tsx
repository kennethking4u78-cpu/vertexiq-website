"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isCurrentPath, primaryNavigation } from "@/lib/navigation";

export default function DesktopNav() {
  const pathname = usePathname();
  return <nav className="hidden items-center gap-5 text-sm text-slate-300 lg:flex" aria-label="Main navigation">{primaryNavigation.map((item) => <Link key={item.href} href={item.href} aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined} className="rounded-md border-b border-transparent py-2 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-300 aria-[current=page]:border-cyan-300/60 aria-[current=page]:text-white">{item.label}</Link>)}</nav>;
}
