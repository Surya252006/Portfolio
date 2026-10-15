import { useEffect, useMemo, useState } from 'react';
import { Menu, X, Download, ArrowUpRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '@/lib/portfolioData';
import clsx from 'clsx';

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActive(ids[i]);
          return;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ids]);

  return active;
}

export function PremiumNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const ids = useMemo(() => navItems.map((n) => n.sectionId), []);
  const active = useActiveSection(ids);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const scrollTo = (sectionId: string) => {
    setOpen(false);
    const el = document.getElementById(sectionId);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-[#090D16]/90 backdrop-blur-md border-b border-border/80 shadow-md py-3'
            : 'bg-transparent py-5'
        )}
      >
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('home');
            }}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-lg"
          >
            <div className="w-10 h-10 rounded-xl bg-card border border-border group-hover:border-primary/50 transition-colors flex items-center justify-center font-display font-bold text-primary text-base shadow-sm">
              S
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-foreground tracking-tight text-base sm:text-lg leading-none">
                Surya S.
              </span>
              <span className="text-[11px] text-primary/90 font-mono tracking-wider mt-0.5">
                AI Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-card/60 border border-border/70 rounded-full px-4 py-1.5 backdrop-blur-md shadow-sm">
            {navItems.map((item) => {
              const isActive = active === item.sectionId;
              return (
                <button
                  key={item.sectionId}
                  onClick={() => scrollTo(item.sectionId)}
                  className={clsx(
                    'relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 focus:outline-none',
                    isActive
                      ? 'text-white bg-primary font-semibold shadow-sm'
                      : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="/resume/Surya_S_AI_Engineer_Resume.pdf"
              download="Surya_S_AI_Engineer_Resume.pdf"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-lg border border-border bg-card/60 hover:bg-secondary text-foreground transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5 text-muted-foreground" />
              Resume
            </a>

            <Button
              variant="default"
              size="sm"
              onClick={() => scrollTo('contact')}
              className="text-xs font-medium"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              className="p-2 rounded-lg border border-border bg-card/80 text-foreground hover:bg-secondary transition-colors focus:outline-none"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Tablet Hamburger Toggle */}
          <button
            className="hidden sm:flex lg:hidden p-2 rounded-lg border border-border bg-card/80 text-foreground hover:bg-secondary transition-colors focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile / Tablet Full-Screen Navigation Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[65px] z-40 bg-[#090D16]/95 backdrop-blur-xl border-t border-border flex flex-col justify-between p-6 lg:hidden overflow-y-auto"
          >
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground px-3 mb-2">
                Navigation
              </div>
              {navItems.map((item) => {
                const isActive = active === item.sectionId;
                return (
                  <button
                    key={item.sectionId}
                    onClick={() => scrollTo(item.sectionId)}
                    className={clsx(
                      'w-full text-left px-4 py-3 rounded-xl font-medium text-base transition-all flex items-center justify-between',
                      isActive
                        ? 'bg-primary text-white font-semibold shadow-sm'
                        : 'text-muted-foreground hover:text-foreground hover:bg-card/70'
                    )}
                  >
                    <span>{item.label}</span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                );
              })}
            </div>

            <div className="pt-6 mt-6 border-t border-border space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <a
                  href="/resume/Surya_S_AI_Engineer_Resume.pdf"
                  download="Surya_S_AI_Engineer_Resume.pdf"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Resume
                </a>

                <Button
                  variant="default"
                  className="w-full py-3 h-auto"
                  onClick={() => scrollTo('contact')}
                >
                  Contact Me
                </Button>
              </div>

              <div className="flex items-center justify-center gap-4 pt-2">
                <a
                  href="https://github.com/Surya252006"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/surya-s-755937267/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="mailto:surya25suresh2006@gmail.com"
                  className="p-2.5 rounded-lg border border-border bg-card text-muted-foreground hover:text-foreground hover:border-primary/50 transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
