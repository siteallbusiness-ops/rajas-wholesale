import { createMetadata } from "@/utils/metadata";
import { ROUTES } from "@/constants/routes";

export const metadata = createMetadata({
  title: "Checkout",
  description: "Complete your Rajas Wholesale order.",
  path: ROUTES.CHECKOUT,
});

export { default } from "./CheckoutClient";
