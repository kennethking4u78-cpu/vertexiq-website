"use client";

import { useMemo, useState } from "react";
import { Check, ChevronDown, Search, UserRoundPlus, Wrench } from "lucide-react";
import { motixDemoJobs, motixDemoTechnicians, motixWorkflowStages, type MotixDemoJob, type MotixWorkflowStage } from "@/lib/motix-demo-data";

type Filter = "All" | MotixWorkflowStage;
type Props = { mode?: "embedded" | "standalone" };

const statusStyles: Record<MotixWorkflowStage, string> = {
  "Waiting": "border-slate-500/35 bg-slate-500/10 text-slate-200",
  "Assigned": "border-blue-400/35 bg-blue-500/10 text-blue-200",
  "In Workshop": "border-cyan-400/35 bg-cyan-500/10 text-cyan-100",
  "Paused / Parts": "border-amber-400/35 bg-amber-500/10 text-amber-100",
  "Quality Check": "border-violet-400/35 bg-violet-500/10 text-violet-100",
  "Reception Review": "border-fuchsia-400/35 bg-fuchsia-500/10 text-fuchsia-100",
  "Ready / Collected": "border-emerald-400/35 bg-emerald-500/10 text-emerald-100",
};

export default function MotixLiveWorkshopDemo({ mode="embedded" }: Props) {
  const [jobs,setJobs]=useState<MotixDemoJob[]>(motixDemoJobs);
  const [filter,setFilter]=useState<Filter>("All");
  const [query,setQuery]=useState("");
  const [assigning,setAssigning]=useState(false);
  const [selectedJob,setSelectedJob]=useState(motixDemoJobs.find(job=>job.status==="Waiting")?.id ?? "");
  const [technician,setTechnician]=useState<(typeof motixDemoTechnicians)[number]>(motixDemoTechnicians[0]);

  const counts=useMemo(()=>({
    total:jobs.length,
    assigned:jobs.filter(job=>job.status==="Assigned").length,
    workshop:jobs.filter(job=>job.status==="In Workshop").length,
    reception:jobs.filter(job=>job.status==="Reception Review").length,
    ready:jobs.filter(job=>job.status==="Ready / Collected").length,
  }),[jobs]);
  const visibleJobs=useMemo(()=>{const needle=query.trim().toLowerCase();return jobs.filter(job=>(filter==="All"||job.status===filter)&&(!needle||[job.id,job.customer,job.vehicle,job.registration,job.technician??"",job.service].some(value=>value.toLowerCase().includes(needle))));},[filter,jobs,query]);
  const waitingJobs=jobs.filter(job=>job.status==="Waiting");
  const assign=()=>{if(!selectedJob)return;setJobs(current=>current.map(job=>job.id===selectedJob?{...job,status:"Assigned",technician}:job));setFilter("Assigned");setAssigning(false);};

  return <section aria-label="MOTIX Live Workshop demonstration" className={`motix-demo w-full min-w-0 max-w-full ${mode==="standalone"?"motix-demo-standalone":""}`}>
    <div className="motix-demo-bar"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-sm font-black text-white">M</span><div><p className="text-sm font-black tracking-[.18em] text-white">MOTIX™</p><p className="text-[10px] uppercase tracking-[.2em] text-slate-500">Garage operations</p></div></div><div className="flex items-center gap-2 text-[10px] font-semibold text-emerald-200"><span className="size-1.5 rounded-full bg-emerald-400" aria-hidden="true"/>Demo environment</div></div>
    <div className="motix-demo-body">
      <header className="flex min-w-0 flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"><div className="min-w-0"><p className="text-[10px] font-bold uppercase tracking-[.18em] text-blue-300">Workshop control</p><h3 className="mt-1 text-xl font-bold text-white sm:text-2xl">Live Workshop</h3><p className="mt-1 max-w-xl text-xs leading-5 text-slate-400">Monitor every job from assignment through reception review and collection.</p></div><button type="button" onClick={()=>setAssigning(value=>!value)} aria-expanded={assigning} className="inline-flex min-h-10 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 text-xs font-bold text-white transition hover:bg-blue-500 sm:w-auto"><UserRoundPlus size={15}/>Assign Jobs &amp; Technicians<ChevronDown size={14} className={assigning?"rotate-180":""}/></button></header>
      {assigning&&<div className="mt-4 grid gap-3 rounded-xl border border-blue-400/20 bg-blue-500/[.06] p-3 sm:grid-cols-[1fr_1fr_auto]" aria-label="Demo job assignment"><label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Waiting job<select value={selectedJob} onChange={event=>setSelectedJob(event.target.value)} className="mt-1 block min-h-10 w-full rounded-lg border border-white/10 bg-[#070d18] px-3 text-xs normal-case tracking-normal text-white"><option value="">Select a waiting job</option>{waitingJobs.map(job=><option key={job.id} value={job.id}>{job.id} · {job.vehicle}</option>)}</select></label><label className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Technician<select value={technician} onChange={event=>setTechnician(event.target.value as typeof technician)} className="mt-1 block min-h-10 w-full rounded-lg border border-white/10 bg-[#070d18] px-3 text-xs normal-case tracking-normal text-white">{motixDemoTechnicians.map(name=><option key={name}>{name}</option>)}</select></label><button type="button" onClick={assign} disabled={!selectedJob} className="min-h-10 self-end rounded-lg bg-cyan-300 px-4 text-xs font-bold text-slate-950 disabled:cursor-not-allowed disabled:opacity-40">Assign job</button></div>}
      <dl className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-5">{[["Workshop Jobs",counts.total],["Assigned",counts.assigned],["In Workshop",counts.workshop],["Reception Review",counts.reception],["Ready / Collected",counts.ready]].map(([label,value])=><div key={label} className="rounded-xl border border-white/[.07] bg-white/[.025] p-3"><dt className="text-[9px] font-semibold uppercase tracking-wider text-slate-500">{label}</dt><dd className="mt-1 text-xl font-bold text-white">{value}</dd></div>)}</dl>
      <div className="mt-4 flex min-w-0 flex-col gap-3 lg:flex-row lg:items-center"><label className="relative block min-w-0 flex-1"><span className="sr-only">Search jobs</span><Search aria-hidden="true" className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={15}/><input value={query} onChange={event=>setQuery(event.target.value)} placeholder="Search job, registration, customer or technician" className="min-h-10 w-full min-w-0 rounded-lg border border-white/10 bg-[#070d18] pl-9 pr-3 text-xs text-white placeholder:text-slate-600"/></label><div className="motix-demo-filters w-full min-w-0" aria-label="Filter jobs by workflow status">{(["All",...motixWorkflowStages] as Filter[]).map(stage=><button type="button" key={stage} onClick={()=>setFilter(stage)} aria-pressed={filter===stage} className={filter===stage?"is-active":""}>{stage}</button>)}</div></div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3" aria-live="polite">{visibleJobs.map(job=><article key={job.id} className="rounded-xl border border-white/[.08] bg-[#080f1c] p-3.5"><div className="flex items-start justify-between gap-2"><div><p className="text-[9px] font-bold uppercase tracking-[.14em] text-blue-300">{job.id}</p><h4 className="mt-1 text-sm font-bold text-white">{job.vehicle}</h4></div><span className={`rounded-full border px-2 py-1 text-[9px] font-bold ${statusStyles[job.status]}`}>{job.status}</span></div><div className="mt-3 flex items-center justify-between gap-3 border-t border-white/[.06] pt-3"><div><p className="text-xs font-semibold text-slate-200">{job.customer}</p><p className="mt-0.5 text-[10px] text-slate-500">{job.registration} · {job.service}</p></div><div className="text-right"><Wrench className="ml-auto text-slate-600" size={13}/><p className="mt-1 text-[9px] text-slate-400">{job.technician??"Unassigned"}</p></div></div></article>)}{visibleJobs.length===0&&<div className="sm:col-span-2 xl:col-span-3 rounded-xl border border-dashed border-white/10 py-8 text-center text-xs text-slate-500">No demo jobs match this view.</div>}</div>
      <footer className="mt-4 flex items-center gap-2 border-t border-white/[.06] pt-3 text-[10px] text-slate-500"><Check size={12} className="text-emerald-400"/><span>Demo environment · Sample data used for privacy.</span></footer>
    </div>
  </section>;
}
