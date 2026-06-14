import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';
import { motion, useReducedMotion } from 'framer-motion';
import { navItems } from '@/lib/portfolioData';
import clsx from 'clsx';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? 'home');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0.01 },
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [ids]);

  return active;
}

export function PremiumNavbar() {
  const reduceMotion = useReducedMotion();
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => navItems.map((n) => n.sectionId), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (href: string, sectionId: string) => {
    setOpen(false);
    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      initial={false}
      animate={{ backgroundColor: isScrolled ? 'rgba(255,255,255,0.04)' : 'transparent' }}
      transition={{ duration: 0.2 }}
    >
      <div
        className={clsx(
          'mx-auto max-w-6xl px-4 md:px-8',
          'flex items-center justify-between py-3',
        )}
      >
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('#home', 'home');
          }}
          className="inline-flex items-center gap-2 rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <div className="w-9 h-9 rounded-xl border border-border bg-card/60 flex items-center justify-center">
            <span className="font-display font-bold text-primary">S</span>
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold tracking-wide text-sm">SURYA</div>
            <div className="text-xs text-text-secondary">Portfolio</div>
          </div>
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.sectionId}
              href={item.href}
              aria-current={active === item.sectionId ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(item.href, item.sectionId);
              }}
              className={clsx(
                'relative text-sm font-body tracking-wide',
                'transition-colors',
                active === item.sectionId
                  ? 'text-primary'
                  : 'text-text-secondary hover:text-foreground',
              )}
            >
              {item.label}
              <span
                className={clsx(
                  'absolute left-0 -bottom-2 h-0.5 w-full rounded-full bg-primary',
                  active === item.sectionId ? 'opacity-100' : 'opacity-0 group-hover:opacity-100',
                  'transition-opacity',
                )}
              />
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="neon" size="sm" onClick={() => scrollTo('#contact', 'contact')}>
            Hire Me
          </Button>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg border border-border bg-card/40 hover:bg-card transition-colors"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={{ height: open ? 'auto' : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}
        className="lg:hidden overflow-hidden"
      >
        <div className="mx-auto max-w-6xl px-4 md:px-8 pb-4">
          <div className="rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-3 shadow-[0_0_0_1px_rgba(59,130,246,0.15)]">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                className={clsx(
                  'w-full text-left px-3 py-3 rounded-xl transition-colors',
                  active === item.sectionId
                    ? 'text-primary bg-primary/10'
                    : 'text-text-secondary hover:text-foreground hover:bg-white/5',
                )}
                onClick={() => scrollTo(item.href, item.sectionId)}
              >
                <span className="font-body text-sm">{item.label}</span>
              </button>
            ))}
            <div className="mt-3">
              <Button className="w-full" variant="neon" onClick={() => scrollTo('#contact', 'contact')}>
                Hire Me
              </Button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.nav>
  );
}

