import type { Passport } from "@/types/passport";

export const mockPassports: Passport[] = [
  {
    passportId: "DMP-0001",
    magnetType: "NdFeB",
    sector: "EV",
    origin: "Australia",
    recycledContent: 22,
    status: "Active",
  },
  {
    passportId: "DMP-0002",
    magnetType: "NdFeB",
    sector: "Wind",
    origin: "United Kingdom",
    recycledContent: 35,
    status: "Verified",
  },
  {
    passportId: "DMP-0003",
    magnetType: "SmCo",
    sector: "Medical",
    origin: "Japan",
    recycledContent: 12,
    status: "Pending Audit",
  },
];