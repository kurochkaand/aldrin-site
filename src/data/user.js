const INFO = {
	main: {
		title: "Aldrin Ong",
		name: "Aldrin Ong",
		email: "aldrin.ong@berkeley.edu",
		logo: `${process.env.PUBLIC_URL}/3D_Animation_logo.jpg`,
	},

	nav: [
		{ name: "Home", route: "/" },
		{ name: "About", route: "/about" },
		{ name: "Work", route: "/work" },
		{ name: "Projects", route: "/projects" },
		{ name: "Articles", route: "/articles" },
		{ name: "Contact", route: "/contact" },
	],

	socials: {
		twitter: "https://twitter.com/",
		github: "https://github.com/0n9aldrin",
		linkedin: "https://linkedin.com/aldrin0n9",
		instagram: "https://instagram.com/aldrin0n9",
		stackoverflow: "https://stackoverflow.com/",
		facebook: "https://facebook.com/",
		medium: "https://medium.com/@0n9aldrin",
	},

	homepage: {
		titles: [
			"Full-stack Web Developer",
			"Mobile App Developer",
			"Budding Entrepreneur",
			"Product Manager",
			"Tech Visionary",
		],
		description:
			"With a strong computer sceicne foundation from UC Berkeley and hands-on experience in building top-notch applications, I've always been at the intersection of tech and business. My entrepreneurial spirit has driven me to co-found startups, and my experience, outside my comfort zone, as a Product Manager at Jetzy exemplifies my inherent drive to take ownership and dive deep into new challenges, never saying \"that's not my job\". Whether I'm improving usability metrics at Amazon (AWS) or launching a trending tennis app, I bring a unique blend of technical expertise, strategic thinking, and a genuine passion for creating impactful digital solutions.",
	},

	about: {
		title: "I’m Aldrin. I live in Berkeley, where I design the future.",
		description:
			"I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
	},

	articles: {
		title: "I often have good ideas but not enough time to write them down.",
		description:
			"Chronological collection of my long-form thoughts on college, programming, leadership, product design, and more.",
	},

	work: {
		title: "My work experience inspiring the next generation of innovators.",
		description:
			"Chronological collection of my long-form thoughts on programming, leadership, product design, and more.",
		items: [
			{
				title: "Amazon Web Services",
				role: "Software Development Engineer Intern",
				date: "May 2023 - Aug 2023",
				description:
					"Spearheaded the development of a high-visibility AWS console feature, enhancing usability metrics by 20%, and significantly optimized backend latency and code quality.",
				logo: `${process.env.PUBLIC_URL}/aws.png`,
				location: "Seattle, WA",
				url: "aws.amazon.com/",
				skills: [
					"React",
					"Java",
					"Restful API",
					"AWS",
					"Lambda",
					"OpenSearch",
					"SQL",
				],
			},
			{
				title: "Jetzy",
				role: "Lead Product Manager",
				date: "May 2022 - Dec 2022",
				description:
					"Championed user acquisition strategies resulting in a 530% surge in new sign-ups, while steering cross-functional teams to prioritize and successfully launch three strategic products.",
				logo: `${process.env.PUBLIC_URL}/jetzy.png`,
				location: "New York City, NY",
				url: "jetzyapp.com/",
				skills: [
					"Jira",
					"Figma",
					"Flutter",
					"Firebase",
					"Google analytics",
					"SQL",
				],
			},
			{
				title: "Trainme",
				role: "Co-Founder & CTO",
				date: "Jun 2019 - Jan 2021",
				description:
					"Launched and managed a tennis-centric platform connecting coaches and students, securing a top-three trending spot on Google Play Store and gaining endorsement from the Indonesian Tennis Association.",
				logo: `${process.env.PUBLIC_URL}/trainme.png`,
				location: "Jakarta, Indonesia",
				url: "trainme.com/",
				skills: ["Android Studio", "PHP", "Firebase"],
			},
		],
	},

	projects: [
		{
			title: "Lecturely",
			description:
				"A React Native application designed to enhance the interaction between course staff and students during large live lectures.",
			logo: `${process.env.PUBLIC_URL}/lecturely.png`,
			linkText: "View Project",
			link: "https://github.com/NithikYekollu/lecturely-new",
		},

		{
			title: "TMDB Declarative UI",
			description:
				"An internship project implemented using Jetpack Compose to display popular movies using The Movie Database API.",
			logo: "https://developer.android.com/static/images/logos/android.svg",
			linkText: "View Project",
			link: "https://github.com/0n9aldrin/tmdb-declarative-ui",
		},

		{
			title: "Price Comparison App",
			description:
				"A Flutter app that compares the prices of 5 Indonesian e-commerce websites using web scraping and hidden endpoints.",
			logo: "https://cdn.iconscout.com/icon/free/png-512/free-flutter-2038877-1720090.png?f=avif&w=512",
			linkText: "View Project",
			link: "https://github.com/0n9aldrin/price-comparison",
		},

		{
			title: "Machine Learning Research Paper",
			description:
				"To what extent can supervised ML algorithms — ANNs and SVMs — be used to predict football matches in the Premier League?",
			logo: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
			linkText: "View Project",
			link: "research.pdf",
		},

		{
			title: "Two Wish",
			description:
				"A customer side Flutter app of the TwoWish.jkt company that allows users to donate and contact various organisations that need donations. ",
			logo: "https://cdn.iconscout.com/icon/free/png-512/free-flutter-2038877-1720090.png?f=avif&w=512",
			linkText: "View Project",
			link: "https://github.com/0n9aldrin/2wish",
		},

		{
			title: "Trainme",
			description:
				"An android app that connects Indonesian tennis coaches with students and is a one-stop platform for tennis enthusiasts.",
			logo: `${process.env.PUBLIC_URL}/trainme.png`,
			linkText: "View Project",
			link: "https://github.com/0n9aldrin/trainme-frontend",
		},
	],
};

export default INFO;
