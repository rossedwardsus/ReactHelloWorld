import { configureStore } from "@reduxjs/toolkit";
import messageSlice from "./RTKMessageSlice";

export const store = configureStore({
  reducer: { 
    color: messageSlice,
  },
});
