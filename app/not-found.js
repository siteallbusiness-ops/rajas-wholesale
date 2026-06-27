import Container from "@/components/Sections/Container";
import Button from "@/components/Buttons/Button";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.notFound}>
      <Container>
        <div className={styles.content}>
          <p className={styles.code} aria-hidden="true">
            404
          </p>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you are looking for does not exist or has been moved.
          </p>
          <Button href="/" variant="primary" size="md">
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
