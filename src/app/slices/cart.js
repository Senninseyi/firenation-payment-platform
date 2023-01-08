import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberofCarts: 0,
  carts: [],
};

const CartReducer = createSlice({
  name: "cartslice",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      const itemInCart = state.carts.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        itemInCart.quantity++;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    addQuantity: (state, action) => {
      const item = state.carts.find((item) => item.id === action.payload);
      item.quantity++;
    },
    reduceQuantity: (state, action) => {
      const item = state.carts.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteCart: (state, action) => {
      const removeItem = state.carts.filter(
        (item) => item.id !== action.payload
      );
      state.carts = removeItem;
    },
  },
});

export const { addCart, addQuantity, reduceQuantity, deleteCart } =
  CartReducer.actions;
export default CartReducer.reducer;
