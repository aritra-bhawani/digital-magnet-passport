import Link from "next/link";

import { mockPassports } from "@/data/mock-passports";

export default function PassportPage() {
  return (
    <main className="p-6">
      <h1 className="text-3xl font-semibold">
        Digital Magnet Passports
      </h1>

      <div className="mt-6 space-y-3">
        {mockPassports.map((passport) => (
          <Link
            key={passport.passportId}
            href={`/passport/${passport.passportId}`}
            className="block rounded-lg border p-4 transition hover:bg-muted"
          >
            <p className="font-medium">{passport.passportId}</p>

            <p className="text-sm text-muted-foreground">
              {passport.magnetType} · {passport.sector} ·{" "}
              {passport.origin}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}