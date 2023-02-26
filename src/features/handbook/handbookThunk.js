import customFetch from "../../utils.js/axios";

export const getHandbookThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const getHandbookChaptersThunk = async (url, thunkAPI) => {
  try {
    const resp = await customFetch.get(url);
    return resp.data;
  } catch (error) {
    thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
