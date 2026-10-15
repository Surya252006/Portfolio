import { motion, useReducedMotion } from 'framer-motion';
import { achievements } from '@/lib/portfolioData';
import { CheckCircle2, ExternalLink, Trophy } from 'lucide-react';

export function AchievementsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.05),transparent_55%)] pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Milestones & Honors
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Key <span className="text-primary">Achievements</span> & Credentials
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Highlights of collegiate hackathon victories, academic qualifications, and verified engineering milestones.
          </p>
        </div>

        {/* Responsive Grid (Expansive 4-Column Layout on PC, 2x2 on Tablet, 1-Col on Mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 w-full mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`rounded-2xl border backdrop-blur-sm p-6 sm:p-7 shadow-sm transition-all duration-300 flex flex-col justify-between space-y-4 ${
                  item.highlight
                    ? 'border-amber-500/50 bg-card/90 shadow-lg shadow-amber-500/10 ring-1 ring-amber-500/30'
                    : 'border-border bg-card/80 hover:border-primary/40'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`p-2.5 rounded-xl border shrink-0 ${
                          item.highlight
                            ? 'bg-amber-500/15 border-amber-500/30 text-amber-400'
                            : 'bg-primary/10 border-primary/20 text-primary'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-base sm:text-lg font-bold text-foreground leading-snug">
                          {item.title}
                        </h3>
                        <div
                          className={`text-xs font-mono mt-0.5 ${
                            item.highlight ? 'text-amber-400 font-semibold' : 'text-primary'
                          }`}
                        >
                          {item.issuer}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="space-y-2 pt-3 border-t border-border/70">
                  <div className="flex items-center gap-2 text-xs text-slate-200">
                    <CheckCircle2
                      className={`w-4 h-4 shrink-0 ${
                        item.highlight ? 'text-amber-400' : 'text-emerald-400'
                      }`}
                    />
                    <span className={item.highlight ? 'font-semibold text-amber-300' : ''}>
                      {item.impact}
                    </span>
                  </div>

                  {item.credentialUrl && (
                    <a
                      href={item.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-primary hover:text-primary/80 transition-colors pt-1"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>View Announcement Post</span>
                    </a>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
