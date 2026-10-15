import { Clock, Tag, ArrowUpRight, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

import img1 from '@/assets/images/1.jpeg';
import img2 from '@/assets/images/2.jpeg';
import img3 from '@/assets/images/3.jpeg';

const posts = [
  {
    title: 'Architecting MedPulse AI: Healthcare Triage & Severity Classification',
    description:
      'Designing Python feature vectorization pipelines and clinical decision trees to calculate patient urgency scores and route emergency resources in rural areas.',
    readingTime: '5 min read',
    tags: ['Artificial Intelligence', 'Python', 'Healthcare AI', 'FastAPI'],
    image: img2,
    href: 'https://github.com/Surya252006/medplus-ai',
  },
  {
    title: 'Engineering Machine Learning Telemetry for Soil Health & Crop Yields',
    description:
      'How we ingested real-time IoT sensor telemetry (NPK, moisture, pH) through Scikit-Learn multi-parameter models to hit 91.4% predictive crop recommendations.',
    readingTime: '6 min read',
    tags: ['Machine Learning', 'IoT Telemetry', 'Python', 'TensorFlow'],
    image: img1,
    href: 'https://github.com/Surya252006/smartathon26dsu',
  },
  {
    title: 'Deploying PosterKadai: E-Commerce Architecture on Firebase & WhatsApp',
    description:
      'From design to active production launch: optimizing client-side render loops, Firestore real-time catalogs, and direct WhatsApp checkout integration.',
    readingTime: '4 min read',
    tags: ['Production Web', 'Firebase', 'React', 'Live Platform'],
    image: img3,
    href: 'https://posterkadai-e364b.web.app/',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-10 xl:px-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Engineering Insights
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
            Technical <span className="text-primary">Articles</span> & Case Studies
          </h2>
          <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
            Written case studies, architectural breakdowns, and takeaways from building real software systems.
          </p>
        </div>

        {/* 3-Column Responsive Grid (Expanded for PC displays) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-7xl 2xl:max-w-[1700px] mx-auto">
          {posts.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm overflow-hidden flex flex-col justify-between hover:border-primary/40 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              <div>
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                  <div className="absolute bottom-3 left-3 flex items-center gap-2 text-xs font-mono text-slate-300 bg-slate-950/80 px-2.5 py-1 rounded-md backdrop-blur-md border border-border/80">
                    <Clock className="w-3.5 h-3.5 text-primary" />
                    <span>{p.readingTime}</span>
                  </div>
                </div>

                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="font-display text-base sm:text-lg font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground font-body leading-relaxed line-clamp-3">
                    {p.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[11px] font-mono rounded-md bg-secondary/50 text-slate-300 border border-border/80"
                      >
                        <Tag className="w-3 h-3 text-primary" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6 pt-0">
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl border border-border bg-secondary/40 text-xs font-medium text-foreground hover:bg-secondary hover:border-primary/40 transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-primary" />
                  Read Case Study
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
