import { createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./thunks/categories.thunk";

export type CategorySliceState = {
  name: string;
  articleCount: number;
  childrenCategories: ChildCategory[];
  isLoading: boolean;
};

const initialState = {
  name: "",
  articleCount: 0,
  childrenCategories: [],
  isLoading: false,
} as CategorySliceState;

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategory.fulfilled, (state, action) => {
      if (Array.isArray(action.payload) && action.payload.length > 0) {
        const [mobelCategory] = action.payload;
        const { childrenCategories } = mobelCategory;

        state.name = mobelCategory.name;
        state.articleCount = mobelCategory.articleCount;
        state.childrenCategories = childrenCategories.list;
      }
      state.isLoading = false;
    });
    builder.addCase(fetchCategory.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

const { reducer } = categorySlice;
export default reducer;
