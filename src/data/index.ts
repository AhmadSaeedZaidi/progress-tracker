import { rawBranches } from "./branches";
import { skills } from "./skills";
import { perks } from "./perks";
import { categories } from "./categories";
import type { Branch } from "../models/Branch";

// Attach skillIds to each branch
export const branches: Branch[] = rawBranches.map(branch => ({
    ...branch,
    skillIds: skills.filter(s => s.branchId === branch.id).map(s => s.id),
}));

export { skills, perks, categories };