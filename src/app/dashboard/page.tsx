import { IntelligenceBrief } from "@/components/dashboard/IntelligenceBrief";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { OverviewStrip } from "@/components/dashboard/OverviewStrip";
import { ResponseTimeline } from "@/components/dashboard/ResponseTimeline";
import { RiskFeed } from "@/components/dashboard/RiskFeed";
import { WorldRiskMap } from "@/components/dashboard/WorldRiskMap";
import { riskLocations } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-slate-200 bg-white p-6 panel-shadow">
        <div className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr] xl:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-soft px-3 py-1 text-xs font-medium text-cyan-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-live-pulse" />
              Orbital intelligence online
            </div>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-navy md:text-5xl">
              Global crisis monitoring designed for clarity under pressure.
            </h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 md:text-base">
              Orbital AI Sentinel turns satellite signals, logistics stress, and compound risk indicators into a calm operational picture for teams making high-stakes decisions.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Coverage</p>
              <p className="mt-2 text-2xl font-semibold text-navy">142 regions</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Latency</p>
              <p className="mt-2 text-2xl font-semibold text-navy">&lt; 2 min</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-slate-400">Priority posture</p>
              <p className="mt-2 text-2xl font-semibold text-navy">Elevated</p>
            </div>
          </div>
        </div>
      </section>

      <MetricsCards />
      <OverviewStrip />

      <div className="grid gap-6 2xl:grid-cols-[1.55fr_0.85fr]">
        <WorldRiskMap locations={riskLocations} />
        <RiskFeed />
      </div>

      <IntelligenceBrief />
      <ResponseTimeline />
    </div>
  );
}
