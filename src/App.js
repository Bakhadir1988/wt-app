import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";
import { Home } from "./pages";

export const App = () => {
  return (
    <>
      <Sidebar />
      <div className="flex flex-wrap ml-[280px]">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Main />} />
        </Routes>
      </div>
    </>
  );
};
