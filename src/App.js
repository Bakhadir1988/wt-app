import React from "react";
import { Routes, Route } from "react-router-dom";
import {
  CalendarPage,
  CreateProject,
  EditProject,
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
        <Route path="projects/create/" element={<CreateProject />} />
        <Route path="projects/:id" element={<TaskItemPage />} />
        <Route path="projects/:id/edit/" element={<EditProject />} />
        <Route path="calendar" element={<CalendarPage />} />
        <Route path="finance" element={<FinancePage />} />
      </Routes>
    </>
  );
};
