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
    <div className="text-center mb-16">
      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-border bg-secondary/40 backdrop-blur">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        <span className="text-xs font-body tracking-widest uppercase text-text-secondary">{kicker}</span>
      </div>

      <h2 className="mt-5 font-display font-bold text-[40px] leading-tight sm:text-[48px] text-foreground">
        {title}{' '}
        {highlight ? (
          <span className="text-primary">{highlight}</span>
        ) : null}
      </h2>

      {description ? (
        <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-[16px] leading-relaxed font-body">
          {description}
        </p>
      ) : null}
    </div>
  );
}

