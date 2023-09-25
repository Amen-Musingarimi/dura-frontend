import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLocalStorage } from '../components/helpers/localStorage';

// Async action for fetching the cart from the backend
export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  const token = getLocalStorage('token');
  const cart_id = getLocalStorage('cart_id');
  const response = await axios.get(`http://localhost:3000/carts/${cart_id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  console.log(response.data);
  return response.data;
});

// Async action for adding an item to the cart
export const addItemAsync = createAsyncThunk('cart/addItem', async (item) => {
  const token = getLocalStorage('token');
  const response = await axios.post('http://localhost:3000/cart_items', item, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
});

// Async action for updating a cart item
export const updateItemAsync = createAsyncThunk(
  'cart/updateItem',
  async (item) => {
    const token = getLocalStorage('token');
    const response = await axios.patch(
      `http://localhost:3000/cart_items/${item.id}`,
      item,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

// Async action for removing a cart item
export const removeItemAsync = createAsyncThunk(
  'cart/removeItem',
  async (id) => {
    const token = getLocalStorage('token');
    await axios.delete(`http://localhost:3000/cart_items/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return id;
  }
);

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    clearCart: (state) => {
      state.items = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload; // replace with your actual data path
      })
      .addCase(fetchCart.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(updateItemAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload.id
        );
        if (index !== -1) {
          state.items[index] = action.payload;
        }
      })
      .addCase(removeItemAsync.fulfilled, (state, action) => {
        const index = state.items.findIndex(
          (item) => item.id === action.payload
        );
        if (index !== -1) {
          state.items.splice(index, 1);
        }
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;
