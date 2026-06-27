import Image from "next/image";
import Link from "next/link";
import { CATEGORIES } from "@/constants/categories";
import styles from "./CategoryCarousel.module.css";

export default function CategoryCarousel() {
  return (
    <section className={styles.section} aria-label="Shop by category">
      <div className={styles.track}>
        {CATEGORIES.map((category) => (
          <Link
            key={category.label}
            href={category.href}
            className={styles.card}
            style={{ "--accent": category.accent }}
          >
            <div className={styles.imageWrap}>
              <Image
                src={category.image}
                alt={category.alt}
                fill
                sizes="(max-width: 640px) 75vw, (max-width: 1024px) 33vw, 280px"
                className={styles.image}
                priority
              />
              <div className={styles.overlay} aria-hidden="true" />
            </div>

            <div className={styles.content}>
              <h2 className={styles.label}>{category.label}</h2>
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
        ))}
      </div>
    </section>
  );
}
