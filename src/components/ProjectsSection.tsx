import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project, type ProjectCategory } from '@/lib/portfolioData';
import { ProjectCard } from './ProjectCard';
import { ProjectDetailsModal } from './ProjectDetailsModal';

const categories: ProjectCategory[] = ['All', 'Artificial Intelligence', 'Machine Learning & IoT', 'Full Stack & Web'];

export function ProjectsSection() {
  const [category, setCategory] = useState<ProjectCategory>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = useMemo(() => {
    if (category === 'All') return projects;
    return projects.filter((p) => p.category === category);
  }, [category]);

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.06),transparent_50%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            GitHub Repositories & Deployments
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Featured <span className="text-primary">AI & Systems</span> Projects
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Directly from my GitHub repositories. Explore AI healthcare triage, ML IoT telemetry, and live production platforms with source code and demos.
          </p>
        </div>

        {/* Filter Pills with Mobile Touch Swipe */}
        <div className="flex items-center gap-2 mb-12 overflow-x-auto pb-3 sm:pb-0 scrollbar-none justify-start sm:justify-center px-1">
          {categories.map((c) => {
            const isActive = category === c;
            const count = c === 'All' ? projects.length : projects.filter((p) => p.category === c).length;
            return (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 active:scale-95 ${
                  isActive
                    ? 'bg-primary text-white shadow-md shadow-primary/25'
                    : 'bg-card/70 border border-border text-muted-foreground hover:text-foreground hover:bg-secondary/60'
                }`}
                aria-pressed={isActive}
              >
                <span>{c}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-md font-mono ${
                    isActive ? 'bg-white/20 text-white' : 'bg-secondary text-muted-foreground'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filtered.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <ProjectCard project={project} onSelect={setSelected} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Details Modal */}
      <ProjectDetailsModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
