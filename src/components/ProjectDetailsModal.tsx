import { useEffect } from 'react';
import type { Project } from '@/lib/portfolioData';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, CheckCircle2, Layers, Cpu, ShieldCheck } from 'lucide-react';
import { Button } from './ui/button';

export function ProjectDetailsModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const Icon = project.icon;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          onClick={onClose}
        />

        {/* Modal Content Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="relative w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden z-10 my-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image Frame */}
          <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full overflow-hidden bg-slate-900 shrink-0">
            <img
              src={project.imageSrc}
              alt={project.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 p-2 rounded-xl bg-slate-900/80 border border-border/80 text-muted-foreground hover:text-white hover:bg-slate-800 transition-colors shadow-sm"
              aria-label="Close details modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Badges in modal banner */}
            <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
              <div>
                <span className="text-xs font-mono text-primary font-medium tracking-wide">
                  {project.category}
                </span>
                <h2
                  id="modal-project-title"
                  className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight"
                >
                  {project.title}
                </h2>
              </div>

              <span className="px-2.5 py-1 rounded-md text-xs font-medium border border-border/80 bg-slate-900/80 text-slate-300">
                {project.status}
              </span>
            </div>
          </div>

          {/* Scrollable Body Content */}
          <div className="p-5 sm:p-7 overflow-y-auto space-y-6">
            {/* Tagline & Overview */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider">
                System Overview
              </h3>
              <p className="text-sm sm:text-base text-foreground/90 font-body leading-relaxed">
                {project.longDescription}
              </p>
            </div>

            {/* Problem Statement */}
            <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold">
                Problem Statement
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problemStatement}
              </p>
            </div>

            {/* My Specific Contribution */}
            <div className="p-4 rounded-xl border border-primary/20 bg-primary/5 space-y-1.5">
              <div className="text-xs font-mono uppercase tracking-wider text-primary font-semibold">
                Surya's Engineering Contribution
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Technical Architecture & Highlights */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono text-primary uppercase tracking-wider flex items-center gap-2">
                <Layers className="w-4 h-4" /> Implemented Features & Architecture
              </h3>
              <div className="space-y-2">
                {project.architecture.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-border/70 bg-secondary/30 text-xs sm:text-sm text-slate-300 flex items-start gap-2.5"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="p-4 rounded-xl border border-border/80 bg-card/60 flex items-start gap-3">
              <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20 shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono text-muted-foreground uppercase">
                  Measured Outcome & Impact
                </div>
                <div className="text-sm font-semibold text-foreground mt-0.5">
                  {project.impactMetric}
                </div>
              </div>
            </div>

            {/* Technologies Applied */}
            <div className="space-y-2">
              <h3 className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                Technologies & Tools Applied
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium border border-border bg-secondary/60 text-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Fixed Modal Action Footer */}
          <div className="p-4 sm:p-5 border-t border-border bg-card/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <div className="text-xs text-muted-foreground font-mono hidden sm:block">
              {project.githubUrl.replace('https://', '')}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 sm:flex-initial"
                onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
              >
                <Github className="w-4 h-4" />
                Source Code
              </Button>

              {project.liveUrl && (
                <Button
                  variant="default"
                  size="sm"
                  className="flex-1 sm:flex-initial"
                  onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink className="w-4 h-4" />
                  Launch Live Demo
                </Button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
