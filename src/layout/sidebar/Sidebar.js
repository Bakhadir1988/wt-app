import React from "react";
import { FaSkull } from "react-icons/fa";
import { SidebarMenu } from "../sidebar-menu/Menu";

export const Sidebar = () => {
  return (
    <aside className="aside">
      <div className="px-[15px] h-[80px] flex items-center">
        <a
          href="/"
          className="w-[50px] mr-[15px] h-[50px] rounded-[8px] bg-[#1B4FE2] text-white flex items-center justify-center"
        >
          <FaSkull />
        </a>
        <div className="dark:text-white text-[#202020] flex mt-[7px] flex-col justify-center">
          <strong className="text-[20px] leading-[16px] uppercase">Crm</strong>
          <span className="text-[14px] text-gray-400">management</span>
        </div>
      </div>

      <SidebarMenu />
    </aside>
  );
};
