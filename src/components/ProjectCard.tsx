import type { Project } from '@/lib/portfolioData';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight, CheckCircle2 } from 'lucide-react';

export function ProjectCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  const Icon = project.icon;

  const statusColor: Record<string, string> = {
    'Live Production': 'bg-emerald-950/80 border-emerald-500/40 text-emerald-300',
    'Hackathon Project': 'bg-amber-950/80 border-amber-500/40 text-amber-300',
    'Project Expo': 'bg-cyan-950/80 border-cyan-500/40 text-cyan-300',
    'Completed': 'bg-blue-950/80 border-blue-500/40 text-blue-300',
  };
  const currentStatusClass = statusColor[project.status] || 'bg-slate-900 border-border text-slate-300';

  return (
    <div
      role="article"
      className="group h-full flex flex-col rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer"
      onClick={() => onSelect(project)}
    >
      {/* Media & Header Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 border-b border-border/80">
        <img
          src={project.imageSrc}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

        {/* Status & Category Badge */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium border backdrop-blur-md ${currentStatusClass}`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-current" />
            {project.status}
          </span>

          <div className="w-8 h-8 rounded-lg bg-slate-900/80 border border-border/80 backdrop-blur-md flex items-center justify-center text-primary">
            <Icon className="w-4 h-4" />
          </div>
        </div>

        {/* Project Title overlay on hover/preview */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="text-xs font-mono text-primary font-medium tracking-wide">
            {project.category}
          </div>
          <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-primary transition-colors tracking-tight leading-snug">
            {project.title}
          </h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Key Impact Metric Box */}
          <div className="p-3 rounded-xl bg-secondary/30 border border-border/70 text-xs text-foreground/90 flex items-start gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-foreground">Impact: </span>
              <span className="text-muted-foreground">{project.impactMetric}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="space-y-4 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 rounded-md text-[11px] font-medium font-mono border border-border/80 bg-secondary/50 text-slate-300"
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="px-2 py-0.5 rounded-md text-[11px] font-mono text-muted-foreground">
                +{project.tags.length - 4} more
              </span>
            )}
          </div>

          {/* Action Button Links */}
          <div className="pt-2 border-t border-border/70 flex items-center gap-2">
            <Button
              variant="default"
              size="sm"
              className="flex-1 text-xs font-medium"
              onClick={(e) => {
                e.stopPropagation();
                onSelect(project);
              }}
            >
              Overview & Architecture
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(project.githubUrl, '_blank', 'noopener,noreferrer');
              }}
              aria-label={`View ${project.title} on GitHub`}
              className="p-2 rounded-lg border border-border bg-card hover:bg-secondary hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
            </button>

            {project.liveUrl && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`View live demo for ${project.title}`}
                className="p-2 rounded-lg border border-border bg-card hover:bg-secondary hover:text-primary transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
