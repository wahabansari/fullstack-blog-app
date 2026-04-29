import { fetchPostById } from "@/app/lib/api";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const BlogDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const postID = Number(id);
  const post = await fetchPostById(postID);

  return (
    <article className="max-w-6xl mx-auto px-4 py-12">
      {/* Tags */}
      <div className="flex flex-wrap gap-1 mb-2">
        {post.tags.map((tag: string, index: number) => (
          <Badge key={index} variant="secondary"  className="capitalize">
            {tag}
          </Badge>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl md:text-4xl font-black tracking-tight leading-tight mb-6 capitalize">
        {post.title}
      </h1>

      {/* Meta (optional placeholder for future) */}
      <p className="text-sm text-muted-foreground mb-6">
        Published recently • {post.views ?? 0} views
      </p>

      <Separator className="mb-8" />

      {/* Content */}
      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-base leading-relaxed text-foreground">
          {post.description}
        </p>
      </div>
    </article>
  );
};

export default BlogDetail;
