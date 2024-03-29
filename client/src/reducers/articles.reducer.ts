import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { fetchCategory } from "./thunks/categories.thunk";

export type ArticlesSliceState = {
    items: Article[];
    dashboardItems: Article[];
    isLoading: boolean;
};

const initialState = {
    items: [],
    dashboardItems: [],
    isLoading: false,
} as ArticlesSliceState;

const articleSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        filterArticles(_state, _action: PayloadAction<string>) {
            const searchKey = _action.payload?.toLowerCase();
            if (searchKey) {
                _state.dashboardItems = _state.items.filter((i) =>
                    i.name?.toLowerCase().includes(searchKey)
                );
            } else {
                _state.dashboardItems = _state.items;
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCategory.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(fetchCategory.fulfilled, (state, action) => {
            if (Array.isArray(action.payload) && action.payload.length > 0) {
                const [mobelCategory] = action.payload;
                const { categoryArticles } = mobelCategory;

                state.items = categoryArticles.articles;
                state.dashboardItems = state.items;
            }
            state.isLoading = false;
        });
        builder.addCase(fetchCategory.rejected, (state) => {
            state.isLoading = false;
        });
    },
});

const { reducer, actions } = articleSlice;
export const { filterArticles } = actions;
export default reducer;
