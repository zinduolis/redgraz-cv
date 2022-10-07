import {
  AcademicCapIcon,
 // CalendarIcon,
 // DownloadIcon,
 // FlagIcon,
  MapIcon,
 // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
// import TwitterIcon from '../components/Icon/TwitterIcon';
//import heroImage from '../images/header-background.webp';
import heroImage from '../images/Sea_Landscape.webp';
import porfolioImage1 from '../images/portfolio/1 - waveportal.png';
// import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/2 - Flashloan.webp';
import porfolioImage3 from '../images/portfolio/3-Matrix.webp';
// import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
// import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
// import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
// import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
// import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
// import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
// import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
// import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.webp';
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
  title: 'React Resume',
  description: "Red Graz Resume",
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
        as <strong className="text-stone-100">Freelance Web3 Developer - </strong> I aim to write the code that writes
        the next chapter for the world with more automation and transparency!
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you'll find me <strong className="text-stone-100"> {' '} surfing 🏄‍♂️ {' '}</strong>
        or tending my beautiful {' '}
        <strong className="text-stone-100">backyard garden 👨‍🌾</strong>.
      </p>
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: DownloadIcon,
    // },
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
  description: [
    {line: `• Passion for coding since early school years. Competed successfully in school, and then city level programming Olympiads using Pascal language.`},
    {line: `• Dived deeper into Computer Science studies - giving me a real grounding in concepts and programming languages (C++, C, ASM to name just a few).`},
    {line: `• My Bachelor degree saw me deliver LabView automation for a Laser Research Centre and an automated laser-induced damage measurement system.`},
    {line: `• Post-graduation, I pursued IT as a career, building to several roles with HP partners and Hewlett Packard corporation itself. Here I covered a full range in software development, integration and automation, from stakeholder management to requirements-gathering, and designing products - to seeing customers smile and happily perform their roles using my code in production (JavaScript, Java, Jython, Basic, SQL, etc.).`},
    {line: `• I saw the security field as an obvious evolution for me - constructing software applications less vulnerable to the actions of malicious actors, and instilling peace of mind for people using them that the tools I am building are safe for them and their companies. Through my security journey, I have interacted with multiple technologies and coding languages (multiple operating systems, CI/CD platforms, containers, service buses, TypeScript, Python, React, MongoDb, etc.).`},
    {line: `• I joined Swyftx Crypto Exchange, and was enamoured with crypto and blockchain technology! Now I want to roll up my sleeves and get my hands dirty in the coding technologies for web3 to write the next chapter for the world with more automation and transparency!`},
    {line: `• At present, I am working independently on projects with smart contracts on local and test blockchains using Solidity and interacting with them through the React frontend. Get in touch to see how we can work together, or have a chat to me about how I might fit a contract need or role.`},
  ], 
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
    title: 'Flashloan foundation',
    description: 'Solidity and JavaScript',
    url: 'https://github.com/zinduolis/flashloan-foundation',
    image: porfolioImage2,
  },
  {
    title: 'Wave Portal',
    description: 'Solidity and React',
    url: 'https://redgraz-waveportal.ilgakulnis.repl.co/',
    image: porfolioImage1,
  },
  {
    title: 'More Tasty code 🤤',
    description: 'On GitHub',
    url: 'https://github.com/zinduolis',
    image: porfolioImage3,
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
    content: <p>Obtaining the CISSP accreditation demonstrated I had what it it takes to effectively design, implement and manage best-in-class cybersecurity programs.</p>,
  },
  {
    date: '2018',
    location: 'The Open Group',
    title: 'TOGAF 9.1 Certified',
    content: <p>Working with the most commonly used framework for enterprise architecture - providing an approach for designing, planning, implementing, and governing an enterprise IT architecture.</p>,
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
    content: <p>ITIL is the pre-eminent global framework for IT service management and delivery.</p>,
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
      <>
        <p>   
          • Mastering Solidity through cryptozombies.io projects (smart contracts for the game, using ERC721 standard, calling oracles, writing Truffle test cases). 
        </p>
        <p>  
          • Multiple Web3 & Web2 projects on my GitHub using the following technologies: Solidity, React (JS/TS), Hardhat & Ganache local blockchains, Truffle development framework, Infura node, Ropsten Network, Remix IDE, openzeppelin, ethers and web3 libraries. 
        </p>
        <p>  
          • Hacking Solidity Smart Contracts through Ethernaut. 
        </p>
</>
    ),
  },
  {
    date: 'June 2021 - August 2022',
    location: 'Swyftx',
    title: 'Application Security Engineer',
    content: (
      <>
        <p>
          • Web App security testing / pen testing and vulnerability remediation (OWASP ASVS).
        </p>
        <p>
          • Standing up cyber capability (NIST CSF) and creating companywide value ‘Act Securely’.
        </p>
        <p>
          • Threat modelling (Attack Trees, STRIDE).
        </p>
        <p>
          • Assisting with GDPR and ISO 27001.
        </p>
      </>
    ),
  },
  {
    date: 'CV',
    location: 'LinkedIn',
    title: 'Detailed Experience can be provided upon request',
    content: (
      <p>
        .....
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
