import type { LucideIcon } from 'lucide-react';
import {
  Code2,
  Leaf,
  ShoppingBag,
  Cpu,
  GraduationCap,
  Trophy,
  Rocket,
  Award,
  Briefcase,
  Terminal,
  Database,
  Globe,
  Layers,
  Sparkles,
  Bot,
  Activity,
  ShieldCheck,
  Server,
  Network,
  Binary,
  FolderGit2,
  CheckCircle2,
} from 'lucide-react';

import kisanconnectImg from '@/assets/kisanconnect.png';
import posterKadaiImg from '@/assets/posterkadai.png';
import fertilizationImg from '@/assets/fertilization.png';
import medplusAiImg from '@/assets/medplus-ai.jpg';
import bankSystemImg from '@/assets/bank-system.jpg';
import smartathonImg from '@/assets/smartathon-ai.jpg';
import profileAvatar from '@/assets/profile-avatar.png';

export type NavItem = { label: string; href: string; sectionId: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Achievements', href: '#achievements', sectionId: 'achievements' },
  { label: 'Articles', href: '#blog', sectionId: 'blog' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export type HeroRole = { title: string };

export const heroRoles: HeroRole[] = [
  { title: 'Software Engineer' },
  { title: 'Full-Stack Developer' },
  { title: 'Computer Science Engineering Student' },
  { title: 'UI/UX & Product Builder' },
];

export const heroTechBadges = [
  { label: 'Java', value: 'Java' },
  { label: 'Python', value: 'Python' },
  { label: 'React 18', value: 'React' },
  { label: 'Node.js & Express', value: 'Node' },
  { label: 'MongoDB Atlas', value: 'MongoDB' },
  { label: 'Tailwind CSS', value: 'Tailwind' },
  { label: 'REST APIs', value: 'API' },
  { label: 'Firebase', value: 'Firebase' },
];

export type AboutStat = { label: string; value: number; suffix?: string };

export const aboutStats: AboutStat[] = [
  { label: 'Public Repositories', value: 9, suffix: '' },
  { label: 'Verified Git Commits', value: 450, suffix: '+' },
  { label: 'Live Deployments', value: 2, suffix: '' },
  { label: 'Academic Year', value: 3, suffix: 'rd Year' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: {
    name: string;
    level: string; // Recruiter-friendly: 'Advanced', 'Proficient', 'Familiar'
  }[];
};

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Programming Languages',
    icon: Code2,
    items: [
      { name: 'Java (Core OOP, Collections, Multithreading)', level: 'Advanced' },
      { name: 'Python (Data Structures, Scripting, Automation)', level: 'Advanced' },
      { name: 'JavaScript (ES6+, Async/Await, DOM)', level: 'Advanced' },
      { name: 'TypeScript (Type Safety, Interfaces)', level: 'Proficient' },
      { name: 'C & C++ (Algorithms, Memory Foundations)', level: 'Proficient' },
      { name: 'SQL (Queries, Joins, Schema Normalization)', level: 'Proficient' },
    ],
  },
  {
    title: 'Frontend & Web Development',
    icon: Globe,
    items: [
      { name: 'React 18 & Vite (Component Architecture, Hooks)', level: 'Advanced' },
      { name: 'Tailwind CSS (Responsive Design Systems)', level: 'Advanced' },
      { name: 'HTML5 & Modern CSS3 (Semantic Web, Flexbox, Grid)', level: 'Advanced' },
      { name: 'Bootstrap & EJS (Server-Side Templating)', level: 'Proficient' },
      { name: 'Client State Management & Web Performance', level: 'Advanced' },
    ],
  },
  {
    title: 'Backend & API Engineering',
    icon: Server,
    items: [
      { name: 'Node.js & Express.js (REST APIs, Middleware)', level: 'Advanced' },
      { name: 'FastAPI (Asynchronous Python Endpoints)', level: 'Proficient' },
      { name: 'Authentication & Security (JWT, Role-Based Access Control)', level: 'Proficient' },
      { name: 'API Design & Testing (Postman, REST Standards)', level: 'Advanced' },
      { name: 'Error Handling Middleware & Payload Validation', level: 'Advanced' },
    ],
  },
  {
    title: 'Databases & Cloud Hosting',
    icon: Database,
    items: [
      { name: 'MongoDB Atlas (Atomic Operators, Aggregations)', level: 'Advanced' },
      { name: 'Firebase Cloud Firestore & Realtime Database', level: 'Advanced' },
      { name: 'Firebase Hosting & Global Edge Deployment', level: 'Advanced' },
      { name: 'SQLite & Relational Database Design', level: 'Proficient' },
    ],
  },
  {
    title: 'Developer Tools & Hardware',
    icon: Terminal,
    items: [
      { name: 'Git & GitHub (Distributed Version Control, Pull Requests)', level: 'Advanced' },
      { name: 'Linux CLI & Bash Commands', level: 'Proficient' },
      { name: 'ESP32 Microcontrollers & Arduino (Hardware Telemetry)', level: 'Proficient' },
      { name: 'VS Code, Postman & Chrome DevTools', level: 'Advanced' },
    ],
  },
  {
    title: 'UI/UX & Product Development',
    icon: Sparkles,
    items: [
      { name: 'Responsive & Mobile-First Web Architecture', level: 'Advanced' },
      { name: 'User Flow Design & Interactive Wireframing', level: 'Proficient' },
      { name: 'Web Accessibility & Semantic HTML Best Practices', level: 'Proficient' },
      { name: 'E-Commerce Product Operations & Customer Checkout', level: 'Advanced' },
    ],
  },
];

export type ProjectCategory = 'All' | 'Full Stack & Web' | 'Academic & Systems' | 'IoT & Machine Learning';

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  problemStatement: string;
  contribution: string;
  architecture: string[];
  impactMetric: string;
  imageSrc: string;
  featured?: boolean;
  status: 'Live Production' | 'Hackathon Project' | 'Project Expo' | 'Completed';
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    id: 'posterkadai',
    title: 'PosterKadai — E-Commerce Storefront & Custom Print Business',
    tagline: 'Production wall art and personalized merchandise storefront with direct WhatsApp checkout.',
    description:
      'An active commercial e-commerce web platform for custom wall prints, featuring responsive catalog browsing, shopping cart management, Firebase Firestore, and direct WhatsApp order fulfillment.',
    problemStatement:
      'Regional buyers and art enthusiasts needed an intuitive, frictionless way to explore custom artwork and place personalized orders without tedious multi-step account barriers.',
    contribution:
      'Independently architected the full-stack web storefront from design to deployment, configured Firebase Cloud Firestore for catalog indexing, and engineered the automated WhatsApp cart checkout bridge.',
    longDescription:
      'PosterKadai is a live commercial platform engineered for custom wall artwork and prints. Features a lightweight catalog architecture with high-resolution image optimization, responsive shopping cart, dynamic category filtering, and direct WhatsApp checkout integration for instantaneous order fulfillment.',
    architecture: [
      'React 18 single-page application with responsive Tailwind CSS design system',
      'Firebase Cloud Firestore for real-time catalog indexing and order data structure',
      'Seamless WhatsApp ordering bridge transforming cart states into structured customer orders',
      'Optimized client-side asset delivery ensuring sub-1.2s page load speeds',
    ],
    impactMetric: 'Live production deployment with active customer transactions and sub-1.2s page load speed',
    imageSrc: posterKadaiImg,
    featured: true,
    status: 'Live Production',
    category: 'Full Stack & Web',
    tags: ['React 18', 'Firebase Firestore', 'Tailwind CSS', 'WhatsApp Business API', 'E-Commerce'],
    githubUrl: 'https://github.com/Surya252006/Posterkadai',
    liveUrl: 'https://posterkadai-e364b.web.app/',
    icon: ShoppingBag,
  },
  {
    id: 'kisanconnect',
    title: 'KisanConnect — AgriTech Direct Farmer-to-Buyer Marketplace',
    tagline: '1st Place Winner at MongoDB Tech Odyssey 24-Hr Hackathon — Direct agricultural trade platform with APMC Mandi price benchmarking.',
    description:
      'A full-stack agricultural marketplace platform built during MongoDB Tech-Odyssey to eliminate middlemen, giving farmers direct access to retail consumers, retailers, and bulk buyers.',
    problemStatement:
      'Smallholder farmers frequently lose significant profit margins to exploitative intermediaries due to lack of direct market access and real-time mandi rate transparency.',
    contribution:
      'Engineered the full-stack architecture using React and Node.js/Express, designed atomic inventory operations with MongoDB Atlas, and integrated APMC mandi price trend benchmarking.',
    longDescription:
      'KisanConnect is a production agricultural platform engineered to eliminate exploitative intermediary markups. Features Role-Based Access Control (Farmer, Consumer, Retailer, Wholesaler, Admin), real-time Mandi price comparison, atomic inventory reduction with MongoDB atomic operators ($gte, $inc), end-to-end logistics tracking, and verified producer badges. Won 1st Place at the MongoDB Tech Odyssey 24-Hour Hackathon at DSCE Coimbatore with SmartBridge. Live in production on Firebase Hosting.',
    architecture: [
      'React 18 single-page application with responsive Tailwind CSS components',
      'Node.js & Express.js REST API with JWT authentication and multi-tier RBAC permissions',
      'MongoDB Atlas with compound indexes and race-condition-free atomic inventory pipelines',
      'Mandi price benchmarking with trend indicators (UP, DOWN, STABLE) and Firebase Hosting deployment',
    ],
    impactMetric: '1st Place Winner at MongoDB Tech Odyssey 24-Hour Hackathon (DSCE Coimbatore × SmartBridge)',
    imageSrc: kisanconnectImg,
    featured: true,
    status: 'Live Production',
    category: 'Full Stack & Web',
    tags: ['React 18', 'Node.js', 'Express', 'MongoDB Atlas', 'Firebase Hosting', 'JWT'],
    githubUrl: 'https://github.com/Surya252006/kissanconnect',
    liveUrl: 'https://kisanconnect-2267e.web.app',
    icon: Leaf,
  },
  {
    id: 'smartathon26dsu',
    title: "TN Scheme AI — Smartathon '26 Government Welfare Discovery",
    tagline: 'Automated scholarship and state welfare discovery platform developed for SMARTATHON\'26.',
    description:
      'Built for SMARTATHON\'26 (Problem Statement #6), this platform automatically matches students with eligible Tamil Nadu state and central government scholarships and higher education grants.',
    problemStatement:
      'Students in rural and semi-urban colleges often miss critical higher education scholarships because criteria rules are fragmented across bureaucratic portals.',
    contribution:
      'Authored the multi-parameter eligibility matching algorithms in Python, built the FastAPI backend, and designed the interactive student qualification portal.',
    longDescription:
      'Engineered for the DSU × ONEYES Smartathon 2026 hackathon (9–10 September 2026), this intelligent system ingests student academic, financial, demographic, and educational criteria to run eligibility rule-matching against central and Tamil Nadu state scholarship catalogs. Provides transparent qualification scoring, document checklists, and application deadline alerts.',
    architecture: [
      'FastAPI backend with Python eligibility matching algorithms evaluating 50+ criteria rules',
      'React 18 frontend with Vite and responsive Tailwind CSS styling',
      'MongoDB Atlas and SQLite data models for scholarship guidelines and qualification logic',
      'Automated qualification scoring and multi-parameter student profile evaluation',
    ],
    impactMetric: 'Hackathon solution evaluating 50+ eligibility parameters with instant match scoring',
    imageSrc: smartathonImg,
    featured: true,
    status: 'Hackathon Project',
    category: 'Academic & Systems',
    tags: ['FastAPI', 'Python 3.13', 'React 18', 'Tailwind CSS', 'MongoDB Atlas', 'Smartathon \'26'],
    githubUrl: 'https://github.com/Surya252006/smartathon26dsu',
    liveUrl: 'https://github.com/Surya252006/smartathon26dsu#readme',
    icon: Trophy,
  },
  {
    id: 'soil-telemetry',
    title: 'Smart Precision Fertilization System',
    tagline: 'IoT sensor telemetry ingestion and predictive crop recommendation engine.',
    description:
      'Sensor-based precision agriculture project presented at the Barnstromz 2K26 project expo. Processes physical soil NPK, moisture, and pH sensor metrics to predict optimal crop varieties and fertilizer dosage.',
    problemStatement:
      'Unbalanced chemical fertilizer application leads to degraded soil fertility, environmental runoff, and reduced crop yields for regional farmers.',
    contribution:
      'Integrated physical soil NPK and pH probes with ESP32 microcontrollers, created Python data ingestion pipelines, and mapped nutrient values to optimal crop compatibility tables.',
    longDescription:
      'Demonstrated at the Barnstromz 2K26 project expo (11 September 2026), this system ingests physical IoT soil telemetry and runs multi-parameter classification models. By analyzing nitrogen, phosphorus, potassium, moisture, and pH levels, the model calculates precise crop compatibility scores and deficiency remedies to prevent chemical runoff.',
    architecture: [
      'IoT hardware telemetry ingestion handling multi-sensor analog/digital streams via ESP32',
      'Python data processing pipelines evaluating NPK and pH telemetry against agricultural benchmarks',
      'FastAPI REST endpoints for sensor payload ingestion and batch recommendations',
      'Responsive dashboard displaying real-time soil telemetry metrics and dosage guidance',
    ],
    impactMetric: 'Presented at Barnstromz 2K26 expo with live hardware sensor telemetry ingestion',
    imageSrc: fertilizationImg,
    featured: true,
    status: 'Project Expo',
    category: 'IoT & Machine Learning',
    tags: ['Python', 'IoT Hardware', 'ESP32', 'Scikit-Learn', 'FastAPI', 'Barnstromz 2K26'],
    githubUrl: 'https://github.com/Surya252006',
    liveUrl: 'https://github.com/Surya252006',
    icon: Cpu,
  },
  {
    id: 'bank-management-system',
    title: 'Java Banking Management System & Ledger Engine',
    tagline: 'Object-Oriented core banking transaction simulator in Java.',
    description:
      'A console-based software system demonstrating core OOP principles, secure account management, transaction history tracking, and ACID-compliant state changes in Java.',
    problemStatement:
      'Building foundational software engineering capability in financial state management, data integrity, and defensive input validation.',
    contribution:
      'Designed the complete Object-Oriented architecture in Java, encapsulating account entities, PIN authentication, and double-entry transaction journals with boundary checks.',
    longDescription:
      'Engineered in Java to model foundational financial software systems. Implements customer account registration, PIN-based authentication, balance verification, deposit/withdrawal transaction pipelines, and structured console input validation with permanent file persistence.',
    architecture: [
      'Strict Object-Oriented Design encapsulating account entities and transaction records',
      'Input validation loops preventing balance underflows and arithmetic exceptions',
      'Modular class structure enabling extensible payment and interest calculation rules',
      'Persistent ledger journal recording timestamped credit and debit entries',
    ],
    impactMetric: 'Demonstrates rock-solid OOP data structures and atomic balance state integrity',
    imageSrc: bankSystemImg,
    featured: false,
    status: 'Completed',
    category: 'Academic & Systems',
    tags: ['Java', 'OOP', 'Data Structures', 'Console', 'Algorithms'],
    githubUrl: 'https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-',
    liveUrl: 'https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-#readme',
    icon: Terminal,
  },
  {
    id: 'cognifyz-fullstack-internship',
    title: 'Cognifyz Full-Stack Engineering Suite',
    tagline: 'Comprehensive full-stack web application modules with REST APIs and responsive UI.',
    description:
      'Completed 5 production engineering tasks during Full Stack Development Internship at Cognifyz Technologies, delivering secure backends, form validation, and dynamic DOM rendering.',
    problemStatement:
      'Delivering verified full-stack software requirements conforming to enterprise web standards, clean route structuring, and defensive payload handling.',
    contribution:
      'Developed all 5 internship milestone modules using Node.js, Express, EJS, and RESTful architectures with responsive frontends.',
    longDescription:
      'During this engineering internship, built and deployed full-stack software modules using Node.js, Express, EJS, and RESTful architectures. Solved data validation requirements, created responsive multi-device layouts, and structured scalable routing patterns for enterprise applications.',
    architecture: [
      'Node.js & Express server architecture handling REST API endpoints',
      'Dynamic server-side templating and DOM manipulation workflows',
      'Robust form validation, error handling middleware, and payload sanitation',
      'Modular route handlers following Clean Architecture patterns',
    ],
    impactMetric: 'Delivered all 5 full-stack internship milestones with verified evaluation',
    imageSrc: posterKadaiImg,
    featured: false,
    status: 'Completed',
    category: 'Full Stack & Web',
    tags: ['Node.js', 'Express', 'REST APIs', 'JavaScript', 'Bootstrap', 'EJS'],
    githubUrl: 'https://github.com/Surya252006/cognifyz-fullstack-internship',
    liveUrl: 'https://github.com/Surya252006/cognifyz-fullstack-internship#readme',
    icon: Layers,
  },
];

