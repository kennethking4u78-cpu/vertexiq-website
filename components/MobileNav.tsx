"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { isCurrentPath, primaryNavigation } from "@/lib/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setOpen(false); triggerRef.current?.focus(); }
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(dialogRef.current.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
        const first = focusable[0]; const last = focusable.at(-1);
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return <div className="lg:hidden"><button ref={triggerRef} type="button" className="icon-button" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><Menu aria-hidden="true"/></button>{open && <div ref={dialogRef} className="fixed inset-0 z-[80] overflow-y-auto bg-[#050914] p-5" id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Main navigation"><div className="mx-auto flex min-h-full max-w-lg flex-col"><div className="flex items-center justify-between border-b border-white/10 pb-5"><span className="font-semibold tracking-[0.16em] text-white">VERTEXIQ</span><button ref={closeRef} type="button" className="icon-button" aria-label="Close navigation" onClick={() => { setOpen(false); triggerRef.current?.focus(); }}><X aria-hidden="true"/></button></div><nav className="mt-6 grid gap-1" aria-label="Mobile navigation">{primaryNavigation.map((item) => <Link onClick={() => setOpen(false)} key={item.href} href={item.href} aria-current={isCurrentPath(pathname, item.href) ? "page" : undefined} className="rounded-xl px-4 py-3.5 text-lg font-medium text-slate-200 hover:bg-white/5 aria-[current=page]:bg-cyan-300/10 aria-[current=page]:text-cyan-100">{item.label}</Link>)}</nav><div className="mt-auto grid gap-3 border-t border-white/10 pt-6"><Link onClick={() => setOpen(false)} href="/business-technology-review" className="button button-primary justify-center">Free technology review</Link><Link onClick={() => setOpen(false)} href="/contact" className="button button-secondary justify-center">Contact</Link></div></div></div>}</div>;
}
