import type { ReactNode } from "react";

export function Hero({
  image,
  alt,
  eyebrow,
  title,
  subtitle,
  priceAnchor,
  actions,
  priority = false,
}: {
  image: string;
  alt: string;
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  priceAnchor?: string;
  actions?: ReactNode;
  priority?: boolean;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt={alt}
        width={1920}
        height={1080}
        loading={priority ? "eager" : "lazy"}
        className="absolute inset-0 size-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30"
        aria-hidden="true"
      />
      <div className="container-page relative flex min-h-[560px] items-center py-20 sm:min-h-[600px]">
        <div className="max-w-2xl">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">{subtitle}</p>
          )}
          {priceAnchor && (
            <p className="mt-5 inline-block rounded-md border border-border bg-card/80 px-4 py-2 font-display text-lg tracking-wide text-steel">
              {priceAnchor}
            </p>
          )}
          {actions && <div className="mt-8 flex flex-wrap gap-3">{actions}</div>}
        </div>
      </div>
    </section>
  );
}
