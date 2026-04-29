"use client";

import { useFilters, type CategoryFilter, type RegionFilter } from "./FilterContext";
import { Layers, MapPin } from "lucide-react";
import { useLang } from "@/lib/LangContext";

const REGIONS: { value: RegionFilter; labelKey: "allRegions" | RegionFilter }[] = [
  { value: "all",          labelKey: "allRegions" },
  { value: "Asia",         labelKey: "Asia" },
  { value: "Europe",       labelKey: "Europe" },
  { value: "Africa",       labelKey: "Africa" },
  { value: "Americas",     labelKey: "Americas" },
  { value: "Middle East",  labelKey: "Middle East" },
  { value: "Indo-Pacific", labelKey: "Indo-Pacific" },
];

const REGION_TE: Record<string, string> = {
  all: "అన్ని ప్రాంతాలు",
  Asia: "ఆసియా",
  Europe: "యూరప్",
  Africa: "ఆఫ్రికా",
  Americas: "అమెరికాలు",
  "Middle East": "మధ్యప్రాచ్యం",
  "Indo-Pacific": "ఇండో-పసిఫిక్",
};

const CATEGORIES: { value: CategoryFilter; label: string; labelTe: string; emoji: string }[] = [
  { value: "all",        label: "All Types",  labelTe: "అన్ని రకాలు",    emoji: "🌐" },
  { value: "flood",      label: "Flood",      labelTe: "వరద",             emoji: "🌊" },
  { value: "conflict",   label: "Conflict",   labelTe: "సంఘర్షణ",        emoji: "⚔️" },
  { value: "supply",     label: "Supply",     labelTe: "సరఫరా",           emoji: "📦" },
  { value: "earthquake", label: "Earthquake", labelTe: "భూకంపం",          emoji: "🌍" },
  { value: "wildfire",   label: "Wildfire",   labelTe: "కార్చిచ్చు",      emoji: "🔥" },
];

const pill =
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-all duration-150 cursor-pointer select-none";
const active =
  "border-cyan-accent bg-cyan-soft text-cyan-accent";
const inactive =
  "border-slate-200 bg-white text-slate-500 hover:border-slate-300 hover:text-slate-700";

export function FilterBar() {
  const { region, category, setRegion, setCategory } = useFilters();
  const { lang, tr } = useLang();

  return (
    <div className="flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-slate-200 bg-white px-5 py-3.5 panel-shadow">
      {/* Region */}
      <div className="flex items-center gap-2">
        <MapPin className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {tr("filterRegion")}
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
            {lang === "te" ? REGION_TE[r.value] : (r.value === "all" ? tr("allRegions") : r.value)}
          </button>
        ))}
      </div>

      <div className="hidden h-5 w-px bg-slate-200 xl:block" />

      {/* Category */}
      <div className="flex items-center gap-2">
        <Layers className="h-3.5 w-3.5 shrink-0 text-slate-400" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">
          {tr("filterType")}
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
            {lang === "te" ? c.labelTe : c.label}
          </button>
        ))}
      </div>
    </div>
  );
}
