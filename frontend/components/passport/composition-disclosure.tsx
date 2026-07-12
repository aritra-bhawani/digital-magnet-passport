"use client";

import { useState } from "react";
import { CheckCircle2, CircleX } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { CompositionElement } from "@/types/passport";

const roles = [
  "Public",
  "Manufacturer",
  "Recycler",
  "Auditor",
  "Regulator",
] as const;

type Role = (typeof roles)[number];

type CompositionDisclosureProps = {
  composition: CompositionElement[];
};

export function CompositionDisclosure({
  composition,
}: CompositionDisclosureProps) {
  const [selectedRole, setSelectedRole] =
    useState<Role>("Public");

  const showExactValues =
    selectedRole === "Manufacturer" ||
    selectedRole === "Recycler";

  const showRanges =
    selectedRole === "Auditor" ||
    selectedRole === "Regulator";

  return (
    <Card>
      <CardHeader>
        <CardTitle>Composition Disclosure</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="flex flex-wrap gap-2">
          {roles.map((role) => (
            <Button
              key={role}
              type="button"
              variant={
                selectedRole === role
                  ? "default"
                  : "outline"
              }
              onClick={() => setSelectedRole(role)}
            >
              {role}
            </Button>
          ))}
        </div>

        <div className="rounded-lg border p-4">
          <p className="text-sm text-muted-foreground">
            Current disclosure level
          </p>

          <p className="mt-1 font-medium">
            {showExactValues
              ? "Exact Value"
              : showRanges
                ? "Range"
                : "Presence"}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {composition.map((element) => (
            <div
              key={element.symbol}
              className="rounded-lg border p-4"
            >
              <div className="flex items-center justify-between">
                <p className="font-semibold">
                  {element.symbol}
                </p>

                {element.present ? (
                  <CheckCircle2 className="h-5 w-5" />
                ) : (
                  <CircleX className="h-5 w-5" />
                )}
              </div>

              <div className="mt-3 text-sm text-muted-foreground">
                {showExactValues ? (
                  <p>
                    {element.exactValue !== null
                      ? `${element.exactValue}${element.unit}`
                      : "Exact value not available"}
                  </p>
                ) : showRanges ? (
                  <p>
                    {element.range ??
                      "Range not available"}
                  </p>
                ) : (
                  <p>
                    {element.present
                      ? `Contains ${element.symbol}`
                      : `Does not contain ${element.symbol}`}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}