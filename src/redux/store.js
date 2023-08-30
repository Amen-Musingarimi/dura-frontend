import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import NavBarReducer from './navBarSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    nav: NavBarReducer,
    product: productsReducer,
  },
});

export default store;
