"use client";

import React from "react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { useAuthActions } from "@convex-dev/auth/react";

import { useCurrentUser } from "@/features/auth/api/use-current-user";
import { Loader, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

const UserButton = () => {
  const router = useRouter();

  const { signOut } = useAuthActions();

  const { dataUser, isLoading } = useCurrentUser();

  if (!dataUser) return null;

  if (isLoading) {
    return <Loader className="animate-spin size-4 " />;
  }

  const { name, image } = dataUser;

  const firstCharFullName = name!.charAt(0).toUpperCase();

  const onClickLogOutHandler = () => {
    signOut().then(() => {
      router.push("/auth");
    });
  };

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className="outline-none relative">
        <Avatar className="size-10 hover:opacity-75 transition">
          <AvatarImage src={image} alt={name} />
          <AvatarFallback className="bg-sky-500 text-white">
            {firstCharFullName}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" side="right" className="w-60">
        <DropdownMenuItem
          className="cursor-pointer h-10"
          onClick={onClickLogOutHandler}
        >
          <LogOut className="mr-2 size-4" />
          LogOut
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserButton;
