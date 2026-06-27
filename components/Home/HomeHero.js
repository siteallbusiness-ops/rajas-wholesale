import Link from "next/link";
import Container from "@/components/Sections/Container";
import HeroShowcase from "@/components/Home/HeroShowcase";
import HeroTypewriterTitle from "@/components/Home/HeroTypewriterTitle";
import { HERO_STATS } from "@/constants/hero";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero} aria-labelledby="home-hero-title">
      <div className={styles.background} aria-hidden="true">
        <div className={styles.glowPrimary} />
        <div className={styles.glowSecondary} />
        <div className={styles.gridPattern} />
        <div className={styles.vignette} />
      </div>

      <Container className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.content}>
            <HeroTypewriterTitle />

            <p className={styles.subtitle}>
              Confectionery, drinks, crisps, cookies and American imports — competitive
              trade pricing with reliable dispatch across the United Kingdom.
            </p>

            <div className={styles.actions}>
              <Link href="/shop" className={styles.primaryBtn}>
                Shop wholesale
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
              <Link href="/contact" className={styles.secondaryBtn}>
                Contact us
              </Link>
            </div>

            <ul className={styles.stats}>
              {HERO_STATS.map((stat) => (
                <li key={stat.label} className={styles.stat}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.visual}>
            <HeroShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
}
