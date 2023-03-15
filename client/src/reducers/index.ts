import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./categories.reducer";
import articlesReducer from "./articles.reducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  articles: articlesReducer,
});

export default rootReducer;
