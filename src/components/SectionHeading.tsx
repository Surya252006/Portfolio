import type { ReactNode } from 'react';

export function SectionHeading({
  kicker,
  title,
  highlight,
  description,
}: {
  kicker: string;
  title: ReactNode;
  highlight?: ReactNode;
  description?: string;
}) {
  return (
    <div className="text-center max-w-3xl mx-auto mb-16">
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-border bg-card/60 text-xs font-mono uppercase tracking-widest text-primary mb-4">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span>{kicker}</span>
      </div>

      <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground tracking-tight">
        {title}{' '}
        {highlight ? (
          <span className="text-primary">{highlight}</span>
        ) : null}
      </h2>

      {description ? (
        <p className="mt-3 text-muted-foreground text-sm sm:text-base font-body leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  );
}
