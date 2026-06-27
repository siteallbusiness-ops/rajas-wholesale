"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants/site";
import { cn } from "@/utils/cn";
import styles from "./Navigation.module.css";

export default function Navigation({
  className,
  onLinkClick,
  isMobile = false,
}) {
  const pathname = usePathname();

  return (
    <nav
      className={cn(styles.nav, isMobile && styles.navMobile, className)}
      aria-label="Main navigation"
    >
      <ul className={styles.list}>
        {NAV_LINKS.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : link.href === "/shop"
                ? pathname.startsWith("/shop") || pathname.startsWith("/products")
                : pathname.startsWith(link.href);

          return (
            <li key={link.href} className={styles.item}>
              <Link
                href={link.href}
                className={cn(styles.link, isActive && styles.linkActive)}
                onClick={onLinkClick}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
