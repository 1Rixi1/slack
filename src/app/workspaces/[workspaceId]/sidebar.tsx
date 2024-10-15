import React from "react";
import UserButton from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "@/app/workspaces/[workspaceId]/workspace-switcher";

const Sidebar = () => {
  return (
    <div className="w-[70px] flex flex-col gap-y-4 items-center bg-[#481349] pb-[4px] pt-9 h-full">
      <WorkspaceSwitcher />

      <div className="mt-auto">
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
