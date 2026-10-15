import { motion } from 'framer-motion';
import { MapPin, Rocket, GraduationCap, Code2, Layers, CheckCircle2, Award, Terminal, Bot } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';
import { AnimatedCounter } from './AnimatedCounter';
import { aboutStats } from '@/lib/portfolioData';

const corePrinciples = [
  {
    icon: Bot,
    title: 'Applied AI & Neural Models',
    desc: 'Engineering predictive models, classification algorithms, and NLP triage systems designed for practical real-world impact.',
  },
  {
    icon: Terminal,
    title: 'IoT Telemetry & Edge Inference',
    desc: 'Ingesting physical sensor streams (NPK, moisture, pH) and processing data through low-latency FastAPI endpoints.',
  },
  {
    icon: Code2,
    title: 'Clean Architecture & DX',
    desc: 'Writing modular, maintainable Python, TypeScript, and modern component systems adhering to robust software standards.',
  },
  {
    icon: Rocket,
    title: 'Production Product Delivery',
    desc: 'Connecting intelligent backend models with fast, responsive web applications like the live PosterKadai platform.',
  },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Background & Focus
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Engineering with <span className="text-primary">Intelligence</span> & Purpose
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Theoretical foundations in Computer Science combined with hands-on development in Machine Learning and full-stack software.
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
                  <img src={profileAvatar} alt="Surya Suresh" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-foreground">
                    Surya Suresh
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono flex items-center gap-1.5 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-primary" /> Tamil Nadu, India • Artificial Intelligence Engineer
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                <p>
                  I am a Computer Science & Engineering student specializing in <strong className="text-foreground">Artificial Intelligence and Applied Machine Learning</strong>. Over the past three years, I have engineered and deployed complete systems ranging from AI-powered healthcare triage to live production e-commerce platforms.
                </p>
                <p>
                  My engineering work concentrates on building <strong className="text-foreground">Python machine learning pipelines, IoT telemetry ingestion, and neural classification models</strong> using TensorFlow, Scikit-Learn, and FastAPI. Key projects include <strong className="text-foreground">MedPulse AI</strong> (triage severity navigation for rural healthcare) and <strong className="text-foreground">Smart Precision Soil Telemetry</strong> (91.4% predictive crop compatibility).
                </p>
                <p>
                  Beyond models in Jupyter notebooks, I believe an AI Engineer must ship software that real people can use. That is why I connect models to resilient backends, responsive web interfaces, and automated workflows.
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
                Education & Qualifications
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
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      2024 — 2028 (Undergraduate)
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-display font-semibold text-sm text-foreground">
                      IIT Guwahati AI & ML Certification
                    </div>
                    <div className="text-xs text-muted-foreground font-mono mt-0.5">
                      Applied Machine Learning & Statistical Systems
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
