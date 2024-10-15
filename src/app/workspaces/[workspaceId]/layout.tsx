"use client";
import React from "react";
import Toolbar from "@/app/workspaces/[workspaceId]/toolbar";
import Sidebar from "@/app/workspaces/[workspaceId]/sidebar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full'>
      <Toolbar />
      <div className="flex h-[calc(100vh-40px)]">
        <Sidebar />
        <div className="h-full h-[calc(100vh - 40px)]">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
