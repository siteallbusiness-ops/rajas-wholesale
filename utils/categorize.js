export const SHOP_CATEGORIES = [
  {
    slug: "drinks",
    label: "Drinks",
    href: "/shop?tag=Drinks",
    aliases: ["drinks", "beverages", "beverage"],
    accent: "#2db2ff",
  },
  {
    slug: "chocolates",
    label: "Chocolates",
    href: "/shop?tag=Chocolates",
    aliases: ["chocolates", "chocolate"],
    accent: "#6b3a2a",
  },
  {
    slug: "crisps",
    label: "Crisps",
    href: "/shop?tag=Crisps",
    aliases: ["crisps", "chips"],
    accent: "#d97706",
  },
  {
    slug: "sweets",
    label: "Sweets & Candy",
    href: "/shop?tag=Sweets",
    aliases: ["sweets", "candy", "sweet"],
    accent: "#c41e3a",
  },
  {
    slug: "cookies",
    label: "Cookies & Biscuits",
    href: "/shop?tag=Cookies",
    aliases: ["cookies", "biscuits", "cookie", "biscuit"],
    accent: "#8b5a2b",
  },
  {
    slug: "snacks",
    label: "Snacks",
    href: "/shop?tag=Snacks",
    aliases: ["snacks", "snack"],
    accent: "#ca8a04",
  },
  {
    slug: "gum",
    label: "Gum",
    href: "/shop?tag=Gum",
    aliases: ["gum"],
    accent: "#0d9488",
  },
  {
    slug: "health",
    label: "Health & Pharmacy",
    href: "/shop?tag=Health",
    aliases: ["health", "pharmacy"],
    accent: "#2563eb",
  },
  {
    slug: "smoking",
    label: "Smoking Accessories",
    href: "/shop?tag=Smoking",
    aliases: ["smoking", "smoking accessories"],
    accent: "#4b5563",
  },
  {
    slug: "general",
    label: "General",
    href: "/shop?tag=General",
    aliases: ["general"],
    accent: "#6b7280",
  },
];

const CATEGORY_LABELS = SHOP_CATEGORIES.map((category) => category.label);

const HANDLE_CATEGORIES = {
  "a-w-root-beer-usa": ["Drinks"],
  "bounty": ["Chocolates"],
  "bounty-trio-box": ["Chocolates", "Snacks"],
  "brain-licker-blue": ["Sweets"],
  "cadbury-wispa-bars-48pk": ["Chocolates"],
  "carrier-bag": ["General"],
  "coca-cola-cans-24x330ml": ["Drinks"],
  "design-clipper-lighters-x48": ["Smoking"],
  "feastables-mr-beast-chocolate": ["Chocolates"],
  "hersheys-all": ["Chocolates"],
  "japanese-coca-cola": ["Drinks"],
  "japanese-fanta-all-flavours": ["Drinks"],
  "jellyman-fruity-jellies-20pk": ["Sweets"],
  "jolly-rancher-hard": ["Sweets"],
  "jolly-rancher-lollypop-all": ["Sweets"],
  "juicy-drop-dip-n-stix-usa": ["Sweets"],
  "keebler-m-m-chips-deluxe-minis": ["Cookies"],
  "kitkat-4fingers-24pk": ["Chocolates"],
  "laffy-taffy-all": ["Sweets"],
  "lotte-hersheys-chocolate-chip-cookies-japanese": ["Cookies"],
  "m-ms-usa-24pk": ["Chocolates"],
  "mars-std-40pk": ["Chocolates"],
  "maxixan-coca-cola-fanta-glass-bottle-range-355ml-mexico-import": ["Drinks"],
  "mike-n-ike-minis-24pk": ["Sweets"],
  "mike-n-ike-theatre-box": ["Sweets"],
  "milkybar-choo-ind": ["Chocolates"],
  "milkyway-crispy-roll": ["Chocolates"],
  "monster-energy-m3-extra-strength-glass-bottle-import-from-japan": ["Drinks"],
  "nerds-rope-all-flavours": ["Sweets"],
  "nurofen-express": ["Health"],
  "ocb-black-premium-king-size-slim-rolling-papers": ["Smoking"],
  "paracetamol": ["Health"],
  "raw-rolling-papers-all-accessories": ["Smoking"],
  "red-bull-250ml-24pk": ["Drinks"],
  "rizla-rolling-papers": ["Smoking"],
  "samyang-buldak-carbonara-noodles-pink": ["Snacks"],
  "snickers": ["Chocolates"],
  "sour-patch-kids-bags": ["Sweets"],
  "sour-patch-theatre-boxes-all": ["Sweets"],
  "sovereign-turbojet-spray": ["Smoking"],
  "sunkist-drink-usa": ["Drinks"],
  "swan-filter-tips-all": ["Smoking"],
  "takis-fuego-crisp-15pk": ["Crisps"],
  "takis-3-25oz": ["Crisps"],
  "twix-iced-coffee": ["Drinks"],
  "twix-std-30pk": ["Chocolates"],
  "wrigleys-extra-gum-30pk": ["Gum"],
};

