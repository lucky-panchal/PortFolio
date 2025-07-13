// eslint-disable-next-line no-unused-vars
import React from 'react';

const Info = () => {
	return (
		<div className='about__info grid'>
			<div className='about__box'>
				<i className='bx bx-bar-chart-alt about__icon'></i>

				<h3 className='about__title'>Leadership</h3>
				<span className='about__subtitle'>Strategic Impact</span>
			</div>



			<div className='about__box'>
  <i className='bx bx-conversation about__icon'></i>

  <h3 className='about__title'>Collaboration</h3>
  <span className='about__subtitle'>Open Ideas</span>
</div>

<div className='about__box'>
  <i className='bx bx-support about__icon'></i>

  <h3 className='about__title'>Support</h3>
  <span className='about__subtitle'>Always Available</span>
</div>

		</div>
	);
};

export default Info;
