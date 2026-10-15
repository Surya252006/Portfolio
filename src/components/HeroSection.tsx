import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Bot,
  Activity,
  Cpu,
  Terminal,
  Sparkles,
  CheckCircle2,
  GraduationCap,
  Code2,
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
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(15,23,42,0.7),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-pattern opacity-15 pointer-events-none" />

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
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-border/80 bg-card/80 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
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

            {/* Authentic Headline & Bio */}
            <div className="space-y-2 max-w-3xl">
              <p className="text-base sm:text-lg text-foreground font-display font-semibold text-slate-100">
                Building useful software. Turning ideas into real products.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground font-body leading-relaxed">
                I'm Surya S., a Computer Science Engineering student passionate about software development, product building, and creating practical digital experiences with clean architecture, verifiable code, and human utility.
              </p>
            </div>

            {/* Quick Tech Stack Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-mono text-muted-foreground mr-1">Core Tech:</span>
              {heroTechBadges.map((badge) => (
                <span
                  key={badge.value}
                  className="px-2.5 py-1 rounded-md text-xs font-mono font-medium border border-border/80 bg-secondary/50 text-foreground/90 transition-all hover:border-primary/50 hover:bg-secondary/80"
                >
                  {badge.label}
                </span>
              ))}
            </div>

            {/* Action Buttons: View Projects, Download Resume, Connect on LinkedIn, Talk to Spoofy */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <Button
                variant="default"
                size="lg"
                onClick={() => scrollTo('projects')}
                className="font-medium text-xs sm:text-sm shadow-md shadow-primary/20"
              >
                <Code2 className="w-4 h-4 mr-1.5" />
                View Projects
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>

              <a
                href="/resume/Surya_S_Software_Developer_Resume.pdf"
                download="Surya_S_Software_Developer_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-border bg-card/80 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4 text-muted-foreground" />
                Download Resume
              </a>

              <a
                href="https://www.linkedin.com/in/surya-s-755937267/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/10 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-medium text-primary hover:bg-primary/20 transition-colors shadow-sm"
              >
                <Linkedin className="w-4 h-4" />
                Connect on LinkedIn
              </a>

              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  window.dispatchEvent(
                    new CustomEvent('open-spoofy-chat', {
                      detail: { query: "Hi Spoofy, give me a quick executive summary of Surya's engineering background and top achievements." },
                    })
                  );
                }}
                className="font-medium text-xs sm:text-sm border-cyan-700/60 bg-cyan-950/40 text-cyan-300 hover:bg-cyan-900/50 hover:text-white transition-all shadow-sm"
              >
                <Sparkles className="w-4 h-4 mr-1.5 text-cyan-400" />
                Talk to Spoofy AI
              </Button>
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
                  className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-secondary/60 transition-all shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Prominent AI Engineer Portrait Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            {/* Ambient Aura Glow behind the card */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 via-cyan-500/25 to-emerald-500/20 rounded-3xl blur-3xl opacity-75 pointer-events-none -z-10 animate-pulse" />

            {/* Floating Frame */}
            <motion.div
              animate={reduceMotion ? {} : { y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-[460px] 2xl:max-w-[500px]"
            >
              {/* Outer Cyber Card Frame with Glow Gradient */}
              <div className="relative rounded-3xl p-1 bg-gradient-to-b from-primary/50 via-cyan-500/30 to-emerald-500/40 shadow-2xl overflow-hidden group">
                {/* HUD Corner Ticks */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-primary z-30 pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400 z-30 pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-emerald-400 z-30 pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-primary z-30 pointer-events-none" />

                {/* Inner Container */}
                <div className="relative rounded-[22px] overflow-hidden bg-slate-950">
                  {/* High Definition Portrait */}
                  <div className="relative aspect-[3/4] sm:aspect-[4/5] overflow-hidden">
                    <img
                      src={profileAvatar}
                      alt="Surya Suresh - Artificial Intelligence Engineer"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay for bottom text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent pointer-events-none" />

                    {/* Top Left Floating Status Badge */}
                    <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-emerald-500/30 shadow-lg shadow-black/40">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-mono font-medium text-emerald-300">
                        Open to Internships
                      </span>
                    </div>

                    {/* Top Right Floating Role Badge */}
                    <div className="absolute top-3.5 right-3.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-primary/40 shadow-lg shadow-black/40">
                      <Code2 className="w-3.5 h-3.5 text-primary" />
                      <span className="text-[11px] font-mono font-semibold text-primary">
                        Software Engineer
                      </span>
                    </div>

                    {/* Bottom Overlay: Identity & Live Stats */}
                    <div className="absolute bottom-0 inset-x-0 p-5 z-20 space-y-3 text-left">
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-display font-bold text-2xl text-white tracking-tight drop-shadow-md">
                            Surya S.
                          </h3>
                          <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                            B.E. CSE
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 font-mono mt-0.5">
                          Software Engineering &amp; Product Builder
                        </p>
                      </div>

                      {/* Education Callout */}
                      <div className="rounded-xl border border-white/10 bg-slate-900/80 backdrop-blur-md p-2.5 font-mono text-[11px] space-y-1">
                        <div className="flex items-center justify-between text-slate-300">
                          <span className="flex items-center gap-1.5 text-primary">
                            <GraduationCap className="w-3.5 h-3.5" />
                            College
                          </span>
                          <span className="text-cyan-300 font-medium truncate max-w-[200px]" title="Dhanalakshmi Srinivasan College of Engineering">
                            DSCE Coimbatore
                          </span>
                        </div>
                      </div>

                      {/* Key Verified Stats Grid */}
                      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-white/10 text-center">
                        <div className="py-1.5 px-2 rounded-lg bg-slate-900/70 backdrop-blur-sm border border-white/5">
                          <div className="text-base font-display font-bold text-white">9</div>
                          <div className="text-[9px] text-slate-400 font-mono">Real Repos</div>
                        </div>
                        <div className="py-1.5 px-2 rounded-lg bg-slate-900/70 backdrop-blur-sm border border-white/5">
                          <div className="text-base font-display font-bold text-white">450+</div>
                          <div className="text-[9px] text-slate-400 font-mono">Git Commits</div>
                        </div>
                        <div className="py-1.5 px-2 rounded-lg bg-slate-900/70 backdrop-blur-sm border border-white/5">
                          <div className="text-base font-display font-bold text-emerald-400">2</div>
                          <div className="text-[9px] text-slate-400 font-mono">Live Web Apps</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Badges outside the card */}
              <motion.div
                animate={reduceMotion ? {} : { y: [0, -8, 0], x: [0, 3, 0] }}
                transition={{ repeat: Infinity, duration: 5.5, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -left-4 z-30 p-2.5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-display font-bold text-foreground">B.E. Computer Science</div>
                  <div className="text-[10px] text-muted-foreground font-mono">2024 — 2028 (Undergrad)</div>
                </div>
              </motion.div>

              <motion.div
                animate={reduceMotion ? {} : { y: [0, 8, 0], x: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -right-4 z-30 p-2.5 rounded-2xl bg-card/95 backdrop-blur-md border border-border shadow-xl items-center gap-2.5"
              >
                <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 text-primary shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-display font-bold text-foreground">IIT Guwahati Qualified</div>
                  <div className="text-[10px] text-muted-foreground font-mono">AI & Machine Learning</div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
