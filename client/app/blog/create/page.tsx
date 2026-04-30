"use client";

import { useActionState } from "react";
import { addPostHandler } from "@/app/actions/add-post";

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

const CreatePostPage = () => {
  const [state, formAction, isPending] = useActionState(addPostHandler, null);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <Card className="w-full max-w-xl border border-slate-200 ring-10 shadow-lg ring-border/50">
        <CardHeader className="space-y-1 border-b">
          <CardTitle className="text-2xl font-bold tracking-tight">
            Create New Post
          </CardTitle>
          <CardDescription>Write and publish your content</CardDescription>
        </CardHeader>

        <CardContent className="pt-6 space-y-6">
          <form action={formAction} className="space-y-5">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                placeholder="Enter a catchy title..."
                required
              />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                rows={8}
                placeholder="Write your post content..."
                className="resize-none"
                required
              />
            </div>

            {/* Tags */}
            <div className="space-y-2">
              <Label htmlFor="tags">
                Tags
                <span className="text-muted-foreground text-xs">
                  (comma separated)
                </span>
              </Label>
              <Input
                id="tags"
                name="tags"
                placeholder="e.g. tech, nextjs, ui"
                required
              />
            </div>

            {/* Submit */}
            <Button type="submit" className="w-full h-11" disabled={isPending}>
              {isPending ? "Creating..." : "Create Post"}
            </Button>
          </form>

          {/* Feedback */}
          {state?.message && (
            <p className="text-sm text-muted-foreground text-center">
              {state.message}
            </p>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePostPage;
