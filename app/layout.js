import SiteLayout from "@/components/Layout/SiteLayout";
import { createMetadata } from "@/utils/metadata";
import "./globals.css";

export const metadata = createMetadata({
  title: "",
  description: "Rajas Wholesale - Bringing bulk to you. Confectionery, drinks, snacks and more.",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <SiteLayout>{children}</SiteLayout>
      </body>
    </html>
  );
}
