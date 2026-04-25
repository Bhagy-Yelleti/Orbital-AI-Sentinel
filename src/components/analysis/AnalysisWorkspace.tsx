"use client";

import { useMemo, useState, useTransition } from "react";
import { quickPrompts, riskLocations } from "@/lib/mock-data";
import type { AnalysisResult } from "@/types";
import { categoryIcons, riskToneClasses } from "@/components/dashboard/theme";
import {
  ArrowRight,
  Brain,
  LoaderCircle,
  MapPin,
  Radar,
  Sparkles,
} from "lucide-react";

async function fetchAnalysis(prompt: string) {
  const response = await fetch("/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt }),
  });

  if (!response.ok) {
    throw new Error("Analysis request failed");
  }

  return (await response.json()) as AnalysisResult & { prompt: string };
}

export function AnalysisWorkspace() {
  const [prompt, setPrompt] = useState(quickPrompts[0]);
  const [error, setError] = useState("");
  const [result, setResult] = useState<(AnalysisResult & { prompt: string }) | null>(
    null
  );
  const [isPending, startTransition] = useTransition();

  const featuredRegions = useMemo(() => riskLocations.slice(0, 4), []);

  function runAnalysis(nextPrompt: string) {
    setError("");
    startTransition(async () => {
      try {
        const data = await fetchAnalysis(nextPrompt);
        setResult(data);
      } catch {
        setError("Unable to generate analysis right now. Please try again.");
      }
    });
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 panel-shadow">
        <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
          <Brain className="h-3.5 w-3.5 text-cyan-accent" />
          Scenario analysis
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-navy">
          AI analysis panel
        </h1>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
          Explore how Orbital AI Sentinel interprets a region, threat posture, or supply scenario using satellite-informed signals and response heuristics.
        </p>

        <div className="mt-6 rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
          <label htmlFor="analysis-prompt" className="text-sm font-medium text-navy">
            Analyze region or scenario
          </label>
          <textarea
            id="analysis-prompt"
            value={prompt}
            onChange={(event) => setPrompt(event.target.value)}
            className="mt-3 min-h-36 w-full resize-none rounded-[1.25rem] border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none focus:border-cyan-accent focus:ring-4 focus:ring-cyan-accent/10"
            placeholder="Analyze flood escalation risk in South Asia over the next 72 hours"
          />
          <div className="mt-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-2">
              {quickPrompts.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => {
                    setPrompt(item);
                    runAnalysis(item);
                  }}
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
              {isPending ? (
                <LoaderCircle className="h-4 w-4 animate-spin" />
              ) : (
                <Sparkles className="h-4 w-4" />
              )}
              Generate analysis
            </button>
          </div>
          {error ? <p className="mt-3 text-sm text-risk-critical">{error}</p> : null}
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {featuredRegions.map((region) => {
            const Icon = categoryIcons[region.riskCategory];
            return (
              <button
                key={region.id}
                type="button"
                onClick={() =>
                  runAnalysis(
                    `Analyze ${region.riskCategory} risk in ${region.name} (${region.region}) over the next ${region.impactWindow}`
                  )
                }
                className="rounded-[1.35rem] border border-slate-200 bg-white p-4 text-left hover:border-cyan-accent/40 hover:shadow-md"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-50">
                    <Icon className="h-4.5 w-4.5 text-cyan-accent" />
                  </div>
                  <span
                    className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase ${riskToneClasses[region.riskLevel]}`}
                  >
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

      <section className="rounded-[1.75rem] border border-slate-200 bg-white p-5 panel-shadow">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
              <Radar className="h-3.5 w-3.5 text-cyan-accent" />
              Generated output
            </div>
            <h2 className="mt-2 text-lg font-semibold text-navy">
              Recommended operational picture
            </h2>
          </div>
          <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
            Mock or Gemini-ready
          </span>
        </div>

        {!result && !isPending ? (
          <div className="mt-8 rounded-[1.5rem] border border-dashed border-slate-200 bg-slate-50/70 px-6 py-12 text-center">
            <Brain className="mx-auto h-8 w-8 text-slate-300" />
            <p className="mt-4 text-sm text-slate-500">
              Run an analysis to see risk summary, predicted outcomes, and recommended actions.
            </p>
          </div>
        ) : null}

        {isPending ? (
          <div className="mt-8 rounded-[1.5rem] border border-slate-200 bg-slate-50/70 px-6 py-12 text-center">
            <LoaderCircle className="mx-auto h-8 w-8 animate-spin text-cyan-accent" />
            <p className="mt-4 text-sm text-slate-500">
              Synthesizing orbital signals, historical analogs, and response guidance
            </p>
          </div>
        ) : null}

        {result ? (
          <div className="mt-6 space-y-5">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50/80 p-4">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className={`rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase ${riskToneClasses[result.riskLevel]}`}
                >
                  {result.riskLevel}
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] text-slate-500">
                  Time horizon: {result.timeHorizon}
                </span>
                <span className="rounded-full bg-white px-2.5 py-1 text-[11px] text-slate-500">
                  Confidence: {result.confidenceScore}%
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">{result.summary}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                Predicted outcomes
              </h3>
              <div className="mt-3 space-y-3">
                {result.predictedOutcomes.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                Recommended actions
              </h3>
              <div className="mt-3 space-y-3">
                {result.recommendedActions.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-600"
                  >
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-cyan-accent" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-400">
                Watchpoints
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {result.watchpoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs text-slate-500"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </section>
    </div>
  );
}
