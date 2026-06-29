import Link from "next/link";
import Container from "@/components/Sections/Container";
import { HOME_ANNOUNCEMENT } from "@/constants/home";
import styles from "./HomeSubHeader.module.css";

export default function HomeSubHeader() {
  return (
    <aside className={styles.bar} aria-label="Store notice">
      <Container className={styles.container}>
        <div className={styles.inner}>
          <p className={styles.badge}>
            <span className={styles.badgeDot} aria-hidden="true" />
            {HOME_ANNOUNCEMENT.badge}
          </p>

          <p className={styles.message}>
            {HOME_ANNOUNCEMENT.message}{" "}
            <Link href={HOME_ANNOUNCEMENT.ctaHref} className={styles.link}>
              {HOME_ANNOUNCEMENT.ctaLabel}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </p>
        </div>
      </Container>
    </aside>
  );
}
