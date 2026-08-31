import { createFileRoute } from "@tanstack/react-router";
import { Clock, Quote } from "lucide-react";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business, testimonials } from "@/lib/business";
import heroHome from "@/assets/hero-home.jpg";

const title = `Get a Free Detailing Quote in ${business.city}, NC | ${business.name}`;
const description = `Request a free auto detailing or ceramic coating quote in ${business.areaLine}. Tell us your vehicle and service, and the owner replies within 2 business hours.`;

export const Route = createFileRoute("/book-now")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/book-now" },
    ],
    links: [{ rel: "canonical", href: "/book-now" }],
  }),
  component: BookNow,
});

function BookNow() {
  const featured = testimonials[0];

  return (
    <>
      <Hero
        priority
        image={heroHome}
        alt={`Freshly detailed and ceramic-coated vehicle at ${business.name} in ${business.city}, NC`}
        eyebrow="Free quote request"
        title="Get a Free Quote"
        subtitle={`Trust ${business.name} for all your car detailing needs — hand-finished work, honest pricing, and one owner accountable for every vehicle.`}
      />

      <Section
        eyebrow="Request"
        title="Tell Us About Your Vehicle"
        intro="This is a quote request, not a confirmed appointment. We'll reply with pricing and available times."
      >
        <div className="grid items-start gap-10 lg:grid-cols-[1.5fr_1fr]">
          <QuoteForm id="book-now-quote" />
          <aside className="space-y-6">
            <div className="rounded-lg border border-border bg-card p-6">
              <Clock className="size-6 text-primary" aria-hidden="true" />
              <h2 className="mt-4 text-lg">We respond within {business.responseHours}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Requests go straight to {business.owner}. If you&apos;d rather talk it through, call{" "}
                <a
                  href={business.phoneHref}
                  className="text-primary underline underline-offset-4"
                >
                  {business.phone}
                </a>
                .
              </p>
            </div>
            <figure className="rounded-lg border border-border bg-card p-6">
              <Quote className="size-6 text-primary" aria-hidden="true" />
              <blockquote className="mt-4 text-sm text-muted-foreground">
                &ldquo;{featured.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-3 font-display text-xs uppercase tracking-widest text-steel">
                {featured.name}
              </figcaption>
            </figure>
            <p className="text-xs text-muted-foreground">
              Testimonial is placeholder content pending real customer reviews.
            </p>
          </aside>
        </div>
      </Section>
    </>
  );
}
