import React from "react";

type WorkspacePageIdType = {
  params: {
    workspaceId: string;
  };
};

const WorkspacePage = ({ params }: WorkspacePageIdType) => {
  return <div>Id: {params.workspaceId}</div>;
};

export default WorkspacePage;
