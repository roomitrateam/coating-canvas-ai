import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { TrustBlock } from "@/components/site/TrustBlock";
import { Testimonials } from "@/components/site/Testimonials";
import { QuoteForm } from "@/components/site/QuoteForm";
import { business, CTA, services } from "@/lib/business";
import heroHome from "@/assets/hero-home.jpg";
import beforeAfterPaint from "@/assets/beforeafter-paint.jpg";
import cardExterior from "@/assets/card-exterior.jpg";
import cardInterior from "@/assets/card-interior.jpg";
import cardExclusive from "@/assets/card-exclusive.jpg";
import cardCeramic from "@/assets/card-ceramic.jpg";
import cardPaint from "@/assets/card-paint.jpg";
import cardAddons from "@/assets/card-addons.jpg";

const cardImages: Record<string, { src: string; alt: string }> = {
  "Exterior Package": {
    src: cardExterior,
    alt: "Exterior detailing package: glossy dark blue paint being dried with a microfiber towel",
  },
  "Interior Package": {
    src: cardInterior,
    alt: "Interior detailing package: black leather car interior being steam cleaned",
  },
  "Exclusive Package": {
    src: cardExclusive,
    alt: "Exclusive package: fully detailed black coupe in the Crown studio with red accent lighting",
  },
  "Ceramic Coating": {
    src: cardCeramic,
    alt: "System X ceramic coating being applied to a car hood with an applicator block",
  },
  "Paint Correction": {
    src: cardPaint,
    alt: "Paint correction polishing pad resting on glossy black car paint",
  },
  "Add-Ons": {
    src: cardAddons,
    alt: "Detailing add-on service: engine bay being cleaned with a detailing brush",
  },
};

