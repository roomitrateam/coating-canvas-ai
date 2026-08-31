import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { business } from "@/lib/business";
import heroPaint from "@/assets/hero-paint.jpg";
import beforeAfterPaint from "@/assets/beforeafter-paint.jpg";
import beforeAfterInterior from "@/assets/beforeafter-interior.jpg";
import cardCeramic from "@/assets/card-ceramic.jpg";
import cardExterior from "@/assets/card-exterior.jpg";
import cardInterior from "@/assets/card-interior.jpg";
import cardExclusive from "@/assets/card-exclusive.jpg";
import cardPaint from "@/assets/card-paint.jpg";
import cardAddons from "@/assets/card-addons.jpg";
import heroCeramic from "@/assets/hero-ceramic.jpg";
import heroDetailing from "@/assets/hero-detailing.jpg";
import heroHome from "@/assets/hero-home.jpg";

const title = `Before & After Detailing Gallery | ${business.name}, ${business.city} NC`;
const description = `See before and after auto detailing, paint correction, and ceramic coating results from Crown Detailing & Coating in ${business.areaLine}.`;

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const pairs = [
  {
    service: "Paint Correction",
    caption: "Single-stage swirl removal on black metallic paint under inspection lighting.",
    img: beforeAfterPaint,
    alt: "Before and after paint correction: swirl marks on the left, mirror gloss on the right",
    wide: true,
  },
  {
    service: "Interior Package",
    caption: "Fabric extraction and steam cleaning on a daily-driven sedan interior.",
    img: beforeAfterInterior,
    alt: "Before and after interior detailing: stained seats and dusty console on the left, clean cabin on the right",
    wide: true,
  },
  {
    service: "Ceramic Coating",
    caption: "System X coating install — water beading on a coated panel after cure.",
    img: heroCeramic,
    alt: "After ceramic coating: water beading on a glossy dark grey coated car panel",
    wide: true,
  },
  {
    service: "Exclusive Package",
    caption: "Full inside-and-out detail completed in a single studio visit.",
    img: heroHome,
    alt: "After the Exclusive Package: glossy black sedan finished in the Crown detailing studio",
    wide: true,
  },
  {
    service: "Exterior Package",
    caption: "Hand wash and sealant on dark blue paint, dried with clean microfiber.",
    img: cardExterior,
    alt: "After exterior detailing: dark blue paint being hand dried with a microfiber towel",
  },
  {
    service: "Interior Detailing",
    caption: "Steam cleaning vents, seams, and leather seating surfaces.",
    img: cardInterior,
    alt: "Interior detailing in progress: steam cleaning black leather seats",
  },
  {
    service: "Paint Correction",
    caption: "Polishing pad and compound stage on a hard clear coat.",
    img: cardPaint,
    alt: "Paint correction close-up: polishing pad on glossy black car paint",
  },
  {
    service: "Ceramic Coating",
    caption: "Coating applied panel by panel with an applicator block.",
    img: cardCeramic,
    alt: "Ceramic coating being applied to a car hood with an applicator block",
  },
  {
    service: "Add-On: Engine Bay",
    caption: "Degreased and dressed engine bay after an add-on service.",
    img: cardAddons,
    alt: "Engine bay cleaning add-on: detailing brush cleaning a car engine bay",
  },
  {
    service: "Exclusive Package",
    caption: "Interior and exterior finished together on a coupe.",
    img: cardExclusive,
    alt: "After the Exclusive Package: detailed black coupe with clean interior visible",
  },
  {
    service: "Automotive Detailing",
    caption: "Two-bucket hand wash on an SUV — the start of every service.",
    img: heroDetailing,
    alt: "Hand washing a silver SUV with a foam mitt during automotive detailing",
  },
  {
    service: "Paint Correction",
    caption: "Machine polishing in progress under raking studio light.",
    img: heroPaint,
    alt: "Detailer machine polishing black car paint to remove swirl marks",
  },
];

function Gallery() {
  return (
    <>
      <Hero
        priority
        image={heroPaint}
        alt="Paint correction in progress at Crown Detailing & Coating, shown in the before and after gallery"
        eyebrow="Before &amp; after"
        title="The Work, Not The Words"
        subtitle="Real results across detailing, paint correction, and ceramic coating. Placeholder imagery for now — replace with your own photography before launch."
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">Book Your Detail</Link>
          </Button>
        }
      />

      <Section eyebrow="Gallery" title="Results By Service">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pairs.map((p, i) => (
            <figure
              key={`${p.service}-${i}`}
              className={`overflow-hidden rounded-lg border border-border bg-card ${
                p.wide ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <img
                src={p.img}
                alt={p.alt}
                loading="lazy"
                className="aspect-4/5 w-full object-cover"
              />
              <figcaption className="p-5">
                <p className="font-display text-xs uppercase tracking-widest text-primary">
                  {p.service}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{p.caption}</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <Button asChild size="lg" className="mt-10">
          <Link to="/book-now">Book Your Detail</Link>
        </Button>
      </Section>
    </>
  );
}
