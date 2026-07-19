"use client";

import { LockKeyhole, UnlockKeyhole } from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useRoleStore } from "@/store/role-store";

const accessRules = {
  Public: [
    { label: "Passport Data", access: "Visible" },
    { label: "Compliance Summary", access: "Visible" },
    { label: "Verification Results", access: "Visible" },
    { label: "Exact Composition", access: "Restricted" },
    { label: "Detailed Provenance", access: "Restricted" },
  ],
  Manufacturer: [
    { label: "Passport Data", access: "Visible" },
    { label: "Full Composition", access: "Visible" },
    { label: "Performance Information", access: "Visible" },
    { label: "Compliance Summary", access: "Visible" },
    { label: "Detailed Provenance", access: "Restricted" },
  ],
  Recycler: [
    { label: "Composition", access: "Visible" },
    { label: "Circularity", access: "Visible" },
    { label: "Recovery Recommendations", access: "Visible" },
    { label: "Exact Recycled Content", access: "Visible" },
    { label: "Detailed Supplier Relationships", access: "Restricted" },
  ],
  Auditor: [
    { label: "Detailed Provenance", access: "Visible" },
    { label: "Audit Information", access: "Visible" },
    { label: "Verification Records", access: "Visible" },
    { label: "Composition Range", access: "Visible" },
    { label: "Commercial IP", access: "Restricted" },
  ],
  Regulator: [
    { label: "Detailed Provenance", access: "Visible" },
    { label: "Verification Records", access: "Visible" },
    { label: "Compliance Evidence", access: "Visible" },
    { label: "Composition Range", access: "Visible" },
    { label: "Commercial IP", access: "Restricted" },
  ],
} as const;

export function AccessSummary() {
  const role = useRoleStore((state) => state.role);
  const rules = accessRules[role];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Role-Based Access Summary</CardTitle>
      </CardHeader>

      <CardContent>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {rules.map((rule) => {
            const isVisible = rule.access === "Visible";
            const Icon = isVisible ? UnlockKeyhole : LockKeyhole;

            return (
              <div key={rule.label} className="rounded-lg border p-4">
                <div className="flex items-center gap-2">
                  <Icon className="h-5 w-5" />
                  <p className="font-medium">{rule.label}</p>
                </div>

                <p className="mt-2 text-sm text-muted-foreground">
                  {rule.access}
                </p>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}