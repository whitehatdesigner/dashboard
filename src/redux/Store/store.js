import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from '../slices/sidebarToggle';
import productsReducer from '../slices/products';
import productsFilterReducer from '../slices/productsSlices';
import darkModeReducer from '../slices/darkModeSlice';

export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    products: productsReducer,
    productSlice: productsFilterReducer, 
    darkMode: darkModeReducer,
  },
});