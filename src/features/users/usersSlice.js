import { createSlice } from "@reduxjs/toolkit";
import { users } from "../../moсks/users";

const initialState = users;

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    add: (state) => {

      state.value += 1;
    },
  },
});

export const { add } = usersSlice.actions;

export default usersSlice.reducer;
