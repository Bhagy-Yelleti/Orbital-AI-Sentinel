import type { RiskCategory, RiskLevel } from "@/types";
import {
  Activity,
  Droplets,
  Flame,
  Package,
  Swords,
} from "lucide-react";

export const riskToneClasses: Record<RiskLevel, string> = {
  critical: "text-risk-critical bg-risk-critical/10 border-risk-critical/20",
  high: "text-risk-high bg-risk-high/10 border-risk-high/20",
  moderate: "text-risk-moderate bg-risk-moderate/10 border-risk-moderate/20",
  low: "text-risk-low bg-risk-low/10 border-risk-low/20",
};

export const riskDotClasses: Record<RiskLevel, string> = {
  critical: "bg-risk-critical",
  high: "bg-risk-high",
  moderate: "bg-risk-moderate",
  low: "bg-risk-low",
};

export const riskBarClasses: Record<RiskLevel, string> = {
  critical: "bg-risk-critical",
  high: "bg-risk-high",
  moderate: "bg-risk-moderate",
  low: "bg-risk-low",
};

export const categoryIcons: Record<RiskCategory, React.ElementType> = {
  flood: Droplets,
  conflict: Swords,
  supply: Package,
  earthquake: Activity,
  wildfire: Flame,
};

export function getMarkerColor(level: RiskLevel) {
  switch (level) {
    case "critical":
      return "#dc4c3f";
    case "high":
      return "#df7a22";
    case "moderate":
      return "#b69214";
    case "low":
      return "#269a5d";
    default:
      return "#0aa7c7";
  }
}
