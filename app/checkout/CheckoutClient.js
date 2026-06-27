"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Sections/Container";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { useCartStore } from "@/store/cartStore";
import { formatPrice } from "@/utils/format";
import styles from "./page.module.css";

function generateOrderNumber() {
  return `RW-${Date.now().toString().slice(-8)}`;
}

export default function CheckoutClient() {
  const items = useCartStore((state) => state.items);
  const subtotal = useCartStore((state) => state.getSubtotal());
  const clearCart = useCartStore((state) => state.clearCart);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postcode: "",
    phone: "",
    notes: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 900));

    setOrderNumber(generateOrderNumber());
    setIsSubmitted(true);
    clearCart();
    setIsSubmitting(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isSubmitted) {
    return (
      <section className={styles.confirmation}>
        <Container size="md">
          <div className={styles.confirmBox}>
            <div className={styles.successRing}>
              <div className={styles.checkIcon}>✓</div>
            </div>
            <p className={styles.orderLabel}>Order confirmed</p>
            <h1 className={styles.confirmTitle}>Thank you for your order!</h1>
            <p className={styles.orderNumber}>
              Order number: <strong>{orderNumber}</strong>
            </p>
            <p className={styles.confirmText}>
              We&apos;ve received your wholesale order request. Our team will
              review it and contact you shortly to confirm availability and
              arrange payment offline. No payment was taken on this website.
            </p>
            <div className={styles.confirmActions}>
              <Link href="/shop" className={styles.continueBtn}>
                Continue shopping
              </Link>
              <Link href="/contact" className={styles.contactBtn}>
                Contact us
              </Link>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className={styles.empty}>
        <Container size="md">
          <div className={styles.emptyBox}>
            <div className={styles.emptyIcon}>🛒</div>
            <h1 className={styles.title}>Your cart is empty</h1>
            <p className={styles.emptyText}>
              Add products to your cart before proceeding to checkout.
            </p>
            <Link href="/shop" className={styles.continueBtn}>
              Browse products
            </Link>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className={styles.checkout}>
      <Container>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Cart", href: "/shop" },
            { label: "Checkout" },
          ]}
          className={styles.breadcrumb}
        />

        <div className={styles.pageHeader}>
          <h1 className={styles.title}>Checkout</h1>
          <p className={styles.subtitle}>
            Complete your details below — payment is arranged offline after order review.
          </p>
        </div>

        <div className={styles.steps} aria-label="Checkout progress">
          <span className={styles.stepActive}>1. Details</span>
          <span className={styles.stepDivider} aria-hidden="true" />
          <span className={styles.step}>2. Review</span>
          <span className={styles.stepDivider} aria-hidden="true" />
          <span className={styles.step}>3. Confirmation</span>
        </div>

        <div className={styles.grid}>
          <form className={styles.form} onSubmit={handleSubmit} id="checkout-form">
            <div className={styles.formCard}>
              <h2 className={styles.cardTitle}>Contact information</h2>
              <div className={styles.field}>
                <label htmlFor="email">Email address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="you@business.com"
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="phone">Phone number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="+44 7XXX XXXXXX"
                />
              </div>
            </div>

            <div className={styles.formCard}>
              <h2 className={styles.cardTitle}>Shipping address</h2>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="firstName">First name *</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={form.firstName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="lastName">Last name *</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={form.lastName}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>
              <div className={styles.field}>
                <label htmlFor="address">Address *</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  required
                  value={form.address}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Street address, unit, etc."
                />
              </div>
              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="city">City *</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={form.city}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="postcode">Postcode *</label>
                  <input
                    type="text"
                    id="postcode"
                    name="postcode"
                    required
                    value={form.postcode}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>

            <div className={styles.formCard}>
              <h2 className={styles.cardTitle}>Order notes</h2>
              <div className={styles.field}>
                <label htmlFor="notes">Special instructions (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  className={styles.textarea}
                  rows={3}
                  placeholder="Delivery preferences, business name, etc."
                />
              </div>
            </div>

            <div className={styles.notice}>
              <span className={styles.noticeIcon} aria-hidden="true">ℹ</span>
              <p>
                This is a wholesale inquiry checkout. No online payment is collected —
                our team will contact you to confirm your order and arrange payment.
              </p>
            </div>

            <button
              type="submit"
              className={styles.placeOrderBtn}
              disabled={isSubmitting}
              form="checkout-form"
            >
              {isSubmitting ? (
                <>
                  <span className={styles.spinner} aria-hidden="true" />
                  Placing order...
                </>
              ) : (
                <>Place order — {formatPrice(subtotal)}</>
              )}
            </button>
          </form>

          <aside className={styles.summary}>
            <h2 className={styles.summaryTitle}>Order summary</h2>
            <ul className={styles.summaryItems}>
              {items.map((item) => (
                <li key={item.id} className={styles.summaryItem}>
                  <div className={styles.summaryThumb}>
                    {item.image && (
                      <Image
                        src={item.image}
                        alt=""
                        fill
                        sizes="72px"
                        className={styles.thumbImg}
                      />
                    )}
                    <span className={styles.qtyBadge}>{item.quantity}</span>
                  </div>
                  <div className={styles.summaryDetails}>
                    <p className={styles.summaryName}>{item.title}</p>
                    {item.variantTitle !== "Default Title" && (
                      <p className={styles.summaryVariant}>{item.variantTitle}</p>
                    )}
                  </div>
                  <p className={styles.summaryPrice}>
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </li>
              ))}
            </ul>

            <div className={styles.summaryRow}>
              <span>Subtotal</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className={styles.summaryRow}>
              <span>Shipping</span>
              <span className={styles.shippingNote}>Calculated after review</span>
            </div>
            <div className={styles.summaryTotal}>
              <span>Estimated total</span>
              <span>{formatPrice(subtotal)} GBP</span>
            </div>
            <p className={styles.summaryNote}>
              Taxes included where applicable. Final total confirmed by our team.
            </p>

            <button
              type="submit"
              className={styles.placeOrderBtnSummary}
              disabled={isSubmitting}
              form="checkout-form"
            >
              {isSubmitting ? "Placing order..." : "Place order"}
            </button>
          </aside>
        </div>
      </Container>
    </section>
  );
}
