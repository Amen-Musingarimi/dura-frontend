import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { getLocalStorage } from '../components/helpers/localStorage';

export const fetchPurchaseHistoryAsync = createAsyncThunk(
  'purchaseHistory/fetchPurchaseHistory',
  async () => {
    const token = getLocalStorage('token');
    const user = getLocalStorage('user');
    const user_id = user.id;
    const response = await axios.get(
      `https://dura-server.onrender.com/purchase_histories/${user_id}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

export const createPurchaseHistoryAsync = createAsyncThunk(
  'purchaseHistory/createPurchaseHistory',
  async (purchaseData) => {
    const token = getLocalStorage('token');
    const response = await axios.post(
      'https://dura-server.onrender.com/cart_items/order',
      purchaseData,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );
    return response.data;
  }
);

const purchaseHistorySlice = createSlice({
  name: 'purchaseHistory',
  initialState: {
    purchaseHistory: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPurchaseHistoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPurchaseHistoryAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.purchaseHistory = action.payload;
      })
      .addCase(fetchPurchaseHistoryAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(createPurchaseHistoryAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createPurchaseHistoryAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.purchaseHistory = action.payload;
      })
      .addCase(createPurchaseHistoryAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default purchaseHistorySlice.reducer;
