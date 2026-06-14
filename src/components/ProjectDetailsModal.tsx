import type { Project } from '@/lib/portfolioData';
import { motion } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

export function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  if (!project) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      <motion.div
        className="relative w-full max-w-3xl rounded-2xl border border-border bg-background overflow-hidden"
        initial={{ y: 18, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 14, scale: 0.98 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-60">
          <img src={project.imageSrc} alt={project.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-2">
            {project.featured ? (
              <Badge variant="outline" className="border-primary/40 text-primary bg-primary/10">
                Featured
              </Badge>
            ) : null}
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-primary/10 border border-primary/20">
              <project.icon className="w-5 h-5 text-primary" />
            </div>
          </div>

          <button
            className="absolute top-4 right-4 w-10 h-10 rounded-xl border border-border bg-secondary/20 hover:bg-secondary/40 transition-colors flex items-center justify-center"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{project.title}</h3>
              <p className="mt-3 text-text-secondary leading-relaxed">{project.longDescription}</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-full text-xs font-body font-medium border border-primary/20 bg-primary/10 text-primary/90"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col sm:flex-row gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
            >
              <Github className="w-4 h-4" />
              GitHub
            </Button>
            {project.liveUrl ? (
              <Button
                variant="default"
                size="sm"
                onClick={() => window.open(project.liveUrl!, '_blank', 'noopener,noreferrer')}
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </Button>
            ) : null}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

