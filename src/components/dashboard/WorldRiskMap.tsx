"use client";

import dynamic from "next/dynamic";
import { Globe2, LoaderCircle } from "lucide-react";
import type { RiskLocation } from "@/types";

const WorldRiskMapClient = dynamic(
  () => import("./WorldRiskMapClient").then((mod) => mod.WorldRiskMapClient),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[28rem] items-center justify-center rounded-[1.75rem] border border-slate-200 bg-navy text-slate-200">
        <div className="flex items-center gap-3 text-sm">
          <LoaderCircle className="h-4 w-4 animate-spin text-cyan-accent" />
          Rendering live orbital layer
        </div>
      </div>
    ),
  }
);

interface WorldRiskMapProps {
  locations: RiskLocation[];
}

export function WorldRiskMap({ locations }: WorldRiskMapProps) {
  return (
    <section className="rounded-[1.75rem] border border-slate-200 bg-white panel-shadow">
      <div className="flex flex-col gap-3 border-b border-slate-100 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-400">
            <Globe2 className="h-3.5 w-3.5 text-cyan-accent" />
            Global risk map
          </div>
          <h2 className="mt-2 text-lg font-semibold text-navy">
            Orbital view of active threat clusters
          </h2>
          <p className="mt-1 max-w-2xl text-sm text-slate-500">
            Live alert clusters are layered across flood, conflict, supply, and climate disruption signals.
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-slate-500">
          <span className="inline-flex items-center gap-1 rounded-full bg-cyan-soft px-2.5 py-1 text-cyan-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-accent animate-live-pulse" />
            11 fusion pipelines online
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1">
            {locations.length} tracked hotspots
          </span>
        </div>
      </div>
      <div className="p-3">
        <WorldRiskMapClient locations={locations} />
      </div>
    </section>
  );
}
