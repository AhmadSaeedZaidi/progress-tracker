import React from "react";
import type { Branch, Skill, Category, Perk } from "../models";

interface Props {
  branch: Branch;
  skills: Skill[];
  categories: Category[];
  perks: Perk[];
}

export function BranchCard({ branch, skills, categories, perks }: Props) {
  const branchSkills = skills.filter(skill => branch.skillIds.includes(skill.id));
  
  // Calculate progress width for each skill
  const calculateProgress = (skill: Skill) => {
    if (!skill.goal || skill.goal === 0) return 0;
    return Math.min((skill.experience || 0) / skill.goal * 100, 100);
  };
  
  // Get perks for a skill
  const getSkillPerks = (skill: Skill) => {
    if (!skill.perkIds) return [];
    return skill.perkIds.map(perkId => perks.find(p => p.id === perkId)).filter(Boolean) as Perk[];
  };
  
  // Convert color to RGB values for CSS custom properties
  const getRGBFromHex = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? 
      `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)}` 
      : '76, 175, 80';
  };

  return (
    <div
      className="branch-card"
      style={{
        borderColor: branch.color,
        '--branch-color': branch.color,
        '--branch-color-rgb': getRGBFromHex(branch.color || '#4CAF50')
      } as React.CSSProperties}
    >
      <div className="branch-header">
        <h2>{branch.name}</h2>
        <p>{branch.description}</p>
      </div>
      <div className="branch-skills">
        {branchSkills.map(skill => {
          const category = categories.find(c => c.id === skill.categoryId);
          const progressWidth = calculateProgress(skill);
          const skillPerks = getSkillPerks(skill);
          
          return (
            <div 
              className={`skill-card${skill.unlocked ? " unlocked" : ""}`} 
              key={skill.id}
              style={{
                '--progress-width': `${progressWidth}%`
              } as React.CSSProperties}
            >
              <div className="skill-name">{skill.name}</div>
              <div className="skill-meta">
                <span>Level {skill.level || 0}</span>
                <span>XP: {skill.experience || 0}{skill.goal ? `/${skill.goal}` : ""}</span>
              </div>
              <div className="progress-bar">
                <div 
                  className="progress-fill" 
                  style={{ width: `${progressWidth}%` }}
                />
              </div>
              {category && (
                <div className="skill-category">
                  {category.icon && <span className="category-icon">{category.icon}</span>}
                  <span className="category-name">{category.name}</span>
                </div>
              )}
              {skillPerks.length > 0 && (
                <div className="skill-perks">
                  <b>Perks:</b>
                  <ul>
                    {skillPerks.map(perk => (
                      <li key={perk.id} className={perk.unlocked ? "perk-unlocked" : "perk-locked"}>
                        {perk.name}
                        {perk.unlocked && perk.dateUnlocked && <span> (Unlocked: {perk.dateUnlocked})</span>}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              <div className={`skill-status ${skill.unlocked ? "unlocked" : "locked"}`}>
                {skill.unlocked ? "Unlocked" : "Locked"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 