import { useEffect, useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import profileAvatar from '@/assets/profile-avatar.png';
import { heroRoles, heroTechBadges } from '@/lib/portfolioData';
import { Button } from './ui/button';

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);

  const bio =
    'Engineering student passionate about building intelligent systems, scalable applications, and impactful digital experiences.';

  const roles = useMemo(() => heroRoles.map((r) => r.title), []);

  useEffect(() => {
    if (reduceMotion) return;
    const t = window.setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2400);
    return () => window.clearInterval(t);
  }, [reduceMotion, roles.length]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <section id="home" className="relative pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.10),transparent_55%)]" />

      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute top-24 right-0 w-80 h-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.06, duration: 0.45 }}
              className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-border bg-secondary/30 backdrop-blur"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_18px_rgba(59,130,246,0.7)]" />
              <span className="text-sm font-body text-text-secondary">
                Available for roles in Full Stack & AI
              </span>
            </motion.div>

            <h1 className="font-display font-bold text-[64px] leading-[1.05] sm:text-[72px] text-foreground">
              <span className="text-foreground">Surya Suresh</span>
            </h1>

            <div className="h-[44px] flex items-center">
              <motion.div
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="text-[24px] sm:text-[28px] font-display font-semibold text-primary"
              >
                {roles[roleIndex]}
              </motion.div>
            </div>

            <p className="text-[16px] sm:text-[18px] text-text-secondary font-body leading-relaxed max-w-xl">
              {bio}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <Button
                variant="default"
                size="xl"
                className="px-8"
                onClick={() => scrollTo('projects')}
              >
                View Projects
                <ArrowRight className="w-5 h-5" />
              </Button>

              <a
                href="/resume/Surya_S_Software_Developer_Resume.pdf"
                download="Surya_S_Software_Developer_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </div>


            <div className="flex items-center gap-3 pt-2">
              {[
                { Icon: Github, href: 'https://github.com/Surya252006', label: 'GitHub' },
                {
                  Icon: Linkedin,
                  href: 'https://www.linkedin.com/in/surya-suresh-755937267/',
                  label: 'LinkedIn',
                },
                { Icon: Mail, href: 'mailto:surya25suresh2006@gmail.com', label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 rounded-2xl border border-border bg-card/60 inline-flex items-center justify-center hover:bg-secondary/50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.18 }}
                >
                  <Icon className="w-5 h-5 text-text-secondary hover:text-primary" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            className="relative"
          >
            <div className="relative mx-auto w-[320px] sm:w-[420px] lg:w-[520px]">
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />
              <div className="absolute -top-6 -left-6 w-28 h-28 rounded-2xl border border-primary/20 bg-primary/10 backdrop-blur" />
              <div className="absolute -bottom-6 -right-4 w-32 h-32 rounded-2xl border border-primary/20 bg-primary/10 backdrop-blur" />

              <div className="relative rounded-full border border-border bg-card/70 backdrop-blur p-2">
                <div className="rounded-full overflow-hidden border border-border bg-card">
                  <img src={profileAvatar} alt="Surya Suresh" className="w-full h-full object-cover" />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: 0.2 }}
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%]"
              >
                <div className="rounded-2xl border border-border bg-secondary/30 backdrop-blur px-4 py-3 shadow-[0_0_0_1px_rgba(59,130,246,0.12)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-body uppercase tracking-widest text-text-secondary">Tech Stack</div>
                      <div className="text-sm font-body text-foreground font-medium mt-0.5">React • Node • Python • AI</div>
                    </div>
                    <div className="h-2 w-2 rounded-full bg-success shadow-[0_0_18px_rgba(16,185,129,0.6)]" />
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {heroTechBadges.map((b, idx) => (
                      <motion.span
                        key={b.value}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: 0.08 * idx }}
                        className="px-3 py-1 rounded-full text-xs font-body border border-primary/20 bg-primary/10 text-primary/90 hover:shadow-[0_0_18px_rgba(59,130,246,0.25)] transition-shadow"
                      >
                        {b.label}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