const title = `Ceramic Coating & Auto Detailing in ${business.city}, NC | ${business.name}`;
const description = `Hand-detailing, paint correction, and certified System X ceramic coating in ${business.areaLine}. Owner-operated, fully insured, 5+ years of experience. Get a free quote.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: business.name,
          telephone: business.phone,
          email: business.email,
          image: "/favicon.ico",
          url: "/",
          founder: { "@type": "Person", name: business.owner },
          address: {
            "@type": "PostalAddress",
            addressLocality: business.city,
            addressRegion: business.state,
            addressCountry: "US",
          },
          areaServed: business.serviceAreas.map((a) => ({ "@type": "Place", name: `${a}, NC` })),
          sameAs: [business.instagram, business.facebook],
          priceRange: "$$",
        }),
      },
    ],
  }),
  component: Home,
});

const faqs = [
  {
    q: "How much does a detail cost?",
    a: "Packages start at $79 for the Exterior Package, $89 for the Interior Package, and $159 for the Exclusive Package. Final pricing depends on vehicle size and condition, which is why every quote is free and specific to your car.",
  },
  {
    q: "How long does the work take?",
    a: "An Interior or Exterior Package usually takes 2-4 hours. The Exclusive Package runs 4-6 hours. Paint correction plus a ceramic coating is typically a full day to two days, since the coating needs curing time.",
  },
  {
    q: "Do you come to me, or do I come to you?",
    a: `We offer both. Mobile service covers ${business.areaLine} as long as there is safe access to the vehicle. Paint correction and ceramic coating are done in the studio, where lighting and temperature are controlled.`,
  },
  {
    q: "How do I maintain a ceramic coating?",
    a: "Wash every two weeks with a pH-neutral soap and the two-bucket method, skip automatic tunnel washes, and dry with a clean microfiber towel. A ceramic spray wax topper every few months keeps the beading strong.",
  },
  {
    q: "What is your cancellation policy?",
    a: "Let us know at least 24 hours before your appointment and we will reschedule at no charge. Same-day cancellations may be subject to a rebooking fee since the slot is held exclusively for your vehicle.",
  },
  {
    q: "Is ceramic coating worth it over wax?",
    a: "Wax lasts weeks. A System X coating lasts years, resists chemicals and UV, and makes every wash faster. If you keep your vehicle more than a season, the coating is the better value.",
  },
  {
    q: "Do you work on trucks, SUVs, and oversized vehicles?",
    a: "Yes. Larger vehicles simply take more time and product, so pricing is quoted per vehicle rather than at a flat rate.",
  },
  {
    q: "Can you remove scratches?",
    a: "Swirl marks, wash marks, and light clear-coat scratches usually come out with paint correction. Anything that has gone through the clear coat needs paint repair, and we will tell you honestly before you pay for anything.",
  },
];

function Home() {
  return (
    <>
      <Hero
        priority
        image={heroHome}
        alt={`Ceramic-coated black luxury sedan in the ${business.name} detailing studio in ${business.city}, NC`}
        eyebrow={`${business.areaLine}`}
        title={
          <>
            Ceramic Coating &amp; Auto Detailing in{" "}
            <span className="text-metal">
              {business.city}, {business.state}.
            </span>
          </>
        }
        subtitle="Paint correction, interior detailing, and System X ceramic coatings — done by hand, backed by 5+ years of experience."
        actions={
          <>
            <Button asChild size="lg">
              <Link to="/book-now">{CTA}</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/packages/exclusive">View Packages</Link>
            </Button>
          </>
        }
      />

      <Section
        eyebrow="Services"
        title="Pick Your Level of Detail"
        intro="Six ways to work with us — every one performed by hand in-studio or at your driveway."
      >
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const img = cardImages[s.title]!;
            return (
              <article
                key={s.title}
                className="group overflow-hidden rounded-lg border border-border bg-card"
              >
                <Link to={s.slug} className="block aspect-4/5 overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    width={1024}
                    height={1280}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </Link>
                <div className="p-6">
                  <h3 className="text-xl">{s.title}</h3>
                  <p className="mt-1 font-display text-sm tracking-widest text-primary">
                    {s.price}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">{s.blurb}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Button asChild size="sm">
                      <Link to="/book-now">{CTA}</Link>
                    </Button>
                    <Button asChild size="sm" variant="ghost">
                      <Link to={s.slug}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <TrustBlock />

      <Section eyebrow="Ceramic coating" title="Protection That Outlasts Wax">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-muted-foreground">
              A System X ceramic coating bonds to your clear coat and leaves a hard, hydrophobic
              layer that shrugs off water, road film, and UV. Washing gets faster and the gloss holds
              for years, not weeks. We offer four tiers from 2-3 years up to 10 years of coverage.
            </p>
            <Button asChild className="mt-6">
              <Link to="/ceramic-coating">See Packages</Link>
            </Button>
          </div>
          <img
            src={beforeAfterPaint}
            alt="Before and after ceramic coating and polishing: swirled dull paint on the left, mirror-gloss reflection on the right"
            width={1600}
            height={900}
            loading="lazy"
            className="w-full rounded-lg border border-border object-cover"
          />
        </div>
      </Section>

      <Testimonials />

      <Section eyebrow="Where to start" title="Three Core Services">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              to: "/automotive-detailing",
              h: "Automotive Detailing",
              p: "Interior and exterior detailing done by hand, tailored to how dirty the vehicle actually is.",
            },
            {
              to: "/ceramic-coating",
              h: "Ceramic Coating",
              p: "Certified System X installs in four durability tiers, always on properly prepped paint.",
            },
            {
              to: "/paint-correction",
              h: "Paint Correction",
              p: "Machine polishing that clears swirls and wash marks so the finish looks deep again.",
            },
          ].map((t) => (
            <div key={t.h} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg">{t.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{t.p}</p>
              <Link
                to={t.to}
                className="mt-4 inline-block font-display text-xs uppercase tracking-widest text-primary"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Service area" title={`Serving ${business.city} and the Triangle`} tone="surface">
        <ul className="flex flex-wrap gap-2">
          {business.serviceAreas.map((a) => (
            <li
              key={a}
              className="rounded-md border border-border bg-card px-3 py-2 text-sm text-muted-foreground"
            >
              {a}, NC
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-muted-foreground">
          Outside this list? Call {business.phone} — we travel for coating work.
        </p>
      </Section>

      <Section
        id="quote"
        eyebrow="Free quote"
        title="Tell Us About Your Vehicle"
        intro="One form, one owner reading it. We'll come back with real pricing for your car — not a range."
      >
        <QuoteForm id="home-quote" />
      </Section>

      <Section eyebrow="FAQ" title="Questions, Answered" tone="surface">
        <Accordion type="single" collapsible className="max-w-3xl">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      <Section eyebrow="About" title={`Owner-Operated in ${business.city}`}>
        <p className="max-w-3xl text-muted-foreground">
          Crown Detailing &amp; Coating is run by {business.owner}, a certified System X installer
          with more than five years behind the polisher. Every car is quoted, detailed, and inspected
          by the same person — that&apos;s the whole point.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/about">Read More About Us</Link>
        </Button>
      </Section>
    </>
  );
}
