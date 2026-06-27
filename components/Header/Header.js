"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/Common/Logo";
import Navigation from "@/components/Navigation/Navigation";
import CartDrawer from "@/components/Cart/CartDrawer";
import { useCartStore } from "@/store/cartStore";
import { useScrollLock } from "@/hooks/useScrollLock";
import { useScrolled } from "@/hooks/useScrolled";
import SearchBox from "@/components/Search/SearchBox";
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
  const pathname = usePathname();
  const [menuPath, setMenuPath] = useState(null);
  const [searchPath, setSearchPath] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const isMenuOpen = menuPath === pathname;
  const isSearchOpen = searchPath === pathname;
  const isScrolled = useScrolled();
  const toggleCart = useCartStore((state) => state.toggleCart);
  const itemCount = useCartStore((state) => state.getItemCount());

  useScrollLock(isMenuOpen);

  const closeMenu = useCallback(() => setMenuPath(null), []);
  const closeSearch = useCallback(() => setSearchPath(null), []);

  return (
    <>
      <header className={cn(styles.header, isScrolled && styles.headerScrolled)}>
        <div className={styles.topAccent} aria-hidden="true" />

        <div className={styles.mainBar}>
          <div className={styles.inner}>
            <div className={styles.brand}>
              <Logo href="/" onClick={closeMenu} onLight size="compact" className={styles.logo} />
            </div>

            <div className={styles.navShell}>
              <Navigation className={styles.navDesktop} onLinkClick={closeMenu} />
            </div>

            <div className={styles.actions}>
              <button
                type="button"
                className={cn(styles.iconBtn, isSearchOpen && styles.iconBtnActive)}
                onClick={() => setSearchPath(isSearchOpen ? null : pathname)}
                aria-label="Search"
                aria-expanded={isSearchOpen}
              >
                <SearchIcon />
              </button>

              <button
                type="button"
                className={cn(styles.cartBtn, itemCount > 0 && styles.cartBtnActive)}
                onClick={toggleCart}
                aria-label={`Cart, ${itemCount} items`}
              >
                <CartIcon />
                <span className={styles.cartLabel}>Cart</span>
                {itemCount > 0 && (
                  <span className={styles.cartBadge} key={itemCount}>
                    {itemCount}
                  </span>
                )}
              </button>

              <Link href="/shop" className={styles.shopBtn}>
                Shop now
              </Link>

              <button
                type="button"
                className={cn(styles.menuToggle, isMenuOpen && styles.menuToggleOpen)}
                onClick={() => setMenuPath(isMenuOpen ? null : pathname)}
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
        </div>

        <div className={cn(styles.searchPanel, isSearchOpen && styles.searchPanelOpen)}>
          <div className={styles.searchForm}>
            <SearchBox
              value={searchQuery}
              onChange={setSearchQuery}
              autoFocus={isSearchOpen}
              onNavigate={closeSearch}
              className={styles.searchBox}
            />
            <button
              type="button"
              className={styles.searchClose}
              onClick={closeSearch}
              aria-label="Close search"
            >
              <CloseIcon />
            </button>
          </div>
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
          <Logo href="/" onClick={closeMenu} onLight align="start" />
          <button
            type="button"
            className={styles.mobileClose}
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <SearchBox
          value={searchQuery}
          onChange={setSearchQuery}
          variant="mobile"
          submitLabel="Go"
          placeholder="Search products..."
          onNavigate={closeMenu}
          className={styles.mobileSearchBox}
        />

        <Navigation className={styles.navMobile} onLinkClick={closeMenu} isMobile />

        <div className={styles.mobileFooter}>
          <Link href="/shop" className={styles.mobileShopBtn} onClick={closeMenu}>
            Browse wholesale shop
          </Link>
          <Link href="/contact" className={styles.mobileContactLink} onClick={closeMenu}>
            Contact us
          </Link>
        </div>
      </aside>

      <CartDrawer />
    </>
  );
}
