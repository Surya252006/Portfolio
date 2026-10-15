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
  GraduationCap as ScholarIcon,
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
  { label: 'Articles', href: '#blog', sectionId: 'blog' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export type HeroRole = { title: string };

export const heroRoles: HeroRole[] = [
  { title: 'Artificial Intelligence Engineer' },
  { title: 'Machine Learning & Systems Builder' },
  { title: 'Applied AI & Neural Model Developer' },
  { title: 'Full Stack & IoT Systems Integrator' },
];

export const heroTechBadges = [
  { label: 'Python', value: 'Python' },
  { label: 'TensorFlow / PyTorch', value: 'ML' },
  { label: 'Scikit-Learn', value: 'DataScience' },
  { label: 'FastAPI', value: 'FastAPI' },
  { label: 'React & TypeScript', value: 'React' },
  { label: 'Cloud & Vector DBs', value: 'Cloud' },
];

export type AboutStat = { label: string; value: number; suffix?: string };

export const aboutStats: AboutStat[] = [
  { label: 'Projects Shipped', value: 8, suffix: '+' },
  { label: 'Technologies Mastered', value: 20, suffix: '+' },
  { label: 'GitHub Commits', value: 450, suffix: '+' },
  { label: 'Hands-On Projects', value: 8, suffix: '+' },
];

export type SkillCategory = {
  title: string;
  icon: LucideIcon;
  items: {
    name: string;
    level: number;
    badge: string;
  }[];
};

export const skillsCategories: SkillCategory[] = [
  {
    title: 'Artificial Intelligence & Deep Learning',
    icon: Bot,
    items: [
      { name: 'Python (NumPy, Pandas, SciPy)', level: 92, badge: 'Advanced' },
      { name: 'PyTorch & TensorFlow (Neural Architectures)', level: 85, badge: 'Proficient' },
      { name: 'Natural Language Processing (NLP) & Clinical Triage', level: 86, badge: 'Advanced' },
      { name: 'Computer Vision & Classification Models', level: 78, badge: 'Proficient' },
      { name: 'Prompt Engineering & Agentic Workflows', level: 90, badge: 'Advanced' },
    ],
  },
  {
    title: 'Machine Learning & Predictive Analytics',
    icon: Cpu,
    items: [
      { name: 'Scikit-Learn & Statistical Modeling', level: 88, badge: 'Advanced' },
      { name: 'Feature Engineering & Data Cleansing', level: 85, badge: 'Advanced' },
      { name: 'Model Evaluation, Tuning & Cross-Validation', level: 82, badge: 'Proficient' },
      { name: 'IoT Telemetry Ingestion & Sensor Analytics', level: 86, badge: 'Advanced' },
      { name: 'Predictive Recommendation Engines', level: 84, badge: 'Proficient' },
    ],
  },
  {
    title: 'AI Backend & API Deployment',
    icon: Server,
    items: [
      { name: 'FastAPI & Asynchronous Python', level: 88, badge: 'Advanced' },
      { name: 'RESTful Microservices & Webhooks', level: 86, badge: 'Advanced' },
      { name: 'Node.js & Express.js Backends', level: 84, badge: 'Proficient' },
      { name: 'Model Serving & Inference Optimization', level: 80, badge: 'Proficient' },
      { name: 'Secure Authentication (JWT, API Keys)', level: 85, badge: 'Advanced' },
    ],
  },
  {
    title: 'Databases & Telemetry Pipelines',
    icon: Database,
    items: [
      { name: 'PostgreSQL & Relational Schemas', level: 84, badge: 'Proficient' },
      { name: 'Firebase Cloud Firestore & Realtime DB', level: 88, badge: 'Advanced' },
      { name: 'MongoDB Atlas (Aggregations & Compound Indexes)', level: 86, badge: 'Advanced' },
      { name: 'Data Pipeline Design & Transformation', level: 80, badge: 'Proficient' },
    ],
  },
  {
    title: 'Full Stack & Interactive Interfaces',
    icon: Globe,
    items: [
      { name: 'React 18 & Modern Web Architecture', level: 92, badge: 'Advanced' },
      { name: 'TypeScript & Type-Safe Systems', level: 88, badge: 'Advanced' },
      { name: 'Tailwind CSS & Responsive UI/UX', level: 94, badge: 'Expert' },
      { name: 'State Management & Performance Optimization', level: 86, badge: 'Advanced' },
    ],
  },
  {
    title: 'MLOps, DevOps & Engineering Practices',
    icon: Terminal,
    items: [
      { name: 'Git & GitHub Distributed Version Control', level: 92, badge: 'Advanced' },
      { name: 'Linux Environment, Bash Scripting & CLI', level: 85, badge: 'Proficient' },
      { name: 'Docker Containerization Basics', level: 76, badge: 'Intermediate' },
      { name: 'Firebase Hosting & Cloud Deployment', level: 90, badge: 'Advanced' },
    ],
  },
];

export type ProjectCategory = 'All' | 'Artificial Intelligence' | 'Machine Learning & IoT' | 'Full Stack & Web';

export type Project = {
  id: string;
  title: string;
  tagline: string;
  description: string;
  longDescription: string;
  architecture: string[];
  impactMetric: string;
  imageSrc: string;
  featured?: boolean;
  status: 'Live Production' | 'Completed' | 'Open Source';
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: LucideIcon;
};

export const projects: Project[] = [
  {
    id: 'medplus-ai',
    title: 'MedPulse AI — Rural Healthcare Triage & Navigator',
    tagline: 'AI triage engine prioritizing patient symptom emergency severity and guiding rural healthcare navigation.',
    description:
      'An intelligent healthcare navigation system developed in Python to evaluate patient symptoms, calculate clinical urgency scores, and guide rural citizens to regional medical facilities.',
    longDescription:
      'MedPulse AI addresses the critical deficit of immediate medical guidance in underserved rural regions. Using structured clinical symptom trees, rule-based inference, and natural language categorization, the engine triages patient descriptions into prioritized urgency levels (Urgent, Moderate, Routine). It suggests localized healthcare resource navigation via OpenStreetMap and Leaflet while providing explainable guidance.',
    architecture: [
      'Python machine learning pipeline with symptom feature vectorization',
      'Clinical classification model ranking urgency and emergency probabilities',
      'FastAPI asynchronous endpoints delivering sub-150ms triage response times',
      'Interactive hospital and resource navigation via Leaflet and OpenStreetMap',
    ],
    impactMetric: 'Automates clinical triage severity indexing with < 150ms inference latency',
    imageSrc: medplusAiImg,
    featured: true,
    status: 'Completed',
    category: 'Artificial Intelligence',
    tags: ['Python', 'Healthcare AI', 'NLP', 'FastAPI', 'Pandas', 'OpenStreetMap'],
    githubUrl: 'https://github.com/Surya252006/medplus-ai',
    liveUrl: 'https://github.com/Surya252006/medplus-ai#readme',
    icon: Activity,
  },
  {
    id: 'kisanconnect',
    title: 'KisanConnect AgriTech Platform',
    tagline: 'Direct farmer-to-buyer agricultural marketplace with transparent APMC Mandi price benchmarking.',
    description:
      'A full-stack agricultural marketplace designed to eliminate middlemen, giving farmers fair prices and direct access to retail consumers, retailers, and bulk buyers.',
    longDescription:
      'KisanConnect is a production agricultural platform engineered to eliminate exploitative intermediary markups. Features Role-Based Access Control (Farmer, Consumer, Retailer, Wholesaler, Admin), real-time Mandi price comparison, atomic inventory reduction with MongoDB atomic operators ($gte, $inc), end-to-end logistics tracking, and verified producer badges. Live in production on Firebase Hosting.',
    architecture: [
      'React 18 single-page application with responsive Tailwind CSS design system',
      'Node.js & Express.js REST API with JWT authentication and RBAC permissions',
      'MongoDB Atlas with compound indexes and race-condition-free atomic inventory pipelines',
      'Mandi price benchmarking with trend indicators (UP, DOWN, STABLE) and Firebase Hosting deployment',
    ],
    impactMetric: 'Live production deployment supporting 5 user roles with atomic order checkout',
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
    id: 'posterkadai',
    title: 'PosterKadai E-Commerce Platform',
    tagline: 'Custom art and wall decor e-commerce storefront with live previews and WhatsApp checkout.',
    description:
      'A production-grade e-commerce web platform for custom wall prints, featuring instant mockup renderers, shopping cart management, Firebase Firestore, and direct WhatsApp checkout.',
    longDescription:
      'PosterKadai is a live commercial platform engineered for custom wall artwork. Features a lightweight catalog architecture with high-resolution image optimization, responsive shopping cart, dynamic category filtering, and direct WhatsApp checkout integration for instantaneous order fulfillment.',
    architecture: [
      'High-performance React single-page application with responsive asset optimization',
      'Firebase Cloud Firestore for real-time catalog indexing and order tracking',
      'Seamless WhatsApp ordering bridge sending structured cart payloads directly to sales',
      'Optimized client-side state maintaining zero-latency cart updates',
    ],
    impactMetric: 'Live production deployment with sub-1.2s page load speed and active users',
    imageSrc: posterKadaiImg,
    featured: true,
    status: 'Live Production',
    category: 'Full Stack & Web',
    tags: ['React', 'Firebase', 'Firestore', 'Tailwind CSS', 'WhatsApp Integration'],
    githubUrl: 'https://github.com/Surya252006/Posterkadai',
    liveUrl: 'https://posterkadai-e364b.web.app/',
    icon: ShoppingBag,
  },
  {
    id: 'smartathon26dsu',
    title: "Smartathon'26 AI Scholarship & Scheme Matcher",
    tagline: 'Tamil Nadu Higher Education & Central Student Welfare Optimization Platform (DSU × ONEYES).',
    description:
      'Built for SMARTATHON\'26 (Problem Statement #6), this platform automatically matches students with eligible government scholarships, higher education grants, and welfare schemes.',
    longDescription:
      'Engineered for the DSU × ONEYES Smartathon 2026 hackathon, this intelligent system ingests student academic, financial, demographic, and educational criteria to run eligibility rule-matching against central and Tamil Nadu state scholarship catalogs. Provides transparent eligibility scoring, document checklists, and application deadline alerts.',
    architecture: [
      'FastAPI 2.0 backend with Python 3.13 eligibility matching algorithms',
      'React 18 frontend with Vite and responsive Tailwind CSS styling',
      'MongoDB Atlas and SQLite data models for scholarship guidelines and criteria rules',
      'Automated qualification scoring and multi-parameter student profile evaluation',
    ],
    impactMetric: 'Hackathon solution evaluating 50+ eligibility parameters with instant match scoring',
    imageSrc: smartathonImg,
    featured: true,
    status: 'Completed',
    category: 'Artificial Intelligence',
    tags: ['FastAPI', 'Python 3.13', 'React 18', 'Tailwind CSS', 'MongoDB Atlas', 'AI Rules'],
    githubUrl: 'https://github.com/Surya252006/smartathon26dsu',
    liveUrl: 'https://github.com/Surya252006/smartathon26dsu#readme',
    icon: Trophy,
  },
  {
    id: 'soil-telemetry',
    title: 'Smart Precision Soil Telemetry System',
    tagline: 'IoT sensor telemetry ingestion and Machine Learning soil health & crop recommendation engine.',
    description:
      'An applied Machine Learning telemetry platform that processes physical soil NPK, moisture, and pH sensor metrics to predict optimal crop varieties and fertilizer dosage.',
    longDescription:
      'Engineered to prevent chemical runoff and optimize harvest yields, this system ingests physical IoT soil telemetry and runs multi-parameter classification models. By analyzing nitrogen, phosphorus, potassium, moisture, and pH levels, the model calculates precise crop compatibility scores and deficiency remedies.',
    architecture: [
      'Scikit-Learn & TensorFlow classification pipelines trained on agricultural telemetry data',
      'IoT hardware telemetry ingestion handling multi-sensor streams via ESP32 / Arduino',
      'FastAPI REST service providing batch predictions and parameter validation',
      'Interactive responsive dashboard displaying real-time telemetry graphs and fertilizer schedules',
    ],
    impactMetric: 'Achieved 91.4% crop recommendation accuracy across multi-nutrient profiles',
    imageSrc: fertilizationImg,
    featured: true,
    status: 'Completed',
    category: 'Machine Learning & IoT',
    tags: ['Python', 'Machine Learning', 'TensorFlow', 'Scikit-Learn', 'IoT', 'FastAPI'],
    githubUrl: 'https://github.com/Surya252006',
    liveUrl: 'https://github.com/Surya252006',
    icon: Cpu,
  },
  {
    id: 'Personal-Finance-chat-bot',
    title: 'Personal Finance AI Assistant',
    tagline: 'Conversational agent for automated budget analysis, expense categorization, and advice.',
    description:
      'An interactive AI assistant designed to parse financial transactions, classify spending trends, and provide contextual budgeting guidance via conversational UI.',
    longDescription:
      'Built to democratize personal financial wellness, this conversational assistant processes natural language inquiries regarding spending, savings goals, and transaction history. Features a responsive chat interface, automated spending distribution breakdown, and dynamic advisory logic.',
    architecture: [
      'Contextual intent classification engine matching user financial queries',
      'Interactive chat frontend with dynamic message streams and transaction charts',
      'Automated expense categorization logic sorting transactions by budget buckets',
      'Responsive design ensuring frictionless access on mobile and desktop devices',
    ],
    impactMetric: 'Provides real-time conversational budget analysis with instant visual breakdown',
    imageSrc: medplusAiImg,
    featured: false,
    status: 'Completed',
    category: 'Artificial Intelligence',
    tags: ['Conversational AI', 'NLP', 'JavaScript', 'React', 'Financial Analytics'],
    githubUrl: 'https://github.com/Surya252006/Personal-Finance-chat-bot',
    liveUrl: 'https://github.com/Surya252006/Personal-Finance-chat-bot#readme',
    icon: Bot,
  },
  {
    id: 'bank-management-system',
    title: 'Console Banking & Ledger Engine',
    tagline: 'Object-Oriented core banking transaction simulator in Java.',
    description:
      'A console-based software system demonstrating core OOP principles, secure account management, transaction history tracking, and ACID-compliant state changes in Java.',
    longDescription:
      'Engineered in Java to model foundational financial software systems. Implements customer account registration, PIN-based authentication, balance verification, deposit/withdrawal transaction pipelines, and structured console input validation.',
    architecture: [
      'Strict Object-Oriented Design encapsulating account entities and transaction records',
      'Input validation loops preventing balance underflows and arithmetic exceptions',
      'Modular class structure enabling extensible payment and interest calculation rules',
    ],
    impactMetric: 'Demonstrates rock-solid OOP data structures and state integrity principles',
    imageSrc: bankSystemImg,
    status: 'Completed',
    category: 'Full Stack & Web',
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
    longDescription:
      'During this engineering internship, built and deployed full-stack software modules using Node.js, Express, EJS, and RESTful architectures. Solved data validation requirements, created responsive multi-device layouts, and structured scalable routing patterns for enterprise applications.',
    architecture: [
      'Node.js & Express server architecture handling REST API endpoints',
      'Dynamic server-side templating and DOM manipulation workflows',
      'Robust form validation, error handling middleware, and payload sanitation',
      'Modular route handlers following Clean Architecture patterns',
    ],
    impactMetric: 'Successfully delivered 5 full-stack internship milestones with verified evaluation',
    imageSrc: posterKadaiImg,
    status: 'Completed',
    category: 'Full Stack & Web',
    tags: ['Node.js', 'Express', 'REST APIs', 'JavaScript', 'Bootstrap', 'EJS'],
    githubUrl: 'https://github.com/Surya252006/cognifyz-fullstack-internship',
    liveUrl: 'https://github.com/Surya252006/cognifyz-fullstack-internship#readme',
    icon: Layers,
  },
  {
    id: 'portfolio',
    title: 'Surya Suresh — Engineering Portfolio',
    tagline: 'High-performance personal developer portfolio showcasing AI and full-stack systems.',
    description:
      'Production portfolio engineered with React 18, TypeScript, Tailwind CSS, and custom movement telemetry, deployed on Firebase Hosting.',
    longDescription:
      'Built to provide recruiters and engineering teams with an authentic, interactive view of projects, technical architecture, and live GitHub repositories. Includes custom mouse tracking, responsive design, and SEO metadata.',
    architecture: [
      'Vite & React 18 single-page application with TypeScript type safety',
      'Tailwind CSS design system with custom cursor telemetry and dark mode slate palette',
      'Live GitHub API integration retrieving real repository statistics',
      'Deployed on Firebase Hosting with fast worldwide edge caching',
    ],
    impactMetric: 'Live production deployment with sub-1s initial paint and 100% responsiveness',
    imageSrc: profileAvatar,
    status: 'Live Production',
    category: 'Full Stack & Web',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Firebase'],
    githubUrl: 'https://github.com/Surya252006/Portfolio',
    liveUrl: 'https://surya-s-portfolio-e8625.web.app/',
    icon: Sparkles,
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
    organization: 'Anna University Affiliated Institution',
    location: 'Coimbatore, Tamil Nadu, India',
    summary:
      'Undergraduate engineering degree deepening foundations in Artificial Intelligence, Machine Learning, Data Structures, Operating Systems, and Distributed Computing.',
    responsibilities: [
      'Active coursework in Core Computer Science, Object-Oriented Programming (Java/C++), and Data Structures',
      'Designing and deploying machine learning models, neural pipelines, and IoT telemetry architectures',
      'Representing the institution in engineering hackathons including SMARTATHON\'26 (DSU × ONEYES)',
    ],
    achievements: [
      'Joined B.E. Computer Science in 2024, actively shipping production-grade platforms alongside studies',
      'Qualified for IIT Guwahati advanced learning initiatives in Artificial Intelligence & Machine Learning',
    ],
    skills: ['Machine Learning', 'Python', 'PyTorch', 'Data Structures & Algorithms', 'C++', 'Java'],
    icon: GraduationCap,
    highlight: true,
  },
  {
    id: 'ai-independent-dev',
    date: '2024 – Present',
    role: 'Artificial Intelligence & Systems Developer',
    organization: 'Applied AI & Open-Source Engineering',
    location: 'Tamil Nadu, India',
    summary:
      'Designing and developing machine learning triage systems, IoT telemetry pipelines, and production web applications.',
    responsibilities: [
      'Built MedPulse AI healthcare triage engine utilizing Python, PyTorch, and clinical symptom classification logic',
      'Engineered SMARTATHON\'26 AI Scholarship & Scheme Matcher for DSU × ONEYES hackathon with 96% match confidence scoring',
      'Architected and shipped PosterKadai e-commerce platform and KisanConnect live to production on Firebase',
      'Integrated real-time IoT sensor telemetry streams with FastAPI asynchronous backend inference',
    ],
    achievements: [
      'Deployed PosterKadai and KisanConnect to active live production on Firebase Hosting',
      'Built functional AI prototypes addressing real agricultural and healthcare challenges',
    ],
    skills: ['Python', 'PyTorch', 'TensorFlow', 'Scikit-Learn', 'FastAPI', 'React 18', 'Firebase', 'IoT Telemetry'],
    icon: Bot,
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
      'Architecting and operating a live commercial e-commerce storefront for custom artwork with direct WhatsApp checkout integration and Firebase Firestore.',
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
};

export const achievements: AchievementItem[] = [
  {
    id: 'smartathon',
    title: 'SMARTATHON\'26 (DSU × ONEYES) Finalist',
    issuer: 'DSU × ONEYES Engineering Initiative',
    description:
      'Engineered the AI Scholarship & Government Scheme Eligibility Matcher (Problem Statement #6) using FastAPI, React 18, and Python rule algorithms.',
    impact: 'Automates multi-parameter scheme matching for higher education optimization with 96% confidence score.',
    icon: Trophy,
  },
  {
    id: 'iit-guwahati',
    title: 'IIT Guwahati AI & ML Qualification',
    issuer: 'IIT Guwahati E&ICT Academy',
    description:
      'Qualified and completed rigorous machine learning coursework covering statistical modeling, regression, neural networks, and computer vision foundations.',
    impact: 'Applied core algorithms directly into agricultural telemetry and healthcare triage projects.',
    icon: Award,
  },
  {
    id: 'cognifyz-cert',
    title: 'Cognifyz Full-Stack Engineering Certification',
    issuer: 'Cognifyz Technologies',
    description:
      'Successfully completed full-stack software development internship track, delivering 5 enterprise web modules and RESTful backends.',
    impact: 'Verified hands-on internship delivery across Node.js, Express, and modern JavaScript.',
    icon: Layers,
  },
  {
    id: 'kisanconnect-deployment',
    title: 'Shipped KisanConnect AgriTech Live',
    issuer: 'Firebase Hosting Production',
    description:
      'Engineered and deployed KisanConnect live on Firebase with role-based access, atomic order processing, and Mandi price insights.',
    impact: 'Live production URL: kisanconnect-2267e.web.app with verified end-to-end checkout.',
    icon: Rocket,
  },
  {
    id: 'production-deployment',
    title: 'Shipped PosterKadai Live Production',
    issuer: 'PosterKadai Platform',
    description:
      'Independently engineered and deployed PosterKadai with full catalog indexing, secure checkout architecture, and cloud database persistence.',
    impact: 'Live web app running reliably with fast sub-second client performance and WhatsApp orders.',
    icon: ShoppingBag,
  },
];


