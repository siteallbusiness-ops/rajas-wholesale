import Card from "./Card";
import styles from "./TestimonialCard.module.css";

export default function TestimonialCard({
  quote,
  author,
  role,
  className,
}) {
  return (
    <Card className={className} padding="md">
      <blockquote className={styles.quote}>
        <p>&ldquo;{quote}&rdquo;</p>
      </blockquote>
      <footer className={styles.footer}>
        <div className={styles.avatar} aria-hidden="true">
          {author?.charAt(0) || "?"}
        </div>
        <div>
          <cite className={styles.author}>{author}</cite>
          {role && <p className={styles.role}>{role}</p>}
        </div>
      </footer>
    </Card>
  );
}
