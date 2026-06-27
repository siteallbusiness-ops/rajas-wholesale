"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import Logo from "@/components/Common/Logo";
import Navigation from "@/components/Navigation/Navigation";
import CartDrawer from "@/components/Cart/CartDrawer";
import { useCartStore } from "@/store/cartStore";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useScrolled } from "@/hooks/useScrolled";
import { SITE_TAGLINE } from "@/constants/site";
import { cn } from "@/utils/cn";
import styles from "./Header.module.css";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.75" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6 6h15l-1.5 9h-12z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.5" fill="currentColor" />
      <circle cx="18" cy="20" r="1.5" fill="currentColor" />
      <path d="M6 6L5 3H2" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isScrolled = useScrolled();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemCount = useCartStore((state) => state.getItemCount());

  useScrollLock(isMenuOpen);

  const closeMenu = useCallback(() => setIsMenuOpen(false), []);

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/shop?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <>
      <header className={cn(styles.header, isScrolled && styles.headerScrolled)}>
        <div className={styles.topAccent} aria-hidden="true" />

        <div className={styles.inner}>
          <Logo href="/" onClick={closeMenu} onLight />

          <Navigation className={styles.navDesktop} onLinkClick={closeMenu} />

          <div className={styles.actions}>
            <button
              type="button"
              className={cn(styles.iconBtn, isSearchOpen && styles.iconBtnActive)}
              onClick={() => setIsSearchOpen((prev) => !prev)}
              aria-label="Search"
              aria-expanded={isSearchOpen}
            >
              <SearchIcon />
            </button>

            <Link href="/contact" className={styles.iconBtn} aria-label="Account">
              <UserIcon />
            </Link>

            <button
              type="button"
              className={cn(styles.cartBtn, itemCount > 0 && styles.cartBtnActive)}
              onClick={toggleCart}
              aria-label={`Cart, ${itemCount} items`}
            >
              <CartIcon />
              {itemCount > 0 && (
                <span className={styles.cartBadge} key={itemCount}>
                  {itemCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className={cn(styles.menuToggle, isMenuOpen && styles.menuToggleOpen)}
              onClick={() => setIsMenuOpen((prev) => !prev)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
              <span className={styles.menuBar} />
            </button>
          </div>
        </div>

        <div className={cn(styles.searchPanel, isSearchOpen && styles.searchPanelOpen)}>
          <form onSubmit={handleSearch} className={styles.searchForm}>
            <SearchIcon />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands, categories..."
              className={styles.searchInput}
              aria-label="Search products"
            />
            <button type="submit" className={styles.searchSubmit}>
              Search
            </button>
            <button
              type="button"
              className={styles.searchClose}
              onClick={() => setIsSearchOpen(false)}
              aria-label="Close search"
            >
              ✕
            </button>
          </form>
        </div>
      </header>

      <div
        className={cn(styles.mobileOverlay, isMenuOpen && styles.mobileOverlayOpen)}
        onClick={closeMenu}
        aria-hidden="true"
      />

      <aside
        id="mobile-navigation"
        className={cn(styles.mobileNav, isMenuOpen && styles.mobileNavOpen)}
        aria-hidden={!isMenuOpen}
        aria-label="Mobile navigation"
      >
        <div className={styles.mobileNavHeader}>
          <p className={styles.mobileNavTitle}>Menu</p>
          <button
            type="button"
            className={styles.mobileClose}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>
        <Navigation className={styles.navMobile} onLinkClick={closeMenu} isMobile />
        <p className={styles.mobileTagline}>{SITE_TAGLINE}</p>
      </aside>

      <CartDrawer />
    </>
  );
}
