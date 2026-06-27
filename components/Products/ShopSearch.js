"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import SearchBox from "@/components/Search/SearchBox";
import styles from "./ShopSearch.module.css";

export default function ShopSearch() {
  const searchParams = useSearchParams();
  const urlSearch = searchParams.get("search") || "";
  const [draftQuery, setDraftQuery] = useState(null);
  const query = draftQuery ?? urlSearch;

  return (
    <div className={styles.wrap}>
      <SearchBox
        key={urlSearch}
        value={query}
        onChange={setDraftQuery}
        variant="shop"
        placeholder="Search products, brands, categories..."
      />
    </div>
  );
}
