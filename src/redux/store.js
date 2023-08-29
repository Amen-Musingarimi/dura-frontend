import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import NavBarReducer from './navBarSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    nav: NavBarReducer,
  },
});

export default store;
