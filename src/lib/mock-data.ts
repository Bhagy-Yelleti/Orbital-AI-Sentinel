import type {
  AlertItem,
  AnalysisResult,
  InsightCard,
  MetricCard,
  RiskLocation,
  RiskSnapshot,
  TimelinePoint,
} from "@/types";

export const riskLocations: RiskLocation[] = [
  {
    id: "loc-001",
    name: "Ganges-Brahmaputra Delta",
    country: "Bangladesh",
    region: "South Asia",
    lat: 23.685,
    lng: 90.3563,
    riskLevel: "critical",
    riskCategory: "flood",
    description:
      "Monsoon rainfall anomaly and river overflow signatures indicate severe flood expansion toward dense urban corridors.",
    probability: 92,
    confidence: 96,
    population: "21.7M exposed",
    impactWindow: "48-72 hours",
    lastUpdated: "2 min ago",
    drivers: ["Rainfall anomaly +3.4 sigma", "River levels >95th percentile", "Drainage capacity saturated"],
  },
  {
    id: "loc-002",
    name: "Donbas Transit Corridor",
    country: "Ukraine",
    region: "Eastern Europe",
    lat: 48.3794,
    lng: 38.1141,
    riskLevel: "critical",
    riskCategory: "conflict",
    description:
      "SAR imagery and displacement indicators point to renewed escalation risk near logistics nodes and civilian routes.",
    probability: 87,
    confidence: 89,
    population: "3.2M in impact radius",
    impactWindow: "3-7 days",
    lastUpdated: "8 min ago",
    drivers: ["Armored movement anomaly", "Civilian displacement signals", "Communications disruption clusters"],
  },
  {
    id: "loc-003",
    name: "Strait of Malacca",
    country: "Malaysia / Indonesia",
    region: "Southeast Asia",
    lat: 2.5,
    lng: 101.8,
    riskLevel: "high",
    riskCategory: "supply",
    description:
      "AIS traffic divergence and berth congestion suggest chokepoint instability with downstream manufacturing exposure.",
    probability: 78,
    confidence: 84,
    population: "Global trade corridor",
    impactWindow: "7-12 days",
    lastUpdated: "14 min ago",
    drivers: ["Port congestion 340% of baseline", "Container dwell time spike", "Rerouting pressure across lanes"],
  },
  {
    id: "loc-004",
    name: "Sao Paulo Hillside Belt",
    country: "Brazil",
    region: "South America",
    lat: -23.5505,
    lng: -46.6333,
    riskLevel: "high",
    riskCategory: "flood",
    description:
      "Extended rainfall and slope saturation create landslide and flash flood risk across vulnerable neighborhoods.",
    probability: 74,
    confidence: 82,
    population: "12.3M monitored",
    impactWindow: "24-48 hours",
    lastUpdated: "22 min ago",
    drivers: ["18-day rainfall event", "Slope moisture saturation", "Drainage bottleneck zones"],
  },
  {
    id: "loc-005",
    name: "Horn Relief Corridor",
    country: "Somalia / Ethiopia",
    region: "East Africa",
    lat: 5.1521,
    lng: 46.1996,
    riskLevel: "critical",
    riskCategory: "conflict",
    description:
      "Food insecurity, access constraints, and armed movement overlap across humanitarian routes and settlement clusters.",
    probability: 85,
    confidence: 91,
    population: "8.4M at risk",
    impactWindow: "5-10 days",
    lastUpdated: "31 min ago",
    drivers: ["Thermal movement near corridors", "Food price volatility", "Aid access degradation"],
  },
  {
    id: "loc-006",
    name: "Taiwan Strait Manufacturing Arc",
    country: "Taiwan / China",
    region: "Indo-Pacific",
    lat: 24.2539,
    lng: 119.551,
    riskLevel: "moderate",
    riskCategory: "supply",
    description:
      "Elevated maritime activity raises semiconductor logistics risk despite stable current throughput.",
    probability: 56,
    confidence: 77,
    population: "Chip supply chain exposure",
    impactWindow: "10-21 days",
    lastUpdated: "45 min ago",
    drivers: ["Naval density increase", "Insurance spread widening", "Fab inventory tightening"],
  },
  {
    id: "loc-007",
    name: "Nankai Monitoring Belt",
    country: "Japan",
    region: "East Asia",
    lat: 34.6937,
    lng: 135.5023,
    riskLevel: "moderate",
    riskCategory: "earthquake",
    description:
      "Micro-tremor clusters remain elevated, warranting close watch rather than immediate escalation.",
    probability: 42,
    confidence: 71,
    population: "18.9M in modeled zone",
    impactWindow: "Watchlist",
    lastUpdated: "1 hr ago",
    drivers: ["Micro-tremor rise 280%", "Historical analog match", "Station alertness raised"],
  },
  {
    id: "loc-008",
    name: "California Coastal Range",
    country: "United States",
    region: "North America",
    lat: 37.7749,
    lng: -122.4194,
    riskLevel: "moderate",
    riskCategory: "wildfire",
    description:
      "Dryness and offshore wind patterns increase the probability of fast-moving ignition corridors.",
    probability: 61,
    confidence: 79,
    population: "5.1M in zone",
    impactWindow: "5-9 days",
    lastUpdated: "1.5 hrs ago",
    drivers: ["Vegetation dryness peak", "Wind corridor alignment", "Suppression capacity strain"],
  },
  {
    id: "loc-009",
    name: "Suez Canal Zone",
    country: "Egypt",
    region: "Middle East",
    lat: 30.4278,
    lng: 32.3442,
    riskLevel: "high",
    riskCategory: "supply",
    description:
      "Transit security stress and insurance escalation threaten near-term rerouting across energy and container lanes.",
    probability: 71,
    confidence: 83,
    population: "12% of global trade affected",
    impactWindow: "7-14 days",
    lastUpdated: "2 hrs ago",
    drivers: ["Insurance premiums +420%", "Transit security alerts", "Alternate routing costs rising"],
  },
  {
    id: "loc-010",
    name: "Aegean Heat Corridor",
    country: "Greece / Turkey",
    region: "Mediterranean",
    lat: 37.9838,
    lng: 23.7275,
    riskLevel: "low",
    riskCategory: "wildfire",
    description:
      "Early seasonal vegetation stress is visible, but response capacity remains strong and conditions are still manageable.",
    probability: 34,
    confidence: 73,
    population: "2.8M in watch area",
    impactWindow: "Seasonal watch",
    lastUpdated: "3 hrs ago",
    drivers: ["Heat wave onset", "Vegetation stress in NDVI", "Low immediate ignition count"],
  },
];

