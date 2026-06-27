import {
  PRODUCTS as RAW_PRODUCTS,
  FEATURED_PRODUCT_HANDLES,
  PRODUCTS_PER_PAGE,
} from "@/constants/products";
import { SITE_NAME } from "@/constants/site";
import { categorizeProduct, matchesCategory } from "@/utils/categorize";

export { FEATURED_PRODUCT_HANDLES, PRODUCTS_PER_PAGE };

export const PRODUCTS = RAW_PRODUCTS.map((product) => ({
  ...product,
  tags: categorizeProduct(product),
}));

const LEGACY_VENDOR_NAMES = new Set([
  "sweetbox wholesale",
  "my store",
]);

export function getProductVendor(product) {
  const vendor = product?.vendor?.trim();
  if (!vendor || LEGACY_VENDOR_NAMES.has(vendor.toLowerCase())) {
    return SITE_NAME;
  }
  return vendor;
}

export function getProductByHandle(handle) {
  return PRODUCTS.find((product) => product.handle === handle);
}

export function getFeaturedProducts() {
  return FEATURED_PRODUCT_HANDLES.map((handle) => getProductByHandle(handle)).filter(
    Boolean
  );
}

export function filterProducts(products, { availability, minPrice, maxPrice, tag, search }) {
  return products.filter((product) => {
    if (search) {
      const query = search.toLowerCase();
      const categories = categorizeProduct(product);
      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.description?.toLowerCase().includes(query) ||
        product.vendor?.toLowerCase().includes(query) ||
        categories.some((category) => category.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (tag && !matchesCategory(product, tag)) {
      return false;
    }

    if (availability === "in-stock" && product.soldOut) return false;
    if (availability === "out-of-stock" && !product.soldOut) return false;

    if (minPrice != null && product.price < minPrice) return false;
    if (maxPrice != null && product.price > maxPrice) return false;

    return true;
  });
}

export function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "title-asc":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    case "title-desc":
      return sorted.sort((a, b) => b.title.localeCompare(a.title));
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    default:
      return sorted;
  }
}

export function paginateProducts(products, page, perPage = PRODUCTS_PER_PAGE) {
  const totalPages = Math.max(1, Math.ceil(products.length / perPage));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * perPage;
  const items = products.slice(start, start + perPage);

  return { items, currentPage, totalPages, totalCount: products.length };
}

export function getDefaultVariant(product) {
  return product.variants.find((v) => v.available) || product.variants[0];
}

export function getRelatedProducts(product, limit = 4) {
  const categories = categorizeProduct(product);

  if (!categories.length) {
    return PRODUCTS.filter((p) => p.id !== product.id).slice(0, limit);
  }

  return PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      categorizeProduct(p).some((category) => categories.includes(category))
  ).slice(0, limit);
}
