import React from "react";
import UserButton from "@/features/auth/components/user-button";
import WorkspaceSwitcher from "@/app/workspaces/[workspaceId]/workspace-switcher";
import SidebarButton from "@/app/workspaces/[workspaceId]/SidebarButton";
import { Bell, Home, MessageSquare, MoreHorizontal } from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathName = usePathname();

  return (
    <div className="w-min-[70px] flex flex-col gap-y-4 items-center bg-[#481349] pb-[4px] pt-9 h-full p-2">
      <WorkspaceSwitcher />

      <SidebarButton
        icon={Home}
        label={"Главная"}
        isActive={pathName.includes("/workspaces")}
      />
      <SidebarButton icon={MessageSquare} label={"Сообщения"} />
      <SidebarButton icon={Bell} label={"Уведомления"} />
      <SidebarButton icon={MoreHorizontal} label={"Больше"} />

      <div className="mt-auto">
        <UserButton />
      </div>
    </div>
  );
};

export default Sidebar;
