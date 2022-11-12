import React from "react";
import { Header } from "./components/header/Header";
import { Main } from "./components/main/Main";
import { Sidebar } from "./components/sidebar/Sidebar";

export const App = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap ml-[280px]">
        <Header />
        <Main />
      </div>
    </>
  );
};
