import Image from "next/image";
import Link from "next/link";
import { OREO_PROMO } from "@/constants/promo";
import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.section} aria-labelledby="oreo-promo-title">
      <div className={styles.decor} aria-hidden="true">
        <span className={styles.decorCircle1} />
        <span className={styles.decorCircle2} />
        <span className={styles.decorCircle3} />
      </div>

      <div className={styles.shell}>
        <div className={styles.card}>
          <div className={styles.products} aria-label="Featured Oreo products">
            {OREO_PROMO.featuredProducts.map((product) => (
              <div
                key={product.src}
                className={`${styles.productTile} ${product.featured ? styles.productTileFeatured : ""}`}
              >
                <Image
                  src={product.src}
                  alt={product.alt}
                  width={280}
                  height={280}
                  sizes="(max-width: 480px) 28vw, (max-width: 768px) 22vw, 180px"
                  className={styles.productImage}
                />
              </div>
            ))}
          </div>

          <div className={styles.content}>
            <p className={styles.brand}>{OREO_PROMO.brandLabel}</p>
            <h2 id="oreo-promo-title" className={styles.title}>
              {OREO_PROMO.title}
            </h2>
            <p className={styles.description}>{OREO_PROMO.description}</p>
            <Link href={OREO_PROMO.ctaHref} className={styles.cta}>
              {OREO_PROMO.ctaLabel}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
