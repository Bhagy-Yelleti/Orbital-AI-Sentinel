export type RiskLevel = "critical" | "high" | "moderate" | "low";

export type RiskCategory =
  | "flood"
  | "conflict"
  | "supply"
  | "earthquake"
  | "wildfire";

export interface RiskLocation {
  id: string;
  name: string;
  country: string;
  region: string;
  lat: number;
  lng: number;
  riskLevel: RiskLevel;
  riskCategory: RiskCategory;
  description: string;
  probability: number;
  confidence: number;
  population: string;
  impactWindow: string;
  lastUpdated: string;
  drivers: string[];
}

export interface AlertItem {
  id: string;
  timestamp: string;
  message: string;
  riskLevel: RiskLevel;
  riskCategory: RiskCategory;
  region: string;
  signal: string;
}

export interface MetricCard {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "stable";
}

export interface RiskSnapshot {
  label: string;
  value: string;
  detail: string;
  tone: RiskLevel;
}

export interface InsightCard {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
}

export interface TimelinePoint {
  time: string;
  label: string;
  detail: string;
}

export interface AnalysisResult {
  /** One-line situation statement */
  situation: string;
  /** Root cause assessment */
  cause: string;
  /** Narrative summary */
  summary: string;
  predictedOutcomes: string[];
  recommendedActions: string[];
  confidenceScore: number;
  riskLevel: RiskLevel;
  timeHorizon: string;
  watchpoints: string[];
  /** Source signals that informed this assessment */
  sourceSignals: string[];
}
