import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

export const getCategories = createSelector(
  (state: RootState) => state,
  (state) => {
    return state.categories;
  }
);

export const getChildrenCategories = createSelector(getCategories, (state) => {
  return state.childrenCategories;
});

export const getIsCategoriesLoading = createSelector(getCategories, (state) => {
  return state.isLoading;
});

export const getCategoryName = createSelector(getCategories, (state) => {
  return state.name;
});

export const getArticleCount = createSelector(getCategories, (state) => {
  return state.articleCount;
});
