import { createSlice } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
  name: "message",
  initialState: {
    value: "Hello World",
  },
  reducers: {
    changeStr: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { value, changeStr } = messageSlice.actions;
export default messageSlice.reducer;
