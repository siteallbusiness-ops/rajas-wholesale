import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Sections/Container";
import Breadcrumb from "@/components/Common/Breadcrumb";
import ProductGrid from "@/components/Products/ProductGrid";
import ProductActions from "./ProductActions";
import ProductGallery from "./ProductGallery";
import { PRODUCTS, getProductByHandle, getRelatedProducts, getProductVendor } from "@/utils/products";
import { createMetadata } from "@/utils/metadata";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({ handle: product.handle }));
}

export async function generateMetadata({ params }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);
  if (!product) return {};

  return createMetadata({
    title: product.title,
    description: product.description || product.title,
    path: `/products/${handle}`,
  });
}

const TRUST_FEATURES = [
  { label: "Wholesale pricing", icon: "£" },
  { label: "Fast UK dispatch", icon: "🚚" },
  { label: "Quality guaranteed", icon: "✓" },
];

export default async function ProductPage({ params }) {
  const { handle } = await params;
  const product = getProductByHandle(handle);

  if (!product) notFound();

  const relatedProducts = getRelatedProducts(product);
  const vendorLabel = getProductVendor(product);

  return (
    <>
      <Container className={styles.breadcrumbWrap}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/shop" },
            { label: product.title },
          ]}
        />
      </Container>

      <section className={styles.product}>
        <Container>
          <div className={styles.grid}>
            <div className={styles.galleryWrap}>
              {product.badge && (
                <span
                  className={`${styles.badge} ${
                    product.badge === "sale" ? styles.badgeSale : ""
                  }`}
                >
                  {product.badge === "sale" ? "Sale" : "Sold out"}
                </span>
              )}
              <ProductGallery product={product} />
            </div>

            <div className={styles.info}>
              {vendorLabel && (
                <p className={styles.vendorLabel}>{vendorLabel}</p>
              )}

              <h1 className={styles.title}>{product.title}</h1>

              <ProductActions product={product} />

              <ul className={styles.trustList}>
                {TRUST_FEATURES.map((item) => (
                  <li key={item.label} className={styles.trustItem}>
                    <span className={styles.trustIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                    {item.label}
                  </li>
                ))}
              </ul>

              {product.description && (
                <p className={styles.description}>{product.description}</p>
              )}

              {product.tags.length > 0 && (
                <div className={styles.tags}>
                  <span className={styles.tagsLabel}>Categories:</span>
                  {product.tags.map((tag) => (
                    <Link
                      key={tag}
                      href={`/shop?tag=${encodeURIComponent(tag)}`}
                      className={styles.tag}
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {relatedProducts.length > 0 && (
        <section className={styles.related}>
          <Container>
            <div className={styles.relatedHeader}>
              <h2 className={styles.relatedTitle}>You may also like</h2>
              <Link href="/shop" className={styles.relatedLink}>
                View all
              </Link>
            </div>
            <ProductGrid products={relatedProducts} />
          </Container>
        </section>
      )}
    </>
  );
}
