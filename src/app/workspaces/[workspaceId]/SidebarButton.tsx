import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

type SidebarButtonPropsType = {
  icon: LucideIcon | IconType;
  label: string;
  isActive?: boolean;
};

const SidebarButton = ({
  icon: Icon,
  label,
  isActive,
}: SidebarButtonPropsType) => {
  return (
    <div className="flex flex-col items-center justify-center gap-y-0.5 cursor-pointer group">
      <Button
        variant="transparent"
        className={cn(
          "size-9 p-2 group-hover:bg-accent/20",
          isActive && "bg-accent/20",
        )}
      >
        <Icon className="size-5 group-hover:scale-110 transition-all" />
      </Button>
      <span className="test-[11px] group-hover:text-accent">{label}</span>
    </div>
  );
};

export default SidebarButton;
