import { branches, skills, perks } from '../data';

const MainPage = () => (
    <div id="app">
        <h1>Progress Tracker MVP</h1>
        <h2>Branches</h2>
        <ul>
            {branches.map(b => (
                <li key={b.id} style={{ color: b.color }}>
                    {b.name} - {b.description}
                </li>
            ))}
        </ul>
        <h2>Skills</h2>
        <ul>
            {skills.map(s => {
                const branch = branches.find(b => b.id === s.branchId);
                return (
                    <li key={s.id}>
                        {s.name} ({branch ? branch.name : s.branchId})
                    </li>
                );
            })}
        </ul>
        <h2>Perks</h2>
        <ul>
            {perks.map(p => (
                <li key={p.id}>
                    {p.name}: {p.description}
                </li>
            ))}
        </ul>
    </div>
);

export default MainPage;
