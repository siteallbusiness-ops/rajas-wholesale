import Card from "./Card";
import styles from "./FeatureCard.module.css";

export default function FeatureCard({ icon, title, description, className }) {
  return (
    <Card className={className} hover padding="md">
      {icon && (
        <div className={styles.icon} aria-hidden="true">
          {icon}
        </div>
      )}
      {!icon && (
        <div className={styles.iconPlaceholder} aria-hidden="true">
          ★
        </div>
      )}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </Card>
  );
}