export const alertFeed: AlertItem[] = [
  {
    id: "alert-001",
    timestamp: "2 min ago",
    message:
      "Critical flood probability in South Asia surged after rainfall anomaly exceeded seasonal norms across the delta basin.",
    riskLevel: "critical",
    riskCategory: "flood",
    region: "Bangladesh",
    signal: "Hydrology",
  },
  {
    id: "alert-002",
    timestamp: "8 min ago",
    message:
      "Conflict escalation signatures intensified around transport corridors in Eastern Europe with civilian movement spikes.",
    riskLevel: "critical",
    riskCategory: "conflict",
    region: "Ukraine",
    signal: "Orbital SAR",
  },
  {
    id: "alert-003",
    timestamp: "14 min ago",
    message:
      "Maritime congestion in the Strait of Malacca is now materially above baseline, increasing disruption risk for electronics and food cargo.",
    riskLevel: "high",
    riskCategory: "supply",
    region: "Southeast Asia",
    signal: "AIS + Port Telemetry",
  },
  {
    id: "alert-004",
    timestamp: "22 min ago",
    message:
      "Slope failure probability is rising in Sao Paulo after sustained rainfall and drainage overload in hillside districts.",
    riskLevel: "high",
    riskCategory: "flood",
    region: "Brazil",
    signal: "Surface Moisture",
  },
  {
    id: "alert-005",
    timestamp: "31 min ago",
    message:
      "Humanitarian access risk in the Horn of Africa remains severe as route integrity deteriorates near aid transit points.",
    riskLevel: "critical",
    riskCategory: "conflict",
    region: "East Africa",
    signal: "Thermal + Field Reports",
  },
  {
    id: "alert-006",
    timestamp: "45 min ago",
    message:
      "Semiconductor logistics stress in the Taiwan Strait remains elevated, with shipping resilience now below quarterly average.",
    riskLevel: "moderate",
    riskCategory: "supply",
    region: "Indo-Pacific",
    signal: "Trade Graph",
  },
  {
    id: "alert-007",
    timestamp: "1 hr ago",
    message:
      "Seismic monitoring in Japan remains on watch status after an uptick in clustered tremor behavior near the Nankai arc.",
    riskLevel: "moderate",
    riskCategory: "earthquake",
    region: "Japan",
    signal: "Seismic Mesh",
  },
  {
    id: "alert-008",
    timestamp: "1.5 hrs ago",
    message:
      "Wildfire spread potential increased in the California Coastal Range as fuel dryness intersects with offshore wind windows.",
    riskLevel: "moderate",
    riskCategory: "wildfire",
    region: "United States",
    signal: "Thermal Vegetation",
  },
];

