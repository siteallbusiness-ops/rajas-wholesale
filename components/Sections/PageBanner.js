import Breadcrumb from "@/components/Common/Breadcrumb";
import Container from "@/components/Sections/Container";
import styles from "./PageBanner.module.css";

export default function PageBanner({ title, subtitle, breadcrumbs = [] }) {
  return (
    <section className={styles.banner} aria-labelledby="page-banner-title">
      <Container>
        {breadcrumbs.length > 0 && (
          <Breadcrumb items={breadcrumbs} className={styles.breadcrumb} />
        )}
        <h1 id="page-banner-title" className={styles.title}>
          {title}
        </h1>
        {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      </Container>
    </section>
  );
}
