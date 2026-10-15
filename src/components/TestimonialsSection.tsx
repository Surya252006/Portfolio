import { useState } from 'react';
import { Quote, ChevronLeft, ChevronRight, UserCheck } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote:
      'Surya demonstrated outstanding technical initiative and ownership. His ability to translate complex product requirements into clean, responsive web applications made a significant difference to our delivery timeline.',
    name: 'Academic Project Lead',
    role: 'Engineering Faculty & Project Evaluator',
    tag: 'Technical Excellence',
  },
  {
    quote:
      'Surya brought great clarity to our day-to-day digital operations. He automated tracking workflows and built tools that our team uses reliably every day. Highly dependable and proactive.',
    name: 'Business Operations Director',
    role: 'Enterprise Operations Management',
    tag: 'Systems & Operations',
  },
  {
    quote:
      'Working alongside Surya on full-stack web and ML projects has been fantastic. He writes clean, organized code, solves tough technical bugs quickly, and always prioritizes the end-user experience.',
    name: 'Peer Software Developer',
    role: 'Collaborator & Co-Developer',
    tag: 'Collaboration',
  },
];

export const TestimonialsSection = () => {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  return (
    <section id="testimonials" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Endorsements
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Peer & Mentor <span className="text-primary">Recommendations</span>
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Feedback from team members, project leads, and colleagues on collaboration and code quality.
          </p>
        </div>

        {/* Testimonial Showcase Card */}
        <div className="max-w-3xl mx-auto">
          <div className="rounded-2xl border border-border bg-card/90 backdrop-blur-sm p-6 sm:p-10 shadow-lg relative">
            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono bg-primary/10 border border-primary/20 text-primary">
                <UserCheck className="w-3.5 h-3.5" />
                {current.tag}
              </span>

              <div className="p-2 rounded-xl bg-secondary/50 text-muted-foreground">
                <Quote className="w-5 h-5" />
              </div>
            </div>

            <p className="font-body text-foreground/90 text-base sm:text-lg lg:text-xl leading-relaxed italic mb-8">
              “{current.quote}”
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-border/70">
              <div>
                <h3 className="font-display text-base sm:text-lg font-bold text-foreground">
                  {current.name}
                </h3>
                <div className="text-xs sm:text-sm text-muted-foreground font-mono mt-0.5">
                  {current.role}
                </div>
              </div>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="p-2.5 rounded-xl border border-border bg-secondary/40 text-foreground hover:bg-secondary hover:border-primary/40 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-xs font-mono text-muted-foreground px-2">
                  {index + 1} / {testimonials.length}
                </span>
                <button
                  onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                  className="p-2.5 rounded-xl border border-border bg-secondary/40 text-foreground hover:bg-secondary hover:border-primary/40 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
