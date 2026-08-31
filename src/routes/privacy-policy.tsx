import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { business } from "@/lib/business";

const title = `Privacy Policy | ${business.name}`;
const description = `How Crown Detailing & Coating in ${business.city}, NC collects, uses, and protects the information you submit through our quote and contact forms.`;

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <Section eyebrow="Legal" title="Privacy Policy" headingLevel="h1">
      <div className="max-w-3xl space-y-6 text-sm text-muted-foreground">
        <p>Last updated: [insert date].</p>

        <div>
          <h2 className="text-xl text-foreground">Information we collect</h2>
          <p className="mt-2">
            When you submit a quote or contact form, we collect the name, phone number, email
            address, vehicle details, preferred contact time, and any notes you provide. We do not
            collect payment information through this website.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-foreground">How we use it</h2>
          <p className="mt-2">
            We use your information solely to prepare a quote, schedule service, and follow up about
            your vehicle. We may contact you by phone, text, or email using the details you provide.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-foreground">Sharing</h2>
          <p className="mt-2">
            We do not sell or rent your information. We share it only with service providers that
            help us operate this website and communicate with customers, and only as needed for that
            purpose, or where required by law.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-foreground">Cookies and analytics</h2>
          <p className="mt-2">
            This site may use cookies and basic analytics to understand traffic and improve the
            experience. You can disable cookies in your browser settings; core pages will still work.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-foreground">Retention and your choices</h2>
          <p className="mt-2">
            We keep quote requests only as long as needed for our records. You can ask us to correct
            or delete your information, or to stop contacting you, at any time.
          </p>
        </div>

        <div>
          <h2 className="text-xl text-foreground">Contact</h2>
          <p className="mt-2">
            Questions about this policy? Email{" "}
            <a href={business.emailHref} className="text-primary underline underline-offset-4">
              {business.email}
            </a>{" "}
            or call{" "}
            <a href={business.phoneHref} className="text-primary underline underline-offset-4">
              {business.phone}
            </a>
            . {business.name}, {business.city}, {business.state}.
          </p>
        </div>

        <p className="text-xs">
          This page is general boilerplate and should be reviewed by a qualified professional before
          launch.
        </p>
      </div>
    </Section>
  );
}
