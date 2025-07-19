import { branches, skills, perks } from '../data';

function render() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <h1>Progress Tracker MVP</h1>
    <h2>Branches</h2>
    <ul>
      ${branches.map(b => `<li style="color:${b.color}">${b.name} - ${b.description}</li>`).join('')}
    </ul>
    <h2>Skills</h2>
    <ul>
      ${skills.map(s => `<li>${s.name} (${branches.find(b => b.id === s.branchId)?.name || s.branchId})</li>`).join('')}
    </ul>
    <h2>Perks</h2>
    <ul>
      ${perks.map(p => `<li>${p.name}: ${p.description}</li>`).join('')}
    </ul>
  `;
}

window.onload = render;