import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getHandbookThunk } from "./handbookThunk";
import { getHandbookChaptersThunk } from "./handbookThunk";

const initialState = {
  isLoading: true,
  handbook: [],
  handbookChapters: [],
};

export const getHandbook = createAsyncThunk(
  "handbook/ getHandbook",
  async (_, thunkAPI) => {
    return getHandbookThunk("/handbook", thunkAPI);
  }
);

export const getHandbookChapters = createAsyncThunk(
  "handbook/getHandbookChapter",
  async (id, thunkAPI) => {
    return getHandbookChaptersThunk(`handbook/${id}`, thunkAPI);
  }
);

const handbookSlice = createSlice({
  name: "handbookChapters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getHandbook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHandbook.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.handbook = payload;
      })
      .addCase(getHandbook.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(getHandbookChapters.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getHandbookChapters.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.handbookChapters = payload;
      })
      .addCase(getHandbookChapters.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export default handbookSlice.reducer;
