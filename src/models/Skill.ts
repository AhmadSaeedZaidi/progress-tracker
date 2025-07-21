import type { Perk } from "./Perk";

export interface Skill {
  id: string;
  name: string;
  branchId: string;
  categoryId?: string;
  description?: string;
  level?: number;
  experience?: number;
  goal?: number;
  perks?: Perk[];
  unlocked?: boolean;
  dateUnlocked?: string;
}