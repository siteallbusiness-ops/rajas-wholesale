import Container from "@/components/Sections/Container";
import ContactForm from "@/components/Forms/ContactForm";
import { createMetadata } from "@/utils/metadata";
import { ROUTES } from "@/constants/routes";
import { CONTACT } from "@/constants/site";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Contact",
  description: "Get in touch with Rajas Wholesale for orders, quotes and enquiries.",
  path: ROUTES.CONTACT,
});

export default function ContactPage() {
  return (
    <section className={styles.page}>
      <Container size="sm">
        <h1 className={styles.title}>Contact</h1>

        <div className={styles.info}>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}>{CONTACT.phone}</a>
          </p>
          <p>
            <strong>Address:</strong> {CONTACT.address}
          </p>
        </div>

        <ContactForm className={styles.form} />
      </Container>
    </section>
  );
}
