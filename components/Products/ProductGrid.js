import ProductCard from "./ProductCard";
import styles from "./ProductGrid.module.css";

export default function ProductGrid({ products, priorityFirst = false }) {
  if (!products.length) {
    return (
      <div className={styles.empty}>
        <p>No products found matching your criteria.</p>
      </div>
    );
  }

  return (
    <div className={styles.grid}>
      {products.map((product, index) => (
        <ProductCard
          key={product.id}
          product={product}
          priority={priorityFirst && index < 4}
        />
      ))}
    </div>
  );
}
