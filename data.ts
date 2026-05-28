import {
	GitHubLogoIcon,
	LinkedInLogoIcon,
	TwitterLogoIcon,
	EnvelopeClosedIcon,
	FileTextIcon,
} from "@radix-ui/react-icons";

// Portfolio data types
export type Education = {
	degree: string;
	institution: string;
	duration: string;
	cgpa: string;
	description: string;
};

export interface Experience {
	role: string;
	company: string;
	duration: string;
	description: string;
}

export interface Project {
	title: string;
	description: string;
	tech: string[];
	github: string;
	demo: string;
	thumbnail: string;
}

export interface SocialLink {
	name: string;
	href: string;
	icon: any; // React component type
	color?: string;
	download?: string;
}

export interface PersonalInfo {
	name: string;
	title: string;
	email: string;
	resumeUrl: string;
	resumeFilename: string;
}

// Personal information
export const personalInfo: PersonalInfo = {
	name: "Aditi Maheshwari",
	title: "Software Developer",
	email: "https://mail.google.com/mail/?view=cm&to=adimaheshwari2207@gmail.com",
	resumeUrl:
		"https://drive.google.com/file/d/1ZEEMxwQvbkxvwOSeL0UCFuDOA6xhgkvM/view?usp=drive_link",
	resumeFilename: "Aditi_Maheshwari_Resume.pdf",
};

// Social links data
export const socialLinks: SocialLink[] = [
	{
		name: "GitHub",
		href: "https://github.com/adiitiii",
		icon: GitHubLogoIcon,
		color: "hover:text-gray-300",
	},
	{
		name: "LinkedIn",
		href: "https://www.linkedin.com/in/maheshwariaditi22",
		icon: LinkedInLogoIcon,
		color: "hover:text-blue-400",
	},
	{
		name: "Twitter",
		href: "https://x.com/adititwts",
		icon: TwitterLogoIcon,
		color: "hover:text-blue-300",
	},
	{
		name: "Email",
		href: "https://mail.google.com/mail/?view=cm&to=adimaheshwari2207@gmail.com",
		icon: EnvelopeClosedIcon,
		color: "hover:text-green-400",
	},
	{
		name: "Resume",
		href: "https://drive.google.com/file/d/1ZEEMxwQvbkxvwOSeL0UCFuDOA6xhgkvM/view?usp=drive_link",
		icon: FileTextIcon,
		download:
			"https://drive.google.com/file/d/1ZEEMxwQvbkxvwOSeL0UCFuDOA6xhgkvM/view?usp=drive_link",
	},
];

// Portfolio data
export const skills: string[] = [
	"Python",
	"JavaScript",
	"Java",
	"React",
	"Next.js",
	"Tailwind",
	"MySQL",
	"SQLite",
	"SQLAlchemy",
	"Git",
	"GitHub",
	"HTML5",
	"CSS3",
	"Flask",
	"Figma",
	"REST APIs",
	"Fetch API",
];

export const education: Education[] = [
	{
		degree: "Master of Computer Applications (MCA)",
		institution: "JECRC University, Jaipur",
		duration: "2024 - Present",
		cgpa: "8.75 / 10",
		description: `Focused on front-end development principles and algorithmic problem-solving through data structures.`,
	},
	{
		degree: "Bachelor of Computer Applications (BCA)",
		institution: "Poornima University, Jaipur",
		duration: "2021 - 2024",
		cgpa: "8.05 / 10",
		description: `Studied fundamentals in Computer Programming, DSA, Computer Networks, and Operating Systems.`,
	},
];

export const experience: Experience[] = [
	{
		role: "Web Developer",
		company: "Stratick - landing page for startup website",
		duration: "1 feb 2024 - 15 feb 2024",
		description: `
    Built fully responsive, visually engaging UIs with HTML, CSS, and JavaScript, boosting user engagement
    by 30%, focusing clean, maintainable code for improved user interaction.
    `,
	},
	{
		role: "Web Developer",
		company: "Jaipur SEO Content Writing",
		duration: "mar 2024 - sep 2024",
		description: `
      Designed and delivered multiple websites on Duda, writing
      custom components in HTML, CSS, and JavaScript to meet specific design requirements.
    `,
	},
];

export const projects: Project[] = [
	{
		title: "Flashcard Quiz App",
		description:
			"Built a full-stack flashcard app with Flask, React & SQLite — quiz mode, REST API, and automated tests.",
		tech: [
			"Python",
			"Flask",
			"React",
			"SQLite",
			"SQLAlchemy",
			"REST API",
			"pytest",
		],
		github: "https://github.com/adiitiii/Flashcard-app-flask-react.git",
		demo: "https://flashcard-app-flask-react.vercel.app/",
		thumbnail: "/flashcards.png",
	},
	{
		title: "Etch-a-Sketch",
		description:
			"Browser-based sketching app with adjustable grid and color picker",
		tech: ["HTML", "CSS", "Vanilla JavaScript", "Figma"],
		github: "https://github.com/adiitiii/Etch-a-Sketch.git",
		demo: "https://eclectic-capybara-39cd2c.netlify.app/",
		thumbnail: "/etch-a-sketch.png",
	},
	{
		title: "Meow Mentions",
		description:
			"Fetches and displays random cat facts via third-party API",
		tech: ["HTML", "CSS", "Vanilla JavaScript", "Figma", "Fetch API"],
		github: "https://github.com/adiitiii/meow_mentions.git",
		demo: "https://tubular-flan-190ca0.netlify.app/",
		thumbnail: "/meow-mentions.png",
	},
];

// Default export for convenience
const data = {
	personalInfo,
	socialLinks,
	skills,
	education,
	experience,
	projects,
};

export default data;
