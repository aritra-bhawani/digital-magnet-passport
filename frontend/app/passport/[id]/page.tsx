import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  CheckCircle2,
  CircleX,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { mockPassports } from "@/data/mock-passports";
import { CompositionDisclosure } from "@/components/passport/composition-disclosure";
type PassportDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getStatusVariant(status: string) {
  return status === "Verified" ? "default" : "outline";
}

function displayValue(value: string | null) {
  return value ?? "Not available";
}

export default async function PassportDetailsPage({
  params,
}: PassportDetailsPageProps) {
  const { id } = await params;

  const passport = mockPassports.find(
    (item) => item.passportId === id
  );

  if (!passport) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <Button asChild variant="ghost" className="-ml-3 mb-2">
            <Link href="/passport">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Passports
            </Link>
          </Button>

          <h1 className="text-3xl font-semibold tracking-tight">
            {passport.passportId}
          </h1>

          <p className="mt-1 text-muted-foreground">
            Digital magnet passport details, composition,
            performance, provenance and compliance information.
          </p>
        </div>

        <Badge
          variant={getStatusVariant(
            passport.verificationStatus
          )}
          className="w-fit"
        >
          {passport.verificationStatus}
        </Badge>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList className="h-auto flex-wrap">
          <TabsTrigger value="overview">
            Overview
          </TabsTrigger>

          <TabsTrigger value="composition">
            Composition
          </TabsTrigger>

          <TabsTrigger value="performance">
            Performance
          </TabsTrigger>

          <TabsTrigger value="provenance">
            Provenance
          </TabsTrigger>

          <TabsTrigger value="circularity">
            Circularity
          </TabsTrigger>

          <TabsTrigger value="compliance">
            Compliance
          </TabsTrigger>

          <TabsTrigger value="verification">
            Verification
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Origin
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.origin}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Current Stage
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.currentStage}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Recycled Content
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.recycledContent}%
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Carbon Footprint
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.carbonFootprint
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Radioactivity Status
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.radioactivityStatus
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Conflict-Free Status
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.conflictFreeStatus
                    )}
                  </dd>
                </div>

                <div className="sm:col-span-2">
                  <dt className="text-sm text-muted-foreground">
                    Certification Summary
                  </dt>

                  <dd className="mt-3 flex flex-wrap gap-2">
                    {passport.certifications.map(
                      (certification) => (
                        <Badge
                          key={certification.name}
                          variant="outline"
                        >
                          {certification.name}:{" "}
                          {certification.status}
                        </Badge>
                      )
                    )}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="composition">
          <CompositionDisclosure
            composition={passport.composition}
          />
        </TabsContent>

        <TabsContent value="performance">
          <Card>
            <CardHeader>
              <CardTitle>Performance</CardTitle>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Grade
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.performance.grade
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Coercivity
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.performance.coercivity
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Remanence
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.performance.remanence
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Temperature Class
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.performance
                        .temperatureClass
                    )}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Performance Category
                  </dt>
                  <dd className="mt-1 font-medium">
                    {displayValue(
                      passport.performance
                        .performanceCategory
                    )}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="provenance">
          <Card>
            <CardHeader>
              <CardTitle>Provenance</CardTitle>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Origin
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.origin}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Current Stage
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.currentStage}
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="circularity">
          <Card>
            <CardHeader>
              <CardTitle>Circularity</CardTitle>
            </CardHeader>

            <CardContent>
              <dl className="grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-muted-foreground">
                    Lifecycle
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.lifecycle}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-muted-foreground">
                    Recycled Content
                  </dt>
                  <dd className="mt-1 font-medium">
                    {passport.recycledContent}%
                  </dd>
                </div>
              </dl>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="compliance">
          <Card>
            <CardHeader>
              <CardTitle>
                Compliance and Certification
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {passport.certifications.map(
                  (certification) => (
                    <div
                      key={certification.name}
                      className="rounded-lg border p-4"
                    >
                      <p className="font-medium">
                        {certification.name}
                      </p>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {certification.status}
                      </p>
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="verification">
          <Card>
            <CardHeader>
              <CardTitle>Verification</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <div className="rounded-lg border p-4">
                <p className="text-sm text-muted-foreground">
                  Verification Status
                </p>
                <p className="mt-1 font-medium">
                  {passport.verificationStatus}
                </p>
              </div>

              <div className="rounded-lg border p-4">
                ✓ Contains Nd
              </div>

              <div className="rounded-lg border p-4">
                ✓ Contains Dy
              </div>

              <div className="rounded-lg border p-4">
                ✓ Recycled Content &gt; 20%
              </div>

              <div className="rounded-lg border p-4">
                ✓ Origin Verified
              </div>

              <div className="rounded-lg border p-4">
                ✓ CRMA Compliant
              </div>

              <div className="rounded-lg border p-4">
                ✓ CBAM Compliant
              </div>

              <div className="rounded-lg border p-4">
                ✓ ESG Compliant
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}