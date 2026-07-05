import Link from "next/link";
import {
  CheckCircle2,
  FileText,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { SummaryCard } from "@/components/dashboard/summary-card";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockPassports } from "@/data/mock-passports";

export default function DashboardPage() {
  const totalPassports = mockPassports.length;

  const verifiedPassports = mockPassports.filter(
    (passport) => passport.status === "Verified"
  ).length;

  const activePassports = mockPassports.filter(
    (passport) => passport.status === "Active"
  ).length;

  const averageRecycledContent = Math.round(
    mockPassports.reduce(
      (total, passport) => total + passport.recycledContent,
      0
    ) / totalPassports
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Dashboard
        </h1>

        <p className="mt-1 text-muted-foreground">
          Overview of digital magnet passports and verification status.
        </p>
      </div>

      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <SummaryCard
          title="Total Passports"
          value={totalPassports}
          description="Digital passports currently registered"
          icon={FileText}
        />

        <SummaryCard
          title="Verified"
          value={verifiedPassports}
          description="Passports with completed verification"
          icon={ShieldCheck}
        />

        <SummaryCard
          title="Active"
          value={activePassports}
          description="Passports currently active"
          icon={CheckCircle2}
        />

        <SummaryCard
          title="Average Recycled Content"
          value={`${averageRecycledContent}%`}
          description="Average across registered magnets"
          icon={Leaf}
        />
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Recent Passports</CardTitle>
        </CardHeader>

        <CardContent className="space-y-3">
          {mockPassports.map((passport) => (
            <Link
              key={passport.passportId}
              href={`/passport/${passport.passportId}`}
              className="flex items-center justify-between rounded-lg border p-4 transition hover:bg-muted"
            >
              <div>
                <p className="font-medium">{passport.passportId}</p>

                <p className="text-sm text-muted-foreground">
                  {passport.magnetType} · {passport.sector} ·{" "}
                  {passport.origin}
                </p>
              </div>

              <Badge variant="outline">{passport.status}</Badge>
            </Link>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}