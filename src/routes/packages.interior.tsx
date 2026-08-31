import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { WhyCrown } from "@/components/site/WhyCrown";
import { business, CTA } from "@/lib/business";
import cardInterior from "@/assets/card-interior.jpg";
import heroDetailing from "@/assets/hero-detailing.jpg";
import beforeAfterInterior from "@/assets/beforeafter-interior.jpg";

const title = `Interior Detailing Package in ${business.city}, NC | ${business.name}`;
const description = `Interior Package from $89: full vacuum, steam cleaning, extraction, leather care, and UV-safe dressing in ${business.areaLine}. Request a free quote.`;

export const Route = createFileRoute("/packages/interior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/packages/interior" },
    ],
    links: [{ rel: "canonical", href: "/packages/interior" }],
  }),
  component: InteriorPackage,
});

const included = [
  "Full vacuum of carpets, mats, seats, and trunk",
  "Steam cleaning of vents, seams, and console",
  "Hot-water extraction on fabric seats and carpet",
  "Leather cleaned and conditioned",
  "Interior glass cleaned streak-free",
  "UV-safe dressing on dash, door cards, and trim",
  "Door jambs wiped down",
  "Odor neutralized (not masked)",
];

function InteriorPackage() {
  return (
    <>
      <Hero
        priority
        image={heroDetailing}
        alt="Crown Detailing and Coating studio bay where interior detailing packages are performed"
        eyebrow="Interior Package"
        title="Interior Detailing Package"
        subtitle="Everything you touch, breathe, and sit on — cleaned by hand with steam and extraction rather than a quick wipe-down."
        priceAnchor="From $89"
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="Included" title="What You Get">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <ul className="grid gap-3">
            {included.map((i) => (
              <li
                key={i}
                className="rounded-md border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                {i}
              </li>
            ))}
          </ul>
          <div className="grid gap-6">
            <img
              src={beforeAfterInterior}
              alt="Before and after interior detailing: stained dusty cabin on the left, spotless cleaned seats and console on the right"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover"
            />
            <img
              src={cardInterior}
              alt="Interior detailing in progress: steam cleaning black leather seats and dashboard"
              width={1024}
              height={1280}
              loading="lazy"
              className="aspect-4/5 w-full rounded-lg border border-border object-cover"
            />
          </div>
        </div>
      </Section>

      <WhyCrown variant="compact" title="Why Book Your Interior With Crown" />

      <Section eyebrow="Next step" title="Ready For A Clean Cabin?">
        <p className="max-w-2xl text-muted-foreground">
          Send your vehicle details and we&apos;ll confirm exact pricing within{" "}
          {business.responseHours}. Pet hair or heavy staining? Mention it in the notes so the quote
          is accurate the first time.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/packages/exclusive">Compare With Exclusive</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
