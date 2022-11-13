import React from "react";
import { SidebarMenu } from "../sidebar-menu/SidebarMenu";

import Logo from "../../assets/logo.svg";

export const Sidebar = () => {
  return (
    <aside className="fixed top-0 shadow w-[280px] h-full text-black left-0">
      <div className="w-[280px] shadow logo text-center px-[20px] h-[80px] flex bg-white border-b border-r items-center justify-center">
        <img className="w-[50px]" src={Logo} alt="logo" />
      </div>
      <SidebarMenu />
    </aside>
  );
};
