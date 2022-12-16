import React from "react";
import { Header } from "../layout/header/Header";
import { Sidebar } from "../layout/sidebar/Sidebar";

export const MainLayout = (props) => {
  return (
    <div className="h-[100%] dark:text-white flex">
      <Sidebar />
      <div className="flex flex-col flex-1 h-screen">
        <Header />
        <main className="main mt-[100px]">{props.children}</main>
      </div>
    </div>
  );
};
