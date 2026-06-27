const OREO_TAGS = ["Oreo", "Cookies", "Biscuits", "Snacks", "chocolate"];

function createOreoProduct({
  id,
  variantId,
  handle,
  title,
  description,
  fullDescription,
  price,
  imageFile,
  tags = [],
  available = true,
}) {
  const image = `/images/products/oreo/${imageFile}`;

  return {
    id: String(id),
    handle,
    title,
    description,
    fullDescription,
    vendor: "Oreo",
    tags: [...new Set([...OREO_TAGS, ...tags])],
    image,
    images: [image],
    variants: [
      {
        id: String(variantId),
        title: "Default Title",
        price,
        compareAtPrice: null,
        available,
      },
    ],
    options: [
      {
        name: "Title",
        position: 1,
        values: ["Default Title"],
      },
    ],
    badge: available ? null : "sold-out",
    buttonLabel: available ? "Add to cart" : "Sold out",
    available,
    soldOut: !available,
    hasVariants: false,
    price,
    compareAtPrice: null,
    priceFrom: false,
  };
}

export const OREO_PRODUCTS = [
  createOreoProduct({
    id: 9730000000001,
    variantId: 9730000000002,
    handle: "oreo-chocolate-wafer-rolls-case-20",
    title: "Oreo Chocolate Wafer Rolls 54g (Case of 20)",
    description:
      "Crispy Oreo chocolate wafer rolls with creamy filling. Wholesale case of 20 x 54g — ideal for convenience stores and sweet shops.",
    fullDescription:
      "Oreo Chocolate Wafer Rolls combine light, crispy wafers with the classic Oreo chocolate taste in a convenient roll format. Each case contains 20 individually wrapped 54g packs, perfect for impulse retail, cinema concessions, and wholesale display. A top seller for customers who love imported biscuit snacks.",
    price: 17.99,
    imageFile: "oreo-chocolate-wafer-rolls.webp",
    tags: ["Imports"],
  }),
  createOreoProduct({
    id: 9730000000010,
    variantId: 9730000000011,
    handle: "oreo-vanilla-wafer-rolls-case-20",
    title: "Oreo Vanilla Wafer Rolls 54g (Case of 20)",
    description:
      "Vanilla-flavoured Oreo wafer rolls in a wholesale case of 20 x 54g. Light, crunchy, and perfect for retail display.",
    fullDescription:
      "Oreo Vanilla Wafer Rolls deliver the iconic Oreo experience in a delicate wafer roll with smooth vanilla creme. Supplied as a full wholesale case of 20 x 54g units, these are ideal for sweet shops, newsagents, and online retailers stocking premium imported snacks.",
    price: 17.99,
    imageFile: "oreo-vanilla-wafer-rolls.webp",
    tags: ["Imports"],
  }),
  createOreoProduct({
    id: 9730000000020,
    variantId: 9730000000021,
    handle: "oreo-milk-chocolate-covered-box-10",
    title: "Oreo Milk Chocolate Covered Box (10x246g)",
    description:
      "Individually wrapped Oreo cookies covered in milk chocolate. Wholesale case of 10 x 246g gift-style boxes.",
    fullDescription:
      "Oreo Milk Chocolate Covered Box features classic Oreo biscuits enrobed in smooth milk chocolate, packed in premium 246g presentation boxes. Each wholesale case includes 10 boxes — a strong seller for gifting aisles, seasonal displays, and premium confectionery ranges.",
    price: 23.99,
    imageFile: "oreo-milk-chocolate-covered-box.webp",
    tags: ["chocolate", "Imports"],
  }),
  createOreoProduct({
    id: 9730000000030,
    variantId: 9730000000031,
    handle: "oreo-white-chocolate-covered-box-10",
    title: "Oreo White Chocolate Covered Box (246g) Case of 10",
    description:
      "Oreo cookies coated in white chocolate, supplied in a wholesale case of 10 x 246g boxes.",
    fullDescription:
      "Oreo White Chocolate Covered Box pairs crunchy Oreo biscuits with creamy white chocolate for a premium treat. Each case contains 10 x 246g boxes suitable for retail gifting, hampers, and imported confectionery shelves. High brand recognition drives consistent wholesale demand.",
    price: 23.99,
    imageFile: "oreo-white-chocolate-covered-box.webp",
    tags: ["chocolate", "Imports"],
  }),
  createOreoProduct({
    id: 9730000000040,
    variantId: 9730000000041,
    handle: "oreo-soft-cakes-case-12",
    title: "Oreo Soft Cakes (12x19.2g) Case of 12",
    description:
      "Soft sponge cakes with Oreo cream filling. Wholesale case of 12 multipacks — great for lunchbox and snack aisles.",
    fullDescription:
      "Oreo Soft Cakes are individually portioned sponge cakes filled with Oreo-flavoured cream. Supplied as a wholesale case of 12 x 19.2g multipacks, they appeal to families, lunchbox shoppers, and customers looking for a softer Oreo snack format beyond traditional biscuits.",
    price: 29.99,
    imageFile: "oreo-soft-cakes.webp",
    tags: ["Cakes", "Imports"],
  }),
  createOreoProduct({
    id: 9730000000050,
    variantId: 9730000000051,
    handle: "oreo-cup-8x115g",
    title: "Oreo Cup (8x115g)",
    description:
      "Oreo biscuit cups with creamy filling. Wholesale case of 8 x 115g — a fun, shareable Oreo format for retail.",
    fullDescription:
      "Oreo Cup offers a playful twist on the classic cookie with crisp Oreo cups and a rich creamy centre. This wholesale case of 8 x 115g units is ideal for novelty snack ranges, American candy sections, and stores targeting younger customers and social media trends.",
    price: 11.99,
    imageFile: "oreo-cup.webp",
    tags: ["Imports"],
  }),
  createOreoProduct({
    id: 9730000000060,
    variantId: 9730000000061,
    handle: "oreo-minis-peanut-butter-usa-12",
    title: "Oreo Mini's Peanut Butter USA (12x85g)",
    description:
      "American-import Oreo Minis with peanut butter creme. Wholesale case of 12 x 85g peg bags for impulse retail.",
    fullDescription:
      "Oreo Mini's Peanut Butter USA brings a bestselling American flavour to UK wholesale. Bite-size chocolate cookies with peanut butter creme, packed in 85g peg bags for easy hanging display. Each case contains 12 bags — a must-stock item for American candy aisles and convenience stores.",
    price: 26.99,
    imageFile: "oreo-minis-peanut-butter-usa.png",
    tags: ["Imports", "American"],
  }),
  createOreoProduct({
    id: 9730000000070,
    variantId: 9730000000071,
    handle: "oreo-wafer-cubes-vanilla-24x42g",
    title: "Oreo Wafer Cubes Milk Vanilla (24x42g)",
    description:
      "Chinese-import Oreo wafer cubes with milk vanilla filling. Wholesale case of 24 x 42g — trending Asian snack format.",
    fullDescription:
      "Oreo Wafer Cubes Milk Vanilla combine layered crispy wafers with a smooth milk-vanilla Oreo filling in a cube shape popular across Asian markets. Supplied as 24 x 42g per case, this imported line is ideal for retailers expanding their world snacks and novelty biscuit ranges.",
    price: 22.99,
    imageFile: "oreo-wafer-cubes-vanilla.png",
    tags: ["Imports"],
  }),
  createOreoProduct({
    id: 9730000000080,
    variantId: 9730000000081,
    handle: "oreo-cocoa-crisp-roll-chocolate-24",
    title: "Oreo Cocoa Crisp Roll Chocolate (24x50g)",
    description:
      "Oreo cocoa crisp rolls with chocolate flavour filling. Wholesale case of 24 x 50g imported biscuit rolls.",
    fullDescription:
      "Oreo Cocoa Crisp Roll Chocolate delivers an extra-crunchy rolled wafer snack with rich Oreo chocolate flavour. Each wholesale case includes 24 x 50g packs, making it a strong addition to imported snack fixtures, travel retail, and stores serving customers seeking Asian-market Oreo varieties.",
    price: 21.99,
    imageFile: "oreo-cocoa-crisp-roll-chocolate.png",
    tags: ["Imports"],
  }),
];

export const OREO_PRODUCT_HANDLES = OREO_PRODUCTS.map((product) => product.handle);
