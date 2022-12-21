import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CalendarPage,
  CreateProjectPage,
  EditProjectPage,
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
        <Route path="projects/" element={<ProjectPage />} />
        <Route path="projects/create/" element={<CreateProjectPage />} />
        <Route path="projects/:id" element={<TaskItemPage />} />
        <Route path="projects/:id/edit/" element={<EditProjectPage />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="finance" element={<FinancePage />} />
      </Routes>
    </>
  );
};
