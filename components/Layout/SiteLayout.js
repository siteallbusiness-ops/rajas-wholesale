import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductQuickView from "@/components/Products/ProductQuickView";
import styles from "./SiteLayout.module.css";

export default function SiteLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
      <ProductQuickView />
    </div>
  );
}
