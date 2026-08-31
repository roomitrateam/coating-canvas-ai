import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { WhyCrown } from "@/components/site/WhyCrown";
import { business, CTA } from "@/lib/business";
import cardExclusive from "@/assets/card-exclusive.jpg";

const title = `Exclusive Full Detail Package in ${business.city}, NC | ${business.name}`;
const description = `Exclusive Package from $159: our full interior and exterior detail in one visit, by hand, in ${business.areaLine}. Request a free quote from the owner.`;

export const Route = createFileRoute("/packages/exclusive")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/packages/exclusive" },
    ],
    links: [{ rel: "canonical", href: "/packages/exclusive" }],
  }),
  component: ExclusivePackage,
});

const interiorItems = [
  "Full vacuum of carpets, mats, seats, and trunk",
  "Steam cleaning of vents, seams, and console",
  "Hot-water extraction on fabric, leather cleaned and conditioned",
  "UV-safe dressing on dash, door cards, and trim",
  "Interior glass cleaned streak-free",
];

const exteriorItems = [
  "Pre-rinse, foam, and two-bucket hand wash",
  "Iron and tar decontamination",
  "Wheels, barrels, wheel wells, and tire dressing",
  "Exterior glass cleaned and polished",
  "Paint sealant applied and hand dried",
];

function ExclusivePackage() {
  return (
    <>
      <Hero
        priority
        image={cardExclusive}
        alt="Fully detailed black coupe with interior and exterior complete after the Exclusive Package"
        eyebrow="Exclusive Package"
        title="The Exclusive Package"
        subtitle="Inside and out, in one visit. Our Interior Package and Exterior Package performed back to back on the same day."
        priceAnchor="From $159"
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="Included" title="Everything In Both Packages">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-xl">Interior Package</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {interiorItems.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <Link
              to="/packages/interior"
              className="mt-5 inline-block font-display text-xs uppercase tracking-widest text-primary"
            >
              Learn more
            </Link>
          </div>
          <div className="rounded-lg border border-border bg-card p-6">
            <h3 className="text-xl">Exterior Package</h3>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted-foreground">
              {exteriorItems.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <Link
              to="/packages/exterior"
              className="mt-5 inline-block font-display text-xs uppercase tracking-widest text-primary"
            >
              Learn more
            </Link>
          </div>
        </div>
      </Section>

      <WhyCrown variant="compact" title="Why The Exclusive Is Worth It" />

      <Section eyebrow="Next step" title="Book The Full Treatment">
        <p className="max-w-2xl text-muted-foreground">
          Plan on 4-6 hours depending on size and condition. Send your vehicle details and{" "}
          {business.owner} will confirm pricing and a time window within {business.responseHours}.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/book-now">{CTA}</Link>
        </Button>
      </Section>
    </>
  );
}
