import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Container from "@/components/Sections/Container";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BlogCard from "@/components/Blog/BlogCard";
import BlogContent from "@/components/Blog/BlogContent";
import {
  getBlogBySlug,
  getAllBlogSlugs,
  getRecentPosts,
} from "@/utils/blogs";
import { createMetadata } from "@/utils/metadata";
import styles from "./page.module.css";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${slug}`,
  });
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  const relatedPosts = getRecentPosts(3, slug);

  return (
    <>
      <Container className={styles.breadcrumbWrap}>
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title },
          ]}
        />
      </Container>

      <article className={styles.article}>
        <Container size="md">
          <header className={styles.header}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
            <div className={styles.meta}>
              <span>By {post.author}</span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.date}>{post.dateFormatted}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readTime}</span>
            </div>
          </header>

          <div className={styles.heroImage}>
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className={styles.image}
              priority
            />
          </div>

          <BlogContent sections={post.sections} />

          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Ready to stock up? Browse our full wholesale catalogue.
            </p>
            <Link href="/shop" className={styles.ctaBtn}>
              Shop all products
            </Link>
          </div>
        </Container>
      </article>

      {relatedPosts.length > 0 && (
        <section className={styles.related}>
          <Container>
            <h2 className={styles.relatedTitle}>More from the blog</h2>
            <div className={styles.relatedGrid}>
              {relatedPosts.map((related) => (
                <BlogCard key={related.slug} post={related} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
