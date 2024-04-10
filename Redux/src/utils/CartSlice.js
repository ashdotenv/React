import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: 0,
  },
  reducers: {
    addToCart: (state) => {
      state.items += 1;
    },
  },
});
export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
