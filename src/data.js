import { Mail, Github, Linkedin, Twitter, Code } from 'lucide-react';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

export const skills = [
	{
		category: 'Frontend',
		items: [
			'TypeScript',
			'JavaScript',
			'React',
			'Redux',
			'HTML5',
			'CSS3',
			'Tailwind CSS',
		],
	},
	{
		category: 'Backend',
		items: [
			'Node.js',
			'Express.js',
			'Microservices Architecture',
			'Clean Architecture',
			'Socket.io',
			'Kafka',
			'PostgreSQL',
			'MongoDB',
			'Firebase',
			'RESTful APIs',
			'JWT',
		],
	},
	{
		category: 'DevOps',
		items: [
			'AWS',
			'Azure',
			'Docker',
			'Kubernetes',
			'GitHub Actions',
			'CI/CD',
			'Cloudflare',
			'Git',
		],
	},
	{
		category: 'Other Skills',
		items: [
			'Data Structures',
			'Algorithms',
			'Shell Scripting',
			'OOP',
			'SOLID Principles',
			'Design Patterns',
			'WebSockets',
			'Postman',
			'Teamwork',
			'Problem-solving',
		],
	},
];

export const achievements = [
	{
		title: 'Certifications',
		items: [
			{
				text: 'HackerRank JavaScript (Basic)',
				link: 'https://www.hackerrank.com/certificates/eaeeecb2d164',
			},
			{
				text: 'HackerRank Problem Solving (Basic)',
				link: 'https://www.hackerrank.com/certificates/b32320909a01',
			},
		],
	},
	{
		title: 'Badges',
		items: [
			{
				text: 'LeetCode 50 Days Badge',
				link: null,
			},
			{
				text: 'LeetCode 100 Days Badge',
				link: null,
			},
		],
	},
];

export const blogs = [
	{
		title: 'Synchronous Communication In Microservices',
		date: 'Sep 05, 2024',
		readTime: '3 min read',
		image: '/images/microservice.png',
		link: 'https://medium.com/@javedVah/synchronous-communication-in-microservices-343b8a083101',
	},
	{
		title: 'Destructuring in javaScript [{...}]:',
		date: 'Feb 10, 2024',
		readTime: '2 min read',
		image: '/images/destructuring.png',
		link: 'https://medium.com/@javedVah/destructuring-in-javascript-7ebaec8cdef9',
	},
];

export const contactInfo = [
	{
		icon: Mail,
		label: 'Email',
		value: 'javedmv777@gmail.com',
		link: 'mailto:javedmv777@gmail.com',
	},
	{
		icon: Github,
		label: 'GitHub',
		value: 'github.com/Javedmv',
		link: 'https://github.com/Javedmv',
	},
	{
		icon: Linkedin,
		label: 'LinkedIn',
		value: 'linkedin.com/in/javed',
		link: 'https://www.linkedin.com/in/javed-mv-vah/',
	},
];

export const socialLinks = [
	{ icon: Github, href: 'https://github.com/Javedmv' },
	{ icon: SiLeetcode, href: 'https://leetcode.com/u/javed_mv/' },
	{ icon: SiHackerrank, href: 'https://www.hackerrank.com/profile/javedmv777' },
	{ icon: Linkedin, href: 'https://www.linkedin.com/in/javed-mv-vah/' },
	{ icon: Mail, href: 'mailto:javedmv777@gmail.com' },
];

