"use client";

import { useLang } from "@/lib/LangContext";

export function DashboardHero() {
  const { tr } = useLang();
  return (
    <section className="section-shell p-5 lg:p-6">
      <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-soft px-3 py-1 text-xs font-medium text-cyan-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-live-pulse" />
            {tr("heroTag")}
          </div>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight text-navy md:text-5xl">
            {tr("heroTitle")}
          </h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500">
            {tr("heroSub")}
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{tr("coverage")}</p>
            <p className="mt-2 text-2xl font-semibold text-navy">142 {tr("filterRegion") === "ప్రాంతం" ? "ప్రాంతాలు" : "regions"}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{tr("latency")}</p>
            <p className="mt-2 text-2xl font-semibold text-navy">&lt; 2 min</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 shadow-sm">
            <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">{tr("priorityPosture")}</p>
            <p className="mt-2 text-2xl font-semibold text-navy">{tr("elevated")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
