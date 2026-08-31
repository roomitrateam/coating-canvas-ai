import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, CTA } from "@/lib/business";

const servicesLinks = [
  { to: "/automotive-detailing", label: "Automotive Detailing" },
  { to: "/paint-correction", label: "Paint Correction" },
  { to: "/ceramic-coating", label: "Ceramic Coating" },
  { to: "/add-ons", label: "Add-Ons" },
] as const;

const packageLinks = [
  { to: "/packages/interior", label: "Interior" },
  { to: "/packages/exterior", label: "Exterior" },
  { to: "/packages/exclusive", label: "Exclusive" },
] as const;

function DesktopDropdown({
  label,
  links,
}: {
  label: string;
  links: readonly { to: string; label: string }[];
}) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex items-center gap-1 py-2 font-display text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
      >
        {label}
        <ChevronDown className="size-4" aria-hidden="true" />
      </button>
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-56 rounded-md border border-border bg-popover p-2 shadow-elevated">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="block rounded px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-baseline gap-2">
          <span className="font-display text-xl tracking-[0.18em] text-metal">CROWN</span>
          <span className="hidden font-display text-xs tracking-[0.3em] text-muted-foreground sm:inline">
            DETAILING &amp; COATING
          </span>
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-7 lg:flex">
          <Link
            to="/"
            className="font-display text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
          >
            Home
          </Link>
          <DesktopDropdown label="Services" links={servicesLinks} />
          <DesktopDropdown label="Packages" links={packageLinks} />
          <Link
            to="/gallery"
            className="font-display text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
          >
            Gallery
          </Link>
          <Link
            to="/about"
            className="font-display text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
          >
            About Us
          </Link>
          <Link
            to="/contact"
            className="font-display text-sm uppercase tracking-widest text-foreground/80 transition-colors hover:text-primary"
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden="true" />
            {business.phone}
          </a>
          <Button asChild>
            <Link to="/book-now">{CTA}</Link>
          </Button>
        </div>

        <button
          type="button"
          className="lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="container-page flex flex-col gap-1 py-4">
            <Link to="/" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Home
            </Link>
            <p className="pt-3 eyebrow">Services</p>
            {servicesLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2 pl-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <p className="pt-3 eyebrow">Packages</p>
            {packageLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="py-2 pl-3 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/gallery" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Before &amp; After Gallery
            </Link>
            <Link to="/about" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              About Us
            </Link>
            <Link to="/contact" className="py-2 text-sm" onClick={() => setMobileOpen(false)}>
              Contact Us
            </Link>
            <Button asChild className="mt-3">
              <Link to="/book-now" onClick={() => setMobileOpen(false)}>
                {CTA}
              </Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
