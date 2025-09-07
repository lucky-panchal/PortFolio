import React, { useState, useEffect } from 'react';
import './social.css';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const GITHUB_USERNAME = 'lucky-panchal';
const Social = () => {
    const { t } = useTranslation();
    const [githubStats, setGithubStats] = useState({ repos: 0, commits: 0 });
    const [linkedinFollowers, setLinkedinFollowers] = useState(0);
    const [instagramFollowers, setInstagramFollowers] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.1 }
        );
        
        const section = document.querySelector('.social');
        if (section) observer.observe(section);
        
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Set GitHub stats (manual due to API rate limits)
        setGithubStats(prev => ({ ...prev, repos: 25 }));

        setGithubStats(prev => ({ ...prev, commits: 150 }));

        // Set Instagram followers (manual count due to CORS restrictions)
        setInstagramFollowers(600);

        // Set LinkedIn followers (manual - no public API)
        setLinkedinFollowers(3000);
    }, []);

    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    useEffect(() => {
        const onStorage = () => setTheme(localStorage.getItem('theme') || 'light');
        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
    }, []);

    // Map your local theme to GitHub stats theme
    const githubStatsTheme = theme === 'dark' ? 'dark' : 'radical';

    const socialLinks = [
        {
            name: t('instagram'),
            icon: "bx bxl-instagram",
            url: "https://www.instagram.com/luckyp4nch4l",
            color: "#e4405f",
            stats: `${instagramFollowers.toLocaleString()} Followers • Just Sharing Life`,
            className: "instagram"
        },
        {
            name: t('linkedin'),
            icon: "bx bxl-linkedin",
            url: "https://www.linkedin.com/in/lacki-lohar-463a23321",
            color: "#0077b5",
            stats: `${linkedinFollowers}+ Connections • Professional Network`,
            className: "linkedin"
        }
    ];

    return (
        <>
            <section className={`social section ${isVisible ? 'animate' : ''}`} id="social">
                <h2 className="section__title">{t('connectWithMe')} 🌐</h2>
                <span className="section__subtitle">{t('stayConnected')}</span>

                <div className="social__container container grid">
                    {socialLinks.map((social, index) => (
                        <div 
                            key={social.className} 
                            className={`social__card ${social.className}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="social__card-header">
                                <i className={`${social.icon} social__icon`} style={{ color: social.color }}></i>
                                <h3 className="social__name">{social.name}</h3>
                            </div>
                            <p className="social__stats">{social.stats}</p>
                            {social.extra}
                            <a 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social__button"
                            >
                                {t('followMe')}
                                <i className="bx bx-right-arrow-alt social__button-icon"></i>
                            </a>
                            <div className="social__glow" style={{ backgroundColor: social.color }}></div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Social;
