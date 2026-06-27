import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Sections/Container";
import { CATEGORIES } from "@/constants/categories";
import styles from "./ShopHighlights.module.css";

export default function ShopHighlights() {
  return (
    <section className={styles.section} aria-labelledby="shop-categories-title">
      <Container>
        <div className={styles.header}>
          <div className={styles.headerText}>
            <p className={styles.eyebrow}>Shop by category</p>
            <h2 id="shop-categories-title" className={styles.title}>
              Browse our wholesale range
            </h2>
            <p className={styles.subtitle}>
              Drinks, confectionery, crisps and more — stocked for independent
              retailers across the UK
            </p>
          </div>
          <Link href="/shop" className={styles.viewAll}>
            View all products
          </Link>
        </div>

        <ul className={styles.grid}>
          {CATEGORIES.map((category) => (
            <li key={category.label}>
              <Link
                href={category.href}
                className={styles.card}
                style={{ "--accent": category.accent }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={category.image}
                    alt={category.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                    className={styles.image}
                    priority={category.label === "Drinks"}
                  />
                  <div className={styles.overlay} aria-hidden="true" />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{category.label}</h3>
                  <p className={styles.cardText}>{category.subtitle}</p>
                  <span className={styles.cta}>
                    Shop now
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
