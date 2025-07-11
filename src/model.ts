export type Branch = "graphics" | "webdev" | "ai" | "robotics";

export interface BranchProgress {
    branch: Branch;
    display: string;
    level: number;
    xp: number;
    xpForNext: number;
    perks: string[];
}

export const branches: BranchProgress[] = [
    { branch: "graphics", display: "Graphics", level: 1, xp: 0, xpForNext: 100, perks: [] },
    { branch: "webdev", display: "Web Development", level: 1, xp: 0, xpForNext: 100, perks: [] },
    { branch: "ai", display: "AI / RL", level: 1, xp: 0, xpForNext: 100, perks: [] },
    { branch: "robotics", display: "Robotics", level: 1, xp: 0, xpForNext: 100, perks: [] },
];