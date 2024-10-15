"use client";
import React from "react";
import { useWorkspaceId } from "@/hooks/use-workspace-id";

const WorkspacePage = () => {
  const workspaceId = useWorkspaceId();

  return <div>Id: {workspaceId}</div>;
};

export default WorkspacePage;
