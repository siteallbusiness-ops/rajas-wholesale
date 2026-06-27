import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Sections/Container";
import { SHOP_HIGHLIGHTS } from "@/constants/home";
import styles from "./ShopHighlights.module.css";

export default function ShopHighlights() {
  return (
    <section className={styles.section} aria-labelledby="shop-highlights-title">
      <Container>
        <div className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Collections</p>
            <h2 id="shop-highlights-title" className={styles.title}>
              Shop our range
            </h2>
            <p className={styles.subtitle}>
              Browse wholesale categories stocked for independent retailers across the UK
            </p>
          </div>
          <Link href="/shop" className={styles.viewAll}>
            View all products
          </Link>
        </div>

        <ul className={styles.grid}>
          {SHOP_HIGHLIGHTS.map((item) => (
            <li key={item.title}>
              <Link
                href={item.href}
                className={styles.card}
                style={{ "--accent": item.accent }}
              >
                <div className={styles.imageWrap}>
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.overlay} />
                </div>
                <div className={styles.content}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardText}>{item.subtitle}</p>
                  <span className={styles.cta}>
                    Shop collection
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
