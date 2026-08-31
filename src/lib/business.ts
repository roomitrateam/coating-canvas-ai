export const business = {
  name: "Crown Detailing & Coating",
  owner: "Raj Rooprai",
  phone: "919-607-2863",
  phoneHref: "tel:+19196072863",
  email: "info@crowndetailstudio.com",
  emailHref: "mailto:info@crowndetailstudio.com",
  city: "Raleigh",
  state: "NC",
  areaLine: "Raleigh, Cary, and the surrounding Triangle area",
  instagram: "https://www.instagram.com/crowndetailnc/",
  instagramHandle: "@crowndetailnc",
  facebook: "https://www.facebook.com/",
  systemX: "https://www.systemxceramic.com/",
  responseHours: "2 business hours",
  serviceAreas: [
    "Raleigh",
    "Cary",
    "Apex",
    "Morrisville",
    "Durham",
    "Chapel Hill",
    "Holly Springs",
    "Wake Forest",
    "Garner",
    "Knightdale",
    "Wake County",
    "Durham County",
  ],
} as const;

export const CTA = "Get a Free Quote";

export const services = [
  {
    slug: "/packages/exterior",
    title: "Exterior Package",
    price: "from $79",
    blurb:
      "Hand wash, decontamination, wheels and tires, glass, and a sealant top-up for a sharp, protected finish.",
  },
  {
    slug: "/packages/interior",
    title: "Interior Package",
    price: "from $89",
    blurb:
      "Full vacuum, steam and extraction on carpets and upholstery, plus a UV-safe dressing on every touch point.",
  },
  {
    slug: "/packages/exclusive",
    title: "Exclusive Package",
    price: "from $159",
    blurb:
      "Our complete inside-and-out detail: the Interior Package and the Exterior Package performed in one visit.",
  },
  {
    slug: "/ceramic-coating",
    title: "Ceramic Coating",
    price: "4 System X tiers",
    blurb:
      "Certified System X coatings from 2-3 years up to 10 years of gloss, chemical resistance, and easier washes.",
  },
  {
    slug: "/paint-correction",
    title: "Paint Correction",
    price: "priced per stage",
    blurb:
      "Machine polishing that removes swirls, wash marks, and light scratches before any coating goes on.",
  },
  {
    slug: "/add-ons",
    title: "Add-Ons",
    price: "from $25",
    blurb:
      "Ceramic spray wax, engine bay cleaning, and pet hair removal to round out any package.",
  },
] as const;

/** PLACEHOLDER CONTENT — replace with real, collected customer reviews before launch. */
export const testimonials = [
  {
    name: "Placeholder — M. Ellison",
    rating: 5,
    quote:
      "Placeholder review text. Raj took his time on my black sedan and the swirls are simply gone. Replace with a real customer quote.",
  },
  {
    name: "Placeholder — D. Whitfield",
    rating: 5,
    quote:
      "Placeholder review text. Booked the Exclusive Package before a trade-in and the appraisal came back higher than expected. Replace with a real customer quote.",
  },
  {
    name: "Placeholder — S. Nguyen",
    rating: 5,
    quote:
      "Placeholder review text. The System X coating still beads water months later and washing takes half the time. Replace with a real customer quote.",
  },
  {
    name: "Placeholder — J. Carver",
    rating: 5,
    quote:
      "Placeholder review text. Two kids and a dog later, my interior looked showroom fresh again. Replace with a real customer quote.",
  },
  {
    name: "Placeholder — A. Reyes",
    rating: 5,
    quote:
      "Placeholder review text. Straight answers on pricing, no upsell pressure, and the work speaks for itself. Replace with a real customer quote.",
  },
  {
    name: "Placeholder — T. Boone",
    rating: 5,
    quote:
      "Placeholder review text. Owner-operated makes a difference — the same person quoted, detailed, and walked me through the results. Replace with a real customer quote.",
  },
] as const;
