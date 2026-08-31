import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { business, CTA } from "@/lib/business";
import heroCeramic from "@/assets/hero-ceramic.jpg";

const title = `Ceramic Coating in ${business.city}, NC | ${business.name}`;
const description = `Certified System X ceramic coating in ${business.areaLine}. Four tiers from 2-3 years to 10 years of gloss and protection. Request a free coating quote.`;

export const Route = createFileRoute("/ceramic-coating")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/ceramic-coating" },
    ],
    links: [{ rel: "canonical", href: "/ceramic-coating" }],
  }),
  component: CeramicCoating,
});

const tiers = [
  {
    name: "Crystal",
    duration: "2-3 years",
    price: "from $X",
    includes: [
      "Decontamination wash and clay",
      "Single-stage gloss enhancement",
      "System X Crystal coating on paint",
      "Coated glass and wheel faces",
    ],
  },
  {
    name: "Pro",
    duration: "6 years",
    price: "from $X",
    includes: [
      "Everything in Crystal",
      "One-step paint correction",
      "System X Pro coating",
      "Trim and plastic coating",
    ],
  },
  {
    name: "Diamond",
    duration: "8 years",
    price: "from $X",
    includes: [
      "Everything in Pro",
      "Two-stage paint correction",
      "System X Diamond coating",
      "Coated wheels, off the vehicle",
    ],
  },
  {
    name: "Max",
    duration: "10 years",
    price: "from $X",
    includes: [
      "Everything in Diamond",
      "Multi-stage correction as needed",
      "System X Max coating with topper",
      "Annual inspection appointment",
    ],
  },
];

function CeramicCoating() {
  return (
    <>
      <Hero
        priority
        image={heroCeramic}
        alt="Water beading tightly on a glossy ceramic-coated dark grey car panel after a System X coating install"
        eyebrow="System X ceramic coating"
        title="Coatings Measured In Years, Not Weeks"
        subtitle="Four System X tiers, installed by a certified installer on properly corrected paint. Choose the durability you actually want to pay for."
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="Compare tiers" title="Four Coating Tiers">
        <div className="hidden overflow-hidden rounded-lg border border-border lg:block">
          <table className="w-full text-left text-sm">
            <thead className="bg-secondary font-display uppercase tracking-widest">
              <tr>
                <th scope="col" className="px-5 py-4">
                  Tier
                </th>
                <th scope="col" className="px-5 py-4">
                  Duration
                </th>
                <th scope="col" className="px-5 py-4">
                  Price
                </th>
                <th scope="col" className="px-5 py-4">
                  What&apos;s included
                </th>
                <th scope="col" className="px-5 py-4">
                  Quote
                </th>
              </tr>
            </thead>
            <tbody>
              {tiers.map((t) => (
                <tr key={t.name} className="border-t border-border bg-card align-top">
                  <th scope="row" className="px-5 py-5 font-display text-lg text-steel">
                    {t.name}
                  </th>
                  <td className="px-5 py-5 text-muted-foreground">{t.duration}</td>
                  <td className="px-5 py-5 font-display tracking-widest text-primary">{t.price}</td>
                  <td className="px-5 py-5">
                    <ul className="list-disc space-y-1 pl-4 text-muted-foreground">
                      {t.includes.map((i) => (
                        <li key={i}>{i}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-5 py-5">
                    <Button asChild size="sm">
                      <Link to="/book-now" search={{ tier: t.name }}>
                        Get a Quote for {t.name}
                      </Link>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:hidden">
          {tiers.map((t) => (
            <div key={t.name} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-xl">{t.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t.duration}</p>
              <p className="mt-1 font-display tracking-widest text-primary">{t.price}</p>
              <ul className="mt-4 list-disc space-y-1 pl-4 text-sm text-muted-foreground">
                {t.includes.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <Button asChild size="sm" className="mt-5 w-full">
                <Link to="/book-now" search={{ tier: t.name }}>
                  Get a Quote for {t.name}
                </Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">
          Tier pricing to be confirmed with the owner before publishing.
        </p>
      </Section>

      <Section eyebrow="Partnership" title="Why We Install System X" tone="surface">
        <p className="max-w-3xl text-muted-foreground">
          Certification matters because a coating is only as good as its prep and application window.
          {" "}
          {business.owner} trained and certified directly with System X, which means the tier you buy
          is registered, installed to spec, and supported by the manufacturer rather than a
          generic bottle bought online. Full product details live on the{" "}
          <a
            href={business.systemX}
            target="_blank"
            rel="noreferrer"
            className="text-primary underline underline-offset-4"
          >
            official System X site
          </a>
          .
        </p>
      </Section>

      <Section eyebrow="Aftercare" title="Keeping The Coating Working">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              h: "Wash every two weeks",
              p: "pH-neutral soap, two buckets, clean microfiber. That alone keeps beading strong for years.",
            },
            {
              h: "Skip tunnel washes",
              p: "Spinning brushes put back exactly the swirls we polished out. Touchless only if you must.",
            },
            {
              h: "Top it occasionally",
              p: "A ceramic spray wax every few months refreshes slickness between full details.",
            },
          ].map((c) => (
            <div key={c.h} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg">{c.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.p}</p>
            </div>
          ))}
        </div>
        <Button asChild size="lg" className="mt-8">
          <Link to="/book-now">{CTA}</Link>
        </Button>
      </Section>
    </>
  );
}
