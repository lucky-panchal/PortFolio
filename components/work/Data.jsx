import Work3 from '../../src/assets/Work3.png';
import Work4 from '../../src/assets/Work4.png';
import Work5 from '../../src/assets/Work5.png';
import Work6 from '../../src/assets/Work6.jpg'

export const projectsData = [

	{
		id: 1,
		image: Work4,
		title: 'PortFolio',
		category: 'web',
		demoUrl: 'https://lackilohar.netlify.app/',
		status: 'completed',
	},
	{
		id: 2,
		image: Work5,
		title: 'Manorath- "The Future"',
		category: 'app',
		status: 'development',
	},
	{
		id: 3,
		image: Work3,
		title: 'WanderScape',
		// demoUrl: 'https://github.com/lucky-panchal/WanderScape-backend.gi',
		category: 'web',
		status: 'development',
	},
	{
		id: 4,
		image: Work6,
		title: 'Figma-Project',
		category: 'web',		
		status: 'coming_soon',
	}
];

export const projectsNav = [
	{
		name: 'all',
	},
	{
		name: 'app',
	},
	{
		name: 'web',
	},
];
