import { cn } from "@/utils/cn";
import styles from "./SectionTitle.module.css";

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className,
  as: HeadingTag = "h2",
}) {
  return (
    <div className={cn(styles.wrapper, styles[align], className)}>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
      <HeadingTag className={styles.title}>{title}</HeadingTag>
    </div>
  );
}
