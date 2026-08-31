import { createFileRoute, Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { ContactForm } from "@/components/site/ContactForm";
import { business, CTA } from "@/lib/business";
import heroDetailing from "@/assets/hero-detailing.jpg";

const title = `Contact Crown Detailing & Coating | ${business.city}, NC`;
const description = `Call 919-607-2863 or message Crown Detailing & Coating in ${business.city}, NC. Mobile and studio detailing across ${business.areaLine}. We reply within 2 business hours.`;

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <Hero
        priority
        image={heroDetailing}
        alt={`Detailer at work in the ${business.name} studio, available by phone and email`}
        eyebrow="Contact us"
        title="Talk To The Owner Directly"
        subtitle={`Quick question? Call or text. Ready for pricing? Use the full quote form and we'll reply within ${business.responseHours}.`}
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="Get in touch" title="Send A Quick Message">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <ContactForm />
          <div className="space-y-6">
            <ul className="space-y-4">
              <li>
                <a
                  href={business.phoneHref}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-display tracking-widest">Call or text</span>
                    <span className="text-sm text-muted-foreground">{business.phone}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={business.emailHref}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary"
                >
                  <Mail className="size-5 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block font-display tracking-widest">Email</span>
                    <span className="text-sm text-muted-foreground">{business.email}</span>
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 rounded-lg border border-border bg-card p-5">
                <MapPin className="size-5 text-primary" aria-hidden="true" />
                <span>
                  <span className="block font-display tracking-widest">Service area</span>
                  <span className="text-sm text-muted-foreground">{business.areaLine}</span>
                </span>
              </li>
            </ul>
            <div className="flex gap-3">
              <a
                href={business.instagram}
                aria-label={`Crown Detailing & Coating on Instagram, ${business.instagramHandle}`}
                className="rounded-md border border-border bg-card p-3 transition-colors hover:border-primary"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href={business.facebook}
                aria-label="Crown Detailing & Coating on Facebook"
                className="rounded-md border border-border bg-card p-3 transition-colors hover:border-primary"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Need vehicle-specific pricing instead?{" "}
              <Link to="/book-now" className="text-primary underline underline-offset-4">
                Use the full quote form
              </Link>
              .
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
