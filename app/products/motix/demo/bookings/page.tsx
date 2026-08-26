import type { Metadata } from "next";
import MotixDemoNav from "@/components/MotixDemoNav";
import MotixBookingsDemo from "@/components/MotixBookingsDemo";
import { Suspense } from "react";

export const metadata:Metadata={title:"Bookings and Front Desk Demo | MOTIX™",description:"Interactive fictional-data demonstration of MOTIX booking review and reception workflow.",robots:{index:false,follow:false}};
export default function Page(){return <div className="min-h-screen overflow-x-hidden bg-[#02050a] px-3 py-6 sm:px-6"><div className="mx-auto max-w-[1500px]"><MotixDemoNav active="bookings"/><h1 className="mb-5 text-2xl font-bold text-white">MOTIX™ Front Desk demonstration</h1><Suspense fallback={<div className="min-h-96 rounded-2xl border border-white/10 bg-[#050a13]" aria-label="Loading MOTIX bookings demonstration"/>}><MotixBookingsDemo/></Suspense></div></div>}
