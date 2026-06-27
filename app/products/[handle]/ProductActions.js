"use client";

import ProductForm from "@/components/Products/ProductForm";
import styles from "./ProductActions.module.css";

export default function ProductActions({ product }) {
  return (
    <div className={styles.actions}>
      <ProductForm product={product} showPrice />
    </div>
  );
}
