import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { business, CTA } from "@/lib/business";
import heroDetailing from "@/assets/hero-detailing.jpg";
import cardAddons from "@/assets/card-addons.jpg";

const title = `Detailing Add-Ons in ${business.city}, NC | ${business.name}`;
const description = `Ceramic spray wax, engine bay cleaning, and pet hair removal add-ons in ${business.areaLine}. Priced from $25 and added to any Crown detailing package.`;

export const Route = createFileRoute("/add-ons")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/add-ons" },
    ],
    links: [{ rel: "canonical", href: "/add-ons" }],
  }),
  component: AddOns,
});

const addons = [
  {
    name: "Ceramic Spray Wax",
    price: "$25",
    body: "A quick topper that boosts gloss and adds a hydrophobic layer between full details.",
  },
  {
    name: "Engine Bay Cleaning",
    price: "Ask for pricing",
    body: "Careful degreasing and dressing of the engine bay so plastics look new and leaks are easy to spot.",
  },
  {
    name: "Pet Hair Removal",
    price: "Ask for pricing",
    body: "Extra labor to pull embedded pet hair out of carpet and upholstery fibers, not just off the surface.",
  },
];

function AddOns() {
  return (
    <>
      <Hero
        priority
        image={heroDetailing}
        alt="Detailer working on a vehicle in the Crown Detailing and Coating studio before adding on extra services"
        eyebrow="Add-ons"
        title="Small Additions, Big Difference"
        subtitle="Bolt any of these onto an Interior, Exterior, or Exclusive Package when your vehicle needs a little more than the standard detail."
        priceAnchor="From $25"
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="Menu" title="Available Add-Ons">
        <div className="grid items-start gap-10 lg:grid-cols-[1.4fr_1fr]">
          <ul className="divide-y divide-border overflow-hidden rounded-lg border border-border bg-card">
            {addons.map((a) => (
              <li key={a.name} className="flex flex-col gap-2 p-6 sm:flex-row sm:items-baseline">
                <div className="flex-1">
                  <h2 className="text-xl">{a.name}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{a.body}</p>
                </div>
                <p className="font-display text-lg tracking-widest text-primary">{a.price}</p>
              </li>
            ))}
          </ul>
          <img
            src={cardAddons}
            alt="Engine bay cleaning add-on: a detailing brush cleaning a car engine bay"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-4/5 w-full rounded-lg border border-border object-cover"
          />
        </div>
        <p className="mt-8 text-sm text-muted-foreground">
          Not sure which add-on your vehicle needs? Call {business.phone} and describe it — we&apos;ll
          tell you straight.
        </p>
      </Section>
    </>
  );
}
