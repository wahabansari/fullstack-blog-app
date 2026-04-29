import Link from "next/link";
import { Post } from "../types/post.types";
import { ActionButtons } from "./ActionButtons";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideArrowRight } from "lucide-react";

const BlogCard = (props: Post) => {
  const post: Post = props;

  return (
    <Card className="h-full rounded-lg border border-slate-200 flex flex-col justify-between shadow ring-4 ring-border/50 cursor-pointer transition-transform hover:-translate-y-1">
      {/* Header */}
      <CardHeader className="space-y-3">
        <ActionButtons id={post.userId} />
        <CardTitle className="font-semibold leading-snug capitalize line-clamp-2">{post.title}</CardTitle>
      </CardHeader>

      {/* Content */}
      <CardContent className="text-sm text-muted-foreground line-clamp-3">
        {post.description}
      </CardContent>

      {/* Footer */}
      <CardFooter className="flex flex-col items-start gap-2 mt-8">
        <Button variant="outline" asChild className="w-full" size="lg">
          <Link href={`/blog/${post.userId}`}>
            Read More <LucideArrowRight />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
