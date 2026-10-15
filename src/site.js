import { Facebook, Star } from "lucide-react";
import logo from "./assets/agac-logo.png";
import logoCard from "./assets/agac-logo-card.webp";

const COMPANY = "Anthony's Gold Auto Care";
const MAPS_QUERY = "Anthony's Gold Auto Care, 18355 E Girard Ave, Aurora, CO 80013";

export default {
  COMPANY,
  ABBR: "agac",
  NOUN: "shop",
  PHONE: "7208703673",
  PHONE_DISPLAY: "(720) 870-3673",
  EMAIL: "", // Current site lists anthonysgold@comcast.net; left off pending the owner's preference.
  ADDRESS: "18355 E Girard Ave, Unit A",
  CITY: "Aurora, CO 80013",
  LANDMARK: "Near Tower & Hampden, behind Kohl's and Aamco",
  MAPS_QUERY,
  GOOGLE_PLACE_ID: "",
  // Shown until live Google data loads. From our lead research on 2026-10-14; confirm before launch.
  FALLBACK_RATING: { rating: 4.8, userRatingCount: 179 },
  END_DATE: "2026-11-20T23:59:59-07:00",

  BRAND: {
    name: "Anthony's Gold",
    logo,
    logoCard,
    logoAlt: "Anthony's Gold Auto Care, Inc. logo: mountains, a red Jeep and a gold star",
  },

  HOURS: [
    ["Monday – Friday", "7:30 am – 5:30 pm"],
    ["Saturday & Sunday", "Closed"],
  ],
  HOURS_SHORT: "Mon–Fri 7:30 am – 5:30 pm",
  PAYMENT: "Visa, Mastercard, Amex, Discover, cash",

  HERO: {
    eyebrow: "Family owned · Aurora, Colorado",
    title: ["The Golden Standard ", "in Car Services."],
    text: "From oil changes to complete engine replacements, Anthony's crew has done it all, with more than 70 years of combined experience and honest, up-front pricing.",
    cta: "Request an Appointment",
    photo: { src: "/photos/shop-front.webp", alt: "Anthony's Gold Auto Care shop on E Girard Ave with a classic Firebird, a red Mustang and a vintage Ford pickup out front" },
  },

  QUICK: [
    ["Open", "Mon–Fri · 7:30 – 5:30"],
    ["Call", "(720) 870-3673"],
    ["Find us", "18355 E Girard Ave, Aurora"],
    ["We work on", "American, Korean & Japanese makes"],
  ],

  SERVICES: {
    eyebrow: "Service bays",
    title: ["Four bays of expertise, ", "one honest shop."],
    text: "Pick what your car needs. Every job starts with a proper diagnosis and a clear price before work begins.",
    items: [
      {
        key: "repair",
        title: "Auto Repair",
        photo: "/photos/repair.webp",
        lead: "In-depth diagnostics first, then a repair that lasts, using NAPA-approved parts. Steering and suspension handled in-house.",
        list: ["Diagnostics & inspections", "Brake work", "Steering & suspension", "Electrical work", "Engine service & repair", "Transmission repair", "AC & heating repair"],
      },
      {
        key: "maintenance",
        title: "Auto Maintenance",
        photo: "/photos/maintenance.webp",
        lead: "Cars, trucks, SUVs and Jeeps. We can set up a regular schedule so you never miss an oil change or spark plug replacement.",
        list: ["Oil changes", "Inspections", "Transmission check-ups", "Air filters", "Hoses & belts", "Bulb replacement", "Wiper blades", "Tire rotation & balancing"],
      },
      {
        key: "engine",
        title: "Engine & Transmission",
        photo: "/photos/transmission.webp",
        lead: "From a check-engine light to a full rebuild or replacement. Automatic and manual transmissions, diagnosed with state-of-the-art equipment.",
        list: ["Check engine lights", "Sensor diagnostics", "Tune-ups", "Timing belts", "Gaskets & leaks", "Engine rebuilds & replacements", "Transmission flushes", "Transmission rebuilds"],
      },
      {
        key: "ac",
        title: "AC & Heating",
        photo: "/photos/ac-heating.webp",
        lead: "Cool in July, warm in January. An AC system loses about 5% of its efficiency a year without service; we win it back.",
        list: ["AC charging & repairs", "Complete diagnostics", "Compressors & evaporators", "Fan replacements", "Coolant service", "Water pumps", "Heater repair"],
      },
    ],
    signs: {
      title: "Heater acting up?",
      items: ["Bad smell from the vents", "Windows fogging up", "Leaking antifreeze", "Burning through coolant"],
    },
  },

  STANDARDS: {
    eyebrow: "Why drivers choose Anthony's",
    title: ["Worth its weight ", "in gold."],
    items: [
      ["70+", "Years of combined experience", "Across the whole crew, on everything from daily drivers to a '64 Plymouth."],
      ["ASE", "Certified Master Technicians", "Trained on today's computerized engines, AC and transmissions."],
      ["NAPA", "Approved parts", "Quality parts and techniques, so repairs last."],
      ["$", "Honest, transparent pricing", "The best price we can give you, quoted up front."],
    ],
  },

  ABOUT: {
    eyebrow: "Family owned & locally operated",
    title: ["Neighbors first, ", "mechanics second."],
    text: [
      "Anthony's Gold Auto Care is a family-owned shop run by owner Anthony Gonzales. We live in Aurora just like our customers, and when you come through our door we treat you like family.",
      "That means honest answers, fair prices and work done right, whether it's a quick control-arm swap or a complete engine job.",
    ],
    photo: { src: "/photos/the-crew.webp", alt: "Three Anthony's Gold Auto Care mechanics in uniform standing outside the shop's bay door" },
    caption: "The crew outside the shop on E Girard Ave",
    owner: ["Anthony Gonzales", "Owner"],
  },

  REVIEWS: {
    title: ["What Aurora drivers ", "say about us."],
    text: "A few words from customers, as shown on the shop's current website.",
    quoteSource: "Customer review, from the current website",
    quotes: [
      ["My son usually works on my car, but had a major oil leak that he did feel comfortable working on. I was recommended Anthony's Gold. Was very happy with the work performed. They fixed all the oil leaks and cleaned the engine. It looks like a new car. I am so happy with the work performed and an excellent warranty. Highly recommend. Plus the work was completed earlier than expected too!", "Kristina J."],
      ["These guys are awesome! They did a considerable amount of work on my SUV on time and they worked with me on the price. Anthony was honest and provided excellent customer service. They were all around honest, knowledgeable, and very fair priced, the most important traits of a good mechanic. My SUV is running great! Thank you!!", "Elleissa J."],
      ["Anthony is awesome. I’ve taken two different vehicles here and every time it’s in and out quick.  it’s the price that he quoted me and the service is amazing. My fiancé has taken multiple of his cars here for years. Highly recommend.", "Amanda M."],
      ["Took my 64 Plymouth over to get transmission (push button) leak checked out. They repaired that  and found another leak on the engine which they sealed up. Great service , friendly people, good prices! Give them a try you won't regret it.", "Lewis B."],
      ["Went in today to install my front left lower control arm. They Guys were really nice and direct. Finished under an hour and a half. Great service. Thanks Guys!", "Mike R."],
      ["Great work. Thanks Anthony.", "Cliffton H."],
    ],
  },

  BOOK: {
    nav: "Book a Visit",
    eyebrow: "Book a visit",
    title: ["Skip the phone tag. ", "Request a time online."],
    text: "Tell us about your car and when you'd like to bring it in. We'll call to confirm.",
    points: ["Clear price before any work", "Engine & transmission work in-house", "Family owned and locally operated"],
    submit: "Request Appointment",
    note: "We'll call to confirm your time. Need it sooner? Call",
    fields: [
      [{ name: "name", label: "Name", required: true, autoComplete: "name" }, { name: "phone", label: "Phone", type: "tel", required: true, autoComplete: "tel" }],
      [{ name: "email", label: "Email", type: "email", autoComplete: "email" }, { name: "vehicle", label: "Vehicle", placeholder: "Year, make, model" }],
      [{ name: "service", label: "Service", type: "select", placeholder: "Choose a service…", options: ["Not sure / diagnosis", "Auto Repair", "Auto Maintenance", "Engine & Transmission", "AC & Heating"] }, { name: "date", label: "Preferred day", type: "date" }],
      { name: "notes", label: "What's going on?", type: "textarea", placeholder: "Noises, warning lights, leaks, when it started…" },
    ],
  },

  VISIT: {
    eyebrow: "Visit the shop",
    title: ["Find us off ", "Tower & Hampden."],
    areas: "Serving Aurora and the east Denver metro.",
  },

  FOOTER_BLURB: "Family-owned auto repair and maintenance in Aurora, Colorado. The Golden Standard in Car Services.",
  SOCIAL_LINKS: [
    { name: "Facebook", url: "https://www.facebook.com/Anthonys-Gold-Auto-Care-Inc-168721169810350/", icon: Facebook, top: true },
    { name: "Google", url: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAPS_QUERY)}`, icon: Star },
  ],
};
