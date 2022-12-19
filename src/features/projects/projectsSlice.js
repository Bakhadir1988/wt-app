import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  project: [],
};

export const projectsSlice = createSlice({
  name: "project",
  initialState: initialState,
  reducers: {
    addProject: (state, action) => {
      state.project = [...state.project, action.payload];
    },
    removeProject: (state, action) => {
      state.project = state.project.filter(
        (item) => item.id !== action.payload.id
      );
    },
  },
});

export const { addProject, removeProject } = projectsSlice.actions;

export default projectsSlice.reducer;
