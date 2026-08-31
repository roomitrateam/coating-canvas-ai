import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/business";

const serviceOptions = [
  "Exterior Package (from $79)",
  "Interior Package (from $89)",
  "Exclusive Package (from $159)",
  "Ceramic Coating",
  "Paint Correction",
  "Add-Ons",
  "Not sure yet — help me choose",
];

/**
 * Single lead-capture form. Render this component exactly once per page.
 */
export function QuoteForm({ id = "quote" }: { id?: string }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div
        id={id}
        role="status"
        className="rounded-lg border border-border bg-card p-8 text-center"
      >
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Request received</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thank you — your quote request is in. {business.owner} personally reviews every request and
          will reach out within {business.responseHours}. Need it sooner? Call{" "}
          <a href={business.phoneHref} className="text-primary underline underline-offset-4">
            {business.phone}
          </a>
          .
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Submit another vehicle
        </Button>
      </div>
    );
  }

  return (
    <form
      id={id}
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="q-name">Name</Label>
          <Input id="q-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-phone">Phone</Label>
          <Input id="q-phone" name="phone" type="tel" autoComplete="tel" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-email">Email</Label>
          <Input id="q-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-vehicle">What&apos;s the make, model, and year of your vehicle?</Label>
          <Input id="q-vehicle" name="vehicle" placeholder="e.g. 2021 Toyota 4Runner" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-service">Service interested in</Label>
          <select
            id="q-service"
            name="service"
            required
            defaultValue=""
            className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          >
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="q-time">What&apos;s your preferred time to be contacted?</Label>
          <Input id="q-time" name="preferredTime" placeholder="e.g. weekday mornings" />
        </div>
        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="q-notes">Notes</Label>
          <Textarea
            id="q-notes"
            name="notes"
            rows={4}
            placeholder="Paint condition, pet hair, mobile or studio service, timing…"
          />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Request My Quote
      </Button>
      <p className="mt-3 text-xs text-muted-foreground">
        No deposit required. This is a free quote request, not a confirmed appointment.
      </p>
    </form>
  );
}
