import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import MotixLiveWorkshopDemo from "@/components/MotixLiveWorkshopDemo";
import MotixDemoNav from "@/components/MotixDemoNav";

export const metadata: Metadata = {
  title: "Live Workshop Demo | MOTIX™",
  description: "A fictional-data demonstration of the MOTIX Live Workshop workflow.",
  robots: { index: false, follow: false },
};

export default function MotixWorkshopDemoPage() {
  return <div className="min-h-screen w-full max-w-[100vw] overflow-x-hidden bg-[#02050a] px-3 py-6 sm:px-6 lg:px-8"><div className="mx-auto w-full min-w-0 max-w-[1600px]"><MotixDemoNav active="workshop"/><div className="mb-5 flex min-w-0 flex-wrap items-center justify-between gap-3"><div className="min-w-0"><Link href="/products/motix#live-workshop" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-cyan-200"><ArrowLeft aria-hidden="true" size={16}/>Back to MOTIX</Link><h1 className="mt-2 max-w-full text-2xl font-bold leading-tight text-white">MOTIX™ Live Workshop demonstration</h1></div><p className="rounded-full border border-white/10 bg-white/[.03] px-3 py-2 text-xs text-slate-400">Interactive Product Demo</p></div><MotixLiveWorkshopDemo mode="standalone"/></div></div>;
}
