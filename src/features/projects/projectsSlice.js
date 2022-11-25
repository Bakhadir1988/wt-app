import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../moсks/projects";

const initialState = projects;

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state[action.payload.id] = {
        items: [...state[action.payload.id].items, action.payload.newTask],
      };
    },
  },
});

export const { addTask } = projectsSlice.actions;

export default projectsSlice.reducer;


