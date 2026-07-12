"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  type UserRole,
  useRoleStore,
} from "@/store/role-store";

const roles: UserRole[] = [
  "Public",
  "Manufacturer",
  "Recycler",
  "Auditor",
  "Regulator",
];

export function DemoRoleSelector() {
  const role = useRoleStore((state) => state.role);
  const setRole = useRoleStore((state) => state.setRole);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Demonstration Role</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">
          This control demonstrates how information visibility changes
          between stakeholder roles.
        </p>

        <div className="flex flex-wrap gap-2">
          {roles.map((item) => (
            <Button
              key={item}
              type="button"
              variant={role === item ? "default" : "outline"}
              onClick={() => setRole(item)}
            >
              {item}
            </Button>
          ))}
        </div>

        <p className="text-sm">
          Current role:{" "}
          <span className="font-medium">{role}</span>
        </p>
      </CardContent>
    </Card>
  );
}