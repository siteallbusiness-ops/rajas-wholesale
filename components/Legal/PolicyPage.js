import Container from "@/components/Sections/Container";
import PageBanner from "@/components/Sections/PageBanner";
import LegalContent from "@/components/Legal/LegalContent";
import { POLICY_LAST_UPDATED } from "@/constants/policies";
import styles from "./page.module.css";

export default function PolicyPage({ policy }) {
  return (
    <>
      <PageBanner
        title={policy.title}
        subtitle={policy.description}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: policy.title },
        ]}
      />
      <section className={styles.content}>
        <Container size="md">
          <LegalContent policy={policy} lastUpdated={POLICY_LAST_UPDATED} />
        </Container>
      </section>
    </>
  );
}
