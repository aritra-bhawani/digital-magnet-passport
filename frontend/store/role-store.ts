import { create } from "zustand";

export type UserRole =
  | "Public"
  | "Manufacturer"
  | "Recycler"
  | "Auditor"
  | "Regulator";

type RoleStore = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

export const useRoleStore = create<RoleStore>((set) => ({
  role: "Public",
  setRole: (role) => set({ role }),
}));