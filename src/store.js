import { configureStore } from "@reduxjs/toolkit";
import usersReducer from '../src/features/users/usersSlice'
import projectsReducer from "../src/features/projects/projectsSlice";

export const store = configureStore({
  reducer: {
    users: usersReducer,
    projects: projectsReducer,
  },
});
