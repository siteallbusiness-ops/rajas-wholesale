"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./ProductGallery.module.css";

export default function ProductGallery({ product }) {
  const images = product.images?.length ? product.images : product.image ? [product.image] : [];
  const [activeIndex, setActiveIndex] = useState(0);

  if (!images.length) {
    return <div className={styles.noImage}>No image available</div>;
  }

  if (images.length === 1) {
    return (
      <div className={styles.single}>
        <Image
          src={images[0]}
          alt={product.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          priority
        />
      </div>
    );
  }

  return (
    <div className={styles.gallery}>
      <div className={styles.main}>
        <Image
          src={images[activeIndex]}
          alt={`${product.title} — image ${activeIndex + 1}`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className={styles.image}
          priority
        />
      </div>
      <div className={styles.thumbs}>
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className={`${styles.thumb} ${index === activeIndex ? styles.thumbActive : ""}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`View image ${index + 1}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="80px"
              className={styles.thumbImage}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
