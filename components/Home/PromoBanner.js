import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Sections/Container";
import { OREO_PROMO } from "@/constants/promo";
import styles from "./PromoBanner.module.css";

export default function PromoBanner() {
  return (
    <section className={styles.section} aria-label="Oreo range promotion">
      <Container>
        <Link href={OREO_PROMO.ctaHref} className={styles.bannerLink}>
          <Image
            src={OREO_PROMO.bannerImage}
            alt={OREO_PROMO.bannerAlt}
            width={OREO_PROMO.width}
            height={OREO_PROMO.height}
            sizes="(max-width: 1280px) 100vw, 1280px"
            className={styles.bannerImage}
            priority={false}
          />
        </Link>
      </Container>
    </section>
  );
}
