/**
 * Spoofy AI Engine - 24/7 Intelligent Knowledge & Response System
 * Designed for Surya Suresh's Portfolio
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
  "What are Surya's AI projects?",
  "How does MedPulse AI work?",
  "Tell me about KisanConnect",
  "What is SMARTATHON'26?",
  "Download Surya's Resume",
  "What is his tech stack?",
  "How can I contact Surya?",
  "Tell me about his education",
];

export function getSpoofyResponse(userQuery: string): {
  text: string;
  actions?: ChatMessage['actions'];
} {
  const q = userQuery.toLowerCase().trim();

  // 1. Greetings & Salutations (English, Tamil, Tanglish)
  if (
    q.match(/^(hi|hello|hey|vanakkam|namaste|hola|sup|good morning|good afternoon|good evening|who are you|what is your name)/i) ||
    q === 'spoofy' ||
    q === 'suryabot'
  ) {
    return {
      text: "👋 **Hello there! I am Spoofy**, Surya Suresh's dedicated 24/7 AI Portfolio Assistant.\n\nI can tell you all about Surya's **Artificial Intelligence systems**, **machine learning research**, **live production platforms** (MedPulse AI, KisanConnect, PosterKadai), his **tech stack**, **education**, or provide his **official resume**.\n\nWhat would you like to explore?",
      actions: [
        { label: 'Explore AI Projects', actionType: 'scroll', targetId: 'projects' },
        { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
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
      text: "📄 **Surya's ATS-Compliant Resume** is ready for download!\n\nIt features his credentials as an **Artificial Intelligence Engineer** (B.E. 2024 – 2028), detailing **PyTorch, TensorFlow, Scikit-Learn, FastAPI, React, Node.js, MongoDB Atlas**, and verified GitHub projects with live links.",
      actions: [
        { label: 'Download AI Engineer Resume (PDF)', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
        { label: 'View GitHub Repositories', actionType: 'link', url: 'https://github.com/Surya252006' },
      ],
    };
  }

  // 3. MedPulse AI Queries
  if (q.includes('medplus') || q.includes('medpulse') || q.includes('health') || q.includes('medical') || q.includes('triage') || q.includes('hospital')) {
    return {
      text: "🩺 **MedPulse AI — Healthcare Symptom Triage System**\n\n• **Core Purpose**: Applied clinical diagnostic engine that ingests multi-symptom input vectors to categorize patient triage urgency levels and calculate priority metrics.\n• **Tech Stack**: Python, PyTorch, TensorFlow, Scikit-Learn, FastAPI, REST APIs.\n• **Performance**: Asynchronous microservices achieving inference latency **< 150ms** with structured JSON output for hospital reception integration.\n• **Status**: Open-source repository with active triage classification benchmarks.",
      actions: [
        { label: 'View MedPulse AI on GitHub', actionType: 'link', url: 'https://github.com/Surya252006/medplus-ai' },
        { label: 'View in Portfolio', actionType: 'scroll', targetId: 'projects' },
      ],
    };
  }

  // 4. KisanConnect Queries
  if (q.includes('kisan') || q.includes('kissan') || q.includes('farm') || q.includes('agri') || q.includes('market') || q.includes('mandi')) {
    return {
      text: "🌾 **KisanConnect AgriTech Marketplace** (Live Production)\n\n• **Impact**: Connects farmers directly to retail and bulk buyers to eliminate middleman margins.\n• **Key Features**: Real-time APMC Mandi market price benchmarking with trend indicators (UP/DOWN/STABLE) and race-condition-free inventory decrementing via MongoDB atomic operators (`$gte`, `$inc`).\n• **Tech Stack**: React 18, Node.js, Express.js, MongoDB Atlas, Firebase Hosting.\n• **Live Deployment**: Active at `kisanconnect-2267e.web.app`.",
      actions: [
        { label: 'Open KisanConnect Live App', actionType: 'link', url: 'https://kisanconnect-2267e.web.app' },
        { label: 'View GitHub Code', actionType: 'link', url: 'https://github.com/Surya252006/kissanconnect' },
      ],
    };
  }

  // 5. SMARTATHON'26 Queries
  if (q.includes('smartathon') || q.includes('scholarship') || q.includes('scheme') || q.includes('welfare') || q.includes('dsu') || q.includes('oneyes') || q.includes('hackathon')) {
    return {
      text: "🏆 **SMARTATHON'26 — AI Scheme & Scholarship Eligibility Matcher**\n\n• **Event**: DSU × ONEYES Engineering Hackathon (Problem Statement #6: Tamil Nadu Higher Education & Central Student Welfare Optimization).\n• **Engine**: Deterministic AI rule-matching analyzing student academic records, family income, and demographics against government catalogs with an automated **96% match confidence score**.\n• **Tech Stack**: FastAPI, Python 3.13, React 18, MongoDB Atlas, Tailwind CSS.",
      actions: [
        { label: 'View Smartathon Repo', actionType: 'link', url: 'https://github.com/Surya252006/smartathon26dsu' },
        { label: 'Explore Hackathons', actionType: 'scroll', targetId: 'achievements' },
      ],
    };
  }

  // 6. Soil Telemetry Queries
  if (q.includes('soil') || q.includes('telemetry') || q.includes('sensor') || q.includes('npk') || q.includes('iot') || q.includes('fertiliz')) {
    return {
      text: "🌱 **Smart Precision Soil Telemetry System**\n\n• **Architecture**: Physical IoT telemetry streaming nitrogen, phosphorus, potassium, moisture, and pH sensor metrics via ESP32 microcontrollers.\n• **Machine Learning**: Scikit-Learn & PyTorch classification pipelines predicting optimal crop varieties and bio-fertilizer dosages with **91.4% accuracy**.\n• **Impact**: Mitigates chemical runoff and soil degradation through continuous algorithmic telemetry monitoring.",
      actions: [
        { label: 'Explore Surya’s GitHub', actionType: 'link', url: 'https://github.com/Surya252006' },
        { label: 'View in Projects', actionType: 'scroll', targetId: 'projects' },
      ],
    };
  }

  // 7. PosterKadai Queries
  if (q.includes('posterkadai') || q.includes('poster') || q.includes('ecommerce') || q.includes('shop') || q.includes('store') || q.includes('whatsapp')) {
    return {
      text: "🎨 **PosterKadai — Production Commercial E-Commerce Storefront**\n\n• **Product**: Custom art and wall decor e-commerce platform founded and engineered by Surya.\n• **Performance**: Sub-1.2s page load speeds with responsive shopping cart and zero-friction direct WhatsApp checkout integration.\n• **Tech Stack**: React 18, Firebase Cloud Firestore, Tailwind CSS, WhatsApp Business API.\n• **Live Deployment**: Active in production at `posterkadai-e364b.web.app`.",
      actions: [
        { label: 'Visit PosterKadai Storefront', actionType: 'link', url: 'https://posterkadai-e364b.web.app/' },
        { label: 'View Source on GitHub', actionType: 'link', url: 'https://github.com/Surya252006/Posterkadai' },
      ],
    };
  }

  // 8. Banking / Java / Personal Finance Queries
  if (q.includes('bank') || q.includes('finance') || q.includes('java') || q.includes('ledger') || q.includes('bot')) {
    return {
      text: "💼 **Financial Systems & AI Assistants by Surya**:\n\n1. **Console Banking & Ledger Engine**: Enterprise banking application in Core Java implementing strict OOP encapsulation, atomic transaction validation, and permanent audit file persistence.\n2. **Personal Finance AI Bot**: Conversational personal budgeting assistant with NLP query parsing, automated spending categorization, and responsive visual distribution charts.",
      actions: [
        { label: 'Banking System GitHub', actionType: 'link', url: 'https://github.com/Surya252006/BANK-MANAGEMENT-SYSTEM-' },
        { label: 'Personal Finance Bot GitHub', actionType: 'link', url: 'https://github.com/Surya252006/Personal-Finance-chat-bot' },
      ],
    };
  }

  // 9. Tech Stack / Skills / Languages
  if (
    q.includes('tech stack') ||
    q.includes('skill') ||
    q.includes('languages') ||
    q.includes('python') ||
    q.includes('pytorch') ||
    q.includes('tensorflow') ||
    q.includes('react') ||
    q.includes('mongodb') ||
    q.includes('tools')
  ) {
    return {
      text: "⚡ **Surya Suresh's Technical Stack**:\n\n• **AI & Machine Learning**: Python, PyTorch, TensorFlow, Scikit-Learn, NumPy, Pandas, NLP Intent Classification, Supervised Learning, Model Evaluation.\n• **Programming Languages**: Python, Java (Core OOP, Collections), C, C++, JavaScript (ES6+), TypeScript, SQL.\n• **Web & Full-Stack**: React 18, Vite, FastAPI (Async Microservices), Node.js, Express.js, HTML5, CSS3, Tailwind CSS.\n• **Databases & Cloud**: MongoDB Atlas, Firebase (Hosting, Firestore, Auth), SQLite, Git, GitHub, Postman.\n• **Hardware & IoT**: ESP32, Arduino, Physical Soil Telemetry Sensors (NPK, pH, Moisture).",
      actions: [
        { label: 'View Interactive Skills Section', actionType: 'scroll', targetId: 'skills' },
        { label: 'Download Full Resume', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
      ],
    };
  }

  // 10. Education / College / Degree
  if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('degree') || q.includes('b.e') || q.includes('graduation') || q.includes('study') || q.includes('school')) {
    return {
      text: "🎓 **Surya's Education Background**:\n\n• **Degree**: Bachelor of Engineering (B.E.) in **Computer Science and Engineering**\n• **Institution**: Anna University Affiliated Institution, Coimbatore, Tamil Nadu, India\n• **Graduation Timeline**: **2024 – 2028** (Undergraduate)\n• **Core Coursework**: Data Structures & Algorithms, Object-Oriented Programming (Java/C++), Artificial Intelligence Fundamentals, Database Systems, Computer Networks, Operating Systems.",
      actions: [
        { label: 'View About Section', actionType: 'scroll', targetId: 'about' },
        { label: 'View Experience Timeline', actionType: 'scroll', targetId: 'experience' },
      ],
    };
  }

  // 11. Internships, Achievements & Certifications
  if (q.includes('intern') || q.includes('achievement') || q.includes('certif') || q.includes('cognifyz') || q.includes('iit') || q.includes('guwahati') || q.includes('experience')) {
    return {
      text: "🌟 **Internships & Verified Credentials**:\n\n1. **IIT Guwahati AI & ML Qualification**: Completed rigorous foundational machine learning & neural network training from IIT Guwahati E&ICT Academy.\n2. **Cognifyz Technologies**: Full-Stack Development Intern (Remote, 2024) — built 5 production web modules with Node.js, Express, and REST APIs.\n3. **SMARTATHON'26 Finalist**: DSU × ONEYES Hackathon (Problem Statement #6) — AI Scholarship & Welfare Scheme Matcher.\n4. **PosterKadai Platform**: Founder & Tech Lead (2025 – Present) — shipped live e-commerce platform on Firebase.\n5. **Image Color Lab**: Program Organizer & Technical Curriculum Lead (2025 – 2026).",
      actions: [
        { label: 'View Achievements Section', actionType: 'scroll', targetId: 'achievements' },
        { label: 'View Experience Timeline', actionType: 'scroll', targetId: 'experience' },
      ],
    };
  }

  // 12. Contact / Hiring / Email / Socials
  if (q.includes('contact') || q.includes('hire') || q.includes('email') || q.includes('phone') || q.includes('linkedin') || q.includes('github') || q.includes('reach') || q.includes('message')) {
    return {
      text: "📬 **Get in Touch with Surya Suresh**:\n\n• **Email**: [surya25suresh2006@gmail.com](mailto:surya25suresh2006@gmail.com)\n• **LinkedIn**: [linkedin.com/in/surya-suresh](https://www.linkedin.com/in/surya-suresh-755937267/)\n• **GitHub**: [github.com/Surya252006](https://github.com/Surya252006)\n• **Location**: Coimbatore / Mannargudi, Tamil Nadu, India\n\nSurya is actively available for **AI Engineering roles, internships, and high-impact machine learning projects**!",
      actions: [
        { label: 'Open Contact Form', actionType: 'scroll', targetId: 'contact' },
        { label: 'Send Direct Email', actionType: 'link', url: 'mailto:surya25suresh2006@gmail.com' },
        { label: 'View LinkedIn Profile', actionType: 'link', url: 'https://www.linkedin.com/in/surya-suresh-755937267/' },
      ],
    };
  }

  // 13. Tamil / Tanglish Queries
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
      text: "வணக்கம்! சூர்யா சுரேஷ் ஒரு **Artificial Intelligence Engineer** மற்றும் B.E. (2024 – 2028) கணினி அறிவியல் மாணவர்.\n\nஅவர் **MedPulse AI** (மருத்துவ triage சிஸ்டம்), **KisanConnect** (விவசாயிகளுக்கான நேரடி அங்காடி தளம்), மற்றும் **SMARTATHON'26** AI உதவித்தொகை மேட்ச்சர் போன்ற நிஜ உலக திட்டங்களை உருவாக்கியுள்ளார்.\n\nநீங்கள் அவரது திட்டங்களை பார்க்க விரும்புகிறீர்களா அல்லது ரெஸ்யூமை டவுன்லோட் செய்ய விரும்புகிறீர்களா?",
      actions: [
        { label: 'ப்ராஜெக்ட்களை காண்க', actionType: 'scroll', targetId: 'projects' },
        { label: 'ரெஸ்யூம் டவுன்லோட் செய்க', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
        { label: 'தொடர்பு கொள்ள', actionType: 'scroll', targetId: 'contact' },
      ],
    };
  }

  // 14. Fallback Intelligent Response
  return {
    text: `I'd love to help you with that! Surya specializes in **Artificial Intelligence Engineering**, **applied Machine Learning** (PyTorch, TensorFlow, Scikit-Learn), and **Full-Stack software** (React, FastAPI, Node.js, MongoDB Atlas).\n\nYou can ask me specific questions about his **projects** (MedPulse AI, KisanConnect, PosterKadai, SMARTATHON'26), his **technical skills**, or his **education and resume**.`,
    actions: [
      { label: 'View All Projects', actionType: 'scroll', targetId: 'projects' },
      { label: 'Download ATS Resume', actionType: 'download', url: '/resume/Surya_S_AI_Engineer_Resume.pdf' },
      { label: 'Contact Surya', actionType: 'scroll', targetId: 'contact' },
    ],
  };
}
