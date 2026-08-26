import type { Metadata } from "next";
import MotixDemoNav from "@/components/MotixDemoNav";
import MotixGarageDemo from "@/components/MotixGarageDemo";

export const metadata:Metadata={title:"Connected Garage Website Demo | MOTIX™",description:"Interactive demonstration of a garage website and booking request connected conceptually to MOTIX reception.",robots:{index:false,follow:false}};
export default function Page(){return <div className="min-h-screen overflow-x-hidden bg-[#02050a] px-3 py-6 sm:px-6"><div className="mx-auto max-w-[1500px]"><MotixDemoNav active="garage"/><h1 className="sr-only">MOTIX connected garage website demonstration</h1><MotixGarageDemo/></div></div>}
