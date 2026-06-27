"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { SHOP_CATEGORIES } from "@/utils/categorize";
import { cn } from "@/utils/cn";
import styles from "./ShopToolbar.module.css";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "title-asc", label: "Alphabetically, A-Z" },
  { value: "title-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
];

const AVAILABILITY_LABELS = {
  "in-stock": "In stock",
  "out-of-stock": "Out of stock",
};

function scrollShopToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
}

export default function ShopToolbar({ totalCount }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "featured";
  const currentAvailability = searchParams.get("availability") || "";
  const currentTag = searchParams.get("tag") || "";
  const hasActiveFilters = Boolean(currentTag || currentAvailability);

  const navigate = (path) => {
    router.push(path);
    scrollShopToTop();
  };

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page");
    const qs = params.toString();
    navigate(qs ? `/shop?${qs}` : "/shop");
  };

  const clearFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("tag");
    params.delete("availability");
    params.delete("page");
    const qs = params.toString();
    navigate(qs ? `/shop?${qs}` : "/shop");
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.card}>
        <div className={styles.cardHeader}>
          <div className={styles.headerCopy}>
            <p className={styles.eyebrow}>Refine results</p>
            <span className={styles.countBadge}>
              <span className={styles.countValue}>{totalCount}</span>
              {totalCount === 1 ? "product" : "products"}
            </span>
          </div>
          {hasActiveFilters ? (
            <button type="button" className={styles.clearBtn} onClick={clearFilters}>
              Clear all
            </button>
          ) : null}
        </div>

        {hasActiveFilters ? (
          <div className={styles.chips} aria-label="Active filters">
            {currentTag ? (
              <button
                type="button"
                className={styles.chip}
                onClick={() => updateParam("tag", "")}
              >
                {currentTag}
                <span className={styles.chipRemove} aria-hidden="true">
                  ×
                </span>
              </button>
            ) : null}
            {currentAvailability ? (
              <button
                type="button"
                className={styles.chip}
                onClick={() => updateParam("availability", "")}
              >
                {AVAILABILITY_LABELS[currentAvailability] || currentAvailability}
                <span className={styles.chipRemove} aria-hidden="true">
                  ×
                </span>
              </button>
            ) : null}
          </div>
        ) : null}

        <div className={styles.controls}>
          <div className={styles.field}>
            <label htmlFor="shop-filter-category" className={styles.fieldLabel}>
              Category
            </label>
            <div className={styles.selectWrap}>
              <select
                id="shop-filter-category"
                className={cn(styles.select, currentTag && styles.selectActive)}
                value={currentTag}
                onChange={(e) => updateParam("tag", e.target.value)}
                aria-label="Filter by category"
              >
                <option value="">All categories</option>
                {SHOP_CATEGORIES.map((category) => (
                  <option key={category.slug} value={category.label}>
                    {category.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="shop-filter-availability" className={styles.fieldLabel}>
              Stock
            </label>
            <div className={styles.selectWrap}>
              <select
                id="shop-filter-availability"
                className={cn(styles.select, currentAvailability && styles.selectActive)}
                value={currentAvailability}
                onChange={(e) => updateParam("availability", e.target.value)}
                aria-label="Filter by availability"
              >
                <option value="">All items</option>
                <option value="in-stock">In stock</option>
                <option value="out-of-stock">Out of stock</option>
              </select>
            </div>
          </div>

          <div className={styles.field}>
            <label htmlFor="shop-filter-sort" className={styles.fieldLabel}>
              Sort by
            </label>
            <div className={styles.selectWrap}>
              <select
                id="shop-filter-sort"
                className={cn(styles.select, currentSort !== "featured" && styles.selectActive)}
                value={currentSort}
                onChange={(e) => updateParam("sort", e.target.value)}
                aria-label="Sort products"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