export const dashboardMetrics: MetricCard[] = [
  {
    label: "Active Alerts",
    value: 24,
    change: "+3 since previous cycle",
    trend: "up",
  },
  {
    label: "Global Risk Index",
    value: "7.4 / 10",
    change: "+0.6 this week",
    trend: "up",
  },
  {
    label: "Regions Affected",
    value: 19,
    change: "6 severe clusters",
    trend: "up",
  },
  {
    label: "Model Confidence",
    value: "94.2%",
    change: "Across 11 live pipelines",
    trend: "stable",
  },
];

export const riskSnapshots: RiskSnapshot[] = [
  {
    label: "Flood systems",
    value: "Elevated",
    detail: "3 critical basins under active watch",
    tone: "critical",
  },
  {
    label: "Conflict signals",
    value: "Escalating",
    detail: "2 corridors showing multi-source convergence",
    tone: "high",
  },
  {
    label: "Trade chokepoints",
    value: "Stressed",
    detail: "Malacca and Suez under sustained pressure",
    tone: "high",
  },
  {
    label: "Wildfire spread",
    value: "Managed",
    detail: "Western US and Mediterranean on watch",
    tone: "moderate",
  },
];

export const systemInsights: InsightCard[] = [
  {
    id: "insight-1",
    eyebrow: "Nowcasting",
    title: "Compound flood stress is the most immediate global concern",
    description:
      "Hydrology, rainfall anomaly, and urban exposure layers are aligning faster than conflict or trade risk over the next 72 hours.",
  },
  {
    id: "insight-2",
    eyebrow: "Supply chain",
    title: "Two maritime chokepoints are driving downstream volatility",
    description:
      "A synchronized disruption in Malacca and Suez would amplify inventory stress in electronics, food, and energy markets.",
  },
  {
    id: "insight-3",
    eyebrow: "AI posture",
    title: "Confidence remains highest where orbital and telemetry signals overlap",
    description:
      "The strongest predictions are tied to regions where satellite, port, weather, and movement indicators confirm each other.",
  },
];

export const responseTimeline: TimelinePoint[] = [
  {
    time: "T+00",
    label: "Detection",
    detail: "Anomalies scored against environmental and geopolitical baselines.",
  },
  {
    time: "T+04m",
    label: "Fusion",
    detail: "Orbital, weather, logistics, and open-source signals are merged into one event graph.",
  },
  {
    time: "T+11m",
    label: "Prediction",
    detail: "Scenario engine estimates spread, impact radius, and confidence bands.",
  },
  {
    time: "T+17m",
    label: "Action",
    detail: "Analyst-grade recommendations are routed to operators and regional teams.",
  },
];

export const quickPrompts = [
  "Analyze flood escalation risk in South Asia over the next 72 hours",
  "Model supply chain consequences if Malacca congestion persists for 10 days",
  "Assess humanitarian exposure in the Horn of Africa relief corridor",
  "Summarize wildfire spread potential in the California Coastal Range",
];

