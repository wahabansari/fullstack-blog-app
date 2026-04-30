import BlogCard from "../components/BlogCard";
import { fetchAllPosts } from "../lib/api";
import { Post } from "../types/post.types";
import { Separator } from "@/components/ui/separator";

const BlogPage = async () => {
  const posts = await fetchAllPosts();

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      
      {/* Header */}
       <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tight">Latest Blogs</h2>
          <p className="text-gray-500 text-md mt-1">
            Explore recent articles and insights
          </p>
        </div>

      <Separator className="mb-8" />

      {/* Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {posts?.map((post: Post) => (
          <BlogCard key={post.userId} {...post} />
        ))}
      </div>

    </section>
  );
};

export default BlogPage;