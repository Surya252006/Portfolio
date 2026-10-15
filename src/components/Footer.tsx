import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { navItems } from '@/lib/portfolioData';

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer className="border-t border-border bg-[#090D16] py-12">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-border/70">
          {/* Brand */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-card border border-border flex items-center justify-center font-display font-bold text-primary text-sm">
                S
              </div>
              <span className="font-display font-bold text-foreground text-lg tracking-tight">
                Surya Suresh
              </span>
            </div>
            <p className="text-xs text-muted-foreground font-body max-w-sm">
              Artificial Intelligence Engineer & Machine Learning Builder based in India.
            </p>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-muted-foreground">
            {navItems.map((item) => (
              <button
                key={item.sectionId}
                onClick={() => scrollTo(item.sectionId)}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Social Links & Back to Top */}
          <div className="flex items-center gap-3">
            {[
              { Icon: Github, href: 'https://github.com/Surya252006', label: 'GitHub' },
              { Icon: Linkedin, href: 'https://www.linkedin.com/in/surya-suresh-755937267/', label: 'LinkedIn' },
              { Icon: Mail, href: 'mailto:surya25suresh2006@gmail.com', label: 'Email' },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}

            <button
              onClick={() => scrollTo('home')}
              className="w-9 h-9 rounded-lg border border-border bg-card/60 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono text-center sm:text-left">
          <div>
            © {year} Surya Suresh. All rights reserved.
          </div>
          <div>
            Handcrafted with React, TypeScript & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
