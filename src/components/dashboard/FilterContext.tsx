"use client";

import { createContext, useContext, useState } from "react";
import type { RiskCategory } from "@/types";

export type RegionFilter =
  | "all"
  | "Asia"
  | "Europe"
  | "Africa"
  | "Americas"
  | "Middle East"
  | "Indo-Pacific";

export type CategoryFilter = "all" | RiskCategory;

interface FilterState {
  region: RegionFilter;
  category: CategoryFilter;
  setRegion: (r: RegionFilter) => void;
  setCategory: (c: CategoryFilter) => void;
}

const FilterContext = createContext<FilterState>({
  region: "all",
  category: "all",
  setRegion: () => {},
  setCategory: () => {},
});

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [region, setRegion] = useState<RegionFilter>("all");
  const [category, setCategory] = useState<CategoryFilter>("all");
  return (
    <FilterContext.Provider value={{ region, category, setRegion, setCategory }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilters() {
  return useContext(FilterContext);
}

/** Returns true if a location/alert matches the active filters */
export function matchesFilters(
  item: { region: string; riskCategory: RiskCategory },
  region: RegionFilter,
  category: CategoryFilter
) {
  const regionMatch =
    region === "all" ||
    item.region.toLowerCase().includes(region.toLowerCase()) ||
    region.toLowerCase().includes(item.region.toLowerCase());
  const categoryMatch = category === "all" || item.riskCategory === category;
  return regionMatch && categoryMatch;
}
