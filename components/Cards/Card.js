import { cn } from "@/utils/cn";
import styles from "./Card.module.css";

export default function Card({
  children,
  className,
  padding = "md",
  hover = false,
  as: Component = "div",
}) {
  return (
    <Component
      className={cn(
        styles.card,
        styles[`padding-${padding}`],
        hover && styles.hover,
        className
      )}
    >
      {children}
    </Component>
  );
}
