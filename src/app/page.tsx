"use client";

import { Button } from "@/components/ui/button";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import UserButton from "@/features/auth/components/user-button";

export default function Home() {
  const router = useRouter();

  const { signOut } = useAuthActions();

  const handleOnClickSignOut = () => {
    signOut().then(() => {
      router.push("/auth");
    });
  };

  return (
    <div>
      Home
      <UserButton />
      <Button onClick={handleOnClickSignOut}>Sign Out</Button>
    </div>
  );
}
