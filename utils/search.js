import {
  PRODUCTS,
  getFeaturedProducts,
  getProductVendor,
} from "@/utils/products";
import { categorizeProduct, SHOP_CATEGORIES } from "@/utils/categorize";

export const POPULAR_SEARCH_TERMS = [
  { label: "Oreo", query: "oreo" },
  { label: "Coca-Cola", query: "coca cola" },
  { label: "Takis", query: "takis" },
  { label: "Hershey's", query: "hershey" },
  { label: "Red Bull", query: "red bull" },
  { label: "Monster Energy", query: "monster" },
];

function scoreProduct(product, query) {
  const q = query.toLowerCase().trim();
  if (!q) return 0;

  let score = 0;
  const title = product.title.toLowerCase();
  const handle = product.handle.toLowerCase();
  const vendor = getProductVendor(product).toLowerCase();
  const description = (product.description || "").toLowerCase();
  const categories = categorizeProduct(product).map((category) => category.toLowerCase());

  if (title === q) score += 200;
  else if (title.startsWith(q)) score += 100;
  else if (title.includes(q)) score += 60;

  const words = title.split(/[\s&'/-]+/).filter(Boolean);
  if (words.some((word) => word.startsWith(q))) score += 40;

  if (handle.includes(q.replace(/\s+/g, "-"))) score += 25;
  if (vendor.includes(q)) score += 20;

  categories.forEach((category) => {
    if (category === q) score += 30;
    else if (category.startsWith(q)) score += 25;
    else if (category.includes(q)) score += 15;
  });

  if (description.includes(q)) score += 10;
  if (!product.soldOut) score += 5;

  return score;
}

function getMatchingCategories(query) {
  const q = query.toLowerCase().trim();
  if (!q) return SHOP_CATEGORIES.slice(0, 5);

  return SHOP_CATEGORIES.filter((category) => {
    const label = category.label.toLowerCase();
    return (
      label.includes(q) ||
      category.aliases.some((alias) => alias.includes(q) || q.includes(alias))
    );
  }).slice(0, 4);
}

export function getSearchSuggestions(query, limit = 6) {
  const trimmed = query.trim();

  if (!trimmed) {
    return {
      products: getFeaturedProducts().slice(0, 4),
      categories: SHOP_CATEGORIES.slice(0, 5),
      popularTerms: POPULAR_SEARCH_TERMS,
      totalMatches: PRODUCTS.length,
      isDefault: true,
    };
  }

  const scored = PRODUCTS.map((product) => ({
    product,
    score: scoreProduct(product, trimmed),
  }))
    .filter(({ score }) => score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || a.product.title.localeCompare(b.product.title)
    );

  return {
    products: scored.slice(0, limit).map(({ product }) => product),
    categories: getMatchingCategories(trimmed),
    popularTerms: [],
    totalMatches: scored.length,
    isDefault: false,
  };
}

export function getShopSearchUrl(query) {
  const trimmed = query.trim();
  return trimmed
    ? `/shop?search=${encodeURIComponent(trimmed)}`
    : "/shop";
}
