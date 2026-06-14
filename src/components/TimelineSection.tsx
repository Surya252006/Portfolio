import { motion, useReducedMotion } from 'framer-motion';
import { timelineItems } from '@/lib/portfolioData';

export function TimelineSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(59,130,246,0.08),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-body tracking-widest uppercase text-text-secondary">Experience</span>
          </div>
          <h2 className="mt-5 font-display font-bold text-[40px] sm:text-[48px] text-foreground">
            Real-world <span className="text-primary">impact</span>
          </h2>
          <p className="mt-4 text-text-secondary font-body max-w-2xl mx-auto">Vertical timeline with recruiter-friendly responsibilities and outcomes.</p>
        </div>


        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/10 to-transparent -translate-x-1/2" />

          <div className="space-y-10">
            {timelineItems.map((item, idx) => {
              const leftAligned = idx % 2 === 0;
              return (
                <motion.article
                  key={item.id}
                  className="relative flex gap-8 md:gap-0 items-start"
                  initial={reduceMotion ? undefined : { opacity: 0, y: 14 }}
                  whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <div className={leftAligned ? 'md:flex-1 md:pr-12 text-right' : 'md:flex-1 md:pl-12'}>
                    <div
                      className={
                        'rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-7 hover:shadow-[0_0_0_1px_rgba(59,130,246,0.18)] transition-shadow ' +
                        (item.highlight ? 'ring-1 ring-primary/30' : '')
                      }
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-secondary/30 text-text-secondary text-xs font-mono">
                          {item.date}
                        </span>
                      </div>

                      <h3 className="mt-4 font-display text-xl md:text-2xl font-bold text-foreground">{item.title}</h3>

                      <div className="mt-4">
                        <div className="text-sm font-body text-text-secondary">Responsibilities</div>
                        <ul className="mt-2 space-y-2 text-text-secondary font-body text-sm">
                          {item.responsibilities.map((r) => (
                            <li key={r} className="flex items-start gap-3">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary" />
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-5">
                        <div className="text-sm font-body text-text-secondary">Achievements</div>
                        <ul className="mt-2 space-y-2 text-text-secondary font-body text-sm">
                          {item.achievements.map((a) => (
                            <li key={a} className="flex items-start gap-3">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-success" />
                              <span>{a}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2">
                    <div className="w-12 h-12 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center hover:shadow-[0_0_28px_rgba(59,130,246,0.25)] transition-shadow">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

