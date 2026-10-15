import { motion, useReducedMotion } from 'framer-motion';
import { achievements } from '@/lib/portfolioData';
import { CheckCircle2 } from 'lucide-react';

export function AchievementsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(59,130,246,0.05),transparent_55%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Milestones & Honors
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Key <span className="text-primary">Achievements</span> & Credentials
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Highlights of academic qualifications, live production deployments, and continuous technical learning.
          </p>
        </div>

        {/* Responsive Grid (Expansive 4-column layout on PC) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl 2xl:max-w-[1700px] mx-auto">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-6 sm:p-7 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                        {item.title}
                      </h3>
                      <div className="text-xs text-primary font-mono mt-0.5">
                        {item.issuer}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-border/70 flex items-center gap-2 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.impact}</span>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
