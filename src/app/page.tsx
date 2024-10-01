"use client";

import { Button } from "@/components/ui/button";

import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";

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
      <Button onClick={handleOnClickSignOut}>Sign Out</Button>
    </div>
  );
}
