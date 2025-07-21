export interface Perk {
  id: string;
  name: string;
  description?: string;
  unlocked?: boolean;
  dateUnlocked?: string;
}