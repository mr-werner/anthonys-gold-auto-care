import { BadgeDollarSign, Car, CarFront, Clock, Cog, CreditCard, Crown, Disc3, Facebook, Gauge, Handshake, MapPin, Star, Thermometer, Users, Wrench } from "lucide-react";

const COMPANY = "Anthony's Gold Auto Care";
const MAPS_QUERY = "Anthony's Gold Auto Care, 18355 E Girard Ave #A, Aurora, CO 80013";

export default {
  COMPANY,
  ABBR: "agac",
  NOUN: "shop",
  PHONE: "7208703673",
  PHONE_DISPLAY: "(720) 870-3673",
  EMAIL: "", // Current site uses a comcast.net address; add a branded email once confirmed.
  ADDRESS: "18355 E Girard Ave, Unit A",
  CITY: "Aurora, CO 80013",
  MAPS_QUERY,
  FOUNDED: null,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From a third-party listing on 2026-10-14; confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 179 },
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: { name: "Anthony's Gold", sub: "AUTO CARE · AURORA, CO", icon: Crown },
  ANNOUNCE: "Family owned and locally operated in Aurora · The Golden Standard in Car Services",

  HOURS: [
    ["Monday – Friday", "7:30 am – 5:30 pm"],
    ["Saturday", "Closed"],
    ["Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 7:30 am – 5:30 pm",

  HERO: {
    eyebrow: "AURORA, COLORADO · FAMILY OWNED",
    title: ["Honest auto repair, ", "held to the golden standard."],
    text: "Family-owned and locally operated in Aurora. Transparent pricing, straight answers and a team with more than 70 years of combined experience under the hood.",
    cta: "Request an Appointment",
    card: [
      { icon: Clock, title: "Hours", text: "Mon–Fri, 7:30 am – 5:30 pm" },
      { icon: MapPin, title: "18355 E Girard Ave, Unit A", text: "Aurora, CO 80013" },
      { icon: CreditCard, title: "Easy payment", text: "Visa, Mastercard, Amex, Discover and cash" },
    ],
  },

  STATS: (rating) => [
    ["70+ yrs", "Combined team experience"],
    [rating ? `${rating.rating.toFixed(1)} ★` : "5 ★", "Google rating"],
    ["US · KR · JP", "Makes we service"],
    ["Family", "Owned and operated"],
  ],

  SERVICES: {
    eyebrow: "WHAT WE DO",
    title: ["Everything your car needs, ", "from one honest shop."],
    text: "Routine maintenance, tricky repairs and complete engine work, explained in plain language before anything gets done.",
    cta: "Request this service",
    items: [
      { title: "Auto Repair", desc: "Diagnostics, drivability problems, leaks and the noises that won't go away, fixed right the first time.", icon: Wrench },
      { title: "Auto Maintenance", desc: "Oil changes, fluids, filters and tune-ups on a schedule that keeps small problems small.", icon: Gauge },
      { title: "Engine & Transmission", desc: "Leak repairs, rebuilds and complete engine replacements handled in-house.", icon: Cog },
      { title: "AC & Heating", desc: "Auto air conditioning repair for Colorado summers and heater service for the cold months.", icon: Thermometer },
      { title: "Brake Repair", desc: "Pads, rotors and hydraulics inspected and repaired so you stop with confidence.", icon: Disc3 },
      { title: "Steering & Suspension", desc: "Ball joints, control arms and shocks for a car that drives straight and rides smooth.", icon: CarFront },
      { title: "Diagnostics", desc: "Check-engine lights and electrical gremlins traced with the right equipment.", icon: Car },
      { title: "Second Opinions", desc: "Got a big quote somewhere else? Bring it in and we'll give you an honest look.", icon: Handshake },
    ],
  },

  FEATURE: {
    id: "standard",
    nav: "The Gold Standard",
    eyebrow: "THE GOLDEN STANDARD",
    title: ["Three promises, ", "every visit."],
    text: "It's in the name. These are the standards customers have counted on in Aurora for more than two decades.",
    cards: [
      { name: "Transparent pricing", icon: BadgeDollarSign, lead: "The best prices we can give you, explained up front.", items: ["Clear estimates before work starts", "No upsell pressure", "You approve every repair"] },
      { name: "Experienced hands", icon: Users, lead: "More than 70 years of combined experience.", items: ["Engine and transmission work in-house", "Suspension and steering specialists", "Classic cars welcome, even a '64 Plymouth"] },
      { name: "Every make we know", icon: Car, lead: "American, Korean and Japanese vehicles.", items: ["Ford, Chevy, Dodge, Jeep", "Hyundai and Kia", "Toyota, Honda, Nissan, Subaru"] },
    ],
  },

  PROCESS: {
    eyebrow: "HOW IT WORKS",
    title: ["Straight answers, ", "start to finish."],
    text: "No guesswork and no surprises on the invoice.",
    steps: [
      ["Request a time", "Book online or call the shop and tell us what you're noticing."],
      ["We inspect", "A technician finds the problem and walks you through the options and price."],
      ["You approve", "Nothing gets done until you say yes."],
      ["Back on the road", "Pick up your car with a clear explanation of what was done."],
    ],
  },

  ABOUT: {
    nav: "About",
    eyebrow: "FAMILY OWNED IN AURORA",
    title: ["A neighborhood shop ", "worth its weight in gold."],
    text: [
      "Anthony's Gold Auto Care is family owned and locally operated. Some customers have trusted the shop with their cars since the early 2000s, and they keep coming back for the same reasons: honest work, fair prices and a team that treats you like a neighbor.",
    ],
    badge: ["70+", "Years of combined experience"],
    tiles: [
      { label: "Repair", icon: Wrench },
      { label: "Maintenance", icon: Gauge },
      { label: "Engines", icon: Cog },
      { label: "AC & Heat", icon: Thermometer },
    ],
    credentials: [
      { title: "Family owned", desc: "Locally operated in Aurora, not a chain." },
      { title: "Transparent pricing", desc: "Estimates explained before work begins." },
      { title: "All major makes", desc: "American, Korean and Japanese vehicles." },
      { title: "Flexible payment", desc: "Visa, Mastercard, American Express, Discover and cash." },
    ],
  },

  REVIEWS: {
    title: ["What Aurora drivers ", "say about us."],
    text: "Read what customers say about the shop on Google.",
    quoteSource: "Customer review shown on the current website",
    quotes: [
      ["This place is GOLD!", "Abby A."],
      ["Great work. Thanks Anthony.", "Cliffton H."],
    ],
  },

  BOOK: {
    nav: "Book a Visit",
    eyebrow: "BOOK A VISIT",
    title: ["Skip the phone tag. ", "Request a time online."],
    text: "Tell us about your car and when you'd like to bring it in. We'll call to confirm.",
    points: ["Clear estimates before any work", "Engine and transmission work in-house", "Family owned and locally operated"],
    submit: "Request Appointment",
    note: "We'll call to confirm your time. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Auto Repair", "Auto Maintenance", "Engine & Transmission", "AC & Heating", "Brake Repair", "Steering & Suspension", "Second opinion"] }, { name: "date", label: "Preferred day", type: "date" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Noises, warning lights, leaks, when it started…" },
    ],
  },

  VISIT: {
    nav: "Visit",
    eyebrow: "VISIT THE SHOP",
    title: ["Find us off ", "East Girard Avenue."],
    areas: "Serving Aurora and the surrounding east metro.",
  },

  FOOTER_BLURB: "Family-owned auto repair and maintenance in Aurora, Colorado. The Golden Standard in Car Services.",
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://facebook.com/Anthonys-Gold-Auto-Care-Inc-168721169810350/", icon: Facebook },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
