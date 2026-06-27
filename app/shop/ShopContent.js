"use client";

import { useSearchParams } from "next/navigation";
import ProductGrid from "@/components/Products/ProductGrid";
import ShopToolbar from "@/components/Products/ShopToolbar";
import Pagination from "@/components/Products/Pagination";
import {
  PRODUCTS,
  filterProducts,
  sortProducts,
  paginateProducts,
} from "@/utils/products";

export default function ShopContent() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search") || "";
  const tag = searchParams.get("tag") || "";
  const availability = searchParams.get("availability") || "";
  const sort = searchParams.get("sort") || "featured";
  const page = parseInt(searchParams.get("page") || "1", 10);

  let filtered = filterProducts(PRODUCTS, {
    search,
    tag,
    availability,
  });

  filtered = sortProducts(filtered, sort);

  const { items, currentPage, totalPages, totalCount } = paginateProducts(
    filtered,
    page
  );

  const buildPageUrl = (pageNum) => {
    const params = new URLSearchParams(searchParams.toString());
    if (pageNum > 1) {
      params.set("page", String(pageNum));
    } else {
      params.delete("page");
    }
    const qs = params.toString();
    return qs ? `/shop?${qs}` : "/shop";
  };

  return (
    <>
      <ShopToolbar totalCount={totalCount} />
      <ProductGrid products={items} priorityFirst={currentPage === 1} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        buildPageUrl={buildPageUrl}
      />
    </>
  );
}