export type TimelineItem = {
  id: string;
  date: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
  responsibilities: string[];
  achievements: string[];
  skills: string[];
  icon: LucideIcon;
  highlight?: boolean;
};

export const timelineItems: TimelineItem[] = [
  {
    id: 'engineering-education',
    date: '2024 – 2028',
    role: 'B.E. in Computer Science & Engineering',
    organization: 'Dhanalakshmi Srinivasan College of Engineering',
    location: 'Coimbatore, Tamil Nadu, India',
    summary:
      'Currently in Third Year. Undergraduate engineering program affiliated with Anna University, deepening foundations in Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Systems, Computer Networks, and Software Engineering.',
    responsibilities: [
      'Rigorous academic coursework in Data Structures, Algorithms, Object-Oriented System Architecture, and Operating Systems',
      'Actively building production software and web applications alongside the academic curriculum',
      'Representing the institution in collegiate hackathons (SMARTATHON\'26) and technical exhibitions (Barnstromz 2K26)',
    ],
    achievements: [
      'Third-year student actively shipping production-grade platforms and participating in engineering expos',
      'Qualified for IIT Guwahati advanced learning initiatives in Artificial Intelligence & Machine Learning',
    ],
    skills: ['Data Structures & Algorithms', 'Java', 'Python', 'C++', 'Database Management Systems', 'Software Engineering'],
    icon: GraduationCap,
    highlight: true,
  },
  {
    id: 'skypark-internship',
    date: '11 – 27 August 2025',
    role: 'Digital Marketing & Web Operations Intern',
    organization: 'Skypark ITech',
    location: 'Coimbatore, Tamil Nadu, India',
    summary:
      'Completed a focused internship covering web operations, search engine indexing workflows, digital marketing strategies, and user engagement analytics.',
    responsibilities: [
      'Executed on-page web optimization and content structuring to enhance search engine indexing and discoverability',
      'Analyzed web traffic and audience engagement metrics to improve visibility across targeted regional demographics',
      'Collaborated on digital outreach workflows and web marketing best practices',
    ],
    achievements: [
      'Successfully completed scheduled internship track with verified hands-on operational delivery',
      'Gained practical insight into web discoverability, metadata indexing, and user conversion funnels',
    ],
    skills: ['Web Operations', 'SEO Optimization', 'Analytics', 'Digital Outreach', 'Web Performance'],
    icon: Briefcase,
    highlight: false,
  },
  {
    id: 'cognifyz-internship',
    date: '2024',
    role: 'Full-Stack Development Intern',
    organization: 'Cognifyz Technologies',
    location: 'Remote',
    summary:
      'Completed comprehensive full-stack development internship delivering 5 production modules with Node.js, Express, REST APIs, and responsive UI components.',
    responsibilities: [
      'Engineered responsive client-side user interfaces and integrated backend RESTful endpoints',
      'Implemented robust form validations, asynchronous data fetching pipelines, and modular architectures',
      'Authored clean, maintainable code following enterprise standards and peer code reviews',
    ],
    achievements: [
      'Delivered all 5 full-stack internship milestones with verified completion certification',
      'Strengthened backend RESTful API architecture and data sanitization capabilities',
    ],
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JavaScript (ES6+)', 'Bootstrap', 'EJS'],
    icon: Layers,
    highlight: false,
  },
  {
    id: 'posterkadai-founder',
    date: '2025 – Present',
    role: 'Founder & Lead Technology Developer',
    organization: 'PosterKadai (Commercial E-Commerce)',
    location: 'Tamil Nadu, India',
    summary:
      'Architected and operating a live commercial e-commerce storefront for custom artwork with direct WhatsApp checkout integration and Firebase Firestore.',
    responsibilities: [
      'Architected full-stack single-page application with instant catalog exploration and zero-latency shopping cart',
      'Configured cloud database rules, automated order tracking, and WhatsApp checkout bridging',
      'Optimized asset delivery to sustain sub-1.2s page load performance with active users',
    ],
    achievements: [
      'Shipped live production platform to Google Firebase Hosting (posterkadai-e364b.web.app)',
      'Generated active client sales and established regional e-commerce workflows',
    ],
    skills: ['React 18', 'Firebase Firestore', 'Tailwind CSS', 'WhatsApp Business API', 'E-Commerce'],
    icon: ShoppingBag,
    highlight: false,
  },
  {
    id: 'image-color-lab',
    date: '2025 – 2026',
    role: 'Program Organizer & Technical Curriculum Lead',
    organization: 'Image Color Lab',
    location: 'Tamil Nadu, India',
    summary:
      'Structured and delivered an intensive 15-day online technical and design internship program for aspiring creative developers and designers.',
    responsibilities: [
      'Designed technical curriculum focused on digital layouts, design principles, and creative tools',
      'Created training materials, organized evaluation frameworks, and guided participant projects',
      'Managed internship operations including participant coordination and certification',
    ],
    achievements: [
      'Successfully trained and evaluated cohort participants with practical hands-on project reviews',
      'Built community technical networking and structured learning modules',
    ],
    skills: ['Curriculum Engineering', 'Project Management', 'Technical Training', 'Operations'],
    icon: Briefcase,
    highlight: false,
  },
];

