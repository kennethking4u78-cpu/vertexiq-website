"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function HashScrollHandler(){
  const pathname=usePathname();
  useEffect(()=>{
    const hash=window.location.hash.slice(1);
    if(!hash)return;
    const scrollToTarget=()=>document.getElementById(decodeURIComponent(hash))?.scrollIntoView({block:"start"});
    const frame=requestAnimationFrame(scrollToTarget);
    const timer=window.setTimeout(scrollToTarget,200);
    return()=>{cancelAnimationFrame(frame);window.clearTimeout(timer);};
  },[pathname]);
  return null;
}
