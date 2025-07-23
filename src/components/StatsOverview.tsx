import React from 'react';
import type { Branch, Skill } from '../models';

interface Props {
  branches: Branch[];
  skills: Skill[];
}

export function StatsOverview({ branches, skills }: Props) {
  const totalSkills = skills.length;
  const unlockedSkills = skills.filter(skill => skill.unlocked).length;
  const totalXP = skills.reduce((sum, skill) => sum + (skill.experience || 0), 0);
  const totalGoalXP = skills.reduce((sum, skill) => sum + (skill.goal || 0), 0);
  const overallProgress = totalGoalXP > 0 ? (totalXP / totalGoalXP * 100) : 0;
  const averageLevel = skills.reduce((sum, skill) => sum + (skill.level || 0), 0) / totalSkills;

  const branchStats = branches.map(branch => {
    const branchSkills = skills.filter(skill => branch.skillIds.includes(skill.id));
    const branchXP = branchSkills.reduce((sum, skill) => sum + (skill.experience || 0), 0);
    const branchUnlocked = branchSkills.filter(skill => skill.unlocked).length;
    const branchProgress = branchSkills.length > 0 ? (branchUnlocked / branchSkills.length * 100) : 0;
    
    return {
      ...branch,
      xp: branchXP,
      skillCount: branchSkills.length,
      unlockedCount: branchUnlocked,
      progress: branchProgress
    };
  });

  return (
    <div className="stats-overview">
      <h2>📊 Ahmad Saeed Zaidi's Progress</h2>
      
      <div className="stats-grid">
        <div className="stat-card total-xp">
          <div className="stat-icon">⚡</div>
          <div className="stat-content">
            <div className="stat-number">{totalXP.toLocaleString()}</div>
            <div className="stat-label">Total XP</div>
          </div>
        </div>
        
        <div className="stat-card skills-unlocked">
          <div className="stat-icon">🔓</div>
          <div className="stat-content">
            <div className="stat-number">{unlockedSkills}/{totalSkills}</div>
            <div className="stat-label">Skills Unlocked</div>
          </div>
        </div>
        
        <div className="stat-card average-level">
          <div className="stat-icon">📈</div>
          <div className="stat-content">
            <div className="stat-number">{averageLevel.toFixed(1)}</div>
            <div className="stat-label">Avg Level</div>
          </div>
        </div>
        
        <div className="stat-card overall-progress">
          <div className="stat-icon">🎯</div>
          <div className="stat-content">
            <div className="stat-number">{overallProgress.toFixed(1)}%</div>
            <div className="stat-label">Overall Progress</div>
            <div className="mini-progress-bar">
              <div 
                className="mini-progress-fill" 
                style={{ width: `${overallProgress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="branch-stats">
        <h3>Branch Breakdown</h3>
        <div className="branch-stats-grid">
          {branchStats.map(branch => (
            <div key={branch.id} className="branch-stat" style={{ '--branch-color': branch.color } as React.CSSProperties}>
              <div className="branch-stat-header">
                <span className="branch-stat-name">{branch.name}</span>
                <span className="branch-stat-progress">{branch.progress.toFixed(0)}%</span>
              </div>
              <div className="branch-progress-bar">
                <div 
                  className="branch-progress-fill" 
                  style={{ 
                    width: `${branch.progress}%`,
                    backgroundColor: branch.color 
                  }}
                />
              </div>
              <div className="branch-stat-details">
                <span>{branch.xp} XP</span>
                <span>{branch.unlockedCount}/{branch.skillCount} skills</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
