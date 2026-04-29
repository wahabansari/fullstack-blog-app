"use client";

import { use, useActionState } from "react";
import { updatePostHandler } from "@/app/actions/edit-post";
import { Post } from "../types/post.types";
import { cn } from "@/lib/utils";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

const EditPostForm = ({ post }: { post: Post }) => {
  const [data, formAction, isPending] = useActionState(updatePostHandler, {
    title: "",
    description: "",
    tags: [],
    id: "",
  });

  return (
    <>
      <Card className="w-full max-w-xl border border-slate-200 ring-10 shadow-lg ring-border/50">
        {/* Header */}
        <CardHeader className="space-y-1 border-b">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Edit Post
          </CardTitle>
          <CardDescription>
            Update your content and keep it fresh
          </CardDescription>
        </CardHeader>

        {/* Content */}
        <CardContent className="pt-6 space-y-6">
          <form
            action={formAction}
            className={cn(
              "space-y-5 transition-opacity",
              isPending && "opacity-50 pointer-events-none",
            )}
          >
            {/* Hidden ID */}
            <Input type="hidden" name="id" defaultValue={post.userId} />

            {/* ID (display only) */}
            <div className="space-y-2">
              <Label>Post ID</Label>
              <Input defaultValue={post.userId} disabled />
            </div>

            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                defaultValue={post.title}
                required
              />
            </div>

            {/* Description */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={10}
                defaultValue={post.description}
                required
                className="resize-none h-12"
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">
                Tags{" "}
                <span className="text-muted-foreground text-xs">
                  (comma separated)
                </span>
              </Label>
              <Input
                id="tags"
                name="tags"
                defaultValue={post.tags.join(", ")}
                required
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              variant="default"
              className="w-full"
              size="lg"
              disabled={isPending}
            >
              {isPending && <Spinner />}
              Update Post
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
};

export default EditPostForm;
