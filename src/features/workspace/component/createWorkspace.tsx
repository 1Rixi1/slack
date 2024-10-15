import React, { FormEvent, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useCreateWorkspaceModal } from "@/features/workspace/store/store";
import { useCreateWorkspace } from "@/features/workspace/api/use-create-workspace";
import { useRouter } from "next/navigation";

import { toast } from "sonner";

const CreateWorkSpace = () => {
  const router = useRouter();

  const [name, setName] = useState("");

  const [open, setOpen] = useCreateWorkspaceModal();

  const { workspaceMutation, isPending } = useCreateWorkspace();

  const onOpenClose = () => {
    setOpen(false);
    setName("");
  };

  const onSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await workspaceMutation(
        { name },
        {
          onSuccess: (id) => {
            toast.success("Рабочая область создана !");
            router.push(`/workspaces/${id}`);

            onOpenClose();
          },
          onError: (error) => {
            console.log("Error ---", error);
          },
          onSettled: () => {},
        },
      );
    } catch (error) {
      console.log(error as Error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Создать комнату</DialogTitle>
        </DialogHeader>
        <form className="space-y-4" onSubmit={onSubmitHandler}>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            disabled={isPending}
            minLength={3}
            placeholder="Введите название комнаты"
          />
          <div className="flex justify-end">
            <Button disabled={isPending}>Создать комнату</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateWorkSpace;
