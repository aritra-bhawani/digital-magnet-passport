import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockPassports } from "@/data/mock-passports";

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

export default function PassportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-tight">
          Digital Magnet Passports
        </h1>

        <p className="mt-1 text-muted-foreground">
          View registered magnet passports and their verification status.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Registered Passports</CardTitle>
        </CardHeader>

        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Passport ID</TableHead>
                  <TableHead>Magnet Type</TableHead>
                  <TableHead>Sector</TableHead>
                  <TableHead>Origin</TableHead>
                  <TableHead>Recycled Content</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Action</TableHead>
                </TableRow>
              </TableHeader>

              <TableBody>
                {mockPassports.map((passport) => (
                  <TableRow key={passport.passportId}>
                    <TableCell className="font-medium">
                      {passport.passportId}
                    </TableCell>

                    <TableCell>{passport.magnetType}</TableCell>
                    <TableCell>{passport.sector}</TableCell>
                    <TableCell>{passport.origin}</TableCell>
                    <TableCell>
                      {passport.recycledContent}%
                    </TableCell>

                    <TableCell>
                      <Badge
                        variant={getStatusVariant(passport.status)}
                      >
                        {passport.status}
                      </Badge>
                    </TableCell>

                    <TableCell className="text-right">
                      <Button asChild size="sm" variant="outline">
                        <Link
                          href={`/passport/${passport.passportId}`}
                        >
                          View
                        </Link>
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}