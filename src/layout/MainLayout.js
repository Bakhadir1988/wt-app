import React from "react";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";

export const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="p-[20px] w-auto ml-[250px] min-h-screen pt-[100px] bg-slate-100">
        {props.children}
      </main>
    </>
  );
};
