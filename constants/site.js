export const SITE_NAME = "Rajas Wholesale";
export const SITE_TAGLINE = "Bringing bulk to you";
export const SITE_DESCRIPTION =
  "Your trusted wholesale partner for confectionery, drinks, snacks and more. Quality products at competitive prices.";
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const CONTACT = {
  email: "info@rajaswholesale.com",
  phone: "+44 20 1234 5678",
  address: "Unit 8, Grand Union Way, Grand Union Enterprise Park, Southall, UB2 4EX",
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop All", href: "/shop" },
  { label: "Blogs", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact US", href: "/contact" },
];

export const FOOTER_POLICY_LINKS = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Refund policy", href: "/refund-policy" },
  { label: "Shipping policy", href: "/shipping-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Contact information", href: "/contact" },
];

export const PAYMENT_METHODS = [
  "Visa",
  "Mastercard",
  "Amex",
  "PayPal",
  "Apple Pay",
  "Google Pay",
  "Klarna",
  "Shop Pay",
];

export const CATEGORY_SLIDES = [
  { label: "Drinks", href: "/shop?tag=Drinks" },
  { label: "Chocolates", href: "/shop?tag=Chocolates" },
  { label: "Crisps", href: "/shop?tag=Crisps" },
  { label: "Sweets", href: "/shop?tag=Sweets" },
  { label: "Cookies", href: "/shop?tag=Cookies" },
];
