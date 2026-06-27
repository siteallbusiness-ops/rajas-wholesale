import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/utils/cn";
import styles from "./Logo.module.css";

export default function Logo({
  href = "/",
  className,
  size = "default",
  align = "center",
  onDark = false,
  onLight = false,
  onClick,
}) {
  const mark = (
    <>
      <span className={styles.logoTop}>RAJAS</span>
      <span className={styles.logoBottom}>WHOLESALE</span>
    </>
  );

  const logoClassName = cn(
    styles.logo,
    size === "md" && styles.sizeMd,
    align === "start" && styles.alignStart,
    onDark && styles.onDark,
    onLight && styles.onLight,
    className
  );

  if (href) {
    return (
      <Link
        href={href}
        className={logoClassName}
        aria-label={`${SITE_NAME} - Home`}
        onClick={onClick}
      >
        {mark}
      </Link>
    );
  }

  return <span className={logoClassName}>{mark}</span>;
}
