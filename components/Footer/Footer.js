"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/Common/Logo";
import {
  SITE_NAME,
  SITE_TAGLINE,
  FOOTER_POLICY_LINKS,
  NAV_LINKS,
  SOCIAL_LINKS,
  PAYMENT_METHODS,
  CONTACT,
} from "@/constants/site";
import styles from "./Footer.module.css";

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

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

const SOCIAL_ICONS = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
};

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

            <div className={styles.socialCol}>
              <h2 className={styles.colTitle}>Follow us</h2>
              <div className={styles.social} role="list" aria-label="Social media">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = SOCIAL_ICONS[social.icon];
                  return (
                    <a
                      key={social.icon}
                      href={social.href}
                      className={styles.socialLink}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      role="listitem"
                    >
                      {Icon && <Icon />}
                    </a>
                  );
                })}
              </div>
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
