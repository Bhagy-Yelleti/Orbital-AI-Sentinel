"use client";

import { riskLocations } from "@/lib/mock-data";
import {
  AlertTriangle,
  Clock3,
  ShieldAlert,
  TrendingUp,
} from "lucide-react";

// ── Sparkline ────────────────────────────────────────────────────────────────
function Sparkline({
  values,
  color,
  height = 32,
}: {
  values: number[];
  color: string;
  height?: number;
}) {
  const w = 80;
  const h = height;
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = max - min || 1;
  const step = w / (values.length - 1);

  const pts = values
    .map((v, i) => `${i * step},${h - ((v - min) / range) * (h - 4) - 2}`)
    .join(" ");

  const area = `${pts} ${w},${h} 0,${h}`;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className="overflow-visible">
      <defs>
        <linearGradient id={`sg-${color.replace("#", "")}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <polygon
        points={area}
        fill={`url(#sg-${color.replace("#", "")})`}
      />
      <polyline
        points={pts}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      {/* last point dot */}
      {(() => {
        const last = values.length - 1;
        const x = last * step;
        const y = h - ((values[last] - min) / range) * (h - 4) - 2;
        return <circle cx={x} cy={y} r="2.5" fill={color} />;
      })()}
    </svg>
  );
}

// ── Radial arc for response time ─────────────────────────────────────────────
function ArcGauge({
  value,
  max,
  color,
  size = 52,
}: {
  value: number;
  max: number;
  color: string;
  size?: number;
}) {
  const r = (size - 8) / 2;
  const cx = size / 2;
  const cy = size / 2;
  const circ = 2 * Math.PI * r;
  const pct = Math.min(value / max, 1);
  // 270° arc starting from bottom-left (225°)
  const arcLen = circ * 0.75;
  const dash = arcLen * pct;
  const gap = arcLen - dash;
  const rotate = 135; // start angle

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {/* track */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke="rgba(0,0,0,0.06)"
        strokeWidth="5"
        strokeDasharray={`${arcLen} ${circ - arcLen}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform={`rotate(${rotate} ${cx} ${cy})`}
      />
      {/* fill */}
      <circle
        cx={cx} cy={cy} r={r}
        fill="none"
        stroke={color}
        strokeWidth="5"
        strokeDasharray={`${dash} ${gap + (circ - arcLen)}`}
        strokeDashoffset={0}
        strokeLinecap="round"
        transform={`rotate(${rotate} ${cx} ${cy})`}
        style={{ transition: "stroke-dasharray 0.6s ease" }}
      />
    </svg>
  );
}

// ── Trend bar chart (7 days) ──────────────────────────────────────────────────
function TrendBars({ values, color }: { values: number[]; color: string }) {
  const max = Math.max(...values);
  return (
    <div className="flex items-end gap-0.5 h-8">
      {values.map((v, i) => (
        <div
          key={i}
          className="flex-1 rounded-sm"
          style={{
            height: `${Math.max(4, (v / max) * 32)}px`,
            background: i === values.length - 1 ? color : `${color}55`,
            transition: "height 0.4s ease",
          }}
        />
      ))}
    </div>
  );
}

// ── Derived data ──────────────────────────────────────────────────────────────
const criticalCount = riskLocations.filter((l) => l.riskLevel === "critical").length;
const highCount     = riskLocations.filter((l) => l.riskLevel === "high").length;
const totalAlerts   = criticalCount * 3 + highCount * 2 + 6; // weighted mock

// Sparkline histories (mock 8-point trend)
const alertHistory   = [14, 17, 15, 19, 21, 20, 23, totalAlerts];
const criticalHistory= [1, 2, 2, 3, 3, 3, 3, criticalCount];
const responseHistory= [22, 19, 21, 18, 17, 16, 15, 14]; // minutes, improving
const riskHistory    = [5.8, 6.1, 6.4, 6.8, 7.0, 7.1, 7.3, 7.4];

const CARDS = [
  {
    id: "alerts",
    label: "Total Active Alerts",
    value: totalAlerts,
    unit: "",
    sub: `+3 since last cycle`,
    icon: AlertTriangle,
    color: "#dc4c3f",
    trend: "up" as const,
    trendLabel: "Increasing",
    chart: <Sparkline values={alertHistory} color="#dc4c3f" />,
  },
  {
    id: "critical",
    label: "Critical Zones",
    value: criticalCount,
    unit: " active",
    sub: `${highCount} high-severity adjacent`,
    icon: ShieldAlert,
    color: "#df7a22",
    trend: "up" as const,
    trendLabel: "Escalating",
    chart: <TrendBars values={criticalHistory} color="#df7a22" />,
  },
  {
    id: "response",
    label: "Response Time Est.",
    value: 14,
    unit: " min",
    sub: "Down from 22 min (7d avg)",
    icon: Clock3,
    color: "#0aa7c7",
    trend: "down" as const,
    trendLabel: "Improving",
    chart: (
      <div className="relative flex items-center justify-center">
        <ArcGauge value={14} max={30} color="#0aa7c7" size={52} />
        <span className="absolute text-[10px] font-bold text-navy">14m</span>
      </div>
    ),
  },
  {
    id: "risk",
    label: "Risk Trend",
    value: "7.4",
    unit: " / 10",
    sub: "+0.6 this week · Elevated",
    icon: TrendingUp,
    color: "#b69214",
    trend: "up" as const,
    trendLabel: "Rising",
    chart: <Sparkline values={riskHistory} color="#b69214" />,
  },
] as const;

const trendStyles = {
  up:   { text: "text-risk-critical", bg: "bg-risk-critical/8 border-risk-critical/20" },
  down: { text: "text-risk-low",      bg: "bg-risk-low/8 border-risk-low/20" },
} as const;

export function MetricsCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {CARDS.map((card) => {
        const Icon = card.icon;
        const ts = trendStyles[card.trend];

        return (
          <article
            key={card.id}
            className="rounded-[1.5rem] border border-slate-200 bg-white p-5 panel-shadow flex flex-col gap-4"
          >
            {/* top row */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                <Icon className="h-4.5 w-4.5" style={{ color: card.color }} />
              </div>
              <span
                className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-[10px] font-semibold ${ts.bg} ${ts.text}`}
              >
                {card.trend === "up" ? "▲" : "▼"} {card.trendLabel}
              </span>
            </div>

            {/* value */}
            <div>
              <div className="text-3xl font-semibold tracking-tight text-navy">
                {card.value}
                <span className="text-base font-normal text-slate-400">{card.unit}</span>
              </div>
              <div className="mt-0.5 text-sm font-medium text-slate-600">{card.label}</div>
              <div className="mt-1 text-xs text-slate-400">{card.sub}</div>
            </div>

            {/* chart */}
            <div className="mt-auto">{card.chart}</div>
          </article>
        );
      })}
    </div>
  );
}
