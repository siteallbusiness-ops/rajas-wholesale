import { PRODUCTS, FEATURED_PRODUCT_HANDLES, PRODUCTS_PER_PAGE } from "@/constants/products";

export { PRODUCTS, FEATURED_PRODUCT_HANDLES, PRODUCTS_PER_PAGE };

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
      const matchesSearch =
        product.title.toLowerCase().includes(query) ||
        product.tags.some((t) => t.toLowerCase().includes(query));
      if (!matchesSearch) return false;
    }

    if (tag) {
      const tagLower = tag.toLowerCase();
      const hasTag = product.tags.some((t) => t.toLowerCase() === tagLower);
      if (!hasTag) return false;
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
  if (!product.tags?.length) {
    return PRODUCTS.filter((p) => p.id !== product.id).slice(0, limit);
  }

  return PRODUCTS.filter(
    (p) =>
      p.id !== product.id &&
      p.tags.some((tag) => product.tags.includes(tag))
  ).slice(0, limit);
}
