"use client";

import { Button } from "@/components/ui/button";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import UserButton from "@/features/auth/components/user-button";
import { useTriggerModal } from "@/features/workspace/store/store";
import { useEffect, useMemo } from "react";
import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";
import Modals from "@/components/ui/modals";

export default function Home() {
  const router = useRouter();

  const { signOut } = useAuthActions();

  const [open, setOpen] = useTriggerModal();

  const { data, isLoading } = useGetWorkspace();

  const workspaceId = useMemo(() => {
    return data?.[0]?._id;
  }, [data]);

  const handleOnClickSignOut = () => {
    signOut().then(() => {
      router.push("/auth");
    });
  };

  useEffect(() => {
    if (isLoading) return;

    if (workspaceId) {
      console.log("Redirect workspaceId");
    } else if (!open) {
      setOpen(true);
    }
  }, [open, setOpen, workspaceId, isLoading]);

  return (
    <div>
      Home
      <Modals />
      <UserButton />
      <Button onClick={handleOnClickSignOut}>Sign Out</Button>
    </div>
  );
}
