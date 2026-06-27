export const HERO_STATS = [
  { value: "56+", label: "Wholesale lines" },
  { value: "UK", label: "Wide delivery" },
  { value: "15+", label: "Years experience" },
];

export const HERO_SHOWCASE = [
  {
    key: "drinks",
    label: "Drinks",
    href: "/shop?tag=Drinks",
    accent: "#2db2ff",
    src: "https://cdn.shopify.com/s/files/1/0779/7365/1792/files/5060759416700.webp?v=1700942559",
    alt: "Japanese Coca-Cola wholesale pack",
  },
  {
    key: "chocolates",
    label: "Chocolates",
    href: "/shop?tag=Chocolates",
    accent: "#8b4513",
    src: "https://cdn.shopify.com/s/files/1/0779/7365/1792/files/81qA9FSXmnL._AC_SL1500.jpg?v=1701360040",
    alt: "Hershey's wholesale chocolate box",
  },
  {
    key: "cookies",
    label: "Cookies",
    href: "/shop?tag=Cookies",
    accent: "#d4a574",
    src: "https://cdn.shopify.com/s/files/1/0779/7365/1792/files/81jpfZHtS-L._AC_SL1500.jpg?v=1701287842",
    alt: "Keebler M&M cookies wholesale pack",
  },
  {
    key: "crisps",
    label: "Crisps & snacks",
    href: "/shop?tag=Crisps",
    accent: "#f59e0b",
    src: "https://cdn.shopify.com/s/files/1/0779/7365/1792/files/IMG-1964.jpg?v=1701310167",
    alt: "Takis Fuego crisps pack",
  },
];

/** @deprecated Use HERO_SHOWCASE */
export const HERO_TILES = HERO_SHOWCASE;

/** @deprecated Use HERO_SHOWCASE */
export const HERO_IMAGES = {
  primary: { src: HERO_SHOWCASE[0].src, alt: HERO_SHOWCASE[0].alt },
  secondary: { src: HERO_SHOWCASE[1].src, alt: HERO_SHOWCASE[1].alt },
  tertiary: { src: HERO_SHOWCASE[3].src, alt: HERO_SHOWCASE[3].alt },
  accent: { src: HERO_SHOWCASE[2].src, alt: HERO_SHOWCASE[2].alt },
};
