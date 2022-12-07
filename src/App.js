import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, ProjectPage, TaskItemPage } from "./pages";
import { Test } from "./pages/Test";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/home" element={<Home />} />
        <Route path="project/" element={<ProjectPage />} />
        <Route path="project/:id" element={<TaskItemPage />} />
      </Routes>
    </>
  );
};
