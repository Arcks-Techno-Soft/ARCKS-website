export const SITE_URL = "https://www.arckstechnosoft.com";

/** Imli CMP: login and sign-up share this one entry. */
export const SIGN_IN_URL = "https://cmp.imlipos.com/login";

export const SUPPORT_EMAIL = "support@arckstechnosoft.com";
export const PHONE_DISPLAY = "+91 97414 52947";
export const PHONE_HREF = "tel:+919741452947";
export const SUPPORT_HOURS = "Mon – Sat, 9:00 AM – 9:00 PM";
export const ADDRESS =
  "2nd floor, 259, 3rd Main Rd, above SBI, opp. BMTC Bus Stop, Kumaraswamy Layout 2nd Stage, ISRO Layout, Bengaluru, Karnataka 560078";

export const DEMO_MAILTO = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent("Imli demo request")}`;

/** The policies live with the product, so there is only ever one copy of them. */
export const LEGAL_LINKS = [
  { href: "https://www.imlipos.com/terms", label: "Terms & Conditions" },
  { href: "https://www.imlipos.com/privacy", label: "Privacy Policy" },
  { href: "https://www.imlipos.com/refunds", label: "Refund & Cancellation Policy" },
] as const;
