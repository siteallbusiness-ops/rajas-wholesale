import Image from "next/image";
import Link from "next/link";
import styles from "./BlogCard.module.css";

export default function BlogCard({ post }) {
  return (
    <article className={styles.card}>
      <Link href={`/blog/${post.slug}`} className={styles.imageLink}>
        <div className={styles.imageWrap}>
          <Image
            src={post.image}
            alt={post.imageAlt}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
          />
          <span className={styles.category}>{post.category}</span>
        </div>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <time dateTime={post.date}>{post.dateFormatted}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className={styles.title}>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </h2>

        <p className={styles.excerpt}>{post.excerpt}</p>

        <Link href={`/blog/${post.slug}`} className={styles.readMore}>
          Read article
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
