import { CircularityFlow } from "@/components/charts/circularity-flow";
import { CircularityStatCard } from "@/components/circularity/circularity-stat-card";
import { FeedstockQualityPanel } from "@/components/circularity/feedstock-quality-panel";
import { MaterialRecoveryCard } from "@/components/circularity/material-recovery-card";

export default function CircularityPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Circularity Dashboard
        </h1>

        <p className="mt-1 text-muted-foreground">
          Review material circularity, feedstock quality and recovery potential.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        <CircularityStatCard title="Virgin Content" value="78%" />
        <CircularityStatCard title="Recycled Content" value="22%" />
        <CircularityStatCard title="Reuse Cycles" value={2} />
        <CircularityStatCard title="Current State" value="In Service" />
        <CircularityStatCard
          title="Recommended End-of-Life"
          value="Short-Loop Recycling"
        />
      </section>

      <FeedstockQualityPanel />

      <CircularityFlow />

      <MaterialRecoveryCard />
    </div>
  );
}