export const projects = [
	{
		title: 'VLearning',
		description:
			'Microservice-based e-learning app with roles & real-time features.',
		tech: [
			'React',
			'Node.js',
			'Express',
			'MongoDB',
			'Redis',
			'Socket.io',
			'WebSocket',
			'Kafka',
			'Stripe',
			'Webhook',
			'Microservices',
			'Clean Architecture',
			'TypeScript',
		],
		image: '📋',
		github_client: 'https://github.com/Javedmv/VLearning-server.git',
		github_server: 'https://github.com/Javedmv/VLearning-client.git',
		demo: '',
	},
	{
		title: 'VeeLap',
		description:
			'VeeLap is a full-featured e-commerce web application designed for seamless product management, secure payments via Razorpay, and real-time inventory updates. It includes an admin dashboard for analytics and control.',
		tech: ['Node.js', 'MongoDB', 'EJS', 'Razorpay'],
		image: '🛍️',
		github_server: 'https://github.com/Javedmv/veeLap.git',
		demo: 'https://veelap.welearning.online',
	},
	{
		title: 'OCR-Aadhar',
		description:
			'OCR-Aadhar is an AI-powered document reader that extracts user data from Aadhaar cards using OpenAI and OCR technology. Built with React and TypeScript, it offers high accuracy and a smooth user interface.',
		tech: ['Node.js', 'React', 'OpenAi', 'TypeScript'],
		image: '🛍️',
		github_clent: 'https://github.com/Javedmv/OCR-Aadhar-front.git',
		github_server: 'https://github.com/Javedmv/OCR-Aadhar-Backend.git',
		demo: 'https://ocr-aadhar-front.vercel.app/',
	},
	{
		title: 'stock-image-platform',
		description: 'Image upload, edit & manage app with Cloudinary support.',
		tech: ['TypeScript', 'Node.js', 'React', 'Cloudinary'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/StockImage-Frontend.git',
		github_server: 'https://github.com/Javedmv/StockImage-Backend.git',
		demo: 'https://stock-image-frontend.vercel.app/',
	},
	{
		title: 'Food Order App',
		description: 'Online food ordering app with React and Node backend.',
		tech: ['React', 'Node.js'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Food-Order-App.git',
		github_server: 'https://github.com/Javedmv/Food-Order-App/tree/main/backend',
		demo: '',
	},
	{
		title: 'Maps',
		description: 'Interactive map visualization built with React and MapLibre.',
		tech: ['MapLibre', 'React'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Maps.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Todo',
		description: 'Simple and responsive to-do app made with React.',
		tech: ['React'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Todo.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Tic-tac-toe',
		description: 'Classic Tic-Tac-Toe game built using React.',
		tech: ['React'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Tic-tac-toe.git',
		github_server: '',
		demo: 'https://tic-tac-toe-six-ebon-41.vercel.app/',
	},
	{
		title: 'Chat-app-CLI',
		description: 'Command-line chat app built using Node.js.',
		tech: ['Node.js'],
		image: '📋',
		github_clent: '',
		github_server: 'https://github.com/Javedmv/chat-app-js.git',
		demo: '',
	},
	{
		title: 'Investment-Banking',
		description: 'Investment banking dashboard built using React.',
		tech: ['React'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Investment-Banking.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'OLX-Clone',
		description: 'OLX-like marketplace using React and Firebase.',
		tech: ['React', 'Firebase', 'Tailwind CSS'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/OLX-clone.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Netflix-Clone',
		description: 'Netflix clone using React and TMDB API.',
		tech: ['React', 'Tailwind CSS'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Netflix-Clone.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Joke-teller',
		description: 'Random joke generator app built using Vanilla JS.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/joke-teller.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'PictureInPicture',
		description: 'Share another window in a small overlay frame.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/PictureInPicture.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Infinity-scroll',
		description: 'Infinite scroll image gallery using Unsplash API.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Infinity-scorll.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Pig-Game',
		description: 'Dice game to improve DOM manipulation skills.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Pig-Game.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Quote-Generator',
		description: 'Displays random inspirational quotes via API.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/quote-Generator.git',
		github_server: '',
		demo: '',
	},
	{
		title: 'Guess-My-Number',
		description: 'Fun number guessing game built with Vanilla JS.',
		tech: ['VanilaJS', 'HTML5', 'CSS3'],
		image: '📋',
		github_clent: 'https://github.com/Javedmv/Guess-My-Number.git',
		github_server: '',
		demo: '',
	},
];

