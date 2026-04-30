export const addPostHandler = async (
  prevState: { success: boolean; message: string } | null,
  formData: FormData,
) => {
  const raw = Object.fromEntries(formData.entries());

  if (!raw.title || !raw.body) {
    return {
      success: false,
      message: "Title and body are required",
    };
  }

  const payload = {
    title: raw.title,
    description: raw.body,
    tags: String(raw.tags)
      ?.split(",")
      ?.map((tag) => tag.trim()),
    views: Math.max(Math.random()) || 0, // Default views count
    userId: Math.floor(Math.random() * 100) + 1, // Random user ID for demo purposes
  };

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    const res = await response.json();
    res.ok = response.ok; // Attach the HTTP status to the response object
    return !res.ok
      ? {
          success: false,
          message: "Failed to create post",
          res,
        }
      : {
          success: true,
          message: "Post created successfully",
          res, // 👈 this is what you wanted
        };
  } catch (error) {
    throw new Error(
      "Failed to submit post",
      error instanceof Error ? { cause: error } : undefined,
    );
  }
};
