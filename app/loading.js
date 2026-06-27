import styles from "./loading.module.css";

export default function Loading() {
  return (
    <div className={styles.loading} role="status" aria-live="polite" aria-label="Loading">
      <div className={styles.spinner} aria-hidden="true" />
      <p className={styles.text}>Loading...</p>
    </div>
  );
}
