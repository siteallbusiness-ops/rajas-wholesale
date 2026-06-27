import Link from "next/link";
import Card from "./Card";
import styles from "./ServiceCard.module.css";

export default function ServiceCard({
  title,
  description,
  href,
  className,
}) {
  const content = (
    <>
      <div className={styles.imagePlaceholder} aria-hidden="true">
        <span>Image</span>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        {href && <span className={styles.link}>Learn more →</span>}
      </div>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={styles.serviceLink}>
        <Card className={className} hover padding="sm">
          {content}
        </Card>
      </Link>
    );
  }

  return (
    <Card className={className} hover padding="sm">
      {content}
    </Card>
  );
}
