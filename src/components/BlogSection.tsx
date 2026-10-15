import { Clock, Tag, ArrowUpRight, BookOpen } from 'lucide-react';
import { Button } from './ui/button';

import img1 from '@/assets/images/1.jpeg';
import img2 from '@/assets/images/2.jpeg';
import img3 from '@/assets/images/3.jpeg';

const posts = [
  {
    title: 'Building KisanConnect: AgriTech Marketplace with Atomic MongoDB Pipelines',
    description:
      'Engineering multi-tier role-based access control (RBAC), APMC mandi price trend benchmarking, and race-condition-free inventory decrementing using atomic MongoDB operators ($gte, $inc).',
    readingTime: '5 min read',
    tags: ['Full Stack', 'MongoDB Atlas', 'Node.js', 'React 18'],
    image: img2,
    href: 'https://kisanconnect-2267e.web.app',
  },
  {
    title: 'Engineering Sensor Telemetry for Precision Agriculture at Barnstromz 2K26',
    description:
      'Ingesting physical IoT soil telemetry (NPK, moisture, pH) via ESP32 microcontrollers through Python data processing pipelines to optimize crop variety selection and nutrient dosage.',
    readingTime: '6 min read',
    tags: ['IoT Hardware', 'ESP32', 'Python', 'Sensors'],
    image: img1,
    href: 'https://github.com/Surya252006',
  },
  {
    title: 'Deploying PosterKadai: E-Commerce Architecture on Firebase & WhatsApp',
    description:
      'From design to active production launch: optimizing client-side render loops, Firestore real-time catalogs, and direct WhatsApp checkout integration for frictionless customer orders.',
    readingTime: '4 min read',
    tags: ['E-Commerce', 'Firebase Firestore', 'React 18', 'Production'],
    image: img3,
    href: 'https://posterkadai-e364b.web.app/',
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(59,130,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-5xl mx-auto mb-16">
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

        {/* 3-Column Responsive Grid (Expansive layout on PC displays) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full mx-auto">
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
