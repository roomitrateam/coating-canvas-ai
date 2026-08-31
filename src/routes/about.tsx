import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { TrustBlock } from "@/components/site/TrustBlock";
import { business, CTA } from "@/lib/business";
import heroHome from "@/assets/hero-home.jpg";
import owner from "@/assets/owner.jpg";

const title = `About ${business.owner} | ${business.name} — ${business.city}, NC`;
const description = `Meet Raj Rooprai, owner of Crown Detailing & Coating in ${business.city}, NC. Certified System X installer with 5+ years hand-detailing vehicles across the Triangle.`;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <Hero
        priority
        image={heroHome}
        alt={`Inside the ${business.name} detailing studio in ${business.city}, NC`}
        eyebrow="About us"
        title="One Owner. Every Vehicle."
        subtitle={`${business.name} is owner-operated by ${business.owner} — the person who quotes your car is the person who details it.`}
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="The owner" title="Meet Raj Rooprai">
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.2fr]">
          <img
            src={owner}
            alt={`${business.owner}, owner and certified System X installer, standing beside a coated black vehicle in the Crown Detailing & Coating studio`}
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-4/5 w-full rounded-lg border border-border object-cover"
          />
          <div>
            <blockquote className="border-l-2 border-primary pl-5 text-lg text-foreground">
              &ldquo;I started doing this in my own driveway because I couldn&apos;t find anyone who
              would treat someone else&apos;s car the way I treat mine. That hasn&apos;t changed —
              I&apos;d rather take one more hour on a panel than hand back work I&apos;m not proud
              of.&rdquo;
              <footer className="mt-3 font-display text-xs uppercase tracking-widest text-muted-foreground">
                {business.owner}, owner
              </footer>
            </blockquote>
            <div className="mt-8 space-y-4 text-muted-foreground">
              <p>
                Crown Detailing &amp; Coating was founded in [insert founding year] and has since
                hand-detailed [insert number] vehicles across {business.areaLine}. What started as
                weekend work grew into a full studio setup because customers kept coming back — and
                sending their families.
              </p>
              <p>
                The studio runs on equipment chosen for control, not speed: dual-action and rotary
                polishers, a hot-water extractor, a vapor steamer, dedicated wheel and interior
                brushes, LED swirl-finder inspection lighting, and a filtered water rinse for
                spot-free drying.
              </p>
              <p>
                {business.owner} is a certified System X ceramic coating installer with 5+ years of
                hands-on experience, fully insured, and personally present on every job. No rotating
                crew, no subcontractors, no tunnel washes.
              </p>
              <p className="text-xs">
                Bracketed details (founding year, vehicle count) to be confirmed with the owner
                before publishing.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <TrustBlock />

      <Section eyebrow="Next step" title="Let's Talk About Your Vehicle" tone="surface">
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/gallery">See Before &amp; After Work</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
