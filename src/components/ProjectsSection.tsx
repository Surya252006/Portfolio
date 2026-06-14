import { useMemo, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { projects, type Project, type ProjectCategory } from '@/lib/portfolioData';
import { SectionHeading } from './SectionHeading';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';


const categories: (ProjectCategory | 'All')[] = ['All', 'Web Apps', 'AI Projects', 'Business Projects'];

export function ProjectsSection() {
  const reduceMotion = useReducedMotion();
  const [category, setCategory] = useState<(typeof categories)[number]>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (category === 'All') return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <section id="projects" className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.10),transparent_55%)]" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <SectionHeading
          kicker="Portfolio"
          title={
            <>
              Featured <span className="text-primary">Projects</span>
            </>
          }
          description="Modern cards, fast scanning, and recruiter-ready details. Filter by your focus area."
        />

        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((c) => {
            const isActive = category === c;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={
                  'px-4 py-2 rounded-full border transition-colors text-sm font-body ' +
                  (isActive
                    ? 'border-primary/40 bg-primary/10 text-primary'
                    : 'border-border bg-card/40 text-text-secondary hover:bg-white/5 hover:text-foreground')
                }
                aria-pressed={isActive}
              >
                {c}
              </button>
            );
          })}
        </div>

        <motion.div
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
        >
          {filtered.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={reduceMotion ? undefined : { opacity: 0, y: 12 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <ProjectCard project={p} onSelect={setSelected} />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <ProjectDetailsModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

