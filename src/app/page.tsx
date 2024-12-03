"use client";
import { Button } from "@/components/ui/button";
import { useAuthActions } from "@convex-dev/auth/react";

export default function Home() {
  const { signOut } = useAuthActions();

  const handleClickProviderLogOut = () => {
    signOut();
  };

  return (
    <div>
      <Button onClick={handleClickProviderLogOut}>Log Out</Button>
    </div>
  );
}
