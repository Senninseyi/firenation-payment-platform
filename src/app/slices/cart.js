import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  carts: [],
  totalPrice: "",
};

const CartReducer = createSlice({
  name: "cartslice",
  initialState: initialState,
  reducers: {
    addCart: (state, action) => {
      const cartData = state.carts && state.carts?.length ? state.carts[0] : [];
      console.log(cartData);
      const itemInCart = cartData.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity++;
        state.totalPrice = itemInCart.itemPrice;
      } else {
        state.carts.push({ ...action.payload, quantity: 1 });
      }
    },
    addQuantity: (state, action) => {
      const item = state.carts.find((item) => item.id === action.payload);

      const { quantity, itemPrice } = item;

      item.quantity = quantity + 1;

      state.totalPrice = item.quantity * itemPrice;
    },
    reduceQuantity: (state, action) => {
      const item = state.carts.find((item) => item.id === action.payload);
      const { quantity, itemPrice } = item;

      if (quantity === 1) {
        item.quantity = 1;
        state.totalPrice = itemPrice;
      } else {
        item.quantity--;
        state.totalPrice = state.totalPrice - item.itemPrice;
      }
    },
    deleteCart: (state, action) => {
      const removeItem = state.carts.filter(
        (item) => item.id !== action.payload
      );
      state.carts = removeItem;
      state.totalPrice = "";
    },
    updatePrice: (state, action) => {
      state.totalPrice = action.payload;
    },
  },
});

export const {
  addCart,
  addQuantity,
  reduceQuantity,
  deleteCart,
  selectedItem,
  updatePrice,
} = CartReducer.actions;
export default CartReducer.reducer;
