import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CalendarPage,
  FinancePage,
  Home,
  ProjectPage,
  TaskItemPage,
} from "./pages";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="project/" element={<ProjectPage />} />
        <Route path="project/:id" element={<TaskItemPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="finance" element={<FinancePage />} />
      </Routes>
    </>
  );
};
