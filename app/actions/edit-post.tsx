import { redirect } from "next/navigation";

export const updatePostHandler = async (_: null, formData: FormData) => {
  const postId = Number(formData.get("id"));
  const raw = Object.fromEntries(formData.entries());
  const payload = {
    title: raw.title,
    description: raw.description,
    tags: String(raw.tags)
      ?.split(",")
      ?.map((tag) => tag.trim()),
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...payload }),
      },
    );

    if (!res.ok) {
      throw new Error("Failed to update post");
    }
  } catch (error) {
    throw new Error(
      "Error updating post",
      error instanceof Error ? { cause: error } : undefined,
    );
  }
  // ✅ Set flash message
  redirect(`/blog/${postId}`);
};
