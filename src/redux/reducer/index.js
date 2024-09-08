import { combineReducers } from "@reduxjs/toolkit";
import messageSlice from "./message";
import counterSlice from "./counter";
import todoSlice from "./todo";

export const rootReducer = combineReducers({
  message: messageSlice,
  counter: counterSlice,
  todo: todoSlice,
});
