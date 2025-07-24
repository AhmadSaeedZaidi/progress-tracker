export interface Skill {
  id: string;
  name: string;
  branchId: string;
  categoryId?: string;
  description?: string;
  level?: number;
  experience?: number;
  goal?: number;
  perkIds?: string[]; // Reference to perk IDs instead of embedded perks
  unlocked?: boolean;
  dateUnlocked?: string;
}