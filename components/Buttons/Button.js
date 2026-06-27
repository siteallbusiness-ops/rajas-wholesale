import Link from "next/link";
import { cn } from "@/utils/cn";
import styles from "./Button.module.css";

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  type = "button",
  className,
  disabled = false,
  onClick,
  ariaLabel,
  ...props
}) {
  const classes = cn(
    styles.button,
    styles[variant],
    styles[size],
    disabled && styles.disabled,
    className
  );

  if (href && !disabled) {
    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
