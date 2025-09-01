import React, { useState, useEffect } from 'react';
import './social.css';


const GITHUB_USERNAME = 'lucky-panchal';
const Social = () => {
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
        // Fetch GitHub stats (repos)
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
            .then(res => res.json())
            .then(data => {
                setGithubStats(prev => ({ ...prev, repos: data.public_repos || 0 }));
            })
            .catch(() => {});

        // Set commit count (manual due to API rate limits)
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
            name: "GitHub",
            icon: "bx bxl-github",
            url: "https://github.com/lucky-panchal",
            color: "#333",
            stats: '',
            extra: (
                <div className="github-stats-images" style={{ marginTop: '1rem' }}>
                    <img src={`https://github-readme-stats.vercel.app/api?username=lucky-panchal&theme=${githubStatsTheme}&hide_border=true&show_icons=true&title_color=00BFAE&icon_color=FFD600&count_private=true`} width="320" alt="GitHub Stats" style={{ maxWidth: '100%', borderRadius: 8 }} />
                    <img src={`https://github-readme-streak-stats.herokuapp.com/?user=lucky-panchal&theme=${githubStatsTheme}&hide_border=true`} width="320" alt="GitHub Streak" style={{ maxWidth: '100%', borderRadius: 8 }} />
                    <img src={`https://github-readme-stats.vercel.app/api/top-langs/?username=lucky-panchal&langs_count=7&theme=${githubStatsTheme}&layout=compact&hide_border=true`} width="340" alt="Top Languages" style={{ maxWidth: '100%', borderRadius: 8 }} />
                </div>
            )
        },
        {
            name: "LinkedIn",
            icon: "bx bxl-linkedin",
            url: "https://www.linkedin.com/in/lacki-lohar-463a23321",
            color: "#0077b5",
            stats: `${linkedinFollowers}+ Connections • Professional Network`
        },
        {
            name: "Instagram",
            icon: "bx bxl-instagram",
            url: "https://www.instagram.com/luckyp4nch4l",
            color: "#e4405f",
            stats: `${instagramFollowers.toLocaleString()} Followers • Just Sharing Life`
        }
    ];

    return (
        <>
            <section className={`social section ${isVisible ? 'animate' : ''}`} id="social">
                <h2 className="section__title">Connect With Me 🌐</h2>
                <span className="section__subtitle">Let&apos;s stay connected across platforms</span>

                <div className="social__container container grid">
                    {socialLinks.map((social, index) => (
                        <div 
                            key={social.name} 
                            className={`social__card ${social.name.toLowerCase()}`}
                            style={{ '--delay': `${index * 0.1}s` }}
                        >
                            <div className="social__card-header">
                                <i className={`${social.icon} social__icon`} style={{ color: social.color }}></i>
                                <h3 className="social__name">{social.name}</h3>
                            </div>
                            <p className="social__stats">{social.stats}</p>
                            {social.extra}
                            {/* Add spacing only for GitHub card */}
                            {social.name === 'GitHub' && <div style={{ height: '1.5rem' }} />}
                            <a 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="social__button"
                            >
                                Follow Me
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