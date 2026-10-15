import { motion } from 'framer-motion';
import { MapPin, Rocket, GraduationCap, Code2, Layers, CheckCircle2, Award, Terminal, Cpu } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';
import { AnimatedCounter } from './AnimatedCounter';
import { aboutStats } from '@/lib/portfolioData';

const corePrinciples = [
  {
    icon: Cpu,
    title: 'Applied AI & Machine Learning',
    desc: 'Developing predictive pipelines, neural triage classifiers, and LLM integrations using Python, PyTorch, Scikit-Learn, and FastAPI.',
  },
  {
    icon: Code2,
    title: 'Full-Stack Web Architecture',
    desc: 'Engineering responsive web applications using React 18, Node.js, Express, MongoDB Atlas, and Firebase with clean component hierarchies.',
  },
  {
    icon: Terminal,
    title: 'Clean Code & OOP Foundations',
    desc: 'Applying strict Object-Oriented principles, modular software design, and robust data structures across Python, Java, and TypeScript.',
  },
  {
    icon: Rocket,
    title: 'Hackathon-Tested Delivery',
    desc: 'Engineering high-performance solutions under pressure—like 1st Place Winner KisanConnect at MongoDB Tech Odyssey and commercial platform PosterKadai.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Background & Engineering Focus
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Engineering Applied AI. <span className="text-primary">Turning Ideas</span> into Reality.
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Strong theoretical computer science foundations paired with hands-on development in applied machine learning, intelligent web platforms, and practical software systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Personal Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 space-y-6 shadow-sm">
              <div className="flex items-center gap-4 border-b border-border/70 pb-6">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-slate-900 border border-border shrink-0">
                  <img src={profileAvatar} alt="Surya S." className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Surya S.
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Coimbatore, Tamil Nadu • AI Engineer &amp; Full-Stack Developer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  I'm a <strong className="text-foreground">Third-Year Computer Science and Engineering student</strong> at <strong className="text-foreground">Dhanalakshmi Srinivasan College of Engineering, Coimbatore</strong> (Anna University affiliated). I am an <strong className="text-foreground">AI Engineer</strong> passionate about applied machine learning, neural triage pipelines, and building intelligent digital experiences that solve real-world problems.
                </p>
                <p>
                  My engineering journey is driven by practical execution. I have independently architected and shipped <strong className="text-foreground">PosterKadai</strong> (a live commercial e-commerce platform with automated WhatsApp checkout) and engineered <strong className="text-foreground">KisanConnect</strong>, which won <strong className="text-foreground">1st Place at the MongoDB Tech Odyssey 24-Hour Hackathon</strong> (in partnership with SmartBridge).
                </p>
                <p>
                  Whether designing applied ML models in Python and PyTorch, serving asynchronous REST endpoints in FastAPI and Node.js, or building responsive interfaces in React and Tailwind CSS, I focus on writing reliable, high-performance, and verifiable code.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid sm:grid-cols-2 gap-3.5 pt-2">
                {corePrinciples.map((principle) => {
                  const Icon = principle.icon;
                  return (
                    <div
                      key={principle.title}
                      className="p-4 rounded-xl border border-border/80 bg-secondary/30 hover:border-primary/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-center gap-2 text-foreground font-display font-semibold text-sm">
                        <Icon className="w-4 h-4 text-primary shrink-0" />
                        <span>{principle.title}</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {principle.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Key Stats & Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Numeric Impact Grid */}
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                Execution at a Glance
              </h3>
              <p className="text-xs text-muted-foreground mb-6">
                Consistent learning, building, and delivering software.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl border border-border/70 bg-secondary/30 text-left space-y-1"
                  >
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    <div className="text-xs font-body text-muted-foreground font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Education & Credentials */}
            <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-8 shadow-sm space-y-4">
              <h3 className="font-display text-lg font-bold text-foreground">
                Education & Verification
              </h3>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-foreground">
                      B.E. in Computer Science & Engineering
                    </div>
                    <div className="text-xs text-primary font-medium mt-0.5">
                      Dhanalakshmi Srinivasan College of Engineering, Coimbatore
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      2024 — 2028 • Third-Year Undergraduate
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-foreground">
                      Technical Internships & Expos
                    </div>
                    <div className="text-xs text-primary font-medium mt-0.5">
                      Skypark ITech & Cognifyz Technologies
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      Smartathon '26 & Barnstromz 2K26 Exhibitions
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2 border-t border-border/70">
                <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">
                  My Engineering Commitments
                </div>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Mobile-first, fully responsive design across all devices</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Type-safe, testable code with clean documentation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Fast load speeds & optimized assets for real user devices</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
