import React from "react";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";

export const Sidebar = () => {
  return (
    <aside className="fixed top-[80px] shadow w-[250px] h-full text-black left-0">
      <SidebarMenu />
    </aside>
  );
};
 