/**
 * Format a number as GBP currency.
 * @param {number} amount
 * @param {boolean} [fromPrefix]
 */
export function formatPrice(amount, fromPrefix = false) {
  const formatted = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(amount);

  return fromPrefix ? `From ${formatted}` : formatted;
}
