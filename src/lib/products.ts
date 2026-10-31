/**
 * What Imli does today, checked against the code in the ImliPOS monorepo.
 * Move an item out of UPCOMING only once it ships, and keep claims to what the
 * apps do: the kiosk needs a connection to place orders, for example.
 */
export interface Feature {
  title: string;
  body: string;
}

export interface Question {
  q: string;
  a: string;
}

export interface Product {
  slug: string;
  name: string;
  /** What it is, in two or three words. */
  kind: string;
  runsOn: string;
  /** The page headline: what changes for the restaurant. */
  headline: string;
  summary: string;
  features: readonly Feature[];
  questions: readonly Question[];
}

export const PRODUCTS: readonly Product[] = [
  {
    slug: "pos",
    name: "ImliPOS",
    kind: "Billing counter",
    runsOn: "Windows 10 or 11 PC",
    headline: "Bill at the counter, with or without the internet.",
    summary:
      "ImliPOS saves every bill on the counter first and syncs it to the cloud later, so a dropped connection never stops a rush.",
    features: [
      {
        title: "Keeps billing offline",
        body: "Bills, KOTs and payments are written to the counter's own database first. When the connection returns, everything syncs on its own.",
      },
      {
        title: "Dine-in, takeaway and delivery",
        body: "Open tables, transfer, merge and split them, or ring up a parcel order from the same screen.",
      },
      {
        title: "KOTs to the right kitchen",
        body: "Each item prints to the station that cooks it, so the tandoor never gets the dessert ticket.",
      },
      {
        title: "GST on every bill",
        body: "CGST and SGST are worked out for you, with gap-free bill numbers.",
      },
      {
        title: "Cash, UPI and card",
        body: "Settle a bill the way the guest wants to pay, and refund it properly when you need to.",
      },
      {
        title: "Shifts and day-end",
        body: "Open and close cash drawers by shift, and close the day with a printed summary.",
      },
      {
        title: "Kiosk orders at the counter",
        body: "A guest who chooses to pay at the counter on the kiosk shows up in a queue on the POS, ready to settle.",
      },
      {
        title: "Sold-out items, marked",
        body: "Cashiers see what has run out before they take the order.",
      },
    ],
    questions: [
      {
        q: "What happens to bills when the internet is down?",
        a: "Nothing changes at the counter. Bills are stored on the PC and sent to Imli CMP as soon as the connection is back.",
      },
      {
        q: "Which printers does it work with?",
        a: "Thermal bill and KOT printers, in 80 mm and 58 mm. Talk to us about the models you already have.",
      },
      {
        q: "Can staff log in while we are offline?",
        a: "Yes. Staff PINs are checked on the counter itself, so a cashier can start a shift with the internet down.",
      },
    ],
  },
  {
    slug: "kiosk",
    name: "Imli Kiosk",
    kind: "Self-order touchscreen",
    runsOn: "Android kiosk",
    headline: "Let guests order and pay on their own.",
    summary:
      "Put a self-order screen in your lobby and take the queue off your counter. Guests browse, customise and pay, and the token slip prints itself.",
    features: [
      {
        title: "Order without staff",
        body: "Guests choose dine-in or takeaway, browse by category and build their order on a large touchscreen.",
      },
      {
        title: "Variants, add-ons and combos",
        body: "Sizes, extras and combo offers you set up in the menu appear on the kiosk as simple choices.",
      },
      {
        title: "UPI QR or pay at the counter",
        body: "Take UPI through Razorpay, PhonePe or Paytm, send guests to the counter, or offer both.",
      },
      {
        title: "Token slips print automatically",
        body: "The moment an order is confirmed, the guest gets a token to collect it with.",
      },
      {
        title: "KOTs for every station",
        body: "The kitchen gets its tickets straight away, split by the station that cooks each item.",
      },
      {
        title: "Sold-out items update live",
        body: "When something runs out, guests can no longer order it.",
      },
    ],
    questions: [
      {
        q: "Do I need a separate menu for the kiosk?",
        a: "No. The kiosk shows the same menu you manage in Imli CMP for every other screen.",
      },
      {
        q: "What happens if the internet drops?",
        a: "The menu stays on screen through a short outage, but placing an order needs a connection. If the kiosk cannot reach Imli, it asks guests to order at the counter, where ImliPOS keeps billing.",
      },
      {
        q: "Can guests customise items?",
        a: "Yes. The add-ons and variants you set up in the menu appear on the kiosk.",
      },
    ],
  },
  {
    slug: "menu-display",
    name: "Imli Menu Display",
    kind: "Digital menu boards",
    runsOn: "Android TV or Android TV box",
    headline: "Change a price once. Every board updates.",
    summary:
      "Drive the screens above your counter from the same menu the POS and kiosk use. No more reprinting boards or editing slides by hand.",
    features: [
      {
        title: "Follows your menu",
        body: "Every screen shows the central menu, so prices and items always match the bill.",
      },
      {
        title: "Sold-out items hide themselves",
        body: "When an item runs out, it disappears from the board.",
      },
      {
        title: "Several screens, several sections",
        body: "Give each screen in an outlet its own layout and its own part of the menu.",
      },
      {
        title: "Images and video",
        body: "Mix menu sections with your own promotional images and video.",
      },
      {
        title: "Keeps playing offline",
        body: "The last board and its media are stored on the device, so a screen stays lit through an outage, even after a restart.",
      },
    ],
    questions: [
      {
        q: "What hardware do I need?",
        a: "An Android TV, or an Android TV box plugged into the screen you already have.",
      },
      {
        q: "Does a price change need someone to visit the screen?",
        a: "No. Publish the change in Imli CMP and each board updates itself.",
      },
    ],
  },
  {
    slug: "cmp",
    name: "Imli CMP",
    kind: "Cloud HQ",
    runsOn: "Any browser",
    headline: "Run every outlet from one place.",
    summary:
      "Build the menu once, manage devices and staff, and watch orders and sales from every outlet as they happen.",
    features: [
      {
        title: "One menu for every screen",
        body: "Build categories, items, variants, add-ons and combos here, then publish them to the POS, kiosk and menu boards.",
      },
      {
        title: "Live orders",
        body: "See what every outlet is selling as the orders come in.",
      },
      {
        title: "Reports that match the day",
        body: "Sales, items, categories, payments, hours, tax, discounts, voids, staff and shifts.",
      },
      {
        title: "Kitchen insights",
        body: "Live numbers and a demand forecast that helps you plan what to prepare.",
      },
      {
        title: "Staff and devices",
        body: "Invite owners, managers, analysts and staff, and activate each counter, kiosk and screen with a code.",
      },
      {
        title: "Audit trail",
        body: "See who changed what, so a question about a void has an answer.",
      },
    ],
    questions: [
      {
        q: "How do I get started?",
        a: "Create an account, add your restaurant and build your menu. You can then activate devices one by one.",
      },
      {
        q: "Can I manage more than one outlet?",
        a: "Yes. Each outlet has its own devices and licences, and you see them all from one account.",
      },
    ],
  },
];

