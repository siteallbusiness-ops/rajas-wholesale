"use client";

import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cartStore";
import { useScrollLock } from "@/hooks/useScrollLock";
import { formatPrice } from "@/utils/format";
import { cn } from "@/utils/cn";
import styles from "./CartDrawer.module.css";

export default function CartDrawer() {
  const items = useCartStore((state) => state.items);
  const isOpen = useCartStore((state) => state.isOpen);
  const closeCart = useCartStore((state) => state.closeCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const subtotal = useCartStore((state) => state.getSubtotal());

  useScrollLock(isOpen);

  return (
    <>
      <div
        className={cn(styles.overlay, isOpen && styles.overlayOpen)}
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        className={cn(styles.drawer, isOpen && styles.drawerOpen)}
        aria-label="Shopping cart"
        aria-hidden={!isOpen}
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Your cart</h2>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeCart}
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {items.length === 0 ? (
          <div className={styles.empty}>
            <p className={styles.emptyText}>Your cart is empty</p>
            <Link href="/shop" className={styles.continueLink} onClick={closeCart}>
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className={styles.items}>
              {items.map((item) => (
                <li key={item.id} className={styles.item}>
                  <div className={styles.itemImage}>
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="80px"
                        className={styles.thumbnail}
                      />
                    ) : (
                      <div className={styles.thumbPlaceholder} />
                    )}
                  </div>

                  <div className={styles.itemDetails}>
                    <Link
                      href={`/products/${item.handle}`}
                      className={styles.itemTitle}
                      onClick={closeCart}
                    >
                      {item.title}
                    </Link>
                    {item.variantTitle !== "Default Title" && (
                      <p className={styles.itemVariant}>{item.variantTitle}</p>
                    )}
                    <p className={styles.itemPrice}>{formatPrice(item.price)}</p>

                    <div className={styles.quantityRow}>
                      <div className={styles.quantityControl}>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() =>
                            updateQuantity(item.variantId, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className={styles.qtyValue}>{item.quantity}</span>
                        <button
                          type="button"
                          className={styles.qtyBtn}
                          onClick={() =>
                            updateQuantity(item.variantId, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        type="button"
                        className={styles.removeBtn}
                        onClick={() => removeItem(item.variantId)}
                        aria-label={`Remove ${item.title}`}
                      >
                        🗑
                      </button>
                    </div>
                  </div>

                  <p className={styles.lineTotal}>
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.footer}>
              <div className={styles.totalRow}>
                <span>Estimated total</span>
                <span className={styles.totalAmount}>
                  {formatPrice(subtotal)} GBP
                </span>
              </div>
              <p className={styles.disclaimer}>
                Taxes included. Discounts and shipping calculated at checkout.
              </p>
              <Link
                href="/checkout"
                className={styles.checkoutBtn}
                onClick={closeCart}
              >
                Check out
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
