"use client";

import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import { getDefaultVariant } from "@/utils/products";
import { formatPrice } from "@/utils/format";
import { cn } from "@/utils/cn";
import styles from "./ProductForm.module.css";

export default function ProductForm({
  product,
  showPrice = false,
  onAdded,
}) {
  const addItem = useCartStore((state) => state.addItem);
  const [selectedVariantId, setSelectedVariantId] = useState(
    getDefaultVariant(product)?.id || product.variants[0]?.id
  );
  const [quantity, setQuantity] = useState(1);

  const selectedVariant =
    product.variants.find((v) => v.id === selectedVariantId) ||
    product.variants[0];

  const isSoldOut = !selectedVariant?.available;
  const optionName = product.options[0]?.name || "Option";

  const displayPrice = selectedVariant?.price ?? product.price;
  const showCompare =
    selectedVariant?.compareAtPrice &&
    product.badge === "sale";

  const handleQuantityChange = (delta) => {
    setQuantity((prev) => Math.max(1, prev + delta));
  };

  const handleAddToCart = () => {
    if (!selectedVariant || !selectedVariant.available) return;

    addItem({
      productId: product.id,
      variantId: selectedVariant.id,
      handle: product.handle,
      title: product.title,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      image: product.image,
      quantity,
    });

    onAdded?.();
  };

  return (
    <div className={styles.form}>
      {showPrice && (
        <div className={styles.priceSection}>
          <div className={styles.priceRow}>
            {showCompare && (
              <span className={styles.comparePrice}>
                {formatPrice(selectedVariant.compareAtPrice)}
              </span>
            )}
            <span className={styles.price}>
              {product.priceFrom
                ? formatPrice(displayPrice, true)
                : formatPrice(displayPrice)}
            </span>
            {isSoldOut && (
              <span className={styles.soldBadge}>Sold out</span>
            )}
          </div>
          <p className={styles.taxes}>Taxes included.</p>
        </div>
      )}

      {product.hasVariants && product.variants.length > 1 && (
        <fieldset className={styles.variantGroup}>
          <legend className={styles.label}>{optionName}</legend>
          <div className={styles.variantPills} role="radiogroup" aria-label={optionName}>
            {product.variants.map((variant) => {
              const isSelected = variant.id === selectedVariantId;
              const isUnavailable = !variant.available;

              return (
                <button
                  key={variant.id}
                  type="button"
                  role="radio"
                  aria-checked={isSelected}
                  className={cn(
                    styles.variantPill,
                    isSelected && styles.variantPillActive,
                    isUnavailable && styles.variantPillSoldOut
                  )}
                  onClick={() => setSelectedVariantId(variant.id)}
                >
                  {variant.title}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      <div className={styles.quantityGroup}>
        <label className={styles.label} htmlFor={`qty-${product.id}`}>
          Quantity
        </label>
        <div className={styles.quantityControl}>
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => handleQuantityChange(-1)}
            disabled={quantity <= 1}
            aria-label="Decrease quantity"
          >
            −
          </button>
          <input
            id={`qty-${product.id}`}
            type="number"
            min={1}
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value, 10) || 1))
            }
            className={styles.qtyInput}
            aria-label="Quantity"
          />
          <button
            type="button"
            className={styles.qtyBtn}
            onClick={() => handleQuantityChange(1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      <button
        type="button"
        className={cn(styles.addBtn, isSoldOut && styles.addBtnDisabled)}
        onClick={handleAddToCart}
        disabled={isSoldOut}
      >
        {isSoldOut ? "Sold out" : "Add to cart"}
      </button>
    </div>
  );
}
