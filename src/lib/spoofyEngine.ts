/**
 * Spoofy AI Engine - 24/7 Intelligent Knowledge & Response System
 * Tailored for Surya S.'s Software Engineering Portfolio
 */

export interface ChatMessage {
  id: string;
  sender: 'user' | 'spoofy';
  text: string;
  timestamp: string;
  actions?: {
    label: string;
    url?: string;
    actionType?: 'link' | 'download' | 'scroll';
    targetId?: string;
  }[];
}

export const initialSuggestions = [
  "What are Surya's main projects?",
  "Tell me about PosterKadai",
  "Tell me about KisanConnect",
  "What is SMARTATHON'26?",
  "Download Surya's Resume",
  "What is his tech stack?",
  "Tell me about his internships",
  "Tell me about his college & education",
];

export function getSpoofyResponse(userQuery: string): {
  text: string;
  actions?: ChatMessage['actions'];
} {
  const q = userQuery.toLowerCase().trim();

  // 1. Greetings & Salutations
  if (
    q.match(/^(hi|hello|hey|vanakkam|namaste|hola|sup|good morning|good afternoon|good evening|who are you|what is your name)/i) ||
    q === 'spoofy' ||
    q === 'suryabot'
  ) {
    return {
      text: "👋 **Hello there! I am Spoofy**, Surya S.'s 24/7 interactive portfolio representative.\n\nI can tell you all about Surya's **AI engineering projects** (KisanConnect — 1st Place Hackathon Winner, PosterKadai, TN Scheme AI), **machine learning and full-stack tech stack**, **internships at Skypark ITech and Cognifyz**, **education at Dhanalakshmi Srinivasan College of Engineering**, or provide his **verified AI Engineer resume**.\n\nWhat would you like to explore?",
      actions: [
        { label: 'View Featured Projects', actionType: 'scroll', targetId: 'projects' },
        { label: 'Download AI Resume (PDF)', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
        { label: 'Contact Surya', actionType: 'scroll', targetId: 'contact' },
      ],
    };
  }

  // 2. Resume / CV Queries
  if (
    q.includes('resume') ||
    q.includes('cv') ||
    q.includes('download') ||
    q.includes('biodata')
  ) {
    return {
      text: "📄 **Surya S.'s ATS-Compliant Resume** is ready for download!\n\nIt features his credentials as an **AI Engineer & Applied Systems Developer** (Third-Year CSE at Dhanalakshmi Srinivasan College of Engineering, Coimbatore), detailing **Python, PyTorch, Scikit-Learn, FastAPI, React, Node.js, Express, MongoDB Atlas, Firebase**, verified internships, and hackathon-winning production projects.",
      actions: [
        { label: 'Download AI Engineer Resume (PDF)', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
        { label: 'View GitHub Repositories', actionType: 'link', url: 'https://github.com/Surya252006' },
      ],
    };
  }

  // 3. PosterKadai Queries
  if (q.includes('posterkadai') || q.includes('poster') || q.includes('ecommerce') || q.includes('shop') || q.includes('store') || q.includes('art') || q.includes('whatsapp')) {
    return {
      text: "🎨 **PosterKadai — Production Commercial E-Commerce Storefront**\n\n• **Product**: Live wall art and custom poster e-commerce storefront engineered by Surya.\n• **Performance**: Sub-1.2s page load speeds with responsive shopping cart, dynamic catalog filtering, and zero-friction direct WhatsApp order checkout integration.\n• **Tech Stack**: React 18, Firebase Cloud Firestore, Tailwind CSS, WhatsApp Business API.\n• **Live Deployment**: Active in production at `posterkadai-e364b.web.app`.",
      actions: [
        { label: 'Visit PosterKadai Storefront', actionType: 'link', url: 'https://posterkadai-e364b.web.app/' },
        { label: 'View Source on GitHub', actionType: 'link', url: 'https://github.com/Surya252006/Posterkadai' },
      ],
    };
  }

  // 4. KisanConnect & MongoDB Tech Odyssey Queries
  if (
    q.includes('kisan') ||
    q.includes('kissan') ||
    q.includes('farm') ||
    q.includes('agri') ||
    q.includes('market') ||
    q.includes('mandi') ||
    q.includes('mongodb') ||
    q.includes('odyssey') ||
    q.includes('smartbridge') ||
    q.includes('hackathon winner')
  ) {
    return {
      text: "🏆 **MongoDB Tech Odyssey 24-Hour Hackathon WINNER (1st Place)**\n\n• **Achievement**: Secured **1st place** at DSCE Coimbatore (in partnership with SmartBridge), engineering a high-performance database-backed application within a strict 24-hour development sprint.\n• **Project**: **KisanConnect** — a full-stack agricultural marketplace platform eliminating exploitative intermediaries.\n• **Key Features**: Real-time APMC Mandi market price benchmarking with trend indicators (UP/DOWN/STABLE) and race-condition-free inventory decrementing via MongoDB atomic operators (`$gte`, `$inc`).\n• **Tech Stack**: React 18, Node.js, Express.js, MongoDB Atlas, Firebase Hosting, JWT RBAC.\n• **Verification**: [View LinkedIn Post Announcement](https://lnkd.in/p/dpyH5Zya).",
      actions: [
        { label: 'View 1st Place Post', actionType: 'link', url: 'https://lnkd.in/p/dpyH5Zya' },
        { label: 'Open KisanConnect Live App', actionType: 'link', url: 'https://kisanconnect-2267e.web.app' },
        { label: 'View GitHub Code', actionType: 'link', url: 'https://github.com/Surya252006/kissanconnect' },
      ],
    };
  }

  // 5. SMARTATHON'26 Queries
  if (q.includes('smartathon') || q.includes('scholarship') || q.includes('scheme') || q.includes('welfare') || q.includes('dsu') || q.includes('oneyes') || q.includes('hackathon')) {
    return {
      text: "🏆 **TN Scheme AI — SMARTATHON'26 Government Welfare Discovery**\n\n• **Event**: DSU × ONEYES Engineering Hackathon (9–10 Sept 2026, Problem Statement #6: Tamil Nadu Higher Education & Central Student Welfare Optimization).\n• **Engine**: Multi-parameter eligibility rule-matching evaluating student academic records, family income, and demographic criteria against state and central scholarship catalogs.\n• **Tech Stack**: FastAPI, Python 3.13, React 18, Tailwind CSS, MongoDB Atlas.",
      actions: [
        { label: 'View Smartathon Repo', actionType: 'link', url: 'https://github.com/Surya252006/smartathon26dsu' },
        { label: 'Explore Hackathons', actionType: 'scroll', targetId: 'achievements' },
      ],
    };
  }

  // 6. Soil Telemetry / Barnstromz 2K26 Queries
  if (q.includes('soil') || q.includes('telemetry') || q.includes('sensor') || q.includes('npk') || q.includes('iot') || q.includes('fertiliz') || q.includes('barnstromz')) {
    return {
      text: "🌱 **Smart Precision Fertilization System** (Barnstromz 2K26 Expo)\n\n• **Hardware**: Physical IoT telemetry streaming nitrogen, phosphorus, potassium (NPK), moisture, and pH sensor metrics via ESP32 microcontrollers.\n• **Software**: Python data pipelines evaluating soil nutrient benchmarks to predict optimal crop varieties and precise fertilizer dosage, preventing chemical runoff.\n• **Presentation**: Exhibited at the Barnstromz 2K26 technical project expo on 11 September 2026.",
      actions: [
        { label: 'Explore Surya’s GitHub', actionType: 'link', url: 'https://github.com/Surya252006' },
        { label: 'View in Projects', actionType: 'scroll', targetId: 'projects' },
      ],
    };
  }

  // 7. Banking / Java Queries
  if (q.includes('bank') || q.includes('java') || q.includes('ledger') || q.includes('oop')) {
    return {
      text: "💼 **Java Banking Management System & Ledger Engine**\n\n• **Core Engineering**: Console-based software system demonstrating strict Object-Oriented Programming (OOP) in Java, PIN-based authentication, balance state integrity, and permanent transaction audit logging.\n• **Data Integrity**: Double-entry transaction journal with defensive input validation preventing account underflows and data corruption.",
      actions: [
        { label: 'Banking System GitHub', actionType: 'link', url: 'https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-' },
        { label: 'View in Projects', actionType: 'scroll', targetId: 'projects' },
      ],
    };
  }

  // 8. Tech Stack / Skills / Languages
  if (
    q.includes('tech stack') ||
    q.includes('skill') ||
    q.includes('languages') ||
    q.includes('python') ||
    q.includes('java') ||
    q.includes('javascript') ||
    q.includes('react') ||
    q.includes('mongodb') ||
    q.includes('tools')
  ) {
    return {
      text: "⚡ **Surya S.'s Technical Stack**:\n\n• **Programming Languages**: Java (Core OOP, Collections, Multithreading), Python, JavaScript (ES6+), TypeScript, C/C++, SQL.\n• **Frontend & Web**: React 18, Vite, Tailwind CSS, HTML5, Modern CSS3, Responsive Design Systems.\n• **Backend & APIs**: Node.js, Express.js (REST APIs, Middleware, JWT RBAC), FastAPI (Async Python), Postman.\n• **Databases & Cloud**: MongoDB Atlas, Firebase (Firestore, Hosting, Realtime DB), SQLite, Supabase.\n• **Developer Tools**: Git, GitHub, Linux Bash, VS Code, ESP32 IoT Microcontrollers.",
      actions: [
        { label: 'View Technical Skills Section', actionType: 'scroll', targetId: 'skills' },
        { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
      ],
    };
  }

  // 9. Education / College / Degree
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('b.e') || q.includes('graduation') || q.includes('study') || q.includes('school')) {
    return {
      text: "🎓 **Surya's Education Background**:\n\n• **Degree**: Bachelor of Engineering (B.E.) in **Computer Science and Engineering**\n• **Institution**: **Dhanalakshmi Srinivasan College of Engineering, Coimbatore** (Anna University affiliated)\n• **Current Status**: **Third-Year Undergraduate (2024 – 2028)**\n• **Core Coursework**: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Database Management Systems, Operating Systems, Computer Networks, Software Engineering.",
      actions: [
        { label: 'View About Section', actionType: 'scroll', targetId: 'about' },
        { label: 'View Experience Timeline', actionType: 'scroll', targetId: 'experience' },
      ],
    };
  }

  // 10. Internships & Experience
  if (q.includes('intern') || q.includes('experience') || q.includes('skypark') || q.includes('cognifyz') || q.includes('work')) {
    return {
      text: "💼 **Surya's Internships & Experience**:\n\n1. **Skypark ITech** (11 – 27 August 2025): Digital Marketing & Web Operations Intern in Coimbatore — on-page web optimization, search engine indexing workflows, and audience engagement analysis.\n2. **Cognifyz Technologies** (2024): Full-Stack Development Intern — delivered 5 production web modules utilizing Node.js, Express, EJS, and RESTful architectures.\n3. **PosterKadai** (2025 – Present): Founder & Full-Stack Developer — live commercial storefront with active WhatsApp checkout.\n4. **Image Color Lab** (2025 – 2026): Program Organizer & Technical Curriculum Lead.",
      actions: [
        { label: 'View Experience Timeline', actionType: 'scroll', targetId: 'experience' },
        { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
      ],
    };
  }

  // 11. Contact / Hiring / Email / Socials
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('github') || q.includes('reach') || q.includes('message')) {
    return {
      text: "📬 **Get in Touch with Surya S.**:\n\n• **Email**: [surya25suresh2006@gmail.com](mailto:surya25suresh2006@gmail.com)\n• **LinkedIn**: [linkedin.com/in/surya-s-755937267](https://www.linkedin.com/in/surya-s-755937267/)\n• **GitHub**: [github.com/Surya252006](https://github.com/Surya252006)\n• **Location**: Coimbatore, Tamil Nadu, India\n\nSurya is actively available for **Software Engineering internships, developer opportunities, and campus placements**!",
      actions: [
        { label: 'Open Contact Form', actionType: 'scroll', targetId: 'contact' },
        { label: 'Send Direct Email', actionType: 'link', url: 'mailto:surya25suresh2006@gmail.com' },
        { label: 'View LinkedIn Profile', actionType: 'link', url: 'https://www.linkedin.com/in/surya-s-755937267/' },
      ],
    };
  }

  // 12. Tamil / Tanglish Queries
  if (
    q.includes('epdi') ||
    q.includes('pathi') ||
    q.includes('solrena') ||
    q.includes('solunga') ||
    q.includes('enna') ||
    q.includes('surya yaaru') ||
    q.includes('project enna')
  ) {
    return {
      text: "வணக்கம்! சூர்யா S. கோயம்புத்தூரில் உள்ள **தனலட்சுமி சீனிவாசன் பொறியியல் கல்லூரியின்** மூன்றாம் ஆண்டு கணினி அறிவியல் மாணவர் மற்றும் **Software Developer**.\n\nஅவர் **PosterKadai** (லைவ் e-commerce தளம்), **KisanConnect** (விவசாயிகளுக்கான நேரடி அங்காடி தளம்), மற்றும் **TN Scheme AI** (Smartathon '26) போன்ற நிஜ உலக திட்டங்களை உருவாக்கியுள்ளார்.\n\nநீங்கள் அவரது திட்டங்களை பார்க்க விரும்புகிறீர்களா அல்லது ரெஸ்யூமை டவுன்லோட் செய்ய விரும்புகிறீர்களா?",
      actions: [
        { label: 'திட்டங்களை காண்க', actionType: 'scroll', targetId: 'projects' },
        { label: 'ரெஸ்யூம் டவுன்லோட் செய்க', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
        { label: 'தொடர்பு கொள்ள', actionType: 'scroll', targetId: 'contact' },
      ],
    };
  }

  // 13. Fallback Response
  return {
    text: `I'd love to help you with that! Surya specializes in **Software Development**, **Full-Stack Web Engineering** (React 18, Node.js, Express, MongoDB Atlas, Firebase), and **Core Object-Oriented Programming** (Java, Python).\n\nYou can ask me specific questions about his **projects** (PosterKadai, KisanConnect, TN Scheme AI), his **technical skills**, or his **education and internships**.`,
    actions: [
      { label: 'View All Projects', actionType: 'scroll', targetId: 'projects' },
      { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_Software_Developer_Resume.pdf' },
      { label: 'Contact Surya', actionType: 'scroll', targetId: 'contact' },
    ],
  };
}
