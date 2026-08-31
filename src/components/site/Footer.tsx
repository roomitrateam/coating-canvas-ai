import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business, CTA } from "@/lib/business";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface text-surface-foreground">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h2 className="font-display text-sm tracking-[0.22em] text-metal">Services</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/automotive-detailing" className="hover:text-primary">
                Automotive Detailing
              </Link>
            </li>
            <li>
              <Link to="/paint-correction" className="hover:text-primary">
                Paint Correction
              </Link>
            </li>
            <li>
              <Link to="/ceramic-coating" className="hover:text-primary">
                Ceramic Coating
              </Link>
            </li>
            <li>
              <Link to="/add-ons" className="hover:text-primary">
                Add-Ons
              </Link>
            </li>
            <li>
              <Link to="/packages/interior" className="hover:text-primary">
                Interior Package
              </Link>
            </li>
            <li>
              <Link to="/packages/exterior" className="hover:text-primary">
                Exterior Package
              </Link>
            </li>
            <li>
              <Link to="/packages/exclusive" className="hover:text-primary">
                Exclusive Package
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.22em] text-metal">Company</h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <Link to="/about" className="hover:text-primary">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-primary">
                Before &amp; After Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-primary">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.22em] text-metal">Get in Touch</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <a href={business.phoneHref} className="flex items-center gap-2 hover:text-primary">
                <Phone className="size-4" aria-hidden="true" />
                {business.phone}
              </a>
            </li>
            <li>
              <a href={business.emailHref} className="flex items-center gap-2 hover:text-primary">
                <Mail className="size-4" aria-hidden="true" />
                {business.email}
              </a>
            </li>
            <li className="flex items-center gap-4 pt-1">
              <a
                href={business.instagram}
                aria-label={`Crown Detailing & Coating on Instagram, ${business.instagramHandle}`}
                className="hover:text-primary"
              >
                <Instagram className="size-5" aria-hidden="true" />
              </a>
              <a
                href={business.facebook}
                aria-label="Crown Detailing & Coating on Facebook"
                className="hover:text-primary"
              >
                <Facebook className="size-5" aria-hidden="true" />
              </a>
            </li>
            <li className="pt-1">
              Serving {business.areaLine}.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm tracking-[0.22em] text-metal">Ready to book?</h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Tell us about your vehicle and we&apos;ll send pricing back within{" "}
            {business.responseHours}.
          </p>
          <Button asChild className="mt-4 w-full">
            <Link to="/book-now">{CTA}</Link>
          </Button>
        </div>
      </div>

      <div className="hairline" />
      <div className="container-page flex flex-col gap-2 py-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {business.name}. Owner-operated in {business.city},{" "}
          {business.state}.
        </p>
        <p>Certified System X installer &middot; Fully insured</p>
      </div>
    </footer>
  );
}
