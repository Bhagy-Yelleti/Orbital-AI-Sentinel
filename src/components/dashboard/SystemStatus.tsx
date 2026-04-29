"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/LangContext";

type StatusLevel = "operational" | "degraded" | "offline";

interface Feed {
  label: string;
  status: StatusLevel;
  live: boolean;
}

const dot: Record<StatusLevel, string> = {
  operational: "bg-risk-low",
  degraded:    "bg-risk-moderate",
  offline:     "bg-risk-critical",
};

const labelColor: Record<StatusLevel, string> = {
  operational: "text-risk-low",
  degraded:    "text-risk-moderate",
  offline:     "text-risk-critical",
};

function formatTs() {
  return new Date().toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  });
}

interface SystemStatusProps {
  /** compact = single-row pill strip for the navbar */
  compact?: boolean;
}

export function SystemStatus({ compact = false }: SystemStatusProps) {
  const [ts, setTs] = useState(formatTs);
  const { tr } = useLang();

  const FEEDS: Feed[] = [
    { label: tr("satelliteFeed"), status: "operational", live: true  },
    { label: tr("dataSync"),      status: "operational", live: true  },
    { label: tr("aiEngine"),      status: "operational", live: false },
  ];

  const label: Record<StatusLevel, string> = {
    operational: tr("statusActive"),
    degraded:    tr("statusDegraded"),
    offline:     tr("statusOffline"),
  };

  useEffect(() => {
    const id = window.setInterval(() => setTs(formatTs()), 1000);
    return () => window.clearInterval(id);
  }, []);

  if (compact) {
    return (
      <div className="hidden items-center gap-2 xl:flex">
        {FEEDS.map((f) => (
          <span
            key={f.label}
            className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-500"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full shrink-0 ${dot[f.status]} ${f.live ? "animate-live-pulse" : ""}`}
            />
            {f.label}
            <span className={`font-semibold ${labelColor[f.status]}`}>
              {label[f.status]}
            </span>
          </span>
        ))}
      </div>
    );
  }

  // Full sidebar block
  return (
    <div className="rounded-[1.25rem] border border-white/8 bg-white/4 p-3 space-y-2">
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">
          {tr("systemStatus")}
        </span>
        <span className="font-mono text-[10px] text-slate-500">{ts} UTC</span>
      </div>

      {FEEDS.map((f) => (
        <div key={f.label} className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full shrink-0 ${dot[f.status]} ${f.live ? "animate-live-pulse" : ""}`} />
            <span className="text-xs text-slate-300">{f.label}</span>
          </div>
          <span className={`text-[11px] font-semibold ${labelColor[f.status]}`}>
            {label[f.status]}
          </span>
        </div>
      ))}

      <div className="pt-1 border-t border-white/8 flex items-center justify-between">
        <span className="text-[10px] text-slate-500">{tr("lastSync")}</span>
        <span className="font-mono text-[10px] text-slate-400">{ts}</span>
      </div>
    </div>
  );
}
