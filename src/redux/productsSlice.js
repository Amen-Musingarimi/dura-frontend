import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getLocalStorage } from '../components/helpers/localStorage';
import PRODUCTS from './initialProducts';

const initialState = {
  products: PRODUCTS,
  isLoading: false,
  fetched: false,
  error: null,
};

export const addProductAsync = createAsyncThunk(
  'products/addProductAsync',
  async (newProduct, thunkAPI) => {
    try {
      const token = getLocalStorage('token');

      const formData = new FormData();
      formData.append('product[name]', newProduct.name);
      formData.append('product[english_name]', newProduct.english_name);
      formData.append('product[description]', newProduct.description);
      formData.append('product[price]', newProduct.price);
      formData.append('product[measurement_unit]', newProduct.measurement_unit);
      formData.append('product[total_units]', newProduct.total_units);
      formData.append('product[image]', newProduct.image);

      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      const data = await response.json();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

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
  initialState: initialState,

  extraReducers: (builder) => {
    builder.addCase(getProductsAsync.fulfilled, (state, action) => {
      const updatedState = state;
      const newStore = action.payload;
      updatedState.products = newStore;
    });
    builder.addCase(addProductAsync.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(addProductAsync.fulfilled, (state, action) => ({
      ...state,
      isLoading: false,
      hotels: [...state.products, action.payload],
    }));
    builder.addCase(addProductAsync.rejected, (state, action) => ({
      ...state,
      isLoading: false,
      error: action.payload,
    }));
  },
});

export default productsSlice.reducer;
