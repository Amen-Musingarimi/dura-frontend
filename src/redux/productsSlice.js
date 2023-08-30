import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import PRODUCTS from './initialProducts';

export const getProductsAsync = createAsyncThunk(
  'products/getProductsAsync',
  async () => {
    const response = await fetch('http://localhost:3000/products');
    if (response.ok) {
      const data = await response.json();
      const products = data;
      return products;
    }
    return null;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    products: PRODUCTS,
  },

  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.missions = newStore;
    });
  },
});

export default productsSlice.reducer;
