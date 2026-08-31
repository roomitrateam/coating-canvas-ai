import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { business } from "@/lib/business";

export function TrustBlock() {
  return (
    <section className="border-y border-border bg-card py-12">
      <div className="container-page grid items-center gap-8 lg:grid-cols-[1fr_auto]">
        <div>
          <p className="eyebrow">Credentials</p>
          <p className="mt-3 max-w-2xl text-lg text-foreground">
            {business.name} is a certified{" "}
            <a
              href={business.systemX}
              className="text-primary underline underline-offset-4"
              target="_blank"
              rel="noreferrer"
            >
              System X
            </a>{" "}
            installer. We&apos;re fully insured and back every ceramic coating package with our own
            workmanship guarantee.
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            Insurance and certification claims to be verified with the owner before launch.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3">
          {[
            { icon: ShieldCheck, label: "Insured" },
            { icon: Award, label: "5+ Years Experience" },
            { icon: BadgeCheck, label: "Certified System X Installer" },
          ].map((b) => (
            <li
              key={b.label}
              className="flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-3 font-display text-xs uppercase tracking-widest text-secondary-foreground"
            >
              <b.icon className="size-4 text-primary" aria-hidden="true" />
              {b.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
