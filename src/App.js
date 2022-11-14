import React from "react";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Sidebar } from "./components/sidebar/Sidebar";
import { Main } from "./components/main/Main";
import { Home } from "./pages";

export const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="ml-[250px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project/:id" element={<Main />} />
        </Routes>
      </div>
    </>
  );
};
