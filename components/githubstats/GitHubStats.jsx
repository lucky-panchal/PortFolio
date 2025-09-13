import React, { useState, useEffect } from 'react';
import './githubstats.css';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const GitHubStats = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        
        const section = document.querySelector('.githubstats');
        if (section) observer.observe(section);
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const onStorage = () => setTheme(localStorage.getItem('theme') || 'light');
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    const githubStatsTheme = theme === 'dark' ? 'github_dark' : 'default';
    const streakTheme = theme === 'dark' ? 'github-dark-blue' : 'default';

    return (
        <section className={`githubstats section ${isVisible ? 'animate' : ''}`} id="githubstats">
            <h2 className="section__title">{t('githubTitle')}</h2>
            <span className="section__subtitle">{t('githubSubtitle')}</span>

            <div className="githubstats__container container">
                <div className="githubstats__grid">
                    {/* Top Row: Languages & Achievements */}
                    <div className="githubstats__row">
                        <div className="githubstats__card">
                            <div className="githubstats__header">
                                <i className="bx bx-code githubstats__icon"></i>
                                <h3>{t('topLanguages')}</h3>
                            </div>
                            <div className="githubstats__image">
                                <img 
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=lucky-panchal&layout=compact&theme=${githubStatsTheme}&hide_border=true&title_color=22c55e&text_color=${theme === 'dark' ? 'ffffff' : '000000'}&bg_color=${theme === 'dark' ? '0d1117' : 'ffffff'}`}
                                    alt="Top Languages"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        <div className="githubstats__card">
                            <div className="githubstats__header">
                                <i className="bx bx-trophy githubstats__icon"></i>
                                <h3>{t('githubTrophies')}</h3>
                            </div>
                            <div className="githubstats__image">
                                <img 
                                    src={`https://github-profile-trophy.vercel.app/?username=lucky-panchal&theme=${theme === 'dark' ? 'algolia' : 'flat'}&no-frame=true&no-bg=true&margin-w=4&row=2&column=3`}
                                    alt="GitHub Trophies"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row: Coding Time & Tech Focus */}
                    <div className="githubstats__row">
                        <div className="githubstats__card">
                            <div className="githubstats__header">
                                <i className="bx bx-time githubstats__icon"></i>
                                <h3>{t('codingMetrics')}</h3>
                            </div>
                            <div className="githubstats__metrics">
                                <div className="githubstats__metric">
                                    <span className="githubstats__metric-number">800+</span>
                                    <span className="githubstats__metric-label">Hours Coded</span>
                                </div>
                                <div className="githubstats__metric">
                                    <span className="githubstats__metric-number">15+</span>
                                    <span className="githubstats__metric-label">Repositories</span>
                                </div>
                                <div className="githubstats__metric">
                                    <span className="githubstats__metric-number">300+</span>
                                    <span className="githubstats__metric-label">Commits</span>
                                </div>
                            </div>
                        </div>

                        <div className="githubstats__card">
                            <div className="githubstats__header">
                                <i className="bx bx-code-block githubstats__icon"></i>
                                <h3>{t('techFocus')}</h3>
                            </div>
                            <div className="githubstats__tech-list">
                                <span className="githubstats__tech-item">React.js</span>
                                <span className="githubstats__tech-item">Next.js</span>
                                <span className="githubstats__tech-item">JavaScript</span>
                                <span className="githubstats__tech-item">TypeScript</span>
                                <span className="githubstats__tech-item">Node.js</span>
                                <span className="githubstats__tech-item">React Native</span>
                                <span className="githubstats__tech-item">MongoDB</span>
                                <span className="githubstats__tech-item">Tailwind CSS</span>
                            </div>
                        </div>
                    </div>

                    {/* Last Row: Contribution Graph */}
                    <div className="githubstats__row">
                        <div className="githubstats__card githubstats__card--wide githubstats__card--animated">
                            <div className="githubstats__header">
                                <i className="bx bx-git-branch githubstats__icon"></i>
                                <h3>{t('contributionGraph')}</h3>
                            </div>
                            <div className="githubstats__image githubstats__graph">
                                <img 
                                    src={`https://github-readme-activity-graph.vercel.app/graph?username=lucky-panchal&bg_color=${theme === 'dark' ? '0d1117' : 'ffffff'}&color=22c55e&line=22c55e&point=ffffff&area=true&hide_border=true&custom_title=Lacki's%20Contribution%20Graph`}
                                    alt="Contribution Graph"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="githubstats__cta">
                    <a 
                        href="https://github.com/lucky-panchal" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="githubstats__button"
                    >
                        <i className="bx bxl-github"></i>
                        {t('visitGitHub')}
                        <i className="bx bx-right-arrow-alt"></i>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
