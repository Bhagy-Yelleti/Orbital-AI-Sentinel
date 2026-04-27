"use client";

import { useMemo, useState, useTransition } from "react";
import { quickPrompts, riskLocations } from "@/lib/mock-data";
import type { AnalysisResult } from "@/types";
import { categoryIcons, riskToneClasses } from "@/components/dashboard/theme";
import {
  AlertTriangle,
  ArrowRight,
  Brain,
  LoaderCircle,
  MapPin,
  Radar,
  Radio,
  Sparkles,
  Zap,
} from "lucide-react";

async function fetchAnalysis(prompt: string) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });
  if (!response.ok) throw new Error("Analysis request failed");
  return (await response.json()) as AnalysisResult & { prompt: string };
}

const riskBorderClasses: Record<string, string> = {
  critical: "border-risk-critical/30 bg-risk-critical/5",
  high:     "border-risk-high/30 bg-risk-high/5",
  moderate: "border-risk-moderate/30 bg-risk-moderate/5",
  low:      "border-risk-low/30 bg-risk-low/5",
};

export function AnalysisWorkspace() {
  const [prompt, setPrompt] = useState(quickPrompts[0]);
  const [error, setError] = useState("");
  const [result, setResult] = useState<(AnalysisResult & { prompt: string }) | null>(null);
  const [isPending, startTransition] = useTransition();

  const featuredRegions = useMemo(() => riskLocations.slice(0, 4), []);

  function runAnalysis(nextPrompt: string) {
    setError("");
    startTransition(async () => {
      try {
        setResult(await fetchAnalysis(nextPrompt));
      } catch {
        setError("Unable to generate analysis. Please try again.");
      }
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      {/* ── Left: input panel ── */}
      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 panel-shadow">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          <Brain className="h-3.5 w-3.5 text-cyan-accent" />
          Scenario analysis
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy">
          AI analysis panel
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Submit a region, threat posture, or supply scenario. The system returns a structured intelligence assessment derived from satellite-informed signals and response heuristics.
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
          <label htmlFor="analysis-prompt" className="text-sm font-medium text-navy">
            Analyze region or scenario
          </label>
          <textarea
            id="analysis-prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="mt-3 min-h-36 w-full resize-none rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none focus:border-cyan-accent focus:ring-4 focus:ring-cyan-accent/10"
            placeholder="Analyze flood escalation risk in South Asia over the next 72 hours"
          />
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => { setPrompt(item); runAnalysis(item); }}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-500 hover:border-cyan-accent/40 hover:text-cyan-accent"
                >
                  {item}
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => runAnalysis(prompt)}
              disabled={isPending || !prompt.trim()}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-navy px-4 py-3 text-sm font-medium text-white hover:bg-navy-light disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Sparkles className="h-4 w-4" />}
              Generate analysis
            </button>
          </div>
          {error && <p className="mt-3 text-sm text-risk-critical">{error}</p>}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredRegions.map((region) => {
            const Icon = categoryIcons[region.riskCategory];
            return (
              <button
                key={region.id}
                type="button"
                onClick={() =>
                  runAnalysis(`Analyze ${region.riskCategory} risk in ${region.name} (${region.region}) over the next ${region.impactWindow}`)
                }
                className="rounded-[1.35rem] border border-slate-200 bg-white p-4 text-left hover:border-cyan-accent/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                    <Icon className="h-4.5 w-4.5 text-cyan-accent" />
                  </div>
                  <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase ${riskToneClasses[region.riskLevel]}`}>
                    {region.riskLevel}
                  </span>
                </div>
                <h2 className="mt-4 text-base font-semibold text-navy">{region.name}</h2>
                <p className="mt-1 text-sm text-slate-500">{region.description}</p>
                <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
                  <MapPin className="h-3.5 w-3.5" />
                  {region.country}
                </div>
              </button>
            );
          })}
        </div>
      </section>

      {/* ── Right: output panel ── */}
      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 panel-shadow">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <Radar className="h-3.5 w-3.5 text-cyan-accent" />
              Intelligence output
            </div>
            <h2 className="mt-2 text-lg font-semibold text-navy">Threat assessment report</h2>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500 font-mono">
            ORBITAL-SENTINEL
          </span>
        </div>

        {!result && !isPending && (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/70 px-6 py-12 text-center">
            <Brain className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-4 text-sm text-slate-500">
              Submit a scenario to generate a structured intelligence assessment.
            </p>
          </div>
        )}

        {isPending && (
          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/70 px-6 py-12 text-center">
            <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-cyan-accent" />
            <p className="mt-4 text-sm text-slate-500">
              Fusing orbital, weather, logistics, and open-source signals…
            </p>
          </div>
        )}

        {result && (
          <div className="mt-5 space-y-4 animate-fade-in-up">

            {/* Header: risk level + meta */}
            <div className={`rounded-[1.5rem] border p-4 ${riskBorderClasses[result.riskLevel]}`}>
              <div className="flex flex-wrap items-center gap-2">
                <span className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase ${riskToneClasses[result.riskLevel]}`}>
                  {result.riskLevel}
                </span>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] text-slate-500 border border-slate-200">
                  {result.timeHorizon}
                </span>
                <span className="rounded-full bg-white/80 px-2.5 py-1 text-[11px] text-slate-500 border border-slate-200">
                  Confidence {result.confidenceScore}%
                </span>
              </div>

              {/* Situation */}
              <p className="mt-3 text-sm font-semibold leading-6 text-navy">
                {result.situation}
              </p>
            </div>

            {/* Cause */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50/80 p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2">
                <Zap className="h-3.5 w-3.5 text-amber-accent" />
                Root cause
              </div>
              <p className="text-sm leading-6 text-slate-600">{result.cause}</p>
            </div>

            {/* Summary */}
            <div className="rounded-[1.25rem] border border-slate-200 bg-white p-4">
              <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2">
                <AlertTriangle className="h-3.5 w-3.5 text-cyan-accent" />
                Assessment
              </div>
              <p className="text-sm leading-6 text-slate-600">{result.summary}</p>
            </div>

            {/* Predicted outcomes */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
                Predicted outcomes
              </div>
              <div className="space-y-2">
                {result.predictedOutcomes.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                    <span className="mt-0.5 shrink-0 text-[11px] font-mono font-bold text-slate-300">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended actions */}
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-3">
                Recommended actions
              </div>
              <div className="space-y-2">
                {result.recommendedActions.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600">
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Source signals + watchpoints */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2">
                  <Radio className="h-3 w-3" />
                  Source signals
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.sourceSignals.map((s) => (
                    <span key={s} className="rounded-full border border-cyan-accent/20 bg-cyan-soft px-2.5 py-1 text-[11px] text-cyan-accent">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 mb-2">
                  Watchpoints
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {result.watchpoints.map((w) => (
                    <span key={w} className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-500">
                      {w}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </section>
    </div>
  );
}
