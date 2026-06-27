import Image from "next/image";
import Link from "next/link";
import { HERO_SHOWCASE } from "@/constants/hero";
import styles from "./HeroShowcase.module.css";

export default function HeroShowcase() {
  return (
    <div className={styles.wrap}>
      <div className={styles.stage}>
        <div className={styles.stageTop}>
          <div className={styles.trustBadge}>
            <span className={styles.badgeIcon} aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 2l2.9 6.26L22 9.27l-5 4.87L18.2 22 12 18.56 5.8 22 7 14.14l-5-4.87 7.1-1.01L12 2z"
                  fill="currentColor"
                />
              </svg>
            </span>
            <div className={styles.badgeCopy}>
              <span className={styles.badgeTitle}>Trade pricing</span>
              <span className={styles.badgeText}>Built for retailers</span>
            </div>
          </div>
        </div>

        <div className={styles.grid}>
          {HERO_SHOWCASE.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={styles.card}
              style={{ "--card-accent": item.accent }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 767px) 45vw, (max-width: 1023px) 24vw, 220px"
                  className={styles.image}
                  priority
                />
              </div>
              <span className={styles.cardLabel}>{item.label}</span>
            </Link>
          ))}
        </div>

        <div className={styles.stageFooter}>
          <p className={styles.footerLabel}>Shop by category</p>
          <ul className={styles.categoryRow} aria-label="Shop by category">
            {HERO_SHOWCASE.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className={styles.categoryLink}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