export type AchievementItem = {
  id: string;
  title: string;
  issuer: string;
  description: string;
  impact: string;
  icon: LucideIcon;
  credentialUrl?: string;
  highlight?: boolean;
};

export const achievements: AchievementItem[] = [
  {
    id: 'mongodb-tech-odyssey-winner',
    title: 'MongoDB Tech Odyssey 24-Hour Hackathon Winner (1st Place)',
    issuer: 'DSCE Coimbatore × SmartBridge',
    description:
      'Secured 1st place at DSCE Coimbatore (in partnership with SmartBridge), engineering a high-performance database-backed application within a strict 24-hour development window.',
    impact: '1st Place Winner — 24-Hour Competitive Engineering Sprint',
    icon: Trophy,
    credentialUrl: 'https://lnkd.in/p/dpyH5Zya',
    highlight: true,
  },
  {
    id: 'smartathon',
    title: 'Smartathon \'26 Hackathon Participant & Developer',
    issuer: 'DSU × ONEYES Engineering Initiative',
    description:
      'Participated in the DSU × ONEYES Smartathon \'26 (9–10 September 2026), engineering TN Scheme AI (Problem Statement #6) using FastAPI, React 18, and Python rule algorithms.',
    impact: 'Automates multi-parameter government scholarship and welfare discovery for students.',
    icon: Trophy,
  },
  {
    id: 'barnstromz-expo',
    title: 'Barnstromz 2K26 Project Expo Exhibitor',
    issuer: 'Barnstromz 2K26 Technical Symposium',
    description:
      'Exhibited the Smart Precision Fertilization System on 11 September 2026, showcasing hardware IoT telemetry with ESP32 soil NPK sensors and predictive analysis.',
    impact: 'Demonstrated real-time hardware-to-software telemetry processing and targeted fertilizer dosage logic.',
    icon: Cpu,
  },
  {
    id: 'cognifyz-cert',
    title: 'Cognifyz Full-Stack Development Certification',
    issuer: 'Cognifyz Technologies',
    description:
      'Successfully completed verified full-stack software development internship track, delivering 5 enterprise web modules and RESTful backends.',
    impact: 'Verified hands-on internship delivery across Node.js, Express, and modern JavaScript.',
    icon: Layers,
  },
  {
    id: 'iit-guwahati',
    title: 'IIT Guwahati AI & ML Coursework Qualification',
    issuer: 'IIT Guwahati E&ICT Academy',
    description:
      'Qualified and completed advanced machine learning coursework covering statistical modeling, regression, neural networks, and computer vision foundations.',
    impact: 'Applied core algorithms directly into agricultural telemetry and analytics projects.',
    icon: Award,
  },
  {
    id: 'open-source-commits',
    title: 'Active Open-Source Builder & Codebase',
    issuer: 'GitHub Community (github.com/Surya252006)',
    description:
      '450+ verified Git commits and 9 publicly accessible technical repositories across full-stack web applications, IoT firmware, and developer tools.',
    impact: 'Transparent, publicly auditable code history demonstrating continuous software engineering practice.',
    icon: FolderGit2,
  },
];
