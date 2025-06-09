// The top-level file is now a server component
import { fetchPosts } from "@/lib/sanity";
import BlogCarouselClient from "./BlogCarouselClient";

interface BlogCarouselWrapperProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  filterByTag?: string;
  className?: string;
}

// This is the server component that fetches data
export default async function BlogCarousel({
  title,
  subtitle,
  limit,
  filterByTag,
  className
}: BlogCarouselWrapperProps) {
  // Fetch posts from Sanity
  const posts = await fetchPosts({ limit, tag: filterByTag });
  
  return (
    <BlogCarouselClient
      posts={posts}
      title={title}
      subtitle={subtitle}
      limit={limit}
      filterByTag={filterByTag}
      className={className}
    />
  );
}
