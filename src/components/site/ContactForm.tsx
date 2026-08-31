import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { business } from "@/lib/business";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div role="status" className="rounded-lg border border-border bg-card p-8 text-center">
        <CheckCircle2 className="mx-auto size-10 text-primary" aria-hidden="true" />
        <h3 className="mt-4 text-2xl">Message sent</h3>
        <p className="mt-3 text-sm text-muted-foreground">
          Thanks for reaching out. We reply within {business.responseHours} during business days.
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-lg border border-border bg-card p-6 sm:p-8"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="space-y-2">
          <Label htmlFor="c-name">Name</Label>
          <Input id="c-name" name="name" autoComplete="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-email">Email</Label>
          <Input id="c-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="c-message">Message</Label>
          <Textarea id="c-message" name="message" rows={5} required />
        </div>
      </div>
      <Button type="submit" className="mt-6 w-full sm:w-auto">
        Send Message
      </Button>
    </form>
  );
}
