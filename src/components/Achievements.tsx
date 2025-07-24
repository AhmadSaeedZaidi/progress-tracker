import React, { useState, useEffect } from 'react';
import type { Skill, Achievement, Perk } from '../models';
import { achievements as baseAchievements } from '../data';

interface Props {
  skills: Skill[];
  perks: Perk[];
}

export function Achievements({ skills, perks }: Props) {
  const [showAll, setShowAll] = useState(false);

  // Calculate achievements based on skills
  const calculateAchievements = (): Achievement[] => {
    const totalXP = skills.reduce((sum, skill) => sum + (skill.experience || 0), 0);
    const unlockedSkills = skills.filter(skill => skill.unlocked).length;
    const maxLevelSkill = skills.reduce((max, skill) => (skill.level || 0) > max ? (skill.level || 0) : max, 0);
    const skillsWithPerks = skills.filter(skill => skill.perkIds && skill.perkIds.length > 0).length;

    return baseAchievements.map(achievement => {
      let progress = 0;
      let unlocked = false;
      let maxProgress = achievement.maxProgress || 0;

      switch (achievement.id) {
        case 'first-steps':
          progress = Math.min(unlockedSkills, 1);
          unlocked = unlockedSkills >= 1;
          break;
        case 'xp-hunter':
          progress = Math.min(totalXP, 1000);
          unlocked = totalXP >= 1000;
          break;
        case 'skill-collector':
          progress = Math.min(unlockedSkills, 25);
          unlocked = unlockedSkills >= 25;
          break;
        case 'level-master':
          progress = Math.min(maxLevelSkill, 5);
          unlocked = maxLevelSkill >= 5;
          break;
        case 'perk-seeker':
          progress = Math.min(skillsWithPerks, 1);
          unlocked = skillsWithPerks >= 1;
          break;
        case 'dedication':
          progress = Math.min(totalXP, 2500);
          unlocked = totalXP >= 2500;
          break;
        case 'completionist':
          maxProgress = skills.length;
          progress = unlockedSkills;
          unlocked = unlockedSkills >= skills.length && skills.length > 0;
          break;
      }

      return {
        ...achievement,
        unlocked,
        progress,
        maxProgress
      };
    });
  };

  const achievements = calculateAchievements();
  const unlockedAchievements = achievements.filter(a => a.unlocked);
  const displayAchievements = showAll ? achievements : achievements.slice(0, 4);

  // Notify parent when achievement cards change so intersection observer can re-observe
  useEffect(() => {
    // Dispatch a custom event when achievements change
    const event = new CustomEvent('achievementsChanged');
    window.dispatchEvent(event);
  }, [showAll, displayAchievements.length]);

  return (
    <div className="achievements">
      <div className="achievements-header">
        <h2>🏆 Achievements</h2>
        <span className="achievement-count">
          {unlockedAchievements.length}/{achievements.length}
        </span>
      </div>

      <div className="achievements-grid">
        {displayAchievements.map((achievement, index) => (
          <div
            key={achievement.id}
            className={`achievement-card ${achievement.unlocked ? 'unlocked' : 'locked'}`}
            style={{
              animationDelay: `${index * 0.1}s`
            }}
          >
            <div className="achievement-icon">
              {achievement.unlocked ? achievement.icon : '🔒'}
            </div>
            <div className="achievement-content">
              <div className="achievement-name">
                {achievement.unlocked ? achievement.name : '???'}
              </div>
              <div className="achievement-description">
                {achievement.unlocked ? achievement.description : 'Keep progressing to unlock this achievement!'}
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
