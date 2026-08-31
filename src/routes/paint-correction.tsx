import { createFileRoute, Link } from "@tanstack/react-router";
import { Eye, Layers, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/site/Hero";
import { Section } from "@/components/site/Section";
import { business, CTA } from "@/lib/business";
import heroPaint from "@/assets/hero-paint.jpg";
import beforeAfterPaint from "@/assets/beforeafter-paint.jpg";

const title = `Paint Correction in ${business.city}, NC | ${business.name}`;
const description = `Swirl and scratch removal by machine polishing in ${business.areaLine}. Priced per stage with a free paint assessment from a certified System X installer.`;

export const Route = createFileRoute("/paint-correction")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/paint-correction" },
    ],
    links: [{ rel: "canonical", href: "/paint-correction" }],
  }),
  component: PaintCorrection,
});

function PaintCorrection() {
  return (
    <>
      <Hero
        priority
        image={heroPaint}
        alt="Detailer machine polishing black car paint to remove swirl marks during paint correction"
        eyebrow="Paint correction"
        title="Paint Correction: A Must-Have for Your Vehicle's Finish."
        subtitle="Swirls, wash marks, and haze are physical defects in your clear coat. Polishing levels them so light reflects cleanly again — and so any coating goes on top of paint worth protecting."
        priceAnchor="Priced per stage — request a free assessment."
        actions={
          <Button asChild size="lg">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        }
      />

      <Section eyebrow="The result" title="What Paint Correction Does">
        <div className="grid items-start gap-10 lg:grid-cols-2">
          <div className="grid gap-6">
            {[
              {
                icon: Eye,
                h: "Restores",
                p: "Machine polishing removes swirl marks, wash-induced scratches, oxidation, and water spot etching so the paint reads deep instead of dull.",
              },
              {
                icon: Layers,
                h: "Preserves",
                p: "We measure and work conservatively — only enough clear coat is refined to level the defect, keeping paint thickness for years to come.",
              },
              {
                icon: ShieldCheck,
                h: "Protects",
                p: "Corrected paint is the right foundation for a System X ceramic coating, which locks in the finish instead of hiding flaws under filler.",
              },
            ].map((b) => (
              <div key={b.h} className="rounded-lg border border-border bg-card p-6">
                <b.icon className="size-6 text-primary" aria-hidden="true" />
                <h3 className="mt-4 text-lg">{b.h}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b.p}</p>
              </div>
            ))}
          </div>
          <figure>
            <img
              src={beforeAfterPaint}
              alt="Macro before and after photo of paint correction: swirl marks under inspection light on the left, corrected mirror finish on the right"
              width={1600}
              height={900}
              loading="lazy"
              className="w-full rounded-lg border border-border object-cover"
            />
            <figcaption className="mt-3 text-xs text-muted-foreground">
              Swirl-mark removal under inspection lighting. Left: before. Right: after a single-stage
              correction.
            </figcaption>
          </figure>
        </div>
      </Section>

      <Section eyebrow="Stages" title="How Pricing Works" tone="surface">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              h: "One-step enhancement",
              p: "A single polishing stage that clears most light swirls and boosts gloss. Best for newer or well-kept paint.",
            },
            {
              h: "Two-stage correction",
              p: "A cutting stage followed by a refining polish for moderate defects, wash marks, and dealer-inflicted swirls.",
            },
            {
              h: "Multi-stage restoration",
              p: "For neglected or heavily marred paint. Quoted after an in-person assessment and a test spot on your panel.",
            },
          ].map((s) => (
            <div key={s.h} className="rounded-lg border border-border bg-card p-6">
              <h3 className="text-lg">{s.h}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.p}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
          Because correction time depends entirely on paint hardness and defect depth, we quote per
          stage after seeing the vehicle. The assessment is free and there&apos;s no obligation to
          book. Call {business.phone} with questions.
        </p>
        <Button asChild size="lg" className="mt-6">
          <Link to="/book-now">{CTA}</Link>
        </Button>
      </Section>
    </>
  );
}
