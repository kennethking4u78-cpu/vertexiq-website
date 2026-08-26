"use client";

import { useEffect, useRef, useState } from "react";

export default function FormSubmitButton({ label }: { label: string }) {
  const [submitting,setSubmitting]=useState(false);
  const ref=useRef<HTMLButtonElement>(null);
  useEffect(()=>{const form=ref.current?.form;if(!form)return;const handle=()=>setSubmitting(true);form.addEventListener("submit",handle);return()=>form.removeEventListener("submit",handle);},[]);
  return <button ref={ref} type="submit" disabled={submitting} aria-disabled={submitting} className="button button-primary w-full justify-center disabled:cursor-wait disabled:opacity-70 sm:w-fit">{submitting?"Sending…":label}</button>;
}
