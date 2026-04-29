import EditPostForm from "@/app/components/EditPostForm";
import { fetchPostById } from "@/app/lib/api";
import { Post } from "@/app/types/post.types";

const EditPostPage = async ({ params }: { params: Promise<{ postId: string }> }) => {
  const { postId } = await params;
  const postID = Number(postId); // Convert the ID to a number

  const post:Post = await fetchPostById(postID);

  return (
    <div className="flex items-center justify-center min-h-[80vh] px-4">
      <EditPostForm post={post} />
    </div>
  );
};

export default EditPostPage;
