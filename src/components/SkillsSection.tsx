import { motion } from 'framer-motion';
import { skillsCategories } from '@/lib/portfolioData';

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Technical Proficiency
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Skills & <span className="text-primary">Technology Stack</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Core technologies and engineering proficiencies I utilize to design, build, and deploy production software.
          </p>
        </div>

        {/* Skills Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillsCategories.map((category, catIdx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.4, delay: catIdx * 0.05 }}
                className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-5 sm:p-6 shadow-sm hover:border-primary/40 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5 pb-3 border-b border-border/70">
                    <div className="p-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-2.5">
                    {category.items.map((skill) => (
                      <div
                        key={skill.name}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-secondary/30 hover:bg-secondary/50 border border-border/50 transition-colors gap-3"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          <span className="text-xs sm:text-sm font-medium text-foreground truncate">
                            {skill.name}
                          </span>
                        </div>
                        <span
                          className={`text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded-md border font-semibold shrink-0 ${
                            skill.level === 'Advanced'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20'
                              : 'bg-primary/10 text-primary border-primary/20'
                          }`}
                        >
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
