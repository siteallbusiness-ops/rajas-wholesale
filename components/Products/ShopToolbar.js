"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./ShopToolbar.module.css";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "title-asc", label: "Alphabetically, A-Z" },
  { value: "title-desc", label: "Alphabetically, Z-A" },
  { value: "price-asc", label: "Price, low to high" },
  { value: "price-desc", label: "Price, high to low" },
];

export default function ShopToolbar({ totalCount }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get("sort") || "featured";
  const currentAvailability = searchParams.get("availability") || "";

  const updateParam = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("page");
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className={styles.toolbar}>
      <div className={styles.filters}>
        <span className={styles.filterLabel}>Filter:</span>
        <select
          className={styles.select}
          value={currentAvailability}
          onChange={(e) => updateParam("availability", e.target.value)}
          aria-label="Filter by availability"
        >
          <option value="">Availability</option>
          <option value="in-stock">In stock</option>
          <option value="out-of-stock">Out of stock</option>
        </select>
      </div>

      <div className={styles.right}>
        <label className={styles.sortLabel}>
          Sort by:
          <select
            className={styles.select}
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
        </label>
        <span className={styles.count}>{totalCount} products</span>
      </div>
    </div>
  );
}
