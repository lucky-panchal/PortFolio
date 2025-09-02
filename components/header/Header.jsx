import React, { useState, useEffect } from 'react';
import './Header.css';
import ThemeToggle from '../ThemeToggle/ThemeToggle';

const Header = () => {
	const [isNavigating, setIsNavigating] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (isNavigating) return; // Skip animation during navigation
			
			const header = document.querySelector('.header');
			const homeSection = document.querySelector('#home');
			const projectsSection = document.querySelector('#projects');
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			
			// Only minimize between home and projects sections
			let shouldMinimize = false;
			
			if (homeSection && projectsSection) {
				const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
				const projectsTop = projectsSection.offsetTop;
				
				// Check if we're between home and projects sections
				if (scrollY > homeBottom - windowHeight * 0.3 && 
					scrollY < projectsTop + windowHeight * 0.2) {
					shouldMinimize = true;
				}
			}
			
			if (shouldMinimize) {
				header?.classList.add('minimized');
			} else {
				header?.classList.remove('minimized');
			}
			
			if (scrollY >= 80) header?.classList.add('scroll-header');
			else header?.classList.remove('scroll-header');
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, [isNavigating]);

	const handleNavClick = (e, targetId) => {
		e.preventDefault();
		setIsNavigating(true);
		
		const targetSection = document.querySelector(targetId);
		if (targetSection) {
			targetSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
			
			// Re-enable animations after navigation completes
			setTimeout(() => {
				setIsNavigating(false);
			}, 1000);
		}
	};

	const [Toggle, showMenu] = useState(false);
	const [activeNav, setActiveNav] = useState('#home');

	return (
		<header className='header'>
			<nav className='nav container'>
				<a href='index.html ' className='nav__logo'>
					&lt;Lacki Lohar/&gt;
				</a>

				<div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
					<ul className='nav__list grid'>
						<li className='nav__item'>
							<a
								href='#home'
								onClick={(e) => { handleNavClick(e, '#home'); setActiveNav('#home'); }}
								className={
									activeNav === '#home' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil-estate nav__icon'></i> Home
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#projects'
								onClick={(e) => { handleNavClick(e, '#projects'); setActiveNav('#projects'); }}
								className={
									activeNav === '#projects'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil-scenery nav__icon'></i> Projects
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#skills'
								onClick={(e) => { handleNavClick(e, '#skills'); setActiveNav('#skills'); }}
								className={
									activeNav === '#skills'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil-file-alt nav__icon'></i> Skills
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#experience'
								onClick={(e) => { handleNavClick(e, '#experience'); setActiveNav('#experience'); }}
								className={
									activeNav === '#experience'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil-bag-alt nav__icon'></i> Experience
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#about'
								onClick={(e) => { handleNavClick(e, '#about'); setActiveNav('#about'); }}
								className={
									activeNav === '#about' ? 'nav__link active-link' : 'nav__link'
								}
							>
								<i className='uil uil-user nav__icon'></i> About
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#social'
								onClick={(e) => { handleNavClick(e, '#social'); setActiveNav('#social'); }}
								className={
									activeNav === '#social'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil-share nav__icon'></i> Social
							</a>
						</li>

						<li className='nav__item'>
							<a
								href='#contact'
								onClick={(e) => { handleNavClick(e, '#contact'); setActiveNav('#contact'); }}
								className={
									activeNav === '#contact'
										? 'nav__link active-link'
										: 'nav__link'
								}
							>
								<i className='uil uil-message nav__icon'></i> Contact Me
							</a>
						</li>

						<li className='nav__item theme-toggle-desktop'>
							<ThemeToggle />
						</li>
					</ul>
				</div>

				{!Toggle && (
          <div className='theme-toggle-mobile'>
            <ThemeToggle />
          </div>
        )}

				<div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
					<i className='uil uil-apps'></i>
				</div>
			</nav>
		</header>
	);
};




export default Header;
