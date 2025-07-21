import type { Branch } from "./Branch";
import type { Skill } from "./Skill";
import type { Perk } from "./Perk";
import type { Category } from "./Category";

import { rawBranches } from "../data/branches";
import { skills } from "../data/skills";
import { perks } from "../data/perks";
import { categories } from "../data/categories";

// Attach skillIds to each branch
export const branches: Branch[] = rawBranches.map(branch => ({
    ...branch,
    skillIds: skills.filter(s => s.branchId === branch.id).map(s => s.id),
}));

export { skills, perks, categories };