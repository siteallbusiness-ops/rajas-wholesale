"use client";

import { useState, useRef, useEffect, useMemo, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/utils/format";
import { categorizeProduct } from "@/utils/categorize";
import { getProductVendor } from "@/utils/products";
import { getSearchSuggestions, getShopSearchUrl } from "@/utils/search";
import { cn } from "@/utils/cn";
import styles from "./SearchBox.module.css";

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.75" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

function highlightText(text, query) {
  if (!query.trim()) return text;

  const q = query.trim().toLowerCase();
  const pattern = new RegExp(
    `(${query.trim().replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`,
    "gi"
  );
  const parts = text.split(pattern);

  return parts.map((part, index) =>
    part && part.toLowerCase() === q ? (
      <mark key={`${part}-${index}`} className={styles.match}>
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SearchBox({
  value,
  onChange,
  placeholder = "Search products, brands, categories...",
  variant = "header",
  submitLabel = "Search",
  autoFocus = false,
  onNavigate,
  className,
}) {
  const router = useRouter();
  const rootRef = useRef(null);
  const inputRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  const suggestions = useMemo(() => getSearchSuggestions(value), [value]);

  const navigableItems = useMemo(() => {
    const items = [];

    suggestions.popularTerms.forEach((term) => {
      items.push({ type: "term", href: getShopSearchUrl(term.query), label: term.label });
    });

    suggestions.categories.forEach((category) => {
      items.push({ type: "category", href: category.href, label: category.label, category });
    });

    suggestions.products.forEach((product) => {
      items.push({
        type: "product",
        href: `/products/${product.handle}`,
        label: product.title,
        product,
      });
    });

    if (!suggestions.isDefault && suggestions.totalMatches > 0) {
      items.push({
        type: "viewAll",
        href: getShopSearchUrl(value),
        label: `View all ${suggestions.totalMatches} results`,
      });
    }

    return items;
  }, [suggestions, value]);

  const termCount = suggestions.popularTerms.length;
  const categoryCount = suggestions.categories.length;
  const productStartIndex = termCount + categoryCount;

  const closeDropdown = useCallback(() => {
    setIsOpen(false);
    setActiveIndex(-1);
  }, []);

  const navigate = useCallback(
    (href) => {
      closeDropdown();
      onNavigate?.();
      router.push(href);
    },
    [closeDropdown, onNavigate, router]
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const handlePointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [closeDropdown, isOpen]);

  const handleChange = (nextValue) => {
    setActiveIndex(-1);
    onChange(nextValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!value.trim()) return;
    navigate(getShopSearchUrl(value));
  };

  const handleKeyDown = (event) => {
    if (!isOpen && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
      setIsOpen(true);
      return;
    }

    if (event.key === "Escape") {
      closeDropdown();
      inputRef.current?.blur();
      return;
    }

    if (!navigableItems.length) return;

    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % navigableItems.length);
      return;
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();
      setActiveIndex((prev) =>
        prev <= 0 ? navigableItems.length - 1 : prev - 1
      );
      return;
    }

    if (event.key === "Enter" && activeIndex >= 0) {
      event.preventDefault();
      navigate(navigableItems[activeIndex].href);
    }
  };

  const showDropdown =
    isOpen &&
    (suggestions.isDefault ||
      suggestions.products.length > 0 ||
      suggestions.categories.length > 0 ||
      value.trim());

  return (
    <div
      ref={rootRef}
      className={cn(
        styles.root,
        variant === "shop" && styles.variantShop,
        variant === "mobile" && styles.variantMobile,
        className
      )}
    >
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.field}>
          <SearchIcon />
          <input
            ref={inputRef}
            type="search"
            value={value}
            onChange={(event) => handleChange(event.target.value)}
            onFocus={() => setIsOpen(true)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            className={styles.input}
            aria-label="Search products"
            role="combobox"
            aria-expanded={showDropdown}
            aria-controls="search-suggestions"
            aria-autocomplete="list"
            autoFocus={autoFocus}
            autoComplete="off"
          />
          {value && (
            <button
              type="button"
              className={styles.clearBtn}
              onClick={() => {
                handleChange("");
                inputRef.current?.focus();
              }}
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <button type="submit" className={styles.submitBtn} aria-label={submitLabel}>
          <span className={styles.submitIcon} aria-hidden="true">
            <SearchIcon />
          </span>
          <span className={styles.submitText}>{submitLabel}</span>
        </button>
      </form>

      {showDropdown && (
        <div
          id="search-suggestions"
          className={styles.dropdown}
          role="listbox"
          aria-label="Search suggestions"
        >
          {suggestions.isDefault && termCount > 0 && (
            <div className={styles.section}>
              <p className={styles.sectionLabel}>Popular searches</p>
              <div className={styles.chipRow}>
                {suggestions.popularTerms.map((term, index) => (
                  <button
                    key={term.query}
                    type="button"
                    className={cn(styles.chip, activeIndex === index && styles.chipActive)}
                    onMouseEnter={() => setActiveIndex(index)}
                    onClick={() => navigate(getShopSearchUrl(term.query))}
                  >
                    {term.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {categoryCount > 0 && (
            <div className={styles.section}>
              <p className={styles.sectionLabel}>
                {suggestions.isDefault ? "Browse categories" : "Categories"}
              </p>
              <div className={styles.categoryList}>
                {suggestions.categories.map((category, index) => {
                  const currentIndex = termCount + index;
                  return (
                    <button
                      key={category.slug}
                      type="button"
                      className={cn(
                        styles.categoryItem,
                        activeIndex === currentIndex && styles.productItemActive
                      )}
                      onMouseEnter={() => setActiveIndex(currentIndex)}
                      onClick={() => navigate(category.href)}
                    >
                      <span
                        className={styles.categoryDot}
                        style={{ backgroundColor: category.accent }}
                      />
                      <span className={styles.categoryLabel}>
                        {suggestions.isDefault
                          ? category.label
                          : highlightText(category.label, value)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {suggestions.products.length > 0 && (
            <div className={styles.section}>
              <p className={styles.sectionLabel}>
                {suggestions.isDefault ? "Featured products" : "Products"}
              </p>
              {suggestions.products.map((product, index) => {
                const currentIndex = productStartIndex + index;
                const categories = categorizeProduct(product);
                const vendor = getProductVendor(product);

                return (
                  <button
                    key={product.id}
                    type="button"
                    className={cn(
                      styles.productItem,
                      activeIndex === currentIndex && styles.productItemActive
                    )}
                    onMouseEnter={() => setActiveIndex(currentIndex)}
                    onClick={() => navigate(`/products/${product.handle}`)}
                  >
                    <div className={styles.productThumb}>
                      <Image
                        src={product.image}
                        alt=""
                        fill
                        sizes="44px"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className={styles.productBody}>
                      <span className={styles.productTitle}>
                        {suggestions.isDefault
                          ? product.title
                          : highlightText(product.title, value)}
                      </span>
                      <span className={styles.productMeta}>
                        {vendor}
                        {categories[0] ? ` · ${categories[0]}` : ""}
                      </span>
                    </div>
                    <span className={styles.productPrice}>
                      {formatPrice(product.price, product.priceFrom)}
                    </span>
                  </button>
                );
              })}
            </div>
          )}

          {!suggestions.isDefault &&
            suggestions.products.length === 0 &&
            categoryCount === 0 && (
              <div className={styles.empty}>
                No products found for &ldquo;{value}&rdquo;. Try another brand or category.
              </div>
            )}

          {!suggestions.isDefault && suggestions.totalMatches > 0 && (
            <div className={styles.footer}>
              <button
                type="button"
                className={cn(
                  styles.footerLink,
                  activeIndex === navigableItems.length - 1 && styles.chipActive
                )}
                onMouseEnter={() => setActiveIndex(navigableItems.length - 1)}
                onClick={() => navigate(getShopSearchUrl(value))}
              >
                View all {suggestions.totalMatches} results for &ldquo;{value}&rdquo;
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
