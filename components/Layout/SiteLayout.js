import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ProductQuickView from "@/components/Products/ProductQuickView";
import ScrollLockReset from "@/components/Layout/ScrollLockReset";
import styles from "./SiteLayout.module.css";

export default function SiteLayout({ children }) {
  return (
    <div className={styles.layout}>
      <ScrollLockReset />
      <Header />
      <main id="main-content" className={styles.main}>
        {children}
      </main>
      <Footer />
      <ProductQuickView />
    </div>
  );
}
