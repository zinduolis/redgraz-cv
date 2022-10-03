import {
  AcademicCapIcon,
 // CalendarIcon,
  DownloadIcon,
 // FlagIcon,
  MapIcon,
 // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/Sea_Landscape.jpg';
import porfolioImage1 from '../images/portfolio/1 - waveportal.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
// import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
// import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
// import testimonialImage from '../images/Garden.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Red Graz.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as <strong className="text-stone-100">Freelance Web3 Developer</strong> with aim to write 
        the next chapter for the world with more automation and transparency!.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me surfing <strong className="text-stone-100">in the ocean 🏄‍♂️ {' '}</strong>
        or looking after my beautiful {' '}
        <strong className="text-stone-100">backyard garden 👨‍🌾</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `• Passion for coding discovered early in school years. I was invited to participate in school, and then city level programming Olympiads using Pascal language.
  • Computer Science studies gave me a deeper dive into coding concepts and programming languages (C++, C, ASM to name a few).
  • For my bachelor’s degree, I’ve delivered LabView automation for Laser Research Centre. I have automated laser induced damage measurement system.
  • After graduating, I pursued an IT career which led to multiple roles with HP partners and HP itself. Here I covered multiple areas in software development, integration and automation, from requirements gathering, designing to seeing customers smile and perform their duties using my code in production (JavaScript, Java, Jython, Basic, SQL, etc.).
  • I entered the security field to make applications less prone to the actions of malicious actors, instilling peace of mind for people that the tools I am building are safe. Through my security journey, I have interacted with multiple technologies and coding languages (multiple operating systems, CI/CD platforms, containers, service buses, TypeScript, Python, React, MongoDb, etc.).
  • After joining a Swyftx Crypto Exchange, I discovered and fell in love with crypto and blockchain technology. Now I want to get my hands dirty in the coding technologies for web3 and write the next chapter for the world with more automation and transparency!
  • Since Swyftx, I have independently started smart contracts projects on local and test blockchain networks using Solidity and interacting with them through React frontend.`,
  aboutItems: [
    {label: 'Location', text: 'QLD, Australia', Icon: MapIcon},
   // {label: 'Age', text: '29', Icon: CalendarIcon},
  //  {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Coding, Surfing, Gardening', Icon: SparklesIcon},
    {label: 'Study', text: 'Computer Science / Physics', Icon: AcademicCapIcon},
  //  {label: 'Employment', text: 'Instant Domains, inc.', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Lithuanian',
        level: 10,
      },
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Russian',
        level: 8,
      },
      {
        name: 'Polish',
        level: 6,
      },
      {
        name: 'German',
        level: 5,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'Angular',
        level: 6,
      },
      {
        name: 'Javascript',
        level: 8,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Solidity',
        level: 8,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
      {
        name: 'C',
        level: 8,
      },
    ],
  },
  {
    name: 'Scripting',
    skills: [
      {
        name: 'Javascript',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'Jython',
        level: 7,
      },
      {
        name: 'Basic',
        level: 5,
      },
    ],
  },
  {
    name: 'Database',
    skills: [
      {
        name: 'MongoDB',
        level: 5,
      },
      {
        name: 'SQL',
        level: 8,
      },
      {
        name: 'Oracle',
        level: 7,
      },
    ],
  },
  {
    name: 'Virtualisation',
    skills: [
      {
        name: 'Docker',
        level: 6,
      },
      {
        name: 'Kubernetes',
        level: 6,
      },
    ],
  },
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'GitHub',
        level: 9,
      },
      {
        name: 'GitLab',
        level: 6,
      },
      {
        name: 'Buildkite',
        level: 5,
      },
    ],
  },
  {
    name: 'Web Hosting',
    skills: [
      {
        name: 'Vercel',
        level: 8,
      },
      {
        name: 'Replit',
        level: 8,
      },
      {
        name: 'GitHub Pages',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Wave Portal',
    description: 'Smart contract written and deployed to Ethereum testnet with React frontend.',
    url: 'https://redgraz-waveportal.ilgakulnis.repl.co/',
    image: porfolioImage1,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2020',
    location: 'SANS Institute',
    title: 'GIAC Security Essentials Certified',
    content: <p>Essential information security skills and techniques to protect and secure critical information and technology assets.</p>,
  },
  {
    date: '2019',
    location: 'ISC2',
    title: 'CISSP Certified',
    content: <p>Earning CISSP proves I have what it takes to effectively design, implement and manage a best-in-class cybersecurity program.</p>,
  },
  {
    date: '2018',
    location: 'The Open Group',
    title: 'TOGAF 9.1 Certified',
    content: <p>It's the most used framework for enterprise architecture that provides an approach for designing, planning, implementing, and governing an enterprise IT architecture.</p>,
  },
  {
    date: '2012',
    location: 'HP',
    title: 'Accredited Integration Specialist Service Manager v9',
    content: <p>Skills and experience required to implement and integrate HP Service Manager solutions.</p>,
  },
  {
    date: '2010',
    location: 'HP',
    title: 'Certified Instructor',
    content: <p>Skills and experience required to train people on HP products.</p>,
  },
  {
    date: '2008',
    location: 'EXIN',
    title: 'ITIL v3 Foundation Certified',
    content: <p>ITIL is the preeminent global framework for IT service management and delivery.</p>,
  },
  {
    date: '2007',
    location: 'Vilnius University, Lithuania',
    title: 'Bachelor (Computer Science / Physics)',
    content: <p>Course that taught me more in depth programming and physics.</p>,
  },
];

/*
Web3 Developer, Freelancer (08/2022 – current)
*/

export const experience: TimelineItem[] = [
  {
    date: 'August 2022 - Present',
    location: 'Freelancer',
    title: 'Web3 Developer',
    content: (
      <p>      
• Mastering Solidity through cryptozombies.io projects (smart contracts for the game, using ERC721 standard, calling oracles, writing Truffle test cases).
• Multiple Web3 & Web2 projects on my GitHub using the following technologies: Solidity, React (JS/TS), Hardhat & Ganache local blockchains, Truffle development framework, Infura node, Ropsten Network, Remix IDE, openzeppelin, ethers and web3 libraries.
• Hacking Solidity Smart Contracts through Ethernaut.
      </p>
    ),
  },
  {
    date: 'June 2021 - August 2022',
    location: 'Swyftx',
    title: 'Application Security Engineer',
    content: (
      <p>
• Web App security testing / pen testing and vulnerability remediation (OWASP ASVS).
• Standing up cyber capability (NIST CSF) and creating companywide value ‘Act Securely’.
• Threat modelling (Attack Trees, STRIDE).
• Assisting with GDPR and ISO 27001.
      </p>
    ),
  },
  {
    date: '',
    location: '',
    title: 'Detailed Experience can be provided upon request',
    content: (
      <p>
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Head of Security at Swyftx',
      text: 'Red Graz and I worked together in Swyftx security. For our entire time together, he was always supremely adaptable, eager to learn, kind hearted, and passionate about making Swyftx great. He has strong technical skills, stretching across a broad range of topics. He was most recently in an Application Security role, in which he was supporting a number of our engineering squads. I will be eagerly following where your career will take you!',
      image: '',
    },
    {
      name: 'Senior Account Executive at Snyk',
      text: 'I thoroughly enjoyed working with Red Graz during his time at Swyftx. Given his previous experience at Microfocus with Fortify, I found Red Graz to have a good knowledge of the AppSec space and was engaged & inquisitive to learn more on Snyk’s approach. During the roll out Snyk, our Customer Success Team who assisted during implementation, found Red Graz to be a great communicator and his proactive nature resulted in a huge amount of progress in a short period of time. I wish Red Graz all the best and look forward to seeing what his next move is.',
      image: '',
    },
    {
      name: 'Peer at Swyftx',
      text: 'Red Graz is a fantastic teammate to work alongside. He is diligent, thorough, knowledgeable, and considerate of the needs of others. He brings humour and a unique perspective and I have enjoyed all the time spent working with him.',
      image: '',
    },
    {
      name: 'LinkedIn',
      text: 'Heaps more feedback is available!',
      image: '',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.LinkedIn,
      text: 'My LinkedIn',
      href: 'https://www.linkedin.com/in/Al-7866317/',
    },
    {
      type: ContactType.Location,
      text: 'Gold Coast, QLD, Australia',
      href: 'https://goo.gl/maps/UbAyx7GpG8GvAQxf8',
    },
    {
      type: ContactType.Github,
      text: 'zinduolis',
      href: 'https://github.com/zinduolis',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/zinduolis'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/Al-7866317/'},
];
