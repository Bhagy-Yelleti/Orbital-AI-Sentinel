"use client";

import { alertFeed } from "@/lib/mock-data";
import { Radio } from "lucide-react";
import { categoryIcons, riskDotClasses, riskToneClasses } from "./theme";

export function RiskFeed() {
  return (
    <section className="flex h-full min-h-[30rem] flex-col rounded-[1.75rem] border border-slate-200 bg-white panel-shadow">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            <Radio className="h-3.5 w-3.5 text-cyan-accent" />
            Live risk feed
          </div>
          <h2 className="mt-2 text-lg font-semibold text-navy">
            Analyst-ready alert stream
          </h2>
        </div>
        <div className="rounded-full bg-cyan-soft px-3 py-1 text-xs font-medium text-cyan-accent">
          Live
        </div>
      </div>

      <div className="flex-1 divide-y divide-slate-100 overflow-y-auto">
        {alertFeed.map((alert) => {
          const CategoryIcon = categoryIcons[alert.riskCategory];

          return (
            <article key={alert.id} className="px-5 py-4 transition-colors hover:bg-slate-50/70">
              <div className="flex items-start gap-3">
                <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
                  <CategoryIcon className="h-4.5 w-4.5 text-slate-500" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full border px-2.5 py-1 text-[11px] font-semibold ${riskToneClasses[alert.riskLevel]}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${riskDotClasses[alert.riskLevel]}`} />
                      {alert.riskLevel}
                    </span>
                    <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500">
                      {alert.signal}
                    </span>
                    <span className="text-[11px] text-slate-400">{alert.timestamp}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{alert.message}</p>
                  <div className="mt-3 text-xs font-medium text-slate-400">{alert.region}</div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
