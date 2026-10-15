import { motion, useReducedMotion } from 'framer-motion';
import { timelineItems } from '@/lib/portfolioData';
import { CheckCircle2, MapPin } from 'lucide-react';

export function TimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Career & Education
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Experience & <span className="text-primary">Background</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Hands-on technology leadership, software engineering projects, and foundational academic coursework.
          </p>
        </div>

        {/* Timeline Stack (Expanded for PC displays) */}
        <div className="w-full max-w-5xl 2xl:max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {timelineItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.id}
                initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className={`relative rounded-2xl border p-5 sm:p-7 bg-card/80 backdrop-blur-sm transition-all duration-300 shadow-sm ${
                  item.highlight
                    ? 'border-primary/50 shadow-md'
                    : 'border-border hover:border-primary/30'
                }`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-border/70 pb-4">
                  <div className="flex items-start gap-3.5">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/20 text-primary shrink-0 mt-0.5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-foreground">
                        {item.role}
                      </h3>
                      <div className="text-xs sm:text-sm text-primary font-medium mt-0.5">
                        {item.organization}
                      </div>
                      <div className="text-xs text-muted-foreground font-mono flex items-center gap-1.5 mt-1">
                        <MapPin className="w-3 h-3" /> {item.location}
                      </div>
                    </div>
                  </div>

                  <span className="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-mono font-medium border border-border bg-secondary/50 text-foreground/80">
                    {item.date}
                  </span>
                </div>

                <div className="pt-4 space-y-4">
                  <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed font-body">
                    {item.summary}
                  </p>

                  <div className="space-y-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                      Key Deliverables & Responsibilities
                    </div>
                    <ul className="space-y-1.5">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li key={rIdx} className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0 mt-2" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                      Measurable Achievements
                    </div>
                    <ul className="space-y-1.5">
                      {item.achievements.map((ach, aIdx) => (
                        <li key={aIdx} className="text-xs sm:text-sm text-slate-200 flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/70">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono border border-border/80 bg-secondary/40 text-muted-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
