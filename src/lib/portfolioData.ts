import type { LucideIcon } from 'lucide-react';
import {
  Code,
  Leaf,
  ShoppingBag,
  Cpu,
  Bot,
  GraduationCap,
  Trophy,
  Rocket,
  Award,
  Briefcase,
  UserRound,
  Sparkles,
} from 'lucide-react';

export type NavItem = { label: string; href: string; sectionId: string };

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home', sectionId: 'home' },
  { label: 'About', href: '#about', sectionId: 'about' },
  { label: 'Skills', href: '#skills', sectionId: 'skills' },
  { label: 'Projects', href: '#projects', sectionId: 'projects' },
  { label: 'Experience', href: '#experience', sectionId: 'experience' },
  { label: 'Achievements', href: '#achievements', sectionId: 'achievements' },
  { label: 'Contact', href: '#contact', sectionId: 'contact' },
];

export type HeroRole = { title: string };

export const heroRoles: HeroRole[] = [
  { title: 'Full Stack Developer' },
  { title: 'AI/ML Enthusiast' },
  { title: 'Entrepreneur' },
  { title: 'Problem Solver' },
];

export const heroTechBadges = [
  { label: 'React', value: 'React' },
  { label: 'Node.js', value: 'Node.js' },
  { label: 'Python', value: 'Python' },
  { label: 'AI/ML', value: 'AI/ML' },
  { label: 'Firebase', value: 'Firebase' },
  { label: 'JavaScript', value: 'JavaScript' },
];

export type AboutStat = { label: string; value: number; suffix?: string };

export const aboutStats: AboutStat[] = [
  { label: 'Projects Completed', value: 3, suffix: '+' },
  { label: 'Technologies Learned', value: 30, suffix: '+' },
  { label: 'Certifications', value: 5, suffix: '+' },
  { label: 'Years of Learning', value: 3, suffix: '' },
];

export type SkillCategory = {
  title: string;
  items: {
    name: string;
    level: number; // 0-100
    icon: React.ReactNode;
  }[];
};

