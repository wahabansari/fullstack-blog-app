"use client";

import { useRouter } from "next/navigation";
import { deletePostById } from "../lib/api";

import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";

const ActionButtons = ({ id }: { id: number }): React.JSX.Element => {
  const router = useRouter();

  const handlePostDelete = async () => {
    await deletePostById(id);
  };

  const handlePostUpdate = () => {
    router.push(`/blog/edit/${id}`);
  };

  return (
    <div className="flex items-center gap-2">
      <Button
        variant="outline"
        size="icon-sm"
        onClick={handlePostUpdate}
      >
        <Pencil className="h-4 w-4" />
      </Button>

      <Button
        variant="destructive"
        size="icon-sm"
        onClick={handlePostDelete}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export { ActionButtons };
