import { IntelligenceBrief } from "@/components/dashboard/IntelligenceBrief";
import { MetricsCards } from "@/components/dashboard/MetricsCards";
import { OverviewStrip } from "@/components/dashboard/OverviewStrip";
import { ResponseTimeline } from "@/components/dashboard/ResponseTimeline";
import { RiskFeed } from "@/components/dashboard/RiskFeed";
import { WorldRiskMap } from "@/components/dashboard/WorldRiskMap";
import { FilterBar } from "@/components/dashboard/FilterBar";
import { FilterProvider } from "@/components/dashboard/FilterContext";
import { DashboardHero } from "@/components/dashboard/DashboardHero";
import { riskLocations } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <FilterProvider>
      <div className="space-y-5 lg:space-y-6">
        <DashboardHero />
        <FilterBar />
        <MetricsCards />
        <OverviewStrip />
        <div className="grid gap-6 2xl:grid-cols-[1.55fr_0.85fr]">
          <WorldRiskMap locations={riskLocations} />
          <RiskFeed />
        </div>
        <IntelligenceBrief />
        <ResponseTimeline />
      </div>
    </FilterProvider>
  );
}
