import Container from "@/components/Sections/Container";
import Button from "@/components/Buttons/Button";
import styles from "./Hero.module.css";

export default function Hero({
  title = "Welcome to Rajas Wholesale",
  subtitle = "Your trusted partner for quality wholesale products and reliable service.",
  ctaText = "Get Started",
  ctaHref = "/contact",
  secondaryCtaText,
  secondaryCtaHref,
}) {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <Container>
        <div className={styles.content}>
          <h1 id="hero-title" className={styles.title}>
            {title}
          </h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.actions}>
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
            </Button>
            {secondaryCtaText && secondaryCtaHref && (
              <Button href={secondaryCtaHref} variant="secondary" size="lg">
                {secondaryCtaText}
              </Button>
            )}
          </div>
        </div>
        <div className={styles.imagePlaceholder} aria-hidden="true">
          <span>Hero Image Placeholder</span>
        </div>
      </Container>
    </section>
  );
}
