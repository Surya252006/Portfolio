import { Github, Linkedin, Mail, ChevronUp } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

export function Footer() {
  const reduceMotion = useReducedMotion();

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background/40">
      <div className="container mx-auto px-4 md:px-8 py-10 relative">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[520px] h-[120px] rounded-full bg-primary/10 blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="font-display font-bold text-foreground">Designed and Developed by Surya Suresh</div>
            <div className="mt-2 text-text-secondary font-body text-sm">© {year} • Premium SaaS-inspired portfolio</div>
          </div>

          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: 'https://github.com/Surya252006', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/surya-suresh-755937267/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:surya25suresh2006@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.18 }}
                className="w-11 h-11 rounded-2xl border border-border bg-card/60 inline-flex items-center justify-center hover:bg-secondary/50 transition-colors"
              >
                <Icon className="w-5 h-5 text-text-secondary" />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ y: -2 }}
              transition={{ duration: 0.18 }}
              onClick={() => {
                document.getElementById('home')?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
              }}
              className="w-11 h-11 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center hover:shadow-[0_0_24px_rgba(59,130,246,0.18)] transition-shadow"
              aria-label="Back to top"
            >
              <ChevronUp className="w-5 h-5 text-primary" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}

