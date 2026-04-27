"use client";

import { useFilters, type CategoryFilter, type RegionFilter } from "./FilterContext";
import { Layers, MapPin } from "lucide-react";

const REGIONS: { value: RegionFilter; label: string }[] = [
  { value: "all",         label: "All Regions" },
  { value: "Asia",        label: "Asia" },
  { value: "Europe",      label: "Europe" },
  { value: "Africa",      label: "Africa" },
  { value: "Americas",    label: "Americas" },
  { value: "Middle East", label: "Middle East" },
  { value: "Indo-Pacific",label: "Indo-Pacific" },
];

const CATEGORIES: { value: CategoryFilter; label: string; emoji: string }[] = [
  { value: "all",        label: "All Types",  emoji: "🌐" },
  { value: "flood",      label: "Flood",      emoji: "🌊" },
  { value: "conflict",   label: "Conflict",   emoji: "⚔️" },
  { value: "supply",     label: "Supply",     emoji: "📦" },
  { value: "earthquake", label: "Earthquake", emoji: "🌍" },
  { value: "wildfire",   label: "Wildfire",   emoji: "🔥" },
];

const pill =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer select-none";
const active =
  "border-cyan-accent bg-cyan-soft text-cyan-accent";
const inactive =
  "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700";

export function FilterBar() {
  const { region, category, setRegion, setCategory } = useFilters();

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-3.5 panel-shadow">
      {/* Region */}
      <div className="flex items-center gap-2">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Region
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {REGIONS.map((r) => (
          <button
            key={r.value}
            type="button"
            onClick={() => setRegion(r.value)}
            className={`${pill} ${region === r.value ? active : inactive}`}
          >
            {r.label}
          </button>
        ))}
      </div>

      <div className="hidden h-5 w-px bg-slate-200 xl:block" />

      {/* Category */}
      <div className="flex items-center gap-2">
        <Layers className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          Type
        </span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {CATEGORIES.map((c) => (
          <button
            key={c.value}
            type="button"
            onClick={() => setCategory(c.value)}
            className={`${pill} ${category === c.value ? active : inactive}`}
          >
            <span>{c.emoji}</span>
            {c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