const TITLE_RULES = [
  { category: "Drinks", pattern: /\b(coca[\s-]?cola|fanta|pepsi|sprite|sunkist|red bull|monster energy|root beer|a&w|cola cans|iced coffee|glass bottle range)\b/i },
  { category: "Chocolates", pattern: /\b(chocolate|hershey|cadbury|kitkat|mars|snickers|bounty|feastable|milkybar|milkyway|m&m'?s)\b/i },
  { category: "Crisps", pattern: /\b(takis|crisps|chips deluxe)\b/i },
  { category: "Cookies", pattern: /\b(oreo|cookie|biscuit|keebler|wafer roll|wafer cube|cocoa crisp roll)\b/i },
  { category: "Sweets", pattern: /\b(candy|jolly rancher|laffy taffy|nerds|sour patch|brain licker|juicy drop|jellies|mike n ike|dip.?n.?stix)\b/i },
  { category: "Snacks", pattern: /\b(noodles|ramen|buldak|soft cakes|oreo cup)\b/i },
  { category: "Gum", pattern: /\b(gum|wrigley)\b/i },
  { category: "Health", pattern: /\b(paracetamol|nurofen|pharmacy)\b/i },
  { category: "Smoking", pattern: /\b(lighter|rolling paper|rizla|ocb|raw|swan filter|turbojet)\b/i },
  { category: "General", pattern: /\b(carrier bag|plastic bag)\b/i },
];

const LEGACY_TAG_MAP = {
  beverages: "Drinks",
  beverage: "Drinks",
  drinks: "Drinks",
  chocolate: "Chocolates",
  chocolates: "Chocolates",
  crisps: "Crisps",
  chips: "Crisps",
  candy: "Sweets",
  sweets: "Sweets",
  cookies: "Cookies",
  biscuits: "Cookies",
  biscuit: "Cookies",
  snacks: "Snacks",
  snack: "Snacks",
  gum: "Gum",
  health: "Health",
  pharmacy: "Health",
  smoking: "Smoking",
  "smoking accessories": "Smoking",
  general: "General",
  imports: "Snacks",
  american: "Snacks",
  cakes: "Cookies",
};

function normalizeLegacyTag(tag) {
  const key = tag.trim().toLowerCase();
  return LEGACY_TAG_MAP[key] || (CATEGORY_LABELS.includes(tag) ? tag : null);
}

function inferCategoriesFromTitle(product) {
  const text = `${product.title} ${product.description || ""} ${product.handle}`;
  const categories = new Set();

  for (const rule of TITLE_RULES) {
    if (rule.pattern.test(text)) {
      categories.add(rule.category);
    }
  }

  return [...categories];
}

export function categorizeProduct(product) {
  const categories = new Set();

  if (HANDLE_CATEGORIES[product.handle]) {
    HANDLE_CATEGORIES[product.handle].forEach((category) => categories.add(category));
  }

  inferCategoriesFromTitle(product).forEach((category) => categories.add(category));

  (product.tags || []).forEach((tag) => {
    const normalized = normalizeLegacyTag(tag);
    if (normalized) categories.add(normalized);
  });

  if (categories.size === 0) {
    categories.add("General");
  }

  return [...categories].sort((a, b) => a.localeCompare(b));
}

export function matchesCategory(product, tagFilter) {
  if (!tagFilter) return true;

  const filter = tagFilter.trim().toLowerCase();
  const productTags = categorizeProduct(product).map((tag) => tag.toLowerCase());

  if (productTags.includes(filter)) {
    return true;
  }

  const category = SHOP_CATEGORIES.find(
    (item) =>
      item.slug === filter ||
      item.label.toLowerCase() === filter ||
      item.aliases.includes(filter)
  );

  if (!category) {
    return productTags.includes(filter);
  }

  return productTags.includes(category.label.toLowerCase());
}

export function getCategoryByLabel(label) {
  return SHOP_CATEGORIES.find(
    (category) => category.label.toLowerCase() === label.toLowerCase()
  );
}
