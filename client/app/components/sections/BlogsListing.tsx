import BlogCard from "../BlogCard";
import { fetchAllPosts } from "@/app/lib/api";
import { Post } from "@/app/types/post.types";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";
import Link from "next/link";

const BlogsListing = async () => {
  const posts = await fetchAllPosts();
  return (
    <>
      <section className="max-w-6xl mx-auto px-4 mt-16">
        {/* Title */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Latest Blogs</h2>
          <p className="text-gray-500 text-md mt-1">
            Explore recent articles and insights
          </p>
        </div>

        {/* Grid */}
        <div
          className="grid gap-6 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            xl:grid-cols-3"
        >
          {/* Temporary static cards */}
          {posts?.slice(0, 6)?.map((post: Post) => (
            <BlogCard key={post.userId} {...post} />
          ))}
        </div>

        {/* Goto Listing Button */}
        <center>
          <Button size="lg" asChild className="mt-20">
            <Link href="/blog">
              Explore Blog <LucideArrowRight />
            </Link>
          </Button>
        </center>
      </section>
    </>
  );
};

export default BlogsListing;
