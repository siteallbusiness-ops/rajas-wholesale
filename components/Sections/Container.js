import { cn } from "@/utils/cn";
import styles from "./Container.module.css";

export default function Container({
  children,
  size = "default",
  className,
  as: Component = "div",
}) {
  return (
    <Component
      className={cn(
        styles.container,
        size !== "default" && styles[size],
        className
      )}
    >
      {children}
    </Component>
  );
}
