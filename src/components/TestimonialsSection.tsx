import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { Button } from './ui/button';

const testimonials = [
  {
    quote:
      'Surya demonstrated exceptional leadership and technical skills while mentoring our team.',
    name: 'Team Mentor Feedback',
    role: 'Design & Engineering Intern Team',
  },
  {
    quote:
      'His ability to combine creativity with technology is outstanding. He consistently delivered thoughtful solutions.',
    name: 'Project Partner',
    role: 'Startup Collaboration',
  },
  {
    quote:
      'Surya is proactive, detail-oriented, and reliable. His AI and full-stack work impressed us from day one.',
    name: 'Technical Lead',
    role: 'Engineering Review',
  },
];

export const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const t = window.setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => window.clearInterval(t);
  }, [isVisible]);

  const t = testimonials[index];

  return (
    <section id="testimonials" ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-1 rounded-full glass text-primary text-sm font-body tracking-widest uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold">
            What Recruiters & <span className="neon-text">Partners</span> Say
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="glass-strong rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="inline-flex items-center gap-3 px-3 py-2 rounded-xl bg-primary/10">
                  <Quote className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm text-primary">Verified feedback</span>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed text-lg md:text-xl mt-5">
                  “{t.quote}”
                </p>
              </div>

              <div className="hidden sm:block">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 grid place-items-center">
                  <Quote className="w-6 h-6 text-primary opacity-90" />
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <div className="font-display text-base font-bold text-foreground">{t.name}</div>
                <div className="font-body text-sm text-muted-foreground">{t.role}</div>
              </div>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  Prev
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIndex((prev) => (prev + 1) % testimonials.length)}
                >
                  Next
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

