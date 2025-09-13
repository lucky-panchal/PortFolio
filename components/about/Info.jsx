// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTranslation } from '../../src/hooks/useTranslation.jsx';

const Info = () => {
	const { t } = useTranslation();
	
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bx-bar-chart-alt about__icon'></i>

				<h3 className='about__title'>{t('leadership')}</h3>
				<span className='about__subtitle'>{t('strategicImpact')}</span>
			</div>
			


			<div className='about__box'>
				<i className='bx bx-conversation about__icon'></i>

				<h3 className='about__title'>{t('collaboration')}</h3>
				<span className='about__subtitle'>{t('openIdeas')}</span>
			</div>

			<div className='about__box'>
				<i className='bx bx-support about__icon'></i>

				<h3 className='about__title'>{t('support')}</h3>
				<span className='about__subtitle'>{t('alwaysAvailable')}</span>
			</div>
		</div>
	);
};

export default Info;
