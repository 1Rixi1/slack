"use client";
import React from "react";
import Toolbar from "@/app/workspaces/toolbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Toolbar />
      {children}
    </div>
  );
};

export default Layout;
