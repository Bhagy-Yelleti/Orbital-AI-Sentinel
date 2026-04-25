"use client";

import { dashboardMetrics } from "@/lib/mock-data";
import { AlertTriangle, Brain, Globe2, Gauge, Minus, TrendingDown, TrendingUp } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  "Active Alerts": AlertTriangle,
  "Global Risk Index": Gauge,
  "Regions Affected": Globe2,
  "Model Confidence": Brain,
};

const trendIcon = {
  up: TrendingUp,
  down: TrendingDown,
  stable: Minus,
};

export function MetricsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {dashboardMetrics.map((metric) => {
        const Icon = iconMap[metric.label] ?? Gauge;
        const TrendIcon = trendIcon[metric.trend ?? "stable"];
        const trendTone =
          metric.trend === "up"
            ? "text-risk-critical"
            : metric.trend === "down"
              ? "text-risk-low"
              : "text-slate-400";

        return (
          <article
            key={metric.label}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-5 panel-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-50">
                <Icon className="h-5 w-5 text-cyan-accent" />
              </div>
              <TrendIcon className={`h-4 w-4 ${trendTone}`} />
            </div>
            <div className="mt-5 text-3xl font-semibold tracking-tight text-navy">
              {metric.value}
            </div>
            <div className="mt-1 text-sm font-medium text-slate-600">{metric.label}</div>
            {metric.change ? (
              <div className="mt-3 text-xs text-slate-400">{metric.change}</div>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
