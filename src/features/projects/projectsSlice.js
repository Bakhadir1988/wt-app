import { createSlice } from "@reduxjs/toolkit";

let id = 0;

export const projectsSlice = createSlice({
  name: "projects",
  initialState: [],
  reducers: {
    addProject: (state, action) => {
      state.push({
        id: ++id,
        name: action.payload.project.name,
        status: "Активен",
        createDate: action.payload.project.createDate,
        endDate: action.payload.project.endDate,
        manager: action.payload.project.manager,
        optimizer: action.payload.project.optimizer,
        participants: action.payload.project.participants,
      });
    },
  },
});

export const { addProject } = projectsSlice.actions;

export default projectsSlice.reducer;
