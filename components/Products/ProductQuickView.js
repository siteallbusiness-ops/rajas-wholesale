"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useQuickViewStore } from "@/store/quickViewStore";
import { useScrollLock } from "@/hooks/useScrollLock";
import ProductForm from "./ProductForm";
import { cn } from "@/utils/cn";
import styles from "./ProductQuickView.module.css";

function CloseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ProductQuickView() {
  const product = useQuickViewStore((state) => state.product);
  const closeQuickView = useQuickViewStore((state) => state.closeQuickView);
  const isOpen = Boolean(product);

  useScrollLock(isOpen);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") closeQuickView();
    };

    if (!isOpen) return undefined;

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeQuickView]);

  if (!product) return null;

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
        <div className={styles.sheetHeader}>
          <span className={styles.sheetHandle} aria-hidden="true" />
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeQuickView}
            aria-label="Close quick view"
          >
            <CloseIcon />
          </button>
        </div>

        <div className={styles.modalBody}>
          <div className={styles.layout}>
            <div className={styles.imageCol}>
              {product.image ? (
                <div className={styles.imageWrap}>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
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
                variant="drawer"
                onAdded={closeQuickView}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
