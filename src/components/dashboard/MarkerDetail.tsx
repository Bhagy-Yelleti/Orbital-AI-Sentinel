"use client";

import type { RiskLocation } from "@/types";
import { Clock3, MapPin, ShieldAlert, Users, X } from "lucide-react";
import { categoryIcons, riskBarClasses, riskToneClasses } from "./theme";

interface MarkerDetailProps {
  location: RiskLocation;
  onClose: () => void;
}

export function MarkerDetail({ location, onClose }: MarkerDetailProps) {
  const CategoryIcon = categoryIcons[location.riskCategory];

  return (
    <div className="pointer-events-auto rounded-[1.5rem] border border-slate-200 bg-white/96 shadow-2xl backdrop-blur-md">
      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-slate-50">
            <CategoryIcon className="h-4.5 w-4.5 text-cyan-accent" />
          </div>
          <div className="min-w-0">
            <h3 className="truncate text-sm font-semibold text-navy">{location.name}</h3>
            <p className="text-xs text-slate-400">{location.region}</p>
          </div>
        </div>
        <button
          onClick={onClose}
          className="rounded-xl p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-semibold uppercase ${riskToneClasses[location.riskLevel]}`}
          >
            {location.riskLevel}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[11px] capitalize text-slate-500">
            {location.riskCategory}
          </span>
          <span className="rounded-full bg-cyan-soft px-2.5 py-1 text-[11px] text-cyan-accent">
            Confidence {location.confidence}%
          </span>
        </div>

        <div>
          <div className="mb-2 flex items-center justify-between text-xs">
            <span className="text-slate-500">Predicted impact probability</span>
            <span className="font-semibold text-navy">{location.probability}%</span>
          </div>
          <div className="h-2 rounded-full bg-slate-100">
            <div
              className={`h-2 rounded-full ${riskBarClasses[location.riskLevel]}`}
              style={{ width: `${location.probability}%` }}
            />
          </div>
        </div>

        <p className="text-sm leading-6 text-slate-600">{location.description}</p>

        <div className="grid grid-cols-2 gap-3 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <MapPin className="h-3.5 w-3.5" />
            {location.country}
          </div>
          <div className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5" />
            {location.population}
          </div>
          <div className="flex items-center gap-2">
            <Clock3 className="h-3.5 w-3.5" />
            {location.impactWindow}
          </div>
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-3.5 w-3.5" />
            {location.lastUpdated}
          </div>
        </div>

        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
            Primary drivers
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {location.drivers.map((driver) => (
              <span
                key={driver}
                className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-[11px] text-slate-500"
              >
                {driver}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
