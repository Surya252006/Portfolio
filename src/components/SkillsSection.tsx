import { motion } from 'framer-motion';
import { skillsCategories } from '@/lib/portfolioData';

function SkillCard({ name, level, icon }: { name: string; level: number; icon: string }) {
  return (
    <motion.div
      className="rounded-xl border border-border bg-secondary/30 backdrop-blur p-4 hover:shadow-[0_0_24px_rgba(59,130,246,0.18)] transition-shadow"
      whileHover={{ y: -2 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl border border-primary/20 bg-primary/10 flex items-center justify-center">
          <span className="text-lg" aria-hidden>
            {icon}
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="font-body font-medium text-foreground text-sm">{name}</div>
            <div className="font-mono text-xs text-primary">{level}%</div>
          </div>
          <div className="mt-3 h-2 rounded-full bg-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${level}%`, boxShadow: '0 0 18px rgba(59,130,246,0.35)' }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(139,92,246,0.10),transparent_60%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span className="text-xs font-body tracking-widest uppercase text-text-secondary">Skills</span>
          </div>
          <h2 className="mt-5 font-display font-bold text-[40px] sm:text-[48px] text-foreground">
            Built with <span className="text-primary">modern</span> technologies
          </h2>
          <p className="mt-4 text-text-secondary font-body max-w-2xl mx-auto">Recruiter-friendly hierarchy with hover lift and subtle glow.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {skillsCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: catIdx * 0.03 }}
              className="rounded-2xl border border-border bg-card/60 backdrop-blur p-6"
            >
              <h3 className="font-display text-xl font-bold text-foreground">{cat.title}</h3>
              <div className="mt-5 grid sm:grid-cols-2 gap-4">
                {cat.items.map((s) => (
                  <SkillCard key={s.name} name={s.name} level={s.level} icon={typeof s.icon === 'string' ? s.icon : '✨'} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

