import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectPage, TaskItemPage } from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/" element={<ProjectPage />} />
        <Route path="project/:id" element={<TaskItemPage />} />
      </Routes>
    </>
  );
};
