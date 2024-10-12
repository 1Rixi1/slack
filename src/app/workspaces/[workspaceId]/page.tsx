"use client";
import React from "react";
import { useWorkspaceId } from "@/hooks/use-workspace-id";
import { useGetWorkspace } from "@/features/workspace/api/use-get-workspace";

const WorkspacePage = () => {
  const workspaceId = useWorkspaceId();

  const { data } = useGetWorkspace(workspaceId);

  return (
    <div>
      Id: {workspaceId} {JSON.stringify(data)}
    </div>
  );
};

export default WorkspacePage;
