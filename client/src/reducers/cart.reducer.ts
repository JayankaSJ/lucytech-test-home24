import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type CartSliceState = {
    items: CartItem[];
};

const initialState = {
    items: [],
} as CartSliceState;

const cartSlice = createSlice({
    name: "articles",
    initialState,
    reducers: {
        addToCart(_state, _action: PayloadAction<Article>) {
            const existingItemIndex = _state.items.findIndex(
                (i) => i.article.name === _action.payload.name
            );
            if (existingItemIndex > -1) {
                _state.items[existingItemIndex].count += 1;
            } else {
                const cartItem: CartItem = {
                    article: _action.payload,
                    count: 1,
                };
                _state.items.push(cartItem);
            }
        },
        removeCartItem(_state, _action: PayloadAction<CartItem>) {
            _state.items = _state.items.filter(
                (i) => i.article.name !== _action.payload.article.name
            );
        },
        clearCart(_state) {
            _state.items = [];
        },
    },
});

const { reducer, actions } = cartSlice;
export const { addToCart, removeCartItem, clearCart } = actions;
export default reducer;
