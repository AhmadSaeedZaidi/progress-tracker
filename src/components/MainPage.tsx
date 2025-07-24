import React, { useEffect, useRef } from 'react';
import { branches, skills, categories, perks } from '../data';
import { BranchCard } from './BranchCard';
import { StatsOverview } from './StatsOverview';
import { Achievements } from './Achievements';

const MainPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '100px 0px 100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    entry.target.classList.remove('void-exit');
                } else {
                    // Check if element is above viewport (scrolled past)
                    const rect = entry.boundingClientRect;
                    if (rect.bottom < -50) {
                        entry.target.classList.add('void-exit');
                        entry.target.classList.remove('visible');
                    } else if (rect.top > window.innerHeight + 50) {
                        entry.target.classList.remove('visible');
                        entry.target.classList.remove('void-exit');
                    }
                }
            });
        }, observerOptions);

        const setupObserver = () => {
            if (containerRef.current) {
                // Query for all elements that need animation
                const sections = containerRef.current.querySelectorAll('.section');
                const branchCards = containerRef.current.querySelectorAll('.branch-card');
                const achievementCards = containerRef.current.querySelectorAll('.achievement-card');
                
                // Log for debugging
                console.log(`Setting up observer for: ${sections.length} sections, ${branchCards.length} branch cards, ${achievementCards.length} achievement cards`);
                
                [...sections, ...branchCards, ...achievementCards].forEach((element) => {
                    observer.observe(element);
                });
            }
        };

        // Set up observer with multiple attempts to catch all elements
        setupObserver();
        
        // Retry after short delays to catch any late-rendered elements
        const timeouts = [
            setTimeout(setupObserver, 100),
            setTimeout(setupObserver, 500),
            setTimeout(setupObserver, 1000)
        ];

        return () => {
            timeouts.forEach(timeout => clearTimeout(timeout));
            observer.disconnect();
        };
    }, [branches.length, skills.length]); // Add dependencies to re-run when data changes

    return (
        <div className="void-container" ref={containerRef}>
            <div id="app">
                <section className="section hero">
                    <h1>Progress Tracker</h1>
                    <p style={{ 
                        fontSize: '1.2rem', 
                        color: 'var(--text-secondary)', 
                        textAlign: 'center',
                        maxWidth: '600px',
                        lineHeight: '1.6'
                    }}>
                        Track your journey through skills, achievements, and personal growth
                    </p>
                </section>

                <section className="section stats-section">
                    <StatsOverview branches={branches} skills={skills} />
                </section>

                <section className="section achievements-section">
                    <Achievements skills={skills} perks={perks} />
                </section>

                <section className="section branches-section">
                    <div className="branches-container">
                        {branches.map(branch => (
                            <BranchCard
                                key={branch.id}
                                branch={branch}
                                skills={skills}
                                categories={categories}
                                perks={perks}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default MainPage;