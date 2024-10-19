import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCreateWorkspaceModal } from "@/features/workspace/store/store";
import { Button } from "@/components/ui/button";
import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";
import { useGetWorkspaces } from "@/features/workspace/api/use-get-workspaces";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { Loader, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

const WorkspaceSwitcher = () => {
  const router = useRouter();

  const workspaceId = useWorkspaceId();

  const [, setOpen] = useCreateWorkspaceModal();

  const { data: workspaceData, isLoading: workspaceLoading } =
    useGetWorkspace(workspaceId);
  const { data: workspacesData } = useGetWorkspaces();

  const filteredWorkspaces = workspacesData?.filter(
    (workspace) => workspace._id !== workspaceId,
  );

  console.log("workspaceData", workspaceData);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          {workspaceLoading ? (
            <Loader className="size-9 animate-spin shrink-0" />
          ) : (
            workspaceData?.name.charAt(0).toUpperCase()
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="start" side="bottom" className="w-64">
        <DropdownMenuItem className="flex-col items-start justify-start capitalize">
          {workspaceData?.name}
          <span className="text-xs text-muted-foreground">
            Активная Рабочая область
          </span>
        </DropdownMenuItem>

        {filteredWorkspaces?.map((workspace) => (
          <DropdownMenuItem
            key={workspace._id}
            className="cursor-pointer capitalize"
            onClick={() => router.push(`/workspaces/${workspace._id}`)}
          >
            <div className="size-9 overflow-hidden relative flex items-center justify-center bg-[#616061] text-white rounded-md mr-2">
              {workspace.name.charAt(0).toUpperCase()}
            </div>
            <p className="truncate">{workspace.name}</p>
          </DropdownMenuItem>
        ))}

        <DropdownMenuItem
          className="cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <div className="size-9 overflow-hidden relative flex items-center justify-center bg-[#F2F2F2] text-slate-800 rounded-md mr-2">
            <Plus />
          </div>
          Создать рабочую область
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default WorkspaceSwitcher;
