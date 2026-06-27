import Container from "@/components/Sections/Container";
import PageBanner from "@/components/Sections/PageBanner";
import BlogCard from "@/components/Blog/BlogCard";
import { BLOG_POSTS } from "@/utils/blogs";
import { createMetadata } from "@/utils/metadata";
import { ROUTES } from "@/constants/routes";
import styles from "./page.module.css";

export const metadata = createMetadata({
  title: "Blog",
  description:
    "Wholesale tips, industry insights, and retail guides from Rajas Wholesale — your UK partner for confectionery, drinks, and snacks.",
  path: ROUTES.BLOG,
});

export default function BlogPage() {
  return (
    <>
      <PageBanner
        title="Blog"
        subtitle="Industry insights, retail tips, and wholesale guides to help your business grow."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog" },
        ]}
      />

      <section className={styles.section}>
        <Container>
          <div className={styles.grid}>
            {BLOG_POSTS.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
