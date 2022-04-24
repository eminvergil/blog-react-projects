import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    {
      price: "10$",
      name: "test",
      stock: 0,
    },
  ],
  added: false,
};

export const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    toggleAdded: (state) => {
      state.added = !state.added;
    },
    addProduct: (state, action) => {
      state.products = [...state.products, action.payload];
    },
  },
});

export const { toggleAdded, addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
