import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, TaskItemPage } from "./pages";
import { MainLayout } from "./layout/MainLayout";

export const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/:id" element={<TaskItemPage />} />
      </Routes>
    </MainLayout>
  );
};
