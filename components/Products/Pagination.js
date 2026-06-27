import Link from "next/link";
import styles from "./Pagination.module.css";

export default function Pagination({
  currentPage,
  totalPages,
  buildPageUrl,
  basePath = "/shop",
}) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const getUrl = buildPageUrl || ((page) => (page === 1 ? basePath : `${basePath}?page=${page}`));

  return (
    <nav className={styles.pagination} aria-label="Pagination">
      {pages.map((page) => (
        <Link
          key={page}
          href={getUrl(page)}
          className={`${styles.page} ${page === currentPage ? styles.active : ""}`}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Link>
      ))}
      {currentPage < totalPages && (
        <Link
          href={getUrl(currentPage + 1)}
          className={styles.next}
          aria-label="Next page"
        >
          ›
        </Link>
      )}
    </nav>
  );
}
