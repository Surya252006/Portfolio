import { motion } from 'framer-motion';
import { MapPin, Rocket, GraduationCap, Sparkles, Code } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';
import { AnimatedCounter } from './AnimatedCounter';
import { aboutStats } from '@/lib/portfolioData';

const highlights = [
  { icon: GraduationCap, title: 'Engineering Student', desc: 'Building foundations in software & systems.' },
  { icon: Sparkles, title: 'AI + Full Stack', desc: 'Turning ideas into production-ready apps.' },
  { icon: Rocket, title: 'Entrepreneurial Mindset', desc: 'Shipping experiments into real products.' },
  { icon: Code, title: 'Problem Solver', desc: 'Focus on measurable outcomes and clean UX.' },
];

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-body tracking-widest uppercase text-text-secondary">About</span>
          </div>
          <h2 className="mt-5 font-display font-bold text-[40px] sm:text-[48px] text-foreground">
            Get to <span className="text-primary">Know Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6 md:p-8">
              <div className="flex items-start gap-4">
                <div className="relative w-16 h-16 rounded-full border border-primary/30 bg-primary/10 overflow-hidden">
                  <img src={profileAvatar} alt="Surya Suresh" className="w-full h-full object-cover" />
                </div>
                <div className="pt-1">
                  <h3 className="font-display text-xl font-bold text-foreground">Surya Suresh</h3>
                  <p className="mt-1 text-sm text-text-secondary font-body inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4" /> India
                  </p>
                </div>
              </div>

              <p className="mt-5 text-text-secondary font-body leading-relaxed">
                Engineering Student. Interested in AI and Full Stack Development. Building real-world projects with a
                focus on clean architecture, scalable systems, and premium user experience.
              </p>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {highlights.map((h, idx) => (
                  <motion.div
                    key={h.title}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="rounded-xl border border-border bg-secondary/30 backdrop-blur p-4 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18)] transition-shadow"
                  >
                    <h4 className="font-display font-bold text-foreground text-sm">{h.title}</h4>
                    <p className="mt-2 text-xs text-text-secondary leading-relaxed">{h.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, delay: 0.04 }}
            className="space-y-6"
          >
            <div className="rounded-2xl border border-border bg-card/70 backdrop-blur p-6 md:p-8">
              <h3 className="font-display text-xl font-bold text-foreground">At a glance</h3>
              <p className="mt-2 text-text-secondary font-body">Metrics that reflect consistent execution.</p>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {aboutStats.map((s, idx) => (
                  <motion.div
                    key={s.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.06 }}
                    className="rounded-xl border border-border bg-secondary/30 p-4 text-center"
                  >
                    <AnimatedCounter value={s.value} suffix={s.suffix} />
                    <div className="mt-2 text-xs font-body uppercase tracking-widest text-text-secondary">
                      {s.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/50 backdrop-blur p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-foreground">What I focus on</h3>
              <ul className="mt-4 space-y-3">
                {[
                  'Premium UX with measurable conversion and clarity.',
                  'AI-enabled features that solve real user problems.',
                  'Full-stack delivery: clean APIs, reliable data, responsive UI.',
                  'Entrepreneur thinking: ship, learn, iterate, scale.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary font-body">
                    <span className="mt-1 w-2 h-2 rounded-full bg-primary shadow-[0_0_16px_rgba(59,130,246,0.5)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

