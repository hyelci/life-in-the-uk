import customFetch from "../../utils.js/axios";

export const getMockTestsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getAllQuestionsThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
