import { Hand, ShieldCheck, Sparkles, UserCheck } from "lucide-react";
import { Section } from "./Section";

type Variant = "full" | "compact";

const points = [
  {
    icon: Hand,
    title: "Hand-finished, not conveyor-belt",
    body: "Every vehicle is detailed by hand — no automatic tunnel washes, no shortcuts.",
    short: "Detailed by hand, start to finish. No tunnel washes.",
  },
  {
    icon: Sparkles,
    title: "System X certified",
    body: "We're a certified installer for System X ceramic coatings, one of the industry's most tested protective coating systems.",
    short: "Certified System X installer, trained on every coating tier we sell.",
  },
  {
    icon: UserCheck,
    title: "5+ years, one owner on every job",
    body: "Raj personally oversees every vehicle that comes through the studio.",
    short: "Raj is on every vehicle personally — 5+ years in.",
  },
  {
    icon: ShieldCheck,
    title: "We stand behind our work",
    body: "[Insert real guarantee/warranty terms — confirm with the owner before publishing.]",
    short: "Workmanship guarantee on every coating package. [Confirm terms.]",
  },
];

export function WhyCrown({
  variant = "full",
  title = "Why Crown Is Different",
}: {
  variant?: Variant;
  title?: string;
}) {
  return (
    <Section eyebrow="The difference" title={title} tone="surface">
      <div className="grid gap-6 sm:grid-cols-2">
        {points.map((p) => (
          <div key={p.title} className="rounded-lg border border-border bg-card p-6">
            <p.icon className="size-6 text-primary" aria-hidden="true" />
            <h3 className="mt-4 text-lg">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {variant === "full" ? p.body : p.short}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
