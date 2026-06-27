import { SITE_NAME, SITE_DESCRIPTION, SITE_URL } from "@/constants/site";

/**
 * Build SEO metadata for a page.
 * @param {Object} options
 * @param {string} options.title - Page title (without site name suffix)
 * @param {string} [options.description] - Page description
 * @param {string} [options.path] - Page path for canonical URL
 * @param {boolean} [options.noIndex] - Prevent indexing
 */
export function createMetadata({
  title,
  description = SITE_DESCRIPTION,
  path = "",
  noIndex = false,
}) {
  const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const url = `${SITE_URL}${path}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
