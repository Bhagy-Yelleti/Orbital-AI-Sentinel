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
    situation:
      "Multi-domain threat convergence detected. Environmental stress, infrastructure fragility, and mobility disruption are reinforcing simultaneously across the assessed corridor.",
    cause:
      "Compound signal overlap across hydrology, logistics, and population movement layers. No single driver is dominant — risk is systemic and self-reinforcing.",
    summary:
      "Assessment indicates elevated compound risk posture with moderate-to-high probability of secondary cascades if no intervention is initiated within the current window. Signal confidence is sufficient to warrant escalation to priority watch.",
    predictedOutcomes: [
      "Humanitarian pressure will materialize within 7–14 days if current trajectories hold. Adjacent regions face spillover exposure through trade, displacement, and service degradation.",
      "Critical infrastructure reliability is at risk where exposure density and response capacity are mismatched. Failure in one node is likely to propagate.",
      "Without pre-positioning, response lag will exceed the effective intervention window by an estimated 48–72 hours.",
    ],
    recommendedActions: [
      "Elevate region to Priority Watch. Increase sensor revisit cadence on highest-risk corridor to 6-hour intervals.",
      "Pre-position response assets in adjacent safe zones with confirmed logistics access. Do not wait for confirmed escalation.",
      "Issue 72-hour update cycle to regional decision-makers with defined escalation thresholds and trigger criteria.",
    ],
    confidenceScore: 87,
    riskLevel: "high",
    timeHorizon: "7–14 days",
    watchpoints: ["Population movement vectors", "Infrastructure node failures", "Commodity availability index"],
    sourceSignals: ["Multi-source fusion", "Orbital SAR", "Logistics telemetry", "Open-source indicators"],
  },

  flood: {
    situation:
      "CRITICAL — Imminent large-scale inundation event assessed across low-lying urban corridors. Rainfall anomaly has exceeded seasonal norms by 3.4 sigma. River gauge readings are above the 95th historical percentile.",
    cause:
      "Sustained monsoon intensification combined with saturated drainage infrastructure and upstream reservoir overflow. Urban heat island effect is amplifying localized precipitation. Drainage capacity is at 100% saturation across primary channels.",
    summary:
      "Hydrology and precipitation layers are in full convergence. This is no longer a standalone rainfall event — it is a compound urban resilience failure with cascading implications for access, sanitation, and health system capacity. Inundation onset is assessed as imminent within the 48–72 hour window.",
    predictedOutcomes: [
      "Major inundation of low-elevation districts is assessed at 92% probability within 48–72 hours. Affected population exposure estimated at 21.7M.",
      "Road network passability will degrade sharply within 24 hours of peak rainfall, creating evacuation friction in high-density zones.",
      "Post-event disease exposure risk (cholera, waterborne pathogens) will escalate significantly if sanitation systems remain disrupted beyond 72 hours.",
    ],
    recommendedActions: [
      "IMMEDIATE: Trigger evacuation planning for lowest-elevation clusters. Prioritize mobility-limited populations and hospital zones.",
      "Pre-stage mobile water purification units, emergency shelter kits, and river monitoring teams at forward positions.",
      "Refresh flood extent modeling every 6 hours. Do not rely on static projections — conditions are evolving faster than baseline models.",
    ],
    confidenceScore: 94,
    riskLevel: "critical",
    timeHorizon: "48–72 hours",
    watchpoints: ["River gauge surge rate", "Road passability index", "Hospital backup power status", "Drainage overflow points"],
    sourceSignals: ["Hydrology sensors", "Satellite precipitation radar", "Urban drainage telemetry", "Historical analog matching"],
  },

  conflict: {
    situation:
      "CRITICAL — Escalation markers are rising across armored movement, communications disruption, and civilian displacement vectors. Signal pattern is consistent with fast-deterioration scenario, not a slow-burn political standoff.",
    cause:
      "SAR imagery confirms anomalous armored vehicle concentration near logistics nodes. Civilian displacement signals have spiked 340% above baseline over 72 hours. Communications cluster disruptions indicate deliberate infrastructure targeting.",
    summary:
      "Multi-source convergence across orbital, signals, and field indicators points to imminent kinetic escalation. The window for pre-conflict intervention is narrowing. Civilian corridor integrity is degrading ahead of visible infrastructure damage — a pattern consistent with prior escalation events in this region.",
    predictedOutcomes: [
      "Localized kinetic escalation is assessed as probable within 3–7 days. Confidence: 87%. Civilian access corridors will degrade before infrastructure damage becomes externally visible.",
      "Cross-border displacement spillover is assessed as moderate risk if population movement accelerates beyond current trajectory.",
      "Humanitarian supply chain disruption is likely within 5 days. Aid access to forward positions will be severely constrained.",
    ],
    recommendedActions: [
      "IMMEDIATE: Escalate diplomatic and humanitarian coordination. Establish protected corridor agreements before access degrades.",
      "Increase ISR coverage over transport corridors and population exit routes. Prioritize real-time tracking of armored movement.",
      "Activate continuity plans for power, water, and communications. Do not assume infrastructure will remain intact past Day 3.",
    ],
    confidenceScore: 82,
    riskLevel: "critical",
    timeHorizon: "3–7 days",
    watchpoints: ["Border crossing traffic volume", "Fuel availability at logistics nodes", "Communications outage clusters", "Armored movement vectors"],
    sourceSignals: ["Orbital SAR imagery", "Signals intelligence", "Civilian displacement tracking", "Field reports"],
  },

  supply: {
    situation:
      "HIGH — Chokepoint cascade in progress. Port congestion at 340% of baseline. Insurance premiums have widened 420% over 30 days. Rerouting pressure is building across primary and secondary lanes.",
    cause:
      "Simultaneous stress on two critical maritime chokepoints (Malacca, Suez) is compressing global container throughput. AIS traffic divergence confirms active rerouting. Berth dwell time spike indicates systemic congestion, not isolated incident.",
    summary:
      "The current stress picture is a textbook chokepoint cascade. Even without full closure, congestion and risk pricing are sufficient to generate knock-on effects across electronics, energy, and food supply chains. Alternate routing is available but will increase landed costs materially and extend delivery windows by 14–21 days.",
    predictedOutcomes: [
      "Shipment delays of 14–30 days are probable for cargo transiting affected lanes. Electronics and energy-sensitive sectors will absorb earliest cost pressure.",
      "Inventory buffers in just-in-time manufacturing will reach critical thresholds within 3 weeks if congestion persists.",
      "Alternate routing via Cape of Good Hope will stabilize capacity but increase per-unit logistics cost by an estimated 18–24%.",
    ],
    recommendedActions: [
      "Activate alternate routing for critical goods immediately. Do not wait for full disruption confirmation — lead time is already inside the buffer window.",
      "Issue resilience guidance to inventory-sensitive manufacturers. Flag electronics, pharmaceuticals, and perishables as priority categories.",
      "Monitor insurance spread, berth utilization, and dwell time as primary leading indicators. These will signal recovery before AIS traffic normalizes.",
    ],
    confidenceScore: 79,
    riskLevel: "high",
    timeHorizon: "14–30 days",
    watchpoints: ["Port dwell time", "Insurance spread index", "Factory inventory buffers", "Alternate route capacity"],
    sourceSignals: ["AIS vessel tracking", "Port telemetry", "Insurance market data", "Trade graph analysis"],
  },

  earthquake: {
    situation:
      "MODERATE — Seismic monitoring belt remains on elevated watch. Micro-tremor cluster density has increased 280% above baseline. No imminent rupture assessed, but preparedness posture is insufficient for current signal environment.",
    cause:
      "Micro-tremor clustering near the Nankai arc is consistent with stress accumulation patterns observed 6–18 months prior to historical moderate-to-major events in this zone. Station variance has increased across three independent monitoring nodes.",
    summary:
      "The seismic picture is elevated but not indicative of imminent failure. The correct posture is disciplined watchfulness with targeted readiness — not broad alarm. The cost of under-preparation in a dense urban corridor significantly outweighs the cost of precautionary measures.",
    predictedOutcomes: [
      "Elevated alertness is expected to persist through the next 2–3 observation cycles. Probability of M6.0+ event within 90 days: 42%. Confidence: 71%.",
      "False positive risk is present, but historical analog matching supports continued elevated watch status.",
      "If a moderate event occurs, secondary infrastructure failures (power, water, transport) are the primary concern — not direct seismic damage.",
    ],
    recommendedActions: [
      "Maintain enhanced station watch. Conduct daily readiness review with defined escalation triggers.",
      "Audit emergency communications, shelter readiness, and hospital backup systems in exposed districts.",
      "Issue calm, factual public preparedness guidance. Avoid language that triggers panic — focus on actionable steps.",
    ],
    confidenceScore: 68,
    riskLevel: "moderate",
    timeHorizon: "90-day watch",
    watchpoints: ["Micro-tremor density index", "Station variance across nodes", "Public preparedness posture", "Infrastructure resilience audit"],
    sourceSignals: ["Seismic mesh network", "Historical analog database", "Station telemetry", "Geological survey data"],
  },

  wildfire: {
    situation:
      "MODERATE — Wildfire ignition risk is elevated across the assessed corridor. Fuel dryness has reached seasonal peak. Offshore wind corridor alignment creates conditions for rapid spread if ignition occurs.",
    cause:
      "18-day precipitation deficit has driven vegetation moisture to critical lows. NDVI analysis confirms widespread fuel stress. Diablo wind pattern is forecast to align with primary ignition corridors within 5–9 days.",
    summary:
      "Risk is driven by fuel dryness and wind timing, not active fire load. This creates a compressed warning window — once ignition conditions align, spread potential is high and suppression capacity will be strained. The threat is probabilistic but the consequence profile is severe.",
    predictedOutcomes: [
      "Rapid spread events become probable if wind conditions intensify as forecast. Estimated spread rate under peak conditions: 2,000+ acres/hour in primary corridors.",
      "Smoke exposure will outpace direct flame impact for downstream communities. Air quality degradation is a near-certain secondary effect.",
      "Simultaneous ignition events will exceed local suppression capacity. Mutual aid activation will be required.",
    ],
    recommendedActions: [
      "Pre-position suppression crews at corridor edges — not city cores. Prioritize defensible space at the urban-wildland interface.",
      "Update ignition watch maps using thermal and vegetation layers each morning. Static risk maps are insufficient for current conditions.",
      "Coordinate public advisories around smoke exposure, power shutoff contingencies, and evacuation route pre-clearance.",
    ],
    confidenceScore: 76,
    riskLevel: "moderate",
    timeHorizon: "5–9 days",
    watchpoints: ["Wind corridor timing", "Fuel moisture index", "Ignition density", "Suppression resource availability"],
    sourceSignals: ["Thermal vegetation analysis", "NDVI satellite data", "Wind forecast modeling", "Historical fire behavior database"],
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
