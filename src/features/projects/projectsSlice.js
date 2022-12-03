import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../moсks/projects";

let id = 0;
const initialState = projects;

export const projectsSlice = createSlice({
  name: "projects",
  initialState: initialState,
  reducers: {
    addProject: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.project.name,
      });
    },
  },
});

export const { addProject } = projectsSlice.actions;

export default projectsSlice.reducer;
