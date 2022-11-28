import { createSlice } from "@reduxjs/toolkit";
import { projects } from "../../moсks/projects";

const initialState = projects;

export const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state[action.payload.currentId] = {
        ...state[action.payload.currentId],
        items: [
          ...state[action.payload.currentId].items,
          action.payload.newTask,
        ],
      };
    },
    removeTask: (state, action) => {
      console.log("🚀 ~ file: projectsSlice.js ~ line 20 ~ action", action.payload)
      state[action.payload.currentId].items = state[
        action.payload.currentId
      ].items.filter((item) => item.id !== action.payload.taskId);
    },
  },
});

export const { addTask, removeTask } = projectsSlice.actions;

export default projectsSlice.reducer;
