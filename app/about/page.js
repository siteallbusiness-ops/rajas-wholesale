import Container from "@/components/Sections/Container";
import PageBanner from "@/components/Sections/PageBanner";
import { createMetadata } from "@/utils/metadata";
import { ROUTES } from "@/constants/routes";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "About Us",
  description:
    "Learn about Rajas Wholesale — 15 years of bringing quality wholesale confectionery and snacks to retailers.",
  path: ROUTES.ABOUT,
});

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About us" breadcrumbs={[{ label: "Home", href: "/" }, { label: "About us" }]} />

      <section className={styles.content}>
        <Container size="md">
          <div className={styles.prose}>
            <h2>About Rajas Wholesale</h2>
            <p>
              For over 15 years, Rajas Wholesale has been a trusted name in the
              wholesale confectionery and snacks industry. What started as a small
              family business has grown into a leading supplier serving retailers
              across the region.
            </p>

            <h3>Our Heritage</h3>
            <p>
              Founded with a passion for quality products and exceptional service,
              we have built lasting relationships with customers who rely on us
              for consistent supply, competitive pricing, and a wide product range
              sourced from around the world.
            </p>

            <h3>Our Location</h3>
            <p>
              Unit 8, Grand Union Way, Grand Union Enterprise Park, Southall, UB2 4EX
            </p>

            <h3>Why Choose Rajas Wholesale?</h3>
            <ul>
              <li><strong>Experience</strong> — Over 15 years in wholesale distribution</li>
              <li><strong>Quality</strong> — Carefully curated products from trusted brands</li>
              <li><strong>Community</strong> — Supporting local retailers and businesses</li>
            </ul>
          </div>
        </Container>
      </section>
    </>
  );
}
