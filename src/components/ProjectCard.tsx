import type { Project } from '@/lib/portfolioData';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  return (
    <motion.div
      role="button"
      tabIndex={0}
      aria-label={`Open details for ${project.title}`}
      onClick={() => onSelect(project)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(project);
        }
      }}
      className="group relative rounded-2xl border border-border bg-card overflow-hidden focus:outline-none"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.18, ease: 'easeOut' }}
    >
      {/* Focus ring for keyboard navigation */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-primary/60 transition-[box-shadow] group-focus-within:ring-2" />

      <div className="relative overflow-hidden">
        <div className="aspect-[16/9] w-full bg-card">
          <img
            src={project.imageSrc}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.04]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/20 to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          {project.featured ? (
            <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
              <Sparkles className="w-3.5 h-3.5 mr-1" /> Featured
            </Badge>
          ) : null}
          <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20">
            <project.icon className="w-5 h-5 text-primary" />
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="mt-2 text-text-secondary text-sm leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Recruiter-friendly impact line */}
        <div className="mt-4 rounded-xl border border-border bg-background/40 p-3">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-primary" aria-hidden="true" />
            <p className="text-sm text-foreground/90 font-body leading-snug">
              <span className="font-semibold text-primary">Outcome:</span>{' '}
              {project.longDescription}
            </p>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full text-xs font-body font-medium border border-primary/15 bg-primary/10 text-primary/95"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex flex-col sm:flex-row gap-2">
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto"
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
          >
            View Details
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="w-full sm:w-auto border-primary/30 hover:border-primary/50"
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
            }}
          >
            <Github className="w-4 h-4" />
            GitHub
          </Button>
          {project.liveUrl ? (
            <Button
              variant="default"
              size="sm"
              className="w-full sm:w-auto"
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.liveUrl!, '_blank', 'noopener,noreferrer');
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
}

