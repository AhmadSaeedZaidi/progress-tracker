import type { Achievement } from "../models/Achievement";

export const achievements: Achievement[] = [
  {
    id: 'first-steps',
    name: 'First Steps',
    description: 'Unlock your first skill',
    icon: '🚀',
    maxProgress: 1
  },
  {
    id: 'xp-hunter',
    name: 'XP Hunter',
    description: 'Accumulate 1000 total experience points',
    icon: '⚡',
    maxProgress: 1000
  },
  {
    id: 'skill-collector',
    name: 'Skill Collector',
    description: 'Unlock 25 different skills',
    icon: '🎯',
    maxProgress: 25
  },
  {
    id: 'level-master',
    name: 'Level Master',
    description: 'Reach level 5 in any skill',
    icon: '👑',
    maxProgress: 5
  },
  {
    id: 'perk-seeker',
    name: 'Perk Seeker',
    description: 'Unlock skills with perks',
    icon: '💎',
    maxProgress: 1
  },
  {
    id: 'dedication',
    name: 'Dedication',
    description: 'Accumulate 2500 total experience points',
    icon: '🔥',
    maxProgress: 2500
  },
  {
    id: 'completionist',
    name: 'Completionist',
    description: 'Unlock all available skills',
    icon: '🌟',
    maxProgress: 0 // Will be calculated dynamically based on total skills
  }
];