export const UPCOMING: readonly Feature[] = [
  { title: "Imli KDS", body: "Kitchen display" },
  { title: "Imli Captain", body: "Table ordering for staff" },
  { title: "Imli QR", body: "Scan-and-order for diners" },
  { title: "Imli Connect", body: "Aggregator orders in one place" },
  { title: "Imli Inventory", body: "Stock and recipes" },
  { title: "Imli CRM", body: "Customers and loyalty" },
];

export const HOME_QUESTIONS: readonly Question[] = [
  {
    q: "What is Imli?",
    a: "Imli is point of sale software for restaurants, made by ARCKS Technosoft Private Limited. It covers the billing counter, self-order kiosks and digital menu boards, all run from one menu in one cloud account.",
  },
  {
    q: "Do I need all four products?",
    a: "No. Use one or all of them. Each is licensed separately, so you can start with the POS and add a kiosk later.",
  },
  {
    q: "How is Imli sold?",
    a: "Each product is a one-year software licence per device or screen, bought in Imli CMP and delivered online as an activation code.",
  },
  {
    q: "Does it take Swiggy and Zomato orders?",
    a: "Not yet. Aggregator orders are planned as Imli Connect.",
  },
  {
    q: "Is there a kitchen display?",
    a: "Not yet. Kitchens get printed KOTs today, routed by station. Imli KDS is planned.",
  },
];

export function productBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