export const skillsCategories = [
  {
    title: 'Frontend',
    items: [
      { name: 'React', level: 90, icon: '⚛️' },
      { name: 'HTML', level: 85, icon: '🧱' },
      { name: 'CSS', level: 85, icon: '🎨' },
      { name: 'JavaScript', level: 80, icon: '⚡' },
      { name: 'Tailwind CSS', level: 75, icon: '🌬️' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', level: 80, icon: '🟩' },
      { name: 'Express.js', level: 75, icon: '🚦' },
      { name: 'Firebase', level: 70, icon: '🔥' },
    ],
  },
  {
    title: 'Programming',
    items: [
      { name: 'Python', level: 80, icon: '🐍' },
      { name: 'C++', level: 70, icon: '💠' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MySQL', level: 70, icon: '🗄️' },
      { name: 'MongoDB', level: 70, icon: '🍃' },
    ],
  },
  {
    title: 'AI/ML',
    items: [
      { name: 'Machine Learning', level: 70, icon: '🤖' },
      { name: 'TensorFlow', level: 60, icon: '🧠' },
      { name: 'OpenAI APIs', level: 65, icon: '✨' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', level: 85, icon: '🔀' },
      { name: 'GitHub', level: 85, icon: '🐙' },
      { name: 'Figma', level: 75, icon: '🎛️' },
      { name: 'VS Code', level: 90, icon: '⌨️' },
    ],
  },
];

export type ProjectCategory = 'Web Apps' | 'AI Projects' | 'Business Projects';
export type Project = {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  imageSrc: string;
  featured?: boolean;
  category: ProjectCategory;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  icon: LucideIcon;
};

import kisanconnectImg from '@/assets/kisanconnect.png';
import posterKadaiImg from '@/assets/posterkadai.png';
import fertilizationImg from '@/assets/fertilization.png';
import aiAssistantImg from '@/assets/ai-assistant.png';
import foodDonationImg from '@/assets/food-donation.png';

export const projects: Project[] = [
  {
    id: 'kisanconnect',
    title: 'KisanConnect',
    description: 'A farmer-consumer marketplace to enable fair pricing and smarter logistics.',
    longDescription:
      'KisanConnect connects farmers directly with consumers, removing unnecessary middlemen. The platform includes real-time price insights, quality verification flows, and logistics tracking to keep the supply chain transparent.',
    imageSrc: kisanconnectImg,
    featured: true,
    category: 'Business Projects',
    tags: ['React', 'Node.js', 'MongoDB', 'AI/ML'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    icon: Leaf,
  },
  {
    id: 'posterkadai',
    title: 'PosterKadai',
    description: 'Custom poster e-commerce with AI-powered design suggestions.',
    longDescription:
      'PosterKadai modernizes custom wall poster purchasing by blending an intuitive storefront with AI-driven suggestions that speed up design decisions and improve personalization.',
    imageSrc: posterKadaiImg,
    category: 'Web Apps',
    tags: ['React', 'Firebase', 'AI', 'Payments'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://posterkadai-e364b.web.app/',
    icon: ShoppingBag,
  },
  {
    id: 'fertilization',
    title: 'Smart Fertilization System',
    description: 'IoT + ML recommendations for soil analysis and optimized fertilization.',
    longDescription:
      'This system uses sensor inputs and ML to recommend fertilization strategies. It helps reduce waste, improve crop outcomes, and support data-driven agriculture.',
    imageSrc: fertilizationImg,
    category: 'AI Projects',
    tags: ['Python', 'TensorFlow', 'IoT', 'Arduino'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    icon: Cpu,
  },
  {
    id: 'ai-assistant',
    title: 'AI Assistant (JARVIS inspired)',
    description: 'Conversational assistant for task automation and contextual responses.',
    longDescription:
      'An intelligent assistant that uses modern NLP approaches for context-aware responses. Built for productivity tasks like information retrieval, automation, and structured guidance.',
    imageSrc: aiAssistantImg,
    category: 'AI Projects',
    featured: true,
    tags: ['Python', 'OpenAI APIs', 'FastAPI', 'React'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    icon: Bot,
  },
  {
    id: 'food-donation',
    title: 'Food Donation Platform',
    description: 'Connect donors and NGOs to reduce food waste and accelerate redistribution.',
    longDescription:
      'A community-driven platform that helps organize food donations, improves matching between donors and recipients, and adds transparency for impact tracking.',
    imageSrc: foodDonationImg,
    category: 'Business Projects',
    tags: ['React', 'Node.js', 'Firebase', 'Payments'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    icon: Sparkles,
  },
];

export type TimelineItem = {
  id: string;
  date: string;
  title: string;
  responsibilities: string[];
  achievements: string[];
  icon: LucideIcon;
  highlight?: boolean;
};

export const timelineItems: TimelineItem[] = [
  {
    id: 'mentor-family',
    date: '2024 — Present',
    title: 'Mentor — Family Company',
    responsibilities: ['Guiding day-to-day operations', 'Helping structure digital workflows for faster execution'],
    achievements: ['Improved internal process clarity with simple dashboards and templates'],
    icon: Briefcase,
    highlight: true,
  },
  {
    id: 'intern-guidance',
    date: '2023 — 2024',
    title: 'Graphic Design Internship Guidance',
    responsibilities: ['Mentored design fundamentals and project execution', 'Supported presentation and portfolio planning'],
    achievements: ['Produced multiple design deliverables for client-ready outcomes'],
    icon: UserRound,
  },
];

export type AchievementItem = {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const achievements: AchievementItem[] = [
  {
    id: 'iit-guwahati',
    title: 'IIT Guwahati AI & ML Qualifier',
    description: 'Qualified and completed AI/ML learning initiatives to strengthen applied machine learning skills.',
    icon: Trophy,
  },
  {
    id: 'entrepreneurship',
    title: 'Entrepreneurship Initiatives',
    description: 'Built and iterated startup concepts with product thinking, user empathy, and scalable execution.',
    icon: Rocket,
  },
  {
    id: 'projects-completed',
    title: 'Engineering Projects Completed',
    description: 'Delivered end-to-end solutions across web apps, AI, and automation.',
    icon: Code,
  },
  {
    id: 'certifications',
    title: 'Certifications',
    description: 'Continuous learning with focused certifications in AI/ML and modern web development.',
    icon: Award,
  },
];

