import {
  AcademicCapIcon,
 // CalendarIcon,
 // DownloadIcon,
 // FlagIcon,
  MapIcon,
 // OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import YNDMDashboard from '../images/portfolio/YNDM-Dashboard.webp';
import YNDMLogin from '../images/portfolio/YNDM-Login.webp';
import porfolioImage1 from '../images/portfolio/1 - waveportal.png';
import porfolioImage2 from '../images/portfolio/2 - Flashloan.webp';
import porfolioImage3 from '../images/portfolio/3-Matrix.webp';
import porfolioImage4 from '../images/portfolio/4 - randomnfts.webp';
import porfolioImage5 from '../images/portfolio/5 - ethernautHack.webp';
import porfolioImage6 from '../images/portfolio/6 - solanaSurf.webp';
import profilepic from '../images/profilepic.webp';
import heroImage from '../images/Sea_Landscape.webp';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  Hobbies,
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
  name: `Hello 👋`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am Red Graz, <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as <strong className="text-stone-100">Freelance Web3 Developer.</strong> I write the code that writes
        the next chapter for the world with more automation and transparency!
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
    {line: `• Strong foundation in computer science with early achievements in programming competitions, followed by formal education covering C++, C, and Assembly.`},
    {line: `• Developed automation systems using LabView for laser research during bachelor's studies.`},
    {line: `• Built extensive software development experience at HP and partners, working across full development lifecycle using JavaScript, Java, Jython, and SQL.`},
    {line: `• Transitioned to Application Security, specialising in secure software development across various technologies (CI/CD, containers, TypeScript, Python, React, MongoDB).`},
    {line: `• Led security initiatives at Swyftx as founding security member, growing team from 1 to 20+ while focusing on application security.`},
    {line: `• Gained blockchain expertise through smart contract development using Solidity and React frontend integration.`},
    {line: `• Drove security awareness and best practices at Officeworks through implementation of security scanning tools and threat assessments.`},
    {line: `• Enhanced SSDLC maturity at Belong through stakeholder engagement and security risk mitigation.`},
    {line: `• Currently helping multiple startups with DevSecOps and working on my own coding projects.`},
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
      {
        name: 'rust',
        level: 5,
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
    title: 'YNDM Login',
    description: 'Login page for Your Next Digital Me (YNDM) application.',
    url: '', // Add URL if available
    image: YNDMLogin,
  },
  {
    title: 'YNDM Dashboard',
    description: 'Dashboard for Your Next Digital Me (YNDM) application.',
    url: '', // Add URL if available
    image: YNDMDashboard,
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
        <p>  
          • Building on Solana using JavaScript, rust and anchor. 
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
      name: 'Lead Solution Architect at Micro Focus',
      text: 'Red Graz is a very thorough individual, Always ensuring that tasks are completed to ensure that customers of our team are aware of what we expect of them as well as what they should expect from us. Red Graz is incredibly knowledgeable across many disciplines and applies his knowledge learned elsewhere to all aspects of his work.',
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

/**
 * Hobies
 * !!! At the moment this component is not used, just created for potentially being used in the future.
 */
export const hobbies: Hobbies = {
  content: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you'll find me <strong className="text-stone-100"> {' '} surfing 🏄‍♂️ {' '}</strong>
        or tending my beautiful {' '}
        <strong className="text-stone-100">backyard garden 👨‍🌾</strong>.
      </p>
    </>
  ),
};
