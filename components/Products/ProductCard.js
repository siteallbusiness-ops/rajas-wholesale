"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useQuickViewStore } from "@/store/quickViewStore";
import { formatPrice } from "@/utils/format";
import { cn } from "@/utils/cn";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product, priority = false }) {
  const addItem = useCartStore((state) => state.addItem);
  const openQuickView = useQuickViewStore((state) => state.openQuickView);

  const defaultVariant =
    product.variants.find((v) => v.available) || product.variants[0];

  const handleAction = (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (product.soldOut) return;

    if (product.hasVariants && product.variants.length > 1) {
      openQuickView(product);
      return;
    }

    addItem({
      productId: product.id,
      variantId: defaultVariant.id,
      handle: product.handle,
      title: product.title,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <article className={styles.card}>
      <Link href={`/products/${product.handle}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          {product.badge && (
            <span
              className={cn(
                styles.badge,
                product.badge === "sale" && styles.badgeSale
              )}
            >
              {product.badge === "sale" ? "Sale" : "Sold out"}
            </span>
          )}
          {product.image ? (
            <Image
              src={product.image}
              alt={product.title}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className={styles.image}
              priority={priority}
            />
          ) : (
            <div className={styles.imagePlaceholder}>No image</div>
          )}
        </div>
      </Link>

      <div className={styles.content}>
        <Link href={`/products/${product.handle}`} className={styles.titleLink}>
          <h3 className={styles.title}>{product.title}</h3>
        </Link>

        <div className={styles.priceRow}>
          {product.compareAtPrice && product.badge === "sale" ? (
            <>
              <span className={styles.comparePrice}>
                {formatPrice(product.compareAtPrice)}
              </span>
              <span className={styles.salePrice}>
                {product.priceFrom
                  ? formatPrice(product.price, true)
                  : formatPrice(product.price)}
              </span>
            </>
          ) : (
            <span className={styles.price}>
              {product.priceFrom
                ? formatPrice(product.price, true)
                : formatPrice(product.price)}
            </span>
          )}
        </div>

        <button
          type="button"
          className={cn(
            styles.button,
            product.soldOut && styles.buttonDisabled
          )}
          onClick={handleAction}
          disabled={product.soldOut}
        >
          {product.buttonLabel}
        </button>
      </div>
    </article>
  );
}
