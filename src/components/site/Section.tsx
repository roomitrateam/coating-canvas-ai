import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  tone = "base",
  className,
  headingLevel = "h2",
}: {
  id?: string;
  eyebrow?: string;
  title?: ReactNode;
  intro?: string;
  children?: ReactNode;
  tone?: "base" | "surface";
  className?: string;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20", tone === "surface" && "bg-surface", className)}
    >
      <div className="container-page">
        {(eyebrow || title || intro) && (
          <div className="max-w-3xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <Heading className="mt-3 text-3xl sm:text-4xl">{title}</Heading>}
            {intro && <p className="mt-4 text-muted-foreground">{intro}</p>}
          </div>
        )}
        {children && <div className={cn(title || intro || eyebrow ? "mt-10" : "")}>{children}</div>}
      </div>
    </section>
  );
}
