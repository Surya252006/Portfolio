import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Clock, Tag } from 'lucide-react';
import { Button } from './ui/button';

import img1 from '@/assets/images/1.jpeg';
import img2 from '@/assets/images/2.jpeg';
import img3 from '@/assets/images/3.jpeg';

const posts = [
  {
    title: 'Building KisanConnect: Empowering Farmers Through Technology',
    description:
      'A deep dive into architecture, APIs, and the product decisions behind smart agriculture.',
    readingTime: '8 min read',
    tags: ['Agriculture', 'Full Stack', 'APIs'],
    image: img1,
    href: '#',
  },
  {
    title: 'My Journey into Artificial Intelligence',
    description:
      'How I learned, what I built, and why AI matters in real-world applications.',
    readingTime: '6 min read',
    tags: ['AI/ML', 'Prompt Engineering', 'Projects'],
    image: img2,
    href: '#',
  },
  {
    title: 'How I Started PosterKadai',
    description:
      'From idea to e-commerce: building a scalable workflow with a focus on user value.',
    readingTime: '5 min read',
    tags: ['Startup', 'E-commerce', 'Design'],
    image: img3,
    href: '#',
  },
];

export const BlogSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="blog" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-primary text-sm font-body tracking-widest uppercase mb-4">
            Blog
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            Featured <span className="neon-text">Articles</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((p, idx) => (
            <div
              key={p.title}
              className={`glass rounded-2xl overflow-hidden transition-all duration-700 hover:neon-border ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/30 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{p.readingTime}</span>
                </div>

                <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed text-sm mb-4 line-clamp-3">
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 text-xs font-body font-medium rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      <Tag className="w-3.5 h-3.5" />
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center gap-2"
                  onClick={() => window.open(p.href, '_blank')}
                >
                  Read More
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

