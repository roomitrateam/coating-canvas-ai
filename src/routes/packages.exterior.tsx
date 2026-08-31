import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { WhyCrown } from "@/components/site/WhyCrown";
import { business, CTA } from "@/lib/business";
import heroHome from "@/assets/hero-home.jpg";
import cardExterior from "@/assets/card-exterior.jpg";

const title = `Exterior Detailing Package in ${business.city}, NC | ${business.name}`;
const description = `Exterior Package from $79: hand wash, decontamination, wheels and tires, glass, and sealant protection in ${business.areaLine}. Request a free quote.`;

export const Route = createFileRoute("/packages/exterior")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "product" },
      { property: "og:url", content: "/packages/exterior" },
    ],
    links: [{ rel: "canonical", href: "/packages/exterior" }],
  }),
  component: ExteriorPackage,
});

const included = [
  "Pre-rinse, foam, and two-bucket hand wash",
  "Wheel faces, barrels, and wheel wells cleaned",
  "Tires dressed with a non-sling dressing",
  "Iron and tar decontamination",
  "Exterior glass cleaned and polished",
  "Door jambs and fuel door wiped",
  "Paint sealant applied for months of protection",
  "Hand dried with clean microfiber",
];

function ExteriorPackage() {
  return (
    <>
      <Hero
        priority
        image={heroHome}
        alt="Glossy black sedan after an exterior detailing package at Crown Detailing and Coating"
        eyebrow="Exterior Package"
        title="Exterior Detailing Package"
        subtitle="A safe hand wash, real decontamination, and protection that lasts — the baseline every other service builds on."
        priceAnchor="From $79"
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
          <img
            src={cardExterior}
            alt="Exterior detailing package: glossy dark blue paint being hand dried with a microfiber towel"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-4/5 w-full rounded-lg border border-border object-cover"
          />
        </div>
      </Section>

      <WhyCrown variant="compact" title="Why Wash With Crown Instead" />

      <Section eyebrow="Next step" title="Want Longer Protection?">
        <p className="max-w-2xl text-muted-foreground">
          A sealant lasts months; a System X ceramic coating lasts years. Tell us how long you plan to
          keep the vehicle and we&apos;ll recommend the honest option — usually within{" "}
          {business.responseHours}.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/ceramic-coating">Learn More About Coatings</Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
