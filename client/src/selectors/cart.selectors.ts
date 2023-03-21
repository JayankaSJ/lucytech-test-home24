import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "store";

const _getCart = createSelector(
    (state: RootState) => state,
    (state) => {
        return state.cart;
    }
);

export const getCartItems = createSelector(_getCart, (state) => {
    return state.items;
});

export const getCartItemsCount = createSelector(_getCart, (state) => {
    return state.items.reduce((pv, cv) => pv + cv.count, 0);
});
