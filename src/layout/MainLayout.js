import React from "react";
import { Header } from "./header/Header";
import { Sidebar } from "./sidebar/Sidebar";


export const MainLayout = (props) => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[250px]">{props.children}</div>
    </>
  );
};
