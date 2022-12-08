import React from "react";
import { Header } from "../layout/header/Header";
import { Sidebar } from "../layout/sidebar/Sidebar";

export const MainLayout = (props) => {
  return (
    <div className="h-[100%] dark:text-white flex">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <Header />

        {props.children}

        {/* <div className="side-pannel border dark:border-[#202020] rounded-[8px] flex flex-1 bg-[#FAFBFC] dark:bg-[#000000] px-[20px] py-[10px] mb-[10px]">
            1
          </div>
          <div className="w-full p-[20px] mb-[5px] dark:bg-[#1F2022] rounded-[8px] flex items-center border dark:border-[#202020]">
            123
          </div> */}
      </div>
    </div>
  );
};
