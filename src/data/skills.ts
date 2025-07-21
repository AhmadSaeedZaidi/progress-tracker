import type { Skill } from "../models/Skill";

export const skills: Skill[] = [
  { id: 'html', name: 'HTML', branchId: 'web-dev', experience: 150, level: 2, goal: 300, unlocked: true, categoryId: 'frontend' },
  { id: 'css', name: 'CSS', branchId: 'web-dev', experience: 200, level: 3, goal: 400, unlocked: true, categoryId: 'frontend' },
  { id: 'js', name: 'JavaScript', branchId: 'web-dev', experience: 100, level: 1, goal: 250, unlocked: false },
  { id: 'webgl', name: 'WebGL', branchId: 'graphics', experience: 50, level: 1, goal: 200, unlocked: false },
  { id: 'threejs', name: 'Three.js', branchId: 'graphics', experience: 75, level: 1, goal: 300, unlocked: true, categoryId: 'frontend' },
  { id: 'rl-basics', name: 'RL Basics', branchId: 'rl', experience: 25, level: 0, goal: 100, unlocked: false },
  { id: 'writing', name: 'Academic Writing', branchId: 'writing', experience: 300, level: 4, goal: 500, unlocked: true, perks: [{ id: 'researcher', name: 'Researcher', description: 'Unlock advanced writing tools.', unlocked: true, dateUnlocked: '2024-02-01' }] },
  { id: 'citations', name: 'Citations', branchId: 'writing', experience: 80, level: 1, goal: 150, unlocked: true },
  { id: 'physics', name: 'Physics Engines', branchId: 'sim-robotics', experience: 0, level: 0, goal: 200, unlocked: false },
  { id: 'robotics', name: 'Robotics', branchId: 'sim-robotics', experience: 120, level: 2, goal: 400, unlocked: true },
];