import { combineReducers } from "@reduxjs/toolkit";

import categoriesReducer from "./categories.reducer";
import articlesReducer from "./articles.reducer";
import cartReducer from "./cart.reducer";

const rootReducer = combineReducers({
    categories: categoriesReducer,
    articles: articlesReducer,
    cart: cartReducer,
});

export default rootReducer;
