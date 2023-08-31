import { configureStore } from '@reduxjs/toolkit';
import AuthenticationReducer from './authenticationSlice';
import productsReducer from './productsSlice';
import cartReducer from './cartSlice';
import NavBarReducer from './navBarSlice';

const store = configureStore({
  reducer: {
    auth: AuthenticationReducer,
    cart: cartReducer,
    nav: NavBarReducer,
    product: productsReducer,
  },
});

export default store;