export const mockAnalysisResponses: Record<string, AnalysisResult> = {
  default: {
    summary:
      "Multi-source signals indicate an elevated compound risk posture. Environmental stress, infrastructure fragility, and mobility disruption are reinforcing one another, which increases the probability of secondary impacts if no intervention is made.",
    predictedOutcomes: [
      "Meaningful humanitarian pressure is likely within 7-14 days if current trajectories hold.",
      "Adjacent regions may inherit spillover effects through trade, displacement, or service disruption.",
      "Critical infrastructure reliability is vulnerable where exposure and response capacity are mismatched.",
    ],
    recommendedActions: [
      "Move the region to priority watch and increase revisit cadence on the highest-risk corridor.",
      "Pre-position response assets in neighboring safe zones with strong logistics access.",
      "Brief regional decision-makers with a 72-hour update cycle and escalation thresholds.",
    ],
    confidenceScore: 87,
    riskLevel: "high",
    timeHorizon: "7-14 days",
    watchpoints: ["Population movement", "Infrastructure outages", "Commodity availability"],
  },
  flood: {
    summary:
      "Hydrology and precipitation layers are showing strong convergence. Flood expansion is no longer a standalone rainfall story; it is becoming a compound urban resilience event with drainage, access, and health-system implications.",
    predictedOutcomes: [
      "Major inundation remains highly probable within 48-72 hours across low-lying districts.",
      "Evacuation friction will increase where road access overlaps with waterlogging and population density.",
      "Post-event disease exposure may rise sharply if sanitation systems are disrupted for more than 72 hours.",
    ],
    recommendedActions: [
      "Trigger evacuation planning for the lowest elevation clusters first.",
      "Pre-stage mobile water purification, shelter kits, and river monitoring teams.",
      "Refresh flood extent modeling every 6 hours until precipitation normalizes.",
    ],
    confidenceScore: 94,
    riskLevel: "critical",
    timeHorizon: "48-72 hours",
    watchpoints: ["River gauge surge", "Road passability", "Hospital backup power"],
  },
  conflict: {
    summary:
      "Escalation markers are rising across troop movement, communications strain, and civilian displacement. The signal pattern suggests a fast deterioration scenario rather than a slow-burn political standoff.",
    predictedOutcomes: [
      "Localized kinetic escalation is plausible inside one week.",
      "Civilian access corridors may degrade before infrastructure damage becomes visible.",
      "Cross-border spillover risk is moderate if displacement accelerates.",
    ],
    recommendedActions: [
      "Escalate diplomatic and humanitarian coordination immediately.",
      "Increase ISR coverage over transport corridors and population exits.",
      "Prepare continuity plans for power, water, and communications interruptions.",
    ],
    confidenceScore: 82,
    riskLevel: "critical",
    timeHorizon: "3-7 days",
    watchpoints: ["Border traffic", "Fuel availability", "Communications outages"],
  },
  supply: {
    summary:
      "The current stress picture suggests a classic chokepoint cascade. Even without a full closure, congestion and risk pricing are sufficient to create knock-on effects for manufacturing and consumer goods.",
    predictedOutcomes: [
      "Shipment delays are likely to persist for multiple weeks if no relief measures are introduced.",
      "Electronics and energy-sensitive sectors will absorb the earliest cost pressure.",
      "Alternate routing may stabilize capacity but will still increase landed costs materially.",
    ],
    recommendedActions: [
      "Prioritize alternate routing options for critical goods now rather than after full disruption.",
      "Issue resilience guidance to inventory-sensitive manufacturers and distributors.",
      "Track insurance, berth utilization, and dwell time as the key leading indicators.",
    ],
    confidenceScore: 79,
    riskLevel: "high",
    timeHorizon: "14-30 days",
    watchpoints: ["Port dwell time", "Insurance spread", "Factory inventory buffers"],
  },
  earthquake: {
    summary:
      "The seismic picture is elevated but not yet indicative of imminent failure. The correct posture is disciplined watchfulness with targeted readiness rather than broad alarm.",
    predictedOutcomes: [
      "Alertness will likely remain elevated over the next cycle of observations.",
      "False positives are possible, but the cost of under-preparation is high in dense corridors.",
      "Preparedness messaging may reduce response lag without triggering unnecessary panic.",
    ],
    recommendedActions: [
      "Maintain enhanced station watch and daily readiness review.",
      "Audit emergency communications and shelter readiness in exposed districts.",
      "Pair technical monitoring with calm public guidance on preparedness steps.",
    ],
    confidenceScore: 68,
    riskLevel: "moderate",
    timeHorizon: "Watchlist",
    watchpoints: ["Micro-tremor density", "Station variance", "Public readiness posture"],
  },
  wildfire: {
    summary:
      "Wildfire risk is being driven primarily by fuel dryness and wind timing rather than active fire load. This creates a short warning window once ignition conditions align.",
    predictedOutcomes: [
      "Rapid spread events become more likely if wind conditions intensify over the next week.",
      "Smoke exposure could outpace direct flame impact in dense downstream communities.",
      "Localized suppression strain is possible during back-to-back ignition events.",
    ],
    recommendedActions: [
      "Pre-position response crews at corridor edges rather than in city cores.",
      "Update ignition watch maps using thermal and vegetation layers each morning.",
      "Coordinate public advisories around smoke and power shutoff contingencies.",
    ],
    confidenceScore: 76,
    riskLevel: "moderate",
    timeHorizon: "5-9 days",
    watchpoints: ["Wind corridor timing", "Fuel moisture", "Ignition density"],
  },
};

export function getAnalysisForPrompt(prompt: string): AnalysisResult {
  const normalizedPrompt = prompt.toLowerCase();

  if (normalizedPrompt.includes("flood") || normalizedPrompt.includes("rain")) {
    return mockAnalysisResponses.flood;
  }

  if (normalizedPrompt.includes("conflict") || normalizedPrompt.includes("corridor")) {
    return mockAnalysisResponses.conflict;
  }

  if (
    normalizedPrompt.includes("supply") ||
    normalizedPrompt.includes("trade") ||
    normalizedPrompt.includes("logistics") ||
    normalizedPrompt.includes("malacca") ||
    normalizedPrompt.includes("suez")
  ) {
    return mockAnalysisResponses.supply;
  }

  if (normalizedPrompt.includes("earthquake") || normalizedPrompt.includes("seismic")) {
    return mockAnalysisResponses.earthquake;
  }

  if (normalizedPrompt.includes("wildfire") || normalizedPrompt.includes("fire")) {
    return mockAnalysisResponses.wildfire;
  }

  return mockAnalysisResponses.default;
}
