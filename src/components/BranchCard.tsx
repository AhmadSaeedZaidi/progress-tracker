import React from "react";
import type { Branch, Skill, Category } from "../models";

interface Props {
  branch: Branch;
  skills: Skill[];
  categories: Category[];
}

export function BranchCard({ branch, skills, categories }: Props) {
  const branchSkills = skills.filter(skill => branch.skillIds.includes(skill.id));

  return (
    <div className="branch-card" style={{ borderColor: branch.color }}>
      <div className="branch-header" style={{ background: branch.color }}>
        <h2>{branch.name}</h2>
        <p>{branch.description}</p>
      </div>
      <div className="branch-skills">
        {branchSkills.map(skill => {
          const category = categories.find(c => c.id === skill.categoryId);
          return (
            <div className={`skill-card${skill.unlocked ? " unlocked" : ""}`} key={skill.id}>
              <div className="skill-name">{skill.name}</div>
              <div className="skill-meta">
                <span>Level {skill.level || 0}</span>
                <span>XP: {skill.experience || 0}{skill.goal ? `/${skill.goal}` : ""}</span>
              </div>
              {category && (
                <div className="skill-category">
                  {category.icon && <span className="category-icon">{category.icon}</span>}
                  <span className="category-name">{category.name}</span>
                </div>
              )}
              {skill.perks && skill.perks.length > 0 && (
                <div className="skill-perks">
                  <b>Perks:</b>
                  <ul>
                    {skill.perks.map(perk => (
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