import { Suspense } from "react";
import Container from "@/components/Sections/Container";
import ShopSearch from "@/components/Products/ShopSearch";
import ShopContent from "./ShopContent";
import { createMetadata } from "@/utils/metadata";
import { ROUTES } from "@/constants/routes";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Products",
  description: "Browse our full range of wholesale confectionery, drinks and snacks.",
  path: ROUTES.SHOP,
});

export default function ShopPage() {
  return (
    <>
      <div className={styles.banner}>
        <Container>
          <h1 className={styles.title}>Products</h1>
          <Suspense fallback={null}>
            <ShopSearch />
          </Suspense>
        </Container>
      </div>

      <section className={styles.content}>
        <Container>
          <Suspense fallback={<div className={styles.loading}>Loading products...</div>}>
            <ShopContent />
          </Suspense>
        </Container>
      </section>
    </>
  );
}
