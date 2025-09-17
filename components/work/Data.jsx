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
		description: {
			en: 'Modern portfolio with advanced animations and 3D effects',
			hi: 'उन्नत एनिमेशन और 3D प्रभावों के साथ आधुनिक पोर्टफोलियो'
		},
		category: 'web',
		demoUrl: 'https://lackilohar.netlify.app/',
		status: 'completed',
		size: 'hero',
		gradient: ['#FF6B6B', '#4ECDC4'],
		techStack: ['React', 'GSAP', 'CSS3', 'Vite'],
		progress: 100,
		features: ['Responsive Design', '3D Animations', 'Dark Mode'],
		particleColor: '#4ECDC4'
	},
	{
		id: 2,
		image: Work5,
		title: {
			en: 'Manorath- "The Future"',
			hi: 'मनोरथ- "भविष्य"'
		},
		description: {
			en: 'AI-powered future prediction mobile application',
			hi: 'AI-संचालित भविष्य भविष्यवाणी मोबाइल एप्लिकेशन'
		},
		category: 'app',
		status: 'development',
		size: 'large',
		gradient: ['#A8E6CF', '#FFD93D'],
		techStack: ['React Native', 'AI/ML', 'Firebase'],
		progress: 75,
		features: ['AI Integration', 'Real-time Data', 'Push Notifications'],
		particleColor: '#FFD93D'
	},
	{
		id: 3,
		image: Work3,
		title: {
			en: 'WanderScape',
			hi: 'वंडरस्केप'
		},
		description: {
			en: 'Travel planning platform with interactive maps',
			hi: 'इंटरैक्टिव मैप्स के साथ यात्रा योजना प्लेटफॉर्म'
		},
		category: 'web',
		demoUrl: 'https://google.com',
		status: 'completed',
		size: 'medium',
		gradient: ['#FF8A80', '#EA80FC'],
		techStack: ['Vue.js', 'Maps API', 'Node.js'],
		progress: 60,
		features: ['Interactive Maps', 'Trip Planning', 'Social Sharing'],
		particleColor: '#EA80FC'
	},
	{
		id: 4,
		image: Work6,
		title: {
			en: 'Figma-Project',
			hi: 'फिग्मा-प्रोजेक्ट'
		},
		description: {
			en: 'Design system and UI component library',
			hi: 'डिज़ाइन सिस्टम और UI कंपोनेंट लाइब्रेरी'
		},
		category: 'web',
		status: 'coming_soon',
		size: 'featured',
		gradient: ['#81C784', '#64B5F6'],
		techStack: ['Figma', 'React', 'Storybook'],
		progress: 25,
		features: ['Component Library', 'Design Tokens', 'Documentation'],
		particleColor: '#64B5F6'
	}
];

export const projectsNav = [
	{
		name: {
			en: 'all',
			hi: 'सभी'
		},
		icon: '🌟',
		color: '#FF6B6B'
	},
	{
		name: {
			en: 'web',
			hi: 'वेब'
		},
		icon: '🌐',
		color: '#4ECDC4'
	},
	{
		name: {
			en: 'app',
			hi: 'ऐप'
		},
		icon: '📱',
		color: '#FFD93D'
	}
];

export const cardSizes = {
	hero: { width: '100%', height: '500px', cols: 2 },
	large: { width: '65%', height: '400px', cols: 1 },
	medium: { width: '40%', height: '320px', cols: 1 },
	featured: { width: '100%', height: '450px', cols: 2 }
};
