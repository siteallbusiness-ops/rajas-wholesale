"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useQuickViewStore } from "@/store/quickViewStore";
import { useScrollLock } from "@/hooks/useScrollLock";
import ProductForm from "./ProductForm";
import { cn } from "@/utils/cn";
import styles from "./ProductQuickView.module.css";

export default function ProductQuickView() {
  const product = useQuickViewStore((state) => state.product);
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView);
  const isOpen = Boolean(product);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") closeQuickView();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen, closeQuickView]);

  if (!product) return null;

  const handleAdded = () => {
    closeQuickView();
  };

  return (
    <>
      <div
        className={cn(styles.overlay, isOpen && styles.overlayOpen)}
        onClick={closeQuickView}
        aria-hidden="true"
      />

      <div
        className={cn(styles.modal, isOpen && styles.modalOpen)}
        role="dialog"
        aria-modal="true"
        aria-labelledby="quick-view-title"
      >
        <button
          type="button"
          className={styles.closeBtn}
          onClick={closeQuickView}
          aria-label="Close quick view"
        >
          ✕
        </button>

        <div className={styles.layout}>
          <div className={styles.imageCol}>
            {product.image ? (
              <div className={styles.imageWrap}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 90vw, 400px"
                  className={styles.image}
                />
              </div>
            ) : (
              <div className={styles.noImage}>No image</div>
            )}
          </div>

          <div className={styles.detailsCol}>
            <h2 id="quick-view-title" className={styles.title}>
              {product.title}
            </h2>

            <ProductForm
              product={product}
              showPrice
              onAdded={handleAdded}
            />
          </div>
        </div>
      </div>
    </>
  );
}
