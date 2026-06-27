import { BLOG_POSTS } from "@/constants/blogs";

export { BLOG_POSTS };

export function getBlogBySlug(slug) {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogSlugs() {
  return BLOG_POSTS.map((post) => post.slug);
}

export function getRecentPosts(limit = 3, excludeSlug) {
  return BLOG_POSTS.filter((post) => post.slug !== excludeSlug).slice(0, limit);
}
