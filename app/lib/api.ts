"use server";
export const fetchAllPosts = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`, {
      cache: "no-store",
    });
    return await response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error("Error fetching posts:", error.message);
    }
  }
};

export const fetchPostById = async (id: number) => {
  const postId = Number(id);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/posts/${postId}`,
      { cache: "no-store" },
    );
    return res.json();
  } catch (error) {
    throw new Error(
      "Error fetching post by ID",
      error instanceof Error ? { cause: error } : undefined,
    );
  }
};

export const deletePostById = async (id: number) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`Delete failed: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    throw new Error(
      "Error deleting post",
      error instanceof Error ? { cause: error } : undefined,
    );
  }
};


