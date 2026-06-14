import { motion, useReducedMotion } from 'framer-motion';
import { achievements } from '@/lib/portfolioData';

export function AchievementsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="achievements" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(59,130,246,0.08),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-body tracking-widest uppercase text-text-secondary">Achievements</span>
          </div>
          <h2 className="mt-5 font-display font-bold text-[40px] sm:text-[48px] text-foreground">
            Premium <span className="text-primary">highlights</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {achievements.map((a, idx) => (
            <motion.article
              key={a.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 16 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-7 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)] transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-2xl border border-primary/20 bg-primary/10 flex items-center justify-center">
                  <a.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-foreground">{a.title}</h3>
                  <p className="mt-3 text-text-secondary font-body leading-relaxed">{a.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

