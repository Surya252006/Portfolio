import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  GraduationCap,
  Code2,
  Trophy,
} from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';
import { heroRoles, heroTechBadges } from '@/lib/portfolioData';
import { Button } from './ui/button';

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = useMemo(() => heroRoles.map((r) => r.title), []);

  useEffect(() => {
    if (reduceMotion) return;
    const interval = window.setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 3200);
    return () => window.clearInterval(interval);
  }, [reduceMotion, roles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background subtle grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-10 pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Column: Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-7 xl:col-span-7 space-y-6 text-left"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/80 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-xs font-mono font-medium text-slate-300">
                Third-Year CSE • Dhanalakshmi Srinivasan College of Engineering
              </span>
            </div>

            {/* Main Greeting & Headline */}
            <div className="space-y-3">
              <p className="text-xs sm:text-sm font-mono text-primary font-semibold tracking-wider uppercase">
                Hello, I am
              </p>
              <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl text-foreground tracking-tight leading-[1.08]">
                Surya S.
              </h1>
              <div className="min-h-[44px] sm:min-h-[52px] flex items-center">
                <span className="text-lg sm:text-2xl lg:text-3xl font-display font-semibold text-slate-300">
                  Focused on{' '}
                </span>
                <motion.span
                  key={roles[roleIndex]}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="ml-2 text-lg sm:text-2xl lg:text-3xl font-display font-bold text-primary"
                >
                  {roles[roleIndex]}
                </motion.span>
              </div>
            </div>

            <div className="space-y-2 max-w-3xl">
              <p className="text-base sm:text-lg text-foreground font-display font-semibold text-slate-100">
                Engineering Applied AI &amp; Scalable Intelligent Systems.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                I'm Surya S., a Computer Science Engineering student and passionate AI Engineer focused on applied machine learning, neural triage systems, and building intelligent digital products with clean architecture and real-world utility.
              </p>
            </div>

            {/* Quick Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-muted-foreground mr-1">Core Tech:</span>
              {heroTechBadges.map((badge) => (
                <span
                  key={badge.value}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-border bg-secondary/50 text-foreground/90 transition-colors hover:border-primary/40 hover:bg-secondary/80"
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, Download Resume, Connect on LinkedIn */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollTo('projects')}
                className="font-medium text-xs sm:text-sm"
              >
                <Code2 className="w-4 h-4 mr-1.5" />
                View Projects
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <a
                href="/resume/Surya_S_AI_Engineer_Resume.pdf"
                download="Surya_S_AI_Engineer_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-muted-foreground" />
                Download AI Resume
              </a>

              <a
                href="https://www.linkedin.com/in/surya-s-755937267/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-primary hover:bg-secondary hover:border-primary/40 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4 text-primary" />
                Connect on LinkedIn
              </a>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs text-muted-foreground font-mono">Connect:</span>
              {[
                { Icon: Github, href: 'https://github.com/Surya252006', label: 'GitHub' },
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/in/surya-s-755937267/',
                  label: 'LinkedIn',
                },
                { Icon: Mail, href: 'mailto:surya25suresh2006@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-secondary transition-colors shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Clean, Sharp, Unobscured Profile Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="w-full max-w-[380px] sm:max-w-[420px] rounded-2xl border border-border bg-card shadow-xl overflow-hidden">
              {/* High-Definition Clear Portrait Frame */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-900">
                <img
                  src={profileAvatar}
                  alt="Surya S. - AI Engineer & Applied Systems Builder"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                  decoding="async"
                />

                {/* Subtle, clean top badge */}
                <div className="absolute top-3.5 left-3.5 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-border text-foreground">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-mono font-medium text-slate-200">
                    Open to Internships
                  </span>
                </div>
              </div>

              {/* Clean Details Below Portrait (Does NOT cover face or body) */}
              <div className="p-5 space-y-3.5 bg-card border-t border-border/80 text-left">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-display font-bold text-xl text-foreground">
                      Surya S.
                    </h3>
                    <p className="text-xs text-primary font-mono font-semibold">
                      AI Engineer &amp; Systems Developer
                    </p>
                    <p className="text-[11px] text-muted-foreground font-mono">
                      B.E. Computer Science &amp; Engineering
                    </p>
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-secondary text-primary font-medium border border-border">
                    3rd Year
                  </span>
                </div>

                <div className="text-xs text-muted-foreground font-body flex items-center gap-1.5">
                  <GraduationCap className="w-4 h-4 text-primary shrink-0" />
                  <span>Dhanalakshmi Srinivasan College of Engineering, Coimbatore</span>
                </div>

                {/* Verified Metrics Strip */}
                <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/70 text-center">
                  <div className="py-2 px-1 rounded-lg bg-secondary/40 border border-border/50">
                    <div className="text-base font-display font-bold text-foreground">9</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Real Repos</div>
                  </div>
                  <div className="py-2 px-1 rounded-lg bg-secondary/40 border border-border/50">
                    <div className="text-base font-display font-bold text-foreground">450+</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Git Commits</div>
                  </div>
                  <div className="py-2 px-1 rounded-lg bg-secondary/40 border border-border/50">
                    <div className="text-base font-display font-bold text-emerald-400">1st Place</div>
                    <div className="text-[10px] text-muted-foreground font-mono">Hackathon</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
