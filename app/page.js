import Link from "next/link";
import Container from "@/components/Sections/Container";
import HomeHero from "@/components/Home/HomeHero";
import ShopHighlights from "@/components/Home/ShopHighlights";
import PromoBanner from "@/components/Home/PromoBanner";
import ProductGrid from "@/components/Products/ProductGrid";
import { getFeaturedProducts, PRODUCTS } from "@/utils/products";
import { createMetadata } from "@/utils/metadata";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Home",
  description: "Rajas Wholesale - Bringing bulk to you. Confectionery, drinks, snacks and more.",
  path: "/",
});

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const popularProducts = PRODUCTS.filter(
    (p) => !featuredProducts.some((f) => f.id === p.id)
  ).slice(0, 8);

  return (
    <div className={styles.home}>
      <HomeHero />

      <ShopHighlights />

      <section className={styles.featured}>
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Curated for you</p>
              <h2 className={styles.sectionTitle}>Featured products</h2>
              <p className={styles.sectionSubtitle}>
                Hand-picked bestsellers from our wholesale catalogue
              </p>
            </div>
            <Link href="/shop" className={styles.viewAll}>
              View all products
            </Link>
          </div>
          <ProductGrid products={featuredProducts} priorityFirst />
        </Container>
      </section>

      <PromoBanner />

      <section className={`${styles.featured} ${styles.popular}`}>
        <Container>
          <div className={styles.sectionHeader}>
            <div>
              <p className={styles.eyebrow}>Trending now</p>
              <h2 className={styles.sectionTitle}>Popular picks</h2>
              <p className={styles.sectionSubtitle}>
                Discover what other wholesalers are ordering
              </p>
            </div>
            <Link href="/shop" className={styles.viewAllOutline}>
              Browse shop
            </Link>
          </div>
          <ProductGrid products={popularProducts} />
        </Container>
      </section>
    </div>
  );
}
