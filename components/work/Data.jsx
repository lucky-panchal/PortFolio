// Portfolio project data configuration
import Work3 from '../../src/assets/Work3.png';
import Work4 from '../../src/assets/Work4.png';
import Work5 from '../../src/assets/Work5.jpg';
import Work6 from '../../src/assets/Work6.png';
import Lakshhya from '../../src/assets/Lakshhya.png';

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
		sourceUrl: 'https://github.com/lucky-panchal/PortFolio.git',
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
		image: Lakshhya,
		title: {
			en: 'LakshyaAI',
			hi: 'LakshyaAI'
		},
		description: {
			en: 'Full-stack AI plagiarism detection system built solo in Sem 4. FastAPI backend with TF-IDF & BERT (semantic) engines, sentence-level highlight matching, auto PDF reports, and a React frontend with animated score rings and 3-mode result viewer.',
			hi: 'Full-stack AI plagiarism detection system built solo in Sem 4. FastAPI backend with TF-IDF & BERT (semantic) engines, sentence-level highlight matching, auto PDF reports, and a React frontend with animated score rings and 3-mode result viewer.'
		},
		category: 'web',
		demoUrl: 'https://lakshhya.netlify.app',
		sourceUrl: 'https://github.com/lucky-panchal',
		status: 'completed',
		size: 'large',
		gradient: ['#A8E6CF', '#FFD93D'],
		techStack: ['React', 'FastAPI', 'BERT', 'TF-IDF', 'Python'],
		progress: 100,
		features: ['NLP Plagiarism Detection', 'PDF Reports', 'Semantic Matching'],
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
		status: 'development',
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
			en: 'KaushalX - Future Proof Your Career',
			hi: 'कौशलX - अपने करियर को भविष्य के लिए तैयार करें'
		},
		description: {
			en: 'AI-powered future prediction mobile application',
			hi: 'AI-संचालित भविष्य भविष्यवाणी मोबाइल एप्लिकेशन'
		},
		category: 'web',
		sourceUrl: 'https://github.com/lucky-panchal/Secret.git',
		status: 'development',
		size: 'featured',
		gradient: ['#81C784', '#64B5F6'],
		techStack: ['Figma', 'React', 'Storybook'],
		progress: 80,
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

