import Image from "next/image";
import { cn } from "@/utils/cn";
import styles from "./ResponsiveImage.module.css";

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  priority = false,
  fill = false,
  objectFit = "cover",
  className,
  wrapperClassName,
  sizes,
}) {
  const imageClasses = cn(
    styles.image,
    fill && styles.fill,
    styles[`fit-${objectFit}`],
    className
  );

  if (fill) {
    return (
      <div className={cn(styles.wrapper, styles.wrapperFill, wrapperClassName)}>
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          loading={priority ? undefined : "lazy"}
          className={imageClasses}
          sizes={sizes || "100vw"}
        />
      </div>
    );
  }

  return (
    <div className={cn(styles.wrapper, wrapperClassName)}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        loading={priority ? undefined : "lazy"}
        className={imageClasses}
        sizes={sizes}
      />
    </div>
  );
}
