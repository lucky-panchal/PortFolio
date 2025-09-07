/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from '../../src/hooks/useTranslation';

const WorksItems = ({ item }) => {
	const { t, language } = useTranslation();
	const [showTooltip, setShowTooltip] = useState(false);
	const [showPreview, setShowPreview] = useState(false);
	const previewRef = useRef(null);
	const cardRef = useRef(null);
	const previewTimeoutRef = useRef(null);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 768);
		};

		checkMobile();
		
		window.addEventListener('resize', checkMobile);
		
		return () => {
			window.removeEventListener('resize', checkMobile);
			if (previewTimeoutRef.current) {
				clearTimeout(previewTimeoutRef.current);
			}
		};
	}, []);

const handleDemoClick = (e) => {
		e.preventDefault();
		if (item.status === 'development' || item.status === 'coming_soon') {
			setShowTooltip(true);
		} else if (item.demoUrl && item.demoUrl !== '#') {
			window.open(item.demoUrl, '_blank');
		}
	};

	const handleSourceClick = (e) => {
		e.preventDefault();
		if (item.status === 'coming_soon') {
			setShowTooltip(true);
			return;
		}
		if (item.sourceUrl && item.sourceUrl !== '#') {
			window.open(item.sourceUrl, '_blank');
		}
	};

	const handleMouseEnter = () => {
		if (item.status === 'development' || item.status === 'coming_soon') {
			setShowTooltip(true);
			return;
		}
		
		if (!isMobile && item.status === 'completed' && item.demoUrl && item.demoUrl !== '#') {
			previewTimeoutRef.current = setTimeout(() => {
				setShowPreview(true);
			}, 500);
		}
	};

	const handleMouseLeave = () => {
		setShowTooltip(false);
		if (previewTimeoutRef.current) {
			clearTimeout(previewTimeoutRef.current);
		}
		setShowPreview(false);
	};

	return (
		<div 
			className='work__card' 
			key={item.id}
			ref={cardRef}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<img src={item.image} alt='' className='work__img' />
			<h3 className='work__title'>{item.title[language]}</h3>
			
			{!isMobile && showPreview && item.status === 'completed' && item.demoUrl && item.demoUrl !== '#' && (
				<div className="work__preview" ref={previewRef}>
					<iframe 
						src={item.demoUrl} 
						title={`Preview of ${item.title[language]}`}
						className="work__preview-iframe"
						sandbox="allow-scripts allow-same-origin"
					/>
					<div className="work__preview-overlay">
						<button 
							className="work__preview-button"
							onClick={() => window.open(item.demoUrl, '_blank')}
						>
							{t('openFullSite')}
						</button>
					</div>
				</div>
			)}
			
			<div className='work__button-container'>
				<a
					href='#'
					className='work__button'
					onClick={handleDemoClick}
					onMouseEnter={() =>
						(item.status === 'development' || item.status === 'coming_soon') && setShowTooltip(true)
					}
					onMouseLeave={() => setShowTooltip(false)}
				>
					<i className='bx bx-globe work__button-icon' /> {t('website')}
				</a>
				{showTooltip && (item.status === 'development' || item.status === 'coming_soon') && (
					<div className='work__tooltip'>
						{item.status === 'coming_soon' ? t('comingSoon') : t('underDevelopment')}
					</div>
				)}
				<a
					href='#'
					className='work__button'
					onClick={handleSourceClick}
				>
					<i className='bx bxl-github work__button-icon' /> {t('sourceCode')}
				</a>
			</div>
		</div>
	);
};

export default WorksItems;