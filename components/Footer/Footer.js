"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Common/Logo";
import {
  SITE_NAME,
  SITE_TAGLINE,
  FOOTER_POLICY_LINKS,
  NAV_LINKS,
  PAYMENT_METHODS,
  CONTACT,
} from "@/constants/site";
import styles from "./Footer.module.css";

function MapPinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.5 7-11a7 7 0 10-14 0c0 6.5 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.75" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M3 7l9 6 9-6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 4h3l1.5 5-2 1.5c1.2 2.4 3.1 4.3 5.5 5.5L15.5 14l5 1.5v3c0 .8-.7 1.5-1.5 1.5C9.2 20 4 14.8 4 7.5 4 6.7 4.7 6 5.5 6z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.topAccent} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.main}>
        <div className="container">
          <div className={styles.topRow}>
            <div className={styles.brand}>
              <Logo href="/" size="md" align="start" onDark />
              <p className={styles.tagline}>{SITE_TAGLINE}</p>
              <p className={styles.brandText}>
                Trusted wholesale supplier of confectionery, drinks, and snacks for
                retailers across the UK.
              </p>
            </div>

            <div className={styles.newsletterCard}>
              <h2 className={styles.newsletterTitle}>Stay in the loop</h2>
              <p className={styles.newsletterText}>
                Get wholesale deals, new arrivals, and restock alerts straight to
                your inbox.
              </p>
              <form className={styles.newsletterForm} onSubmit={handleNewsletter}>
                <label htmlFor="footer-email" className="sr-only">
                  Email address
                </label>
                <div className={styles.inputWrap}>
                  <input
                    type="email"
                    id="footer-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className={styles.emailInput}
                    required
                    disabled={subscribed}
                  />
                  <button
                    type="submit"
                    className={styles.submitBtn}
                    disabled={subscribed}
                    aria-label={subscribed ? "Subscribed" : "Subscribe"}
                  >
                    {subscribed ? "✓" : "→"}
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.contactCol}>
              <h2 className={styles.colTitle}>Contact</h2>
              <ul className={styles.contactList}>
                <li>
                  <MapPinIcon />
                  <span>{CONTACT.address}</span>
                </li>
                <li>
                  <MailIcon />
                  <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                </li>
                <li>
                  <PhoneIcon />
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>
                    {CONTACT.phone}
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h2 className={styles.colTitle}>Quick links</h2>
              <ul className={styles.linkList}>
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.linksCol}>
              <h2 className={styles.colTitle}>Customer care</h2>
              <ul className={styles.linkList}>
                {FOOTER_POLICY_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className={styles.footerLink}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ctaCol}>
              <h2 className={styles.colTitle}>Shop wholesale</h2>
              <p className={styles.ctaText}>
                Browse our full trade catalogue with competitive pricing for UK
                retailers.
              </p>
              <Link href="/shop" className={styles.shopBtn}>
                Browse wholesale range
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.payments}>
        <div className="container">
          <p className={styles.paymentLabel}>Secure payment methods</p>
          <div className={styles.paymentIcons}>
            {PAYMENT_METHODS.map((method) => (
              <span key={method} className={styles.paymentBadge}>
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p className={styles.copyright}>
            &copy; {currentYear}, {SITE_NAME}. All rights reserved.
          </p>
          <nav aria-label="Footer policies">
            <ul className={styles.policyList}>
              {FOOTER_POLICY_LINKS.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={styles.policyLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
