import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../moсks/projects";

const initialState = projects;

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addTask: (state, action) => {
      console.log("action", action);
      console.log("action.payload.currentId", action.payload.currentId);
      state[action.payload.currentId] = {
        ...state[action.payload.currentId],
        items: [
          ...state[action.payload.currentId].items,
          action.payload.newTask,
        ]
      };
    },
  },
});

export const { addTask } = projectsSlice.actions;

export default projectsSlice.reducer;


