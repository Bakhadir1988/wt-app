import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({
        id: action.payload.task.id,
        content: action.payload.task.content,
        date: action.payload.task.date,
        director: action.payload.task.director,
        executor: action.payload.task.executor,
        status: action.payload.task.status,
        title: action.payload.task.title,
      });
    },
    // removeTask: (state, action) => {
    //   state[action.payload.currentId].items = state[
    //     action.payload.currentId
    //   ].items.filter((item) => item.id !== action.payload.taskId);
    // }
  },
});

export const { addTask, removeTask } = taskSlice.actions;

export default taskSlice.reducer;
