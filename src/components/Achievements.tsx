import React, { useState } from 'react';
import type { Skill } from '../models';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
  progress?: number;
  maxProgress?: number;
}

interface Props {
  skills: Skill[];
}

export function Achievements({ skills }: Props) {
  const [showAll, setShowAll] = useState(false);
  
  // Calculate achievements based on skills
  const calculateAchievements = (): Achievement[] => {
    const totalXP = skills.reduce((sum, skill) => sum + (skill.experience || 0), 0);
    const unlockedSkills = skills.filter(skill => skill.unlocked).length;
    const maxLevelSkill = skills.reduce((max, skill) => (skill.level || 0) > max ? (skill.level || 0) : max, 0);
    const skillsWithPerks = skills.filter(skill => skill.perks && skill.perks.length > 0).length;
    
    return [
      {
        id: 'first-steps',
        name: 'First Steps',
        description: 'Unlock your first skill',
        icon: '🚀',
        unlocked: unlockedSkills >= 1,
        progress: Math.min(unlockedSkills, 1),
        maxProgress: 1
      },
      {
        id: 'xp-hunter',
        name: 'XP Hunter',
        description: 'Accumulate 500 total experience points',
        icon: '⚡',
        unlocked: totalXP >= 500,
        progress: Math.min(totalXP, 500),
        maxProgress: 500
      },
      {
        id: 'skill-collector',
        name: 'Skill Collector',
        description: 'Unlock 5 different skills',
        icon: '🎯',
        unlocked: unlockedSkills >= 5,
        progress: Math.min(unlockedSkills, 5),
        maxProgress: 5
      },
      {
        id: 'level-master',
        name: 'Level Master',
        description: 'Reach level 5 in any skill',
        icon: '👑',
        unlocked: maxLevelSkill >= 5,
        progress: Math.min(maxLevelSkill, 5),
        maxProgress: 5
      },
      {
        id: 'perk-seeker',
        name: 'Perk Seeker',
        description: 'Unlock skills with perks',
        icon: '💎',
        unlocked: skillsWithPerks >= 1,
        progress: Math.min(skillsWithPerks, 1),
        maxProgress: 1
      },
      {
        id: 'dedication',
        name: 'Dedication',
        description: 'Accumulate 1000 total experience points',
        icon: '🔥',
        unlocked: totalXP >= 1000,
        progress: Math.min(totalXP, 1000),
        maxProgress: 1000
      },
      {
        id: 'completionist',
        name: 'Completionist',
        description: 'Unlock all available skills',
        icon: '🌟',
        unlocked: unlockedSkills >= skills.length && skills.length > 0,
        progress: unlockedSkills,
        maxProgress: skills.length
      }
    ];
  };

  const achievements = calculateAchievements();
  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const displayAchievements = showAll ? achievements : achievements.slice(0, 4);

  return (
    <div className="achievements">
      <div className="achievements-header">
        <h2>🏆 Achievements</h2>
        <span className="achievement-count">
          {unlockedAchievements.length}/{achievements.length}
        </span>
      </div>
      
      <div className="achievements-grid">
        {displayAchievements.map(achievement => (
          <div 
            key={achievement.id} 
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
          >
            <div className="achievement-icon">
              {achievement.unlocked ? achievement.icon : '🔒'}
            </div>
            <div className="achievement-content">
              <div className="achievement-name">
                {achievement.unlocked ? achievement.name : '???'}
              </div>
              <div className="achievement-description">
                {achievement.unlocked ? achievement.description : 'Keep progressing to unlock!'}
              </div>
              {achievement.maxProgress && achievement.maxProgress > 1 && (
                <div className="achievement-progress">
                  <div className="achievement-progress-bar">
                    <div 
                      className="achievement-progress-fill"
                      style={{ 
                        width: `${((achievement.progress || 0) / achievement.maxProgress) * 100}%` 
                      }}
                    />
                  </div>
                  <span className="achievement-progress-text">
                    {achievement.progress || 0}/{achievement.maxProgress}
                  </span>
                </div>
              )}
            </div>
            {achievement.unlocked && (
              <div className="achievement-sparkle">✨</div>
            )}
          </div>
        ))}
      </div>
      
      {achievements.length > 4 && (
        <button 
          className="show-more-btn"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? 'Show Less' : `Show All (${achievements.length})`}
        </button>
      )}
    </div>
  );
}
