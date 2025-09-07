import Work3 from '../../src/assets/Work3.png';
import Work4 from '../../src/assets/Work4.png';
import Work5 from '../../src/assets/Work5.png';
import Work6 from '../../src/assets/Work6.jpg'

export const projectsData = [
	{
		id: 1,
		image: Work4,
		title: {
			en: 'Portfolio',
			hi: 'पोर्टफोलियो'
		},
		category: 'web',
		demoUrl: 'https://lackilohar.netlify.app/',
		status: 'completed',
	},
	{
		id: 2,
		image: Work5,
		title: {
			en: 'Manorath- "The Future"',
			hi: 'मनोरथ- "भविष्य"'
		},
		category: 'app',
		status: 'development',
	},
	{
		id: 3,
		image: Work3,
		title: {
			en: 'WanderScape',
			hi: 'वंडरस्केप'
		},
		category: 'web',
		status: 'development',
	},
	{
		id: 4,
		image: Work6,
		title: {
			en: 'Figma-Project',
			hi: 'फिग्मा-प्रोजेक्ट'
		},
		category: 'web',		
		status: 'coming_soon',
	}
];

export const projectsNav = [
	{
		name: {
			en: 'all',
			hi: 'सभी'
		}
	},
	{
		name: {
			en: 'app',
			hi: 'ऐप'
		}
	},
	{
		name: {
			en: 'web',
			hi: 'वेब'
		}
	},
];