import { Star } from "lucide-react";
import { Section } from "./Section";
import { testimonials } from "@/lib/business";

export function Testimonials() {
  return (
    <Section
      id="reviews"
      eyebrow="Reviews"
      title="What Customers Say"
      intro="Placeholder content: these quotes are sample text and must be replaced with real, collected customer reviews (or a live Google review embed) before launch."
      tone="surface"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-lg border border-border bg-card p-6">
            <div className="flex gap-1" aria-label={`${t.rating} out of 5 stars`}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="size-4 fill-primary text-primary" aria-hidden="true" />
              ))}
            </div>
            <blockquote className="mt-4 text-sm text-muted-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-display text-sm tracking-widest text-steel">
              {t.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
