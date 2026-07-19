import { CertificationCard } from "@/components/certification/certification-card";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { mockPassports } from "@/data/mock-passports";

export default function CompliancePage() {
  const passport = mockPassports[0];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Compliance & Certification
        </h1>

        <p className="mt-1 text-muted-foreground">
          Review certification records, compliance claims and recycled-content certification.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Passport Summary</CardTitle>
        </CardHeader>

        <CardContent>
          <dl className="grid gap-6 sm:grid-cols-3">
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
                Type
              </dt>
              <dd className="mt-1 font-medium">
                {passport.type}
              </dd>
            </div>

            <div>
              <dt className="text-sm text-muted-foreground">
                Application
              </dt>
              <dd className="mt-1 font-medium">
                {passport.application}
              </dd>
            </div>
          </dl>
        </CardContent>
      </Card>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">
          Certification Records
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {passport.certifications.map((certification) => (
            <CertificationCard
              key={certification.name}
              name={certification.name}
              status={certification.status}
            />
          ))}
        </div>
      </section>
    </div>
  );
}