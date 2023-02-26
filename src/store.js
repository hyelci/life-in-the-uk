import { configureStore } from "@reduxjs/toolkit";
import handbookSlice from "./features/handbook/handbookSlice";
import mockTestsSlice from "./features/mockTests/mockTestsSlice";

export const store = configureStore({
  reducer: {
    mockTests: mockTestsSlice,
    handbookTitles: handbookSlice,
  },
});
