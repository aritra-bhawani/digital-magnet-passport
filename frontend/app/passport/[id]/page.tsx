import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Factory,
  Globe2,
  Leaf,
  ShieldCheck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockPassports } from "@/data/mock-passports";

type PassportDetailsPageProps = {
  params: Promise<{
    id: string;
  }>;
};

function getStatusVariant(status: string) {
  switch (status) {
    case "Verified":
      return "default";
    case "Active":
      return "secondary";
    default:
      return "outline";
  }
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
            Digital magnet passport details and verification information.
          </p>
        </div>

        <Badge
          variant={getStatusVariant(passport.status)}
          className="w-fit"
        >
          {passport.status}
        </Badge>
      </div>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <Factory className="h-4 w-4 text-muted-foreground" />
              Magnet Type
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {passport.magnetType}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
              Sector
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {passport.sector}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <Globe2 className="h-4 w-4 text-muted-foreground" />
              Origin
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {passport.origin}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="flex items-center gap-2 text-sm font-medium">
              <Leaf className="h-4 w-4 text-muted-foreground" />
              Recycled Content
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold">
              {passport.recycledContent}%
            </p>
          </CardContent>
        </Card>
      </section>

      <Card>
        <CardHeader>
          <CardTitle>Passport Information</CardTitle>
        </CardHeader>

        <CardContent>
          <dl className="grid gap-6 sm:grid-cols-2">
            <div>
              <dt className="text-sm text-muted-foreground">
                Passport ID
              </dt>
              <dd className="mt-1 font-medium">
                {passport.passportId}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Verification Status
              </dt>
              <dd className="mt-1 font-medium">
                {passport.status}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Magnet Type
              </dt>
              <dd className="mt-1 font-medium">
                {passport.magnetType}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Application Sector
              </dt>
              <dd className="mt-1 font-medium">
                {passport.sector}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Country of Origin
              </dt>
              <dd className="mt-1 font-medium">
                {passport.origin}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Recycled Material
              </dt>
              <dd className="mt-1 font-medium">
                {passport.recycledContent}%
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}