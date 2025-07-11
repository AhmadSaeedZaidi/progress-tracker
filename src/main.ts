import { branches, BranchProgress } from './model';

function renderBranches(branches: BranchProgress[]) {
    const container = document.getElementById('branches');
    if (!container) return;

    container.innerHTML = branches.map(b => `
    <div class="branch-card ${b.branch}">
      <div class="branch-title">${b.display}</div>
      <div class="level">Level ${b.level}</div>
      <div class="progress-bar">
        <div class="progress-inner" style="width: ${Math.floor((b.xp / b.xpForNext) * 100)}%; background: rgba(0,0,0,0.2);"></div>
      </div>
      <div>Perks: ${b.perks.length > 0 ? b.perks.join(", ") : "<i>None yet</i>"}</div>
    </div>
  `).join('');
}

renderBranches(branches);