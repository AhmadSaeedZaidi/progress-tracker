import React from 'react';
import { branches, skills, categories } from '../data';
import { BranchCard } from './BranchCard';

const MainPage = () => (
    <div id="app">
        <h1>Progress Tracker</h1>
        <div className="branches-container">
            {branches.map(branch => (
                <BranchCard
                    key={branch.id}
                    branch={branch}
                    skills={skills}
                    categories={categories}
                />
            ))}
        </div>
    </div>
);

export default MainPage;