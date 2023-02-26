import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMockTestsThunk, getAllQuestionsThunk } from "./mockTestsThunk";

const initialState = {
  isLoading: true,
  mockTests: [],
  questions: [],
  questionNumber: 0,
};

export const getMockTests = createAsyncThunk(
  "mockTests/getMockTests",
  async (_, thunkAPI) => {
    return getMockTestsThunk("/questions", thunkAPI);
  }
);

export const getAllQuestions = createAsyncThunk(
  "mockTests/getAllQuestions",
  async (id, thunkAPI) => {
    return getAllQuestionsThunk(`/questions/${id}`);
  }
);

const mockTestsSlice = createSlice({
  name: "mockTests",
  initialState,
  reducers: {
    nextPage: (state, { payload }) => {
      if (state.questionNumber >= state.questions.length - 1) {
        state.questionNumber = state.questions.length - 1;
      } else {
        state.questionNumber = payload + 1;
      }
    },
    prevPage: (state, { payload }) => {
      if (state.questionNumber <= 0) {
        state.questionNumber = 0;
      } else {
        state.questionNumber = payload - 1;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMockTests.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMockTests.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.mockTests = payload;
      })
      .addCase(getMockTests.rejected, (state, { payload }) => {
        state.isLoading = false;
      })

      .addCase(getAllQuestions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllQuestions.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.questions = payload;
      })
      .addCase(getAllQuestions.rejected, (state, { payload }) => {
        state.isLoading = false;
      });
  },
});

export const { prevPage, nextPage } = mockTestsSlice.actions;
export default mockTestsSlice.reducer;
