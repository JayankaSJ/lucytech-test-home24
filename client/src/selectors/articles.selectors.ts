import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const _getArticles = createSelector(
    (state: RootState) => state,
    (state) => {
        return state.articles;
    }
);

export const getArticles = createSelector(_getArticles, (state) => {
    return state.items;
});

export const getIsArticlesLoading = createSelector(_getArticles, (state) => {
    return state.isLoading;
});
