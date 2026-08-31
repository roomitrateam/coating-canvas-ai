import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { WhyCrown } from "@/components/site/WhyCrown";
import { business, CTA } from "@/lib/business";
import heroDetailing from "@/assets/hero-detailing.jpg";

const title = `Automotive Detailing in ${business.city}, NC | ${business.name}`;
const description = `Hand-performed interior and exterior auto detailing in ${business.areaLine}. Packages from $79. Owner-operated, certified System X installer. Request a free quote today.`;

export const Route = createFileRoute("/automotive-detailing")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/automotive-detailing" },
    ],
    links: [{ rel: "canonical", href: "/automotive-detailing" }],
  }),
  component: AutomotiveDetailing,
});

const packages = [
  {
    to: "/packages/exterior",
    name: "Exterior Package",
    price: "from $79",
    body: "Hand wash, chemical decontamination, wheel faces and barrels, tire dressing, glass, and a sealant top-up.",
  },
  {
    to: "/packages/interior",
    name: "Interior Package",
    price: "from $89",
    body: "Full vacuum, steam cleaning, hot-water extraction on fabric, leather clean and condition, UV-safe trim dressing.",
  },
  {
    to: "/packages/exclusive",
    name: "Exclusive Package",
    price: "from $159",
    body: "The Interior Package and the Exterior Package in a single visit — our most complete detail.",
  },
];

function AutomotiveDetailing() {
  return (
    <>
      <Hero
        priority
        image={heroDetailing}
        alt="Hand washing a silver SUV with a foam mitt and two-bucket method during an automotive detailing service"
        eyebrow="Automotive detailing"
        title="Detailing Done By Hand, Not By Machine"
        subtitle="A proper detail is decontamination, careful cleaning, and protection — in that order. We work panel by panel so the finish lasts long after the appointment."
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section
        eyebrow="What's included"
        title="How a Crown Detail Works"
        intro="Every vehicle starts with a walkaround so you know what we can realistically fix, and what needs paint correction instead."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              h: "1. Decontaminate",
              p: "Pre-rinse, foam, and a safe two-bucket hand wash, then iron and tar removal so nothing gets ground into the paint.",
            },
            {
              h: "2. Detail",
              p: "Interiors get steam, extraction, and detail brushes. Exteriors get wheels, glass, jambs, and trim addressed individually.",
            },
            {
              h: "3. Protect",
              p: "A sealant or ceramic topper goes on last, plus UV-safe dressings inside so plastics don't fade.",
            },
          ].map((s) => (
            <div key={s.h} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg">{s.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Packages" title="Compare Detailing Packages" tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {packages.map((p) => (
            <div key={p.name} className="flex flex-col rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-1 font-display text-lg tracking-widest text-primary">{p.price}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <Button asChild size="sm" variant="outline">
                  <Link to={p.to}>Learn More</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/book-now">{CTA}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <WhyCrown />

      <Section eyebrow="Next step" title="Get Pricing For Your Vehicle">
        <p className="max-w-2xl text-muted-foreground">
          Send us the year, make, and model plus a note on condition. You&apos;ll get exact pricing
          back within {business.responseHours} — no deposit, no pressure.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/book-now">{CTA}</Link>
        </Button>
      </Section>
    </>
  );
}
