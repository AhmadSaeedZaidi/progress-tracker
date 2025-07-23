import React, { useEffect, useRef } from 'react';
import { branches, skills, categories } from '../data';
import { BranchCard } from './BranchCard';
import { StatsOverview } from './StatsOverview';
import { Achievements } from './Achievements';

const MainPage = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '50px 0px 50px 0px'
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

        if (containerRef.current) {
            const sections = containerRef.current.querySelectorAll('.section');
            const cards = containerRef.current.querySelectorAll('.branch-card, .achievement-card');
            
            [...sections, ...cards].forEach((element) => observer.observe(element));
        }

        return () => observer.disconnect();
    }, []);

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
                    <Achievements skills={skills} />
                </section>

                <section className="section branches-section">
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
                </section>
            </div>
        </div>
    );
};

export default MainPage;