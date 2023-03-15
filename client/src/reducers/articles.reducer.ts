import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./thunks/categories.thunk";

export type ArticlesSliceState = {
  items: Article[];
  isLoading: boolean;
};

const initialState = {
  items: [],
  isLoading: false,
} as ArticlesSliceState;

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        const [mobelCategory] = action.payload;
        const { categoryArticles } = mobelCategory;

        state.items = categoryArticles.articles;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const { reducer } = articleSlice;
export default reducer;